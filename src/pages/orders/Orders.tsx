import "./Orders.css";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { OrderInterface } from "../../api/api";
import OrderItemCard from "../../components/order_section/order_item_card/OrderItemCard";
interface Props {
  ordersData: OrderInterface;
}

const Orders = ({ ordersData }: Props) => {
  return (
    <Container>
      <Box className="orders main">
        {Object.keys(ordersData).length === 0 ? (
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
            <Typography sx={{marginBottom: "1rem", fontWeight: "600", fontSize: "large"}}>Your Orders</Typography>
            <Box className="order-card-container">
              {Object.keys(ordersData).map((dateAndTimeKey) => {
                const orderDetails = ordersData[dateAndTimeKey];
                return ordersData[dateAndTimeKey].orderedProductList.map(
                  (orderedProduct) => (
                    <OrderItemCard
                      key={uuidv4()}
                      productId={orderedProduct.id}
                      cartProduct={orderedProduct}
                      singleOrderDetails={orderDetails}
                    />
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
