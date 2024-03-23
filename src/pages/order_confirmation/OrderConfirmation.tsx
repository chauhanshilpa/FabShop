import { useEffect } from "react";
import "./OrderConfirmation.css";
import { Product } from "../../api/classModels";
import Box from "@mui/material/Box";
import { getCartProductsList } from "../../api/api";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";


interface Props {
  activeUserId: string;
  setCartProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const OrderPlaced = ({ activeUserId, setCartProductsList }: Props) => {
  useEffect(() => {
    const getEmptyCart = async () => {
      const cartProductList = await getCartProductsList(activeUserId);
      setCartProductsList(cartProductList);
    };
    getEmptyCart();
    //eslint-disable-next-line
  }, []);

  return (
    <Box className="order-confirmation main">
      <Typography variant="h4" className="confirmation-heading"> Your Order is placed successfully!</Typography>
      <VerifiedIcon className="verified-icon" />
      <Typography variant="button">open orders page to know more about your order.</Typography>
    </Box>
  );
};

export default OrderPlaced;
