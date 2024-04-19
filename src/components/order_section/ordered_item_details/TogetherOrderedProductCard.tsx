import Image from "../../Image/Image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { CartProductInterface } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const TogetherOrderedProductCard = ({ product }: { product: CartProductInterface }) => {
  const navigate = useNavigate();

  function openProduct(product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Box
      className="together-orderd-product-card"
      onClick={() => openProduct(product.id)}
    >
      <Box className="image-box">
        <Image src={product.image.url} alt={product.name} />
      </Box>
      <Box className="product-data">
        <Typography className="product-name">{product.name}</Typography>
        <Typography variant="caption" sx={{color: "rgba(0, 0, 0, 0.6)"}}>Quantity: {product.quantity}</Typography>
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
  );
};

export default TogetherOrderedProductCard;
