import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Image from "../utils/Image/Image";
import Typography from "@mui/material/Typography";
import { Product } from "../../api/classModels";

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  function openProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="product-card"
      onClick={() => openProduct(navigate, product.id)}
    >
      <CardMedia title="product card" className="card-image">
        <Image src={product.image.url} alt={product.name} />
      </CardMedia>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="product-name"
        >
          {product.name}
        </Typography>
        <Typography
          className="product-description"
          variant="body2"
          color="text.secondary"
        >
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
