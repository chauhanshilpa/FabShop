import { useEffect } from "react";
import "./OrderConfirmation.css";
import Box from "@mui/material/Box";
import {
  getCartProductsList,
  userOrdersWithDate,
  makeCartEmpty,
  getCustomerAddressDetails,
  getUserOrdersList,
  CartProductInterface,
  OrderInterface,
} from "../../api/api";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";

interface Props {
  activeUserId: string;
  setCartProductsList: React.Dispatch<
    React.SetStateAction<CartProductInterface[]>
  >;
  setOrdersList: React.Dispatch<React.SetStateAction<OrderInterface>>
}

const OrderConfirmation = ({
  activeUserId,
  setCartProductsList,
  setOrdersList,
}: Props) => {

  useEffect(() => {
    (async function () {
      const cartProductList = await getCartProductsList(activeUserId);
      const customerAddress = await getCustomerAddressDetails(activeUserId);
      await userOrdersWithDate(
        activeUserId,
        cartProductList,
        customerAddress
      );
      const orderList = await getUserOrdersList(activeUserId);
      setOrdersList(orderList);
      await makeCartEmpty(activeUserId);
      setCartProductsList([]);
    })();
    //eslint-disable-next-line
  }, []);

  return (
    <Box className="order-confirmation main">
      <Typography variant="h4" className="confirmation-heading">
        Your Order is placed successfully!
      </Typography>
      <VerifiedIcon className="verified-icon" />
      <Typography variant="button">
        open orders page to know more about your order.
      </Typography>
    </Box>
  );
};

export default OrderConfirmation;
