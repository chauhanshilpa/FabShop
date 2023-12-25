import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  addItemToCart,
  getCartProductsList,
  removeItemFromCart,
} from "../api/api";
import { Product } from "../api/classModels";

interface Props {
  variant: "text" | "outlined" | "contained" | undefined;
  action: string;
  text: string;
  isProductInCart: boolean;
  activeUserId: string;
  productId: string;
  setCartProductsList: (value: React.SetStateAction<Product[]>) => void;
  buttonClass: string;
}

const AddToCartButton = ({
  variant,
  action,
  text,
  isProductInCart,
  activeUserId,
  productId,
  setCartProductsList,
  buttonClass,
}: Props) => {
  const navigate = useNavigate();

  async function handleCart() {
    if (action === "add") {
      // add product to cart
      isProductInCart
        ? navigate("/cart")
        : await addItemToCart(activeUserId, productId);
    } else if (action === "remove") {
      //remove product from cart
      await removeItemFromCart(activeUserId, productId);
    }
    const response = await getCartProductsList(activeUserId);
    setCartProductsList(response);
  }

  return (
    <Button variant={variant} className={buttonClass} onClick={handleCart}>
      {text}
    </Button>
  );
};

export default AddToCartButton;
