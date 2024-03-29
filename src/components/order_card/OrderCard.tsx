import "./OrderCard.css"
import Card from "@mui/material/Card";
import Image from "../../components/Image/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Cart } from "../../api/api";

const OrderCard = ({ cartProduct }: {cartProduct: Cart }) => {
  return (
    <Card className="order-card">
      <Box className="order-image">
        <Image
          src={cartProduct.image.url}
          alt={cartProduct.name}
        />
      </Box>
      {/* name of product */}
      <Typography variant="body1" className="order-name">
        t-shirt
        {/* <Typography variant="subtitle2">color: pink</Typography>
            <Typography variant="subtitle2">Size: L</Typography> */}
      </Typography>
      {/* rupee */}
      <Typography variant="body1" className="order-price">
        ₹{cartProduct.price}
      </Typography>
      {/* delivery status */}
      <Typography variant="body1" className="order-delivery-status">
        Your item has been shipped
      </Typography>
    </Card>
  );
};

export default OrderCard;
