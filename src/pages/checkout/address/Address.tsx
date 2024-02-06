import "./Address.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CartPriceDetails from "../../../components/cart_data/CartPriceDetails";
import AddressForm from "../../../components/address_form/AddressForm";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface Props {
  activeUserId: string;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  cartTotalAmount: number;
  cartProductsPrice: number;
  numberOfProductsInCart: number;
  handleOrderPlacement: () => void;
}

export default function Address({
  activeUserId,
  activeStep,
  setActiveStep,
  cartTotalAmount,
  cartProductsPrice,
  numberOfProductsInCart,
  handleOrderPlacement,
}: Props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      className="address-box"
    >
      <Container id="text-fields">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
            <Item>
              <AddressForm
                activeUserId={activeUserId}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            </Item>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Item>
              <CartPriceDetails
                cartTotalAmount={cartTotalAmount}
                cartProductsPrice={cartProductsPrice}
                numberOfProductsInCart={numberOfProductsInCart}
                handleOrderPlacement={handleOrderPlacement}
              />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
