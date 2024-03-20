import { useEffect } from "react";
import { Product } from "../../api/classModels";
import Box from "@mui/material/Box";
import {getCartProductsList} from "../../api/api";

interface Props {
  activeUserId: string;
  setCartProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const OrderPlaced = ({
  activeUserId,
  setCartProductsList,
}: Props) => {

  useEffect(() => {
    const getEmptyCart = async () => {
      const cartProductList = await getCartProductsList(activeUserId);
      setCartProductsList(cartProductList);
    };
    getEmptyCart();
    //eslint-disable-next-line
  }, []);

  return <Box>Your Order is placed successfully</Box>;
};

export default OrderPlaced;
