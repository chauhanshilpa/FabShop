import "./CartData.css";
import { Product } from "../../api/classModels";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../display_Image/Image";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

interface Props {
  product: Product;
}

const CartProduct = ({product}: Props) => {

  function removeItemFromCart() {
    console.log("remove item");
  }

  function moveItemToWishlist() {
    console.log("add");
  }

  function removeQuantity(){
    console.log("remove by 1")
  }

  function addQuantity(){
    console.log("add by 1")
  }

  return (
    <Box className="shopping-cart">
      <Box sx={{ display: "flex" }}>
        <Image src={product.image.url} alt="smt" />
        <Box className="cart-product-data">
          <Typography className="product-name">{product.name}</Typography>
          <Typography variant="caption">size: {}</Typography>
          <Typography className="product-description">
            {product.description}
          </Typography>
          <Typography className="product-price">₹{product.price}</Typography>
          <Rating
            name="read-only"
            value={product.ratings}
            readOnly
            className="product-ratings"
          />
        </Box>
      </Box>
      <Box className="product-quantity-box">
        <Box className="product-quantity">
          <Button className="quantity-remove-button" onClick={removeQuantity}>
            <RemoveCircleOutlineIcon />
          </Button>
          <Box className="quantity-display-button">0</Box>
          <Button className="quantity-add-button" onClick={addQuantity}>
            <AddCircleOutlineIcon />
          </Button>
        </Box>
        <Typography className="remove-from-cart" onClick={removeItemFromCart}>
          remove
        </Typography>
        <Typography className="move-to-wishlist" onClick={moveItemToWishlist}>
          move to Wishlist
        </Typography>
      </Box>
    </Box>
  );
};

export default CartProduct;
