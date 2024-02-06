import "./CartData.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { DISCOUNT, SHIPPING_CHARGE } from "../../FabShop_constants";
import Button from "@mui/material/Button";
interface Props {
  cartTotalAmount: number;
  cartProductsPrice: number;
  numberOfProductsInCart: number;
  handleOrderPlacement: () => void;
}

const CartPriceDetails = ({
  cartTotalAmount,
  cartProductsPrice,
  numberOfProductsInCart,
  handleOrderPlacement,
}: Props) => {
  
  return (
    <Box className="cart-price-details">
      <Typography>PRICE DETAILS({numberOfProductsInCart})</Typography>
      <Divider />
      <Box className="row-1">
        <Typography>Total MRP</Typography>
        <Typography>₹{cartProductsPrice}</Typography>
      </Box>
      <Box className="row-2">
        <Typography>Discount</Typography>
        {/* hardcoded */}
        <Typography>-{DISCOUNT}%</Typography>
      </Box>
      <Box className="row-3">
        <Typography>Shipping Fee</Typography>
        {/* hardcoded */}
        <Typography>₹{SHIPPING_CHARGE}</Typography>
      </Box>
      <Divider />
      <Box className="row-4">
        <Typography className="total-amount">Total Amount</Typography>
        <Typography className="total-amount">₹{cartTotalAmount}</Typography>
      </Box>
      <Button
        variant="contained"
        className="place-order-button"
        onClick={handleOrderPlacement}
      >
        Place Order
      </Button>
    </Box>
  );
};

export default CartPriceDetails;
