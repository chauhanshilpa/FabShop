import "./EmptyCart.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../Image/Image";

const EmptyCart = () => {
  return (
    <Box className="empty-cart-container">
      <Image
        src="https://drive.google.com/uc?export=view&id=1QSzQei0JUJk5vZXHwDYhkn64-u8Wk8ox"
        alt="empty cart"
      />
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
};

export default EmptyCart;
