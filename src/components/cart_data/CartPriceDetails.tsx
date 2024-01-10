import "./CartData.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
interface Props {
  cartTotalPrice: number;
  numberOfProductsInCart: number;
}

const CartPriceDetails = ({
  numberOfProductsInCart,
  cartTotalPrice,
}: Props) => {
  return (
    <Box className="cart-price-details">
      <Typography>PRICE DETAILS({numberOfProductsInCart})</Typography>
      <Divider />
      <Box className="row-1">
        <Typography>Total MRP</Typography>
        <Typography>{cartTotalPrice}</Typography>
      </Box>
      <Box className="row-2">
        <Typography>Discount</Typography>
        {/* hardcoded */}
        <Typography>{-15}%</Typography>
      </Box>
      <Box className="row-3">
        <Typography>Shipping Fee</Typography>
        {/* hardcoded */}
        <Typography>{20}</Typography>
      </Box>
      <Divider />
      <Box className="row-4">
        <Typography className="total-amount">Total Amount</Typography>
        <Typography className="total-amount">total</Typography>
      </Box>
    </Box>
  );
};

export default CartPriceDetails;
