import "./OrderDetails.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

const OrderDetails = () => {
  const { state } = useLocation();
  const { singleOrderDetails } = state;
  console.log(singleOrderDetails);
  return (
    <Container className="single-order main">hello single order</Container>
  );
};

export default OrderDetails;
