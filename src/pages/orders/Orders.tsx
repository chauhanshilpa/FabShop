import "./Orders.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../../components/search_bar/SearchBar";
import {OrderInterface} from "../../api/api"
import OrderCard from "../../components/order_section/order_card/OrderCard";

interface Props {
  ordersList: OrderInterface;
}

const Orders = ({ ordersList }: Props) => {
  
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
            <Box className="order-card-container">
              {Object.keys(ordersList).map((dateTime: string) => {
                return ordersList[dateTime].orderedItemsList.map(
                  (cartProduct) => (
                    <OrderCard key={cartProduct.id} cartProduct={cartProduct} />
                  )
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
}; 

export default Orders;

// "date time":
// Object{
// address: Object { name: "", phoneNumber: "", pincode: "", … }
// orderId: "8b12e434-b0b6-4c8a-9805-6d8601ed0993"
// orderedItemsList: Array [ {…}, {…} ]
// }
