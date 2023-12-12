import "./WishlistCard.css";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Image from "../image/Image";
import { Product } from "../../api/classModels";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";

const WishlistCard = ({ product }: { product: Product }) => {
  function handleItemRemove() {
    console.log("Item removed")
  }

  function handleAddToCartButton() {
    console.log("Item added to cart");
  }
  
  return (
    <Card sx={{ maxWidth: 250 }} className="wishlist-card">
      <Box className="card-media">
        <CancelIcon className="remove-item" onClick={handleItemRemove} />
        <Image src={product.image.url} alt={product.name} />
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
