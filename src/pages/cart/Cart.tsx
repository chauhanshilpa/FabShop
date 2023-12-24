import "./Cart.css";
import { Product } from "../../api/classModels";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CartProductCard from "../../components/cart_data/CartProductCard";
import CartPriceDetails from "../../components/cart_data/CartPriceDetails";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

interface Props {
  cartProductsList: Product[];
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cart = ({ cartProductsList }: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="main cart">
      <Container>
        <Grid container spacing={2} sx={{ display: "flex" }}>
          {cartProductsList.map((product) => (
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
              <Item>
                <CartProductCard product={product} />
              </Item>
            </Grid>
          ))}
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Item>
              <CartPriceDetails />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
