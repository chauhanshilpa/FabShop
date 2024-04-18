import "./OrdersDetails.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import TogetherOrderedProducts from "./TogetherOrderedProducts";
import { v4 as uuidv4 } from "uuid";

const OrderDetails = () => {
  const { state } = useLocation();
  const { productId, singleOrderDetails } = state;
  const { orderId, dateAndTime, orderedProductList, address, cartValue } =
    singleOrderDetails;

  return (
    <Container className="order-details main">
      <Card className="address-card">
        <Typography variant="body2">Delivery Address</Typography>
        <Typography>{address.name}</Typography>
        <Typography>{address.streetAddress}</Typography>
        <Typography>{address.locality}</Typography>
        <Typography>{address.landmark}</Typography>
        <Typography>{address.city}</Typography>
        <Typography>{address.pincode}</Typography>
        <Typography>{address.state}</Typography>
        <Typography>{address.phoneNumber}</Typography>
        <Typography>{address.secondPhoneNumber}</Typography>
      </Card>
      <Box className="together-ordered-products">
        <TogetherOrderedProducts
          key={uuidv4()}
          productId={productId}
          orderedProductList={orderedProductList}
          totalAmountOfOrder={cartValue}
        />
      </Box>
    </Container>
  );
};

export default OrderDetails;
