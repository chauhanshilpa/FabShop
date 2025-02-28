import { useEffect } from "react";
import "./OrderConfirmation.css";
import Box from "@mui/material/Box";
import {
  getCartProductsList,
  userOrdersWithDate,
  makeCartEmpty,
  getCustomerAddressDuringOrder,
  getUserOrdersList,
  CartProductInterface,
  SingleOrderInterface,
} from "../../api/api";
import VerifiedIcon from "@mui/icons-material/Verified";
import Typography from "@mui/material/Typography";

interface Props {
  activeUserId: string;
  setCartProductsList: React.Dispatch<
    React.SetStateAction<CartProductInterface[]>
  >;
  setOrdersData: React.Dispatch<React.SetStateAction<SingleOrderInterface[]>>;
}

/**
 * 
 * @returns confirmation page to show sucees order placement.
 */
const OrderConfirmation = ({
  activeUserId,
  setCartProductsList,
  setOrdersData,
}: Props) => {

  // runs whenever confirmation page opens.
  useEffect(() => {
    (async function () {
      let orderedProductsList = await getCartProductsList(activeUserId);
      const customerAddress = await getCustomerAddressDuringOrder(activeUserId);
      await userOrdersWithDate(
        activeUserId,
        orderedProductsList,
        customerAddress
      );
      const orderData = await getUserOrdersList(activeUserId);
      setOrdersData(orderData);
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
