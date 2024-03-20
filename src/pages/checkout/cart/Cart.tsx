import "./Cart.css";
import { Product } from "../../../api/classModels";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CartProductCard from "../../../components/cart_data/CartProductCard";
import CartPriceDetails from "../../../components/cart_data/CartPriceDetails";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import EmptyCart from "../../../components/empty_cart/EmptyCart";
interface Props {
  activeUserId: string;
  cartProductsList: Product[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  handleOrderPlacement: () => void;
  cartProductsPrice: number;
  cartTotalAmount: number;
  setCartProductsPrice: React.Dispatch<React.SetStateAction<number>>;
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cart = ({
  activeUserId,
  cartProductsList,
  addToWishlist,
  removeFromCart,
  handleOrderPlacement,
  cartProductsPrice,
  cartTotalAmount,
  setCartProductsPrice,
}: Props) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="main cart">
      {cartProductsList.length > 0 ? (
        <Container>
          <Grid container spacing={2} sx={{ display: "flex" }}>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              lg={7}
              xl={7}
              className="cart-left"
            >
              {cartProductsList.map((product) => (
                <Grid item className="cart-product-card" key={product.id}>
                  <Item>
                    <CartProductCard
                      activeUserId={activeUserId}
                      product={product}
                      addToWishlist={addToWishlist}
                      removeFromCart={removeFromCart}
                      setCartProductsPrice={setCartProductsPrice}
                    />
                  </Item>
                </Grid>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              lg={5}
              xl={5}
              className="cart-right"
            >
              <Item>
                <CartPriceDetails
                  cartProductsPrice={cartProductsPrice}
                  cartTotalAmount={cartTotalAmount}
                  numberOfProductsInCart={cartProductsList.length}
                  handleOrderPlacement={handleOrderPlacement}
                />
              </Item>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </Box>
  );
};

export default Cart;
