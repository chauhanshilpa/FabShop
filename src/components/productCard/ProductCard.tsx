import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

function showProduct(navigate: Function, id: number) {
  navigate(`/product/${id}`);
}

const ProductCard = ({ id, name, description, image, price }: product) => {
  const navigate = useNavigate();

  return (
    <Link to={`/product/${id}`}>
      <Card
        sx={{ maxWidth: 345 }}
        className="card"
        onClick={() => showProduct(navigate, id)}
      >
        <CardMedia
          sx={{ height: 330 }}
          image={image}
          title="product card"
          className="card-image"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography color="text.secondary" className="pricing">
            ₹{price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
