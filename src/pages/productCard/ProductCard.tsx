import "./ProductCard.css"
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

const ProductCard = ({id, name, description, image, price} : product) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
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
  );
};

export default ProductCard;
