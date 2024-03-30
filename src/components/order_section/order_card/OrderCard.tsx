import "./OrderCard.css";
import Card from "@mui/material/Card";
import Image from "../../Image/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CartProductInterface } from "../../../api/api";

interface Props {
  cartProduct: CartProductInterface;
  item_id: string;
}

const OrderCard = ({ cartProduct, item_id }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      className="order-card"
      onClick={() => navigate(`/singleOrder/${item_id}`)}
    >
      <Box className="order-image">
        <Image src={cartProduct.image.url} alt={cartProduct.name} />
      </Box>
      <Typography variant="body1" className="order-name">
        t-shirt
      </Typography>
      <Typography variant="body1" className="order-price">
        ₹{cartProduct.price}
      </Typography>
      <Typography variant="body1" className="order-delivery-status">
        Your item has been placed
      </Typography>
    </Card>
  );
};

export default OrderCard;
