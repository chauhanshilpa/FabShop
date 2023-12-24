import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Product } from "../../api/classModels";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  function showProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="product-card"
      onClick={() => showProduct(navigate, product.id)}
    >
      <CardMedia
        // sx={{ height: 330 }}
        image={product.image.url}
        title="product card"
        className="card-image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography className="product-description" variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography color="text.secondary" className="pricing">
          ₹{product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
