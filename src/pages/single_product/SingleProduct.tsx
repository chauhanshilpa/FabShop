import "./SingleProduct.css";
import { useLocation } from "react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Image from "../../components/image/Image";
import { Product } from "../../api/classModels";
import {addItemToWishlist} from "../../api/api";

interface Props {
  setWishlist: (val: Product[]) => void;
}

const SingleProduct = ({setWishlist}: Props) => {
  const { state } = useLocation();
  const product = state?.product;

  function handleWishlist(){
    const response = addItemToWishlist(product)
     setWishlist(response)
  }

  return (
    <Box className="single-product">
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={6} className="product-image">
            <Image src={product.image.url} alt="product" />
          </Grid>
          <Grid xs={12} sm={6} className="product-data">
            <Typography
              variant={"h5"}
              fontWeight="fontWeightBold"
              className="common-style item-padding"
            >
              {product.name}
            </Typography>
            <Divider />
            <Typography variant={"body1"} className="common-style item-padding">
              {product.description}
            </Typography>
            <Box sx={{ display: "flex" }} className="box common-style">
              <Typography
                variant={"caption"}
                className="item-padding"
                fontWeight="fontWeightBold"
              >
                ratings:
              </Typography>
              <Rating
                name="read-only"
                value={product.ratings}
                readOnly
                className="item-padding"
              />
            </Box>
            <Box sx={{ display: "flex" }} className="common-style box">
              <CurrencyRupeeIcon sx={{ fontSize: "medium" }} />
              <Typography>{product.price}</Typography>
            </Box>
            <Divider />
            <Box className="buttons common-style">
              <Button className="add-to-cart-button" variant="contained">
                Add to cart
              </Button>
              <Button className="add-to-wishlist-button" variant="contained" onClick={handleWishlist}>
                wishlist
              </Button>
            </Box>
            <Divider />
            <Box className="box common-style">
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Typography
                  fontWeight="fontWeightBold"
                  className="item-padding"
                >
                  Delivery options
                </Typography>
                <LocalShippingOutlinedIcon className="item-padding" />
              </Box>
              <List>
                <ListItem className="list-padding">
                  Get within 3-5 days
                </ListItem>
                <ListItem className="list-padding">
                  Cash on delivery is available
                </ListItem>
                <ListItem className="list-padding">
                  7 days return policy
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleProduct;
