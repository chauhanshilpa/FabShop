import "./SingleProduct.css";
import { useParams } from "react-router";
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
import { Product, Image } from "../../server/classModels";

interface Props {
  allProducts: Product[];
  allImages: {[key: string] : Image}
}

const SingleProduct = ({allProducts, allImages}: Props) => {

  const { product_id } = useParams();

  const filteredProduct = allProducts.filter(
    (product) => product.product_id === product_id
  )[0];

  return (
    <Box>
      <Container>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={12} sm={6} className="product-image">
            <img src={allImages[filteredProduct.image_id]["url"]} alt="product" />
          </Grid>
          <Grid xs={12} sm={6} className="product-data">
            <Typography
              variant={"h5"}
              fontWeight="fontWeightBold"
              className="common-style item-padding"
            >
              {filteredProduct.name}
            </Typography>
            <Divider />
            <Typography variant={"body1"} className="common-style item-padding">
              {filteredProduct.description}
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
                value={filteredProduct.ratings}
                readOnly
                className="item-padding"
              />
            </Box>
            <Box sx={{ display: "flex" }} className="common-style box">
              <CurrencyRupeeIcon sx={{ fontSize: "medium" }} />
              <Typography>{filteredProduct.price}</Typography>
            </Box>
            <Divider />
            <Box className="buttons common-style">
              <Button className="add-to-cart-button" variant="contained">
                Add to cart
              </Button>
              <Button
                className="add-to-wishlist-button"
                variant="contained"
              >
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
