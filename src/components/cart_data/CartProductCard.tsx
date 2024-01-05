import { useState } from "react";
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
interface Props {
  product: Product;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
}

const CartProduct = ({ product, addToWishlist, removeFromCart }: Props) => {
  const [productQuantity, setProductQuantity] = useState<number>(1);

  const navigate = useNavigate();

  function openProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  async function moveItemToWishlist() {
    await addToWishlist(product.id);
    await removeFromCart(product.id);
  }

  async function removeItemFromCart() {
    await removeFromCart(product.id);
  }

  function removeQuantity() {
    const count = productQuantity;
    if (count > 1) {
      setProductQuantity(count - 1);
    }
  }

  function addQuantity() {
    const count = productQuantity;
    if (count < 5) {
      setProductQuantity(count + 1);
    } else {
      alert("You can order maximum five product quantity at a time.");
    }
  }

  return (
    <Box className="shopping-cart">
      <Box sx={{ display: "flex" }}>
        <Box
          className="cart-image-box"
          onClick={() => openProduct(navigate, product.id)}
        >
          <Image src={product.image.url} alt="cart-product" />
        </Box>
        <Box className="cart-product-data">
          <Typography className="product-name">{product.name}</Typography>
          <Typography variant="caption">size: {}</Typography>
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
