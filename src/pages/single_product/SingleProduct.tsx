import { useState, useEffect } from "react";
import "./SingleProduct.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Image from "../../components/Image/Image";
import { Product } from "../../api/classModels";
import {
  getWishlist,
  getCartProductsList,
  setUsersBrowsingHistoryList,
  getUsersBrowsingHistoryList,
} from "../../api/api";
interface Props {
  activeUserId: string;
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  addToWishlist: (productId: string) => Promise<void>;
  removeFromWishlist: (productId: string) => Promise<void>;
}

const SingleProduct = ({
  activeUserId,
  addToCart,
  addToWishlist,
  removeFromWishlist,
}: Props) => {
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const { state } = useLocation();
  const product: Product = state?.product;
  let { product_id } = useParams();
  const productId: string = product_id!;
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const response = await getUsersBrowsingHistoryList(activeUserId);
      const isProductInBrowsingHistory = response.some(
        (product) => product.id === productId
      );
      !isProductInBrowsingHistory &&
        setUsersBrowsingHistoryList(activeUserId, product);
    })();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    async function isWishlistIncludesProduct() {
      const response = await getWishlist(activeUserId);
      const isWishlisted = response.some((product) => product.id === productId);
      setIsProductInWishlist(isWishlisted);
    }
    isWishlistIncludesProduct();

    async function isCartIncludesProduct() {
      const response = await getCartProductsList(activeUserId);
      const isInCart = response.some((product) => product.id === productId);
      setIsProductInCart(isInCart);
    }
    isCartIncludesProduct();
  });

  async function handleWishlist() {
    if (activeUserId !== "" || activeUserId === undefined) {
      isProductInWishlist
        ? await removeFromWishlist(productId)
        : await addToWishlist(productId);
    } else {
      alert(
        "Ready to start curating your wishlist? Sign up or log in to get started!"
      );
    }
  }

  async function handleCart() {
    console.log(activeUserId)
    if (activeUserId !== "" || activeUserId === undefined) {
      isProductInCart ? navigate("/checkout") : await addToCart(productId);
    } else {
      alert(
        "Looks like you're ready to add to your cart! Log in or sign up to make your purchase."
      );
    }
  }

  return (
    <Box className="single-product main">
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
            <Typography
              variant={"body1"}
              className="product-description common-style item-padding"
            >
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
                className="rating item-padding"
              />
            </Box>
            <Box sx={{ display: "flex" }} className="common-style box">
              <CurrencyRupeeIcon sx={{ fontSize: "medium" }} />
              <Typography>{product.price}</Typography>
            </Box>
            <Divider />
            <Box className="buttons common-style">
              <Button
                className="cart-action-button"
                variant="contained"
                onClick={handleCart}
              >
                {isProductInCart ? "Go to cart" : "Add to cart"}
              </Button>
              <Button
                className={`wishlist-action-button ${
                  isProductInWishlist && "button-is-clicked"
                }`}
                variant="contained"
                onClick={handleWishlist}
              >
                {isProductInWishlist ? "wishlisted" : "wishlist"}
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
