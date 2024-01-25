import { useState, useEffect } from "react";
import "./WishlistedItemCard.css";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Image from "../utils/Image/Image";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import { Product } from "../../api/classModels";
import Button from "@mui/material/Button";
import { getCartProductsList } from "../../api/api";
interface Props {
  activeUserId: string;
  product: Product;
  removeFromWishlist: (productId: string) => Promise<void>;
  addToCart: (productId: string) => Promise<void>;
}

const WishlistedItemCard = ({
  activeUserId,
  product,
  removeFromWishlist,
  addToCart,
}: Props) => {
  const [isProductInCart, setIsProductInCart] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function isCartIncludesProduct() {
      const response = await getCartProductsList(activeUserId);
      const isInCart = response.some(
        (cartProduct) => cartProduct.id === product.id
      );
      setIsProductInCart(isInCart);
    }
    isCartIncludesProduct();
  });

  function openProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  async function removeItemFromWishlist() {
    await removeFromWishlist(product.id);
  }

  async function handleAddToCartButton() {
    isProductInCart ? navigate("/cart") : await addToCart(product.id);
  }

  return (
    <Card sx={{ maxWidth: 250 }} className="wishlist-card">
      <Box className="card-media">
        <CancelIcon className="remove-item" onClick={removeItemFromWishlist} />
        <Box onClick={() => openProduct(navigate, product.id)}>
          <Image src={product.image.url} alt={product.name} />
        </Box>
      </Box>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          className="add-to-cart-button"
          onClick={handleAddToCartButton}
        >
          {isProductInCart ? "Go to cart" : "Add to cart"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishlistedItemCard;
