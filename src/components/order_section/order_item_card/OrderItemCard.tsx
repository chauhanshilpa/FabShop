import "./OrderItemCard.css";
import Card from "@mui/material/Card";
import Image from "../../Image/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { CartProductInterface, SingleOrderInterface } from "../../../api/api";

interface Props {
  cartProduct: CartProductInterface;
  productId: string;
  singleOrderDetails: SingleOrderInterface;
}
 
const OrderItemCard = ({ cartProduct, productId, singleOrderDetails }: Props) => {
  const navigate = useNavigate();
  
  return (
    <Card
      className="order-card"
      onClick={() =>
        navigate(
          `/order-details?productId=${productId}&orderId=${singleOrderDetails.orderId}`,
          {
            state: {productId, singleOrderDetails },
          }
        )
      }
    >
      <Box className="order-image">
        <Image src={cartProduct.image.url} alt={cartProduct.name} />
      </Box>
      <Typography variant="body1" className="order-name">
        {cartProduct.name}
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

export default OrderItemCard;
