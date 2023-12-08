import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Image } from "../../server/classModels";

interface Props {
  allImages: { [key: string]: Image };
  product_id: string;
  name: string;
  image_id: string;
  description: string;
  price: number;
}

const ProductCard = ({
  allImages,
  product_id,
  name,
  image_id,
  description,
  price,
}: Props) => {
  const navigate = useNavigate();
  function showProduct(navigate: Function, product_id: string) {
    navigate(`/product/${product_id}`);
  }

  return (
    <Link to={`/product/${product_id}`}>
      <Card
        sx={{ maxWidth: 345 }}
        className="card"
        onClick={() => showProduct(navigate, product_id)}
      >
        <CardMedia
          sx={{ height: 330 }}
          image={allImages[image_id]["url"]}
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
