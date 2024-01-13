import "./CartData.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { DISCOUNT, SHIPPING_CHARGE } from "../../FabShop_constants";
interface Props {
  cartTotalAmount: number;
  cartProductsPrice: number;
  numberOfProductsInCart: number;
}

const CartPriceDetails = ({
  cartTotalAmount,
  cartProductsPrice,
  numberOfProductsInCart,
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
    </Box>
  );
};

export default CartPriceDetails;
