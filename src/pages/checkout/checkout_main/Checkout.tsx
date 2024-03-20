import { useState, useEffect } from "react";
import "./Checkout.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Cart from "../cart/Cart";
import Address from "../address/Address";
import Payment from "../payment/Payment";
import { Product } from "../../../api/classModels";
import {
  handleCartProductsPrice,
  handleCartTotalAmount,
} from "../../../api/api";

interface Props {
  activeUserId: string;
  cartProductsList: Product[];
  addToWishlist: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
}

const steps = ["Cart", "Address", "Payment"];

const stepStyle = {
  "& .MuiStepLabel-iconContainer": { display: "none" },
  "& .MuiStepLabel-label.Mui-completed": { color: "#20BD99" },
};

export default function Checkout({
  activeUserId,
  cartProductsList,
  addToWishlist,
  removeFromCart,
}: Props) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [cartProductsPrice, setCartProductsPrice] = useState<number>(0);
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);

  useEffect(() => {
    async function getCartTotalPrice() {
      const response = await handleCartProductsPrice(activeUserId);
      setCartProductsPrice(response);
    }
    getCartTotalPrice();
    async function getCartTotalAmount() {
      const response = await handleCartTotalAmount(activeUserId);
      setCartTotalAmount(response);
    }
    getCartTotalAmount();
  }, [cartProductsPrice, activeUserId]);

  function handleOrderPlacement() {
    const prevStep = activeStep;
    setActiveStep(prevStep + 1);
  }

  function displayStep() {
    if (activeStep === 0) {
      return (
        <Cart
          activeUserId={activeUserId}
          cartProductsList={cartProductsList}
          addToWishlist={addToWishlist}
          removeFromCart={removeFromCart}
          handleOrderPlacement={handleOrderPlacement}
          cartTotalAmount={cartTotalAmount}
          cartProductsPrice={cartProductsPrice}
          setCartProductsPrice={setCartProductsPrice}
        />
      );
    } else if (activeStep === 1) {
      return (
        <Address
          activeUserId={activeUserId}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          cartTotalAmount={cartTotalAmount}
          cartProductsPrice={cartProductsPrice}
          numberOfProductsInCart={cartProductsList.length}
          handleOrderPlacement={handleOrderPlacement}
        />
      );
    } else if (activeStep === 2) {
      return (
        <Payment activeUserId={activeUserId} />
      );
    }
  }

  return (
    <Box sx={{ width: "100%" }} className="checkout">
      <Stepper activeStep={activeStep} className="stepper" sx={stepStyle}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      ) : (
        displayStep()
      )}
    </Box>
  );
}
