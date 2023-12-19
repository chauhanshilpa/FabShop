import "./WishlistedItemCard.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Image from "../display_Image/Image";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";
import { Product } from "../../api/classModels";
import { removeItemFromWishlist, getWishlist } from "../../api/api";

interface Props {
  activeUserId: string;
  product: Product;
  setWishlist: (val: Product[]) => void;
}

const WishlistCard = ({ activeUserId, product, setWishlist }: Props) => {
  const navigate = useNavigate();

  async function handleRemoveItemFromWishlist() {
    await removeItemFromWishlist(activeUserId, product.id);
    const response = await getWishlist(activeUserId);
    setWishlist(response);
  }

  async function handleAddToCartButton() {
    console.log("Item added to cart");
  }

  function showProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Card sx={{ maxWidth: 250 }} className="wishlist-card">
      <Box className="card-media">
        <CancelIcon
          className="remove-item"
          onClick={handleRemoveItemFromWishlist}
        />
        <Box onClick={() => showProduct(navigate, product.id)}>
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
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishlistCard;
