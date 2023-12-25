import React from 'react'
import "./EmptyCart.css"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import empty_cart from "../../api/assets/empty_cart.jpg"
import Image from '../display_Image/Image';

const EmptyCart = () => {
  return (
    <Box className="empty-cart-container">
      <Image src={empty_cart} alt="empty wishlist" />
      <Box className="empty-cart-text">
        <Typography
          variant="h5"
          sx={{ fontWeight: "regular", fontStyle: "italic" }}
        >
          Cart's a bit lonely! Fill it up and let the shopping fun begin
        </Typography>
      </Box>
    </Box>
  );
}

export default EmptyCart
