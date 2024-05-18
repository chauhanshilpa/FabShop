import "./OrderDetails.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useLocation } from "react-router-dom";
import TogetherOrderedProducts from "./TogetherOrderedProducts";
import { v4 as uuidv4 } from "uuid";

const OrderedItemDetails = () => {
  const { state } = useLocation();
  const { productId, singleOrderDetails } = state;
  const { orderId, dateAndTime, orderedProductList, address, cartValue } =
    singleOrderDetails;

  return (
    <Container className="order-details main">
      <Box sx={{ marginBottom: "1rem"}}>
        <Typography
          variant="body2"
          sx={{
            color: "rgba(0, 0, 0, 0.5)",
            fontWeight: "600",
          }}
        >
          OrderId: {orderId}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "0.5rem",
            color: "rgba(0, 0, 0, 0.5)",
            fontWeight: "600",
          }}
        >
          Order Date: {dateAndTime}
        </Typography>
      </Box>
      <Card className="address-card">
        <Typography
          variant="h6"
          sx={{ marginBottom: "0.5rem", fontWeight: "700", color: "black" }}
        >
          Delivery Address
        </Typography>
        <Typography sx={{ fontWeight: "550" }}>{address.name}</Typography>
        <Typography>{address.streetAddress}</Typography>
        <Typography>{address.landmark}</Typography>
        <Typography>
          {address.locality}, {address.pincode}
        </Typography>
        <Typography>
          {address.city}, {address.state}
        </Typography>
        <Typography>
          {address.phoneNumber}, {address.secondPhoneNumber}
        </Typography>
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

export default OrderedItemDetails;
