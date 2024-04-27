import { useEffect, useState, useRef } from "react";
import "./CartData.css";
import { useNavigate } from "react-router-dom";
import { Product } from "../../api/classModels";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../Image/Image";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import {
  getProductQuantityInCart,
  handleProductQuantityInCart,
  handleCartProductsPrice,
} from "../../api/api";
import ModalComponent from "../modal/ModalComponent";
interface Props {
  activeUserId: string;
  product: Product;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  setCartProductsPrice: React.Dispatch<React.SetStateAction<number>>;
}

const CartProduct = ({
  activeUserId,
  product,
  addToWishlist,
  removeFromCart,
  setCartProductsPrice,
}: Props) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);
  const [modalText, setModalText] = useState({ title: "", description: "" });

  const togglePopup = useRef<HTMLButtonElement>();
  const navigate = useNavigate();

  useEffect(() => {
    async function getQuantityOfProduct() {
      const response = await getProductQuantityInCart(activeUserId, product.id);
      setProductQuantity(response);
    }
    getQuantityOfProduct();
    // eslint-disable-next-line
  }, []);

  function openProduct(product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  async function moveItemToWishlist() {
    await addToWishlist(product.id);
    await removeFromCart(product.id);
  }

  async function removeItemFromCart() {
    await removeFromCart(product.id);
    const response = await handleCartProductsPrice(activeUserId);
    setCartProductsPrice(response);
  }

  async function removeQuantity() {
    if (productQuantity > 1) {
      const count = productQuantity - 1;
      setProductQuantity(count);
      await handleProductQuantityInCart(activeUserId, product.id, count);
      const response = await handleCartProductsPrice(activeUserId);
      setCartProductsPrice(response);
    }
  }

  async function addQuantity() {
    if (productQuantity < 10) {
      const count = productQuantity + 1;
      setProductQuantity(count);
      await handleProductQuantityInCart(activeUserId, product.id, count);
      const response = await handleCartProductsPrice(activeUserId);
      setCartProductsPrice(response);
    } else {
      setModalText({
        title: "Limited Quantity",
        description:
          "You can order maximum ten quantitity of a product at a time.",
      });
      togglePopup.current?.click();
    }
  }

  return (
    <Box className="shopping-cart">
      <Box sx={{ display: "flex" }}>
        <Box className="cart-image-box" onClick={() => openProduct(product.id)}>
          <Image src={product.image.url} alt="cart-product" />
        </Box>
        <Box className="cart-product-data">
          <Typography className="product-name">{product.name}</Typography>
          {/* <Typography variant="caption">size: {}</Typography> */}
          <Typography className="product-description">
            {product.description}
          </Typography>
          <Typography className="product-price">₹{product.price}</Typography>
          <Rating
            name="read-only"
            value={product.ratings}
            readOnly
            className="product-ratings"
          />
        </Box>
      </Box>
      <Box className="product-quantity-box">
        <Box className="product-quantity">
          <Button className="quantity-remove-button" onClick={removeQuantity}>
            <RemoveCircleOutlineIcon />
          </Button>
          <Box className="quantity-display-button">{productQuantity}</Box>
          <Button className="quantity-add-button" onClick={addQuantity}>
            <AddCircleOutlineIcon />
          </Button>
        </Box>
        <ModalComponent
          togglePopup={togglePopup}
          title={modalText.title}
          description={modalText.description}
        />
        <Typography className="remove-from-cart" onClick={removeItemFromCart}>
          remove
        </Typography>
        <Typography className="move-to-wishlist" onClick={moveItemToWishlist}>
          move to Wishlist
        </Typography>
      </Box>
    </Box>
  );
};

export default CartProduct;
