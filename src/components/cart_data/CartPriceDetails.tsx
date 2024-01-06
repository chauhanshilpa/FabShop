import "./CartData.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const CartPriceDetails = () => {
  return (
    <Box className="cart-price-details">
      <Typography>PRICE DETAILS(n item/items)</Typography>
      <Divider />
      <Box className="row-1">
        <Typography>Total MRP</Typography>
        <Typography>{0}</Typography>
      </Box>
      <Box className="row-2">
        <Typography>Discount</Typography>
        <Typography>{0}</Typography>
      </Box>
      <Box className="row-3">
        <Typography>Shipping Fee</Typography>
        <Typography>{0}</Typography>
      </Box>
      <Divider />
      <Box className="row-4">
        <Typography className="total-amount">Total Amount</Typography>
        <Typography className="total-amount">{0}</Typography>
      </Box>
    </Box>
  );
};

export default CartPriceDetails;
