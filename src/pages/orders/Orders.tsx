import "./Orders.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { getUserOrdersList } from "../../api/api";
import Typography from "@mui/material/Typography";
import SearchBar from "../../components/search_bar/SearchBar";
import { Order } from "../../api/api";
import OrderCard from "../../components/order_card/OrderCard";

const Orders = ({ activeUserId }: { activeUserId: string }) => {
  const [ordersList, setOrdersList] = useState<Order>({});

  useEffect(() => {
    (async function () {
      const response = await getUserOrdersList(activeUserId);
      setOrdersList(response);
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Box className="orders main">
        {Object.keys(ordersList).length === 0 ? (
          <Box className="empty-orders-container">
            <Typography
              className="empty-orders-text"
              variant="h5"
              sx={{ fontWeight: "regular", fontStyle: "italic" }}
            >
              Looks like it's quiet on the order front! Why not browse our
              products and place your first order?
            </Typography>
          </Box>
        ) : (
          <>
            <Box className="orders-search">
                <Typography variant="button">Search your orders</Typography>
                <SearchBar />
            </Box>
            {Object.keys(ordersList).map((dateTime: string) => {
              return ordersList[dateTime].map((cartProduct) => (
                <OrderCard key={cartProduct.id} cartProduct={cartProduct} />
              ));
            })}
          </>
        )}
      </Box>
    </Container>
  );
};

export default Orders;
