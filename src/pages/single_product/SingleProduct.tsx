import { useState, useEffect } from "react";
import "./SingleProduct.css";
import { useLocation, useParams } from "react-router";
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
import CartActionButton from "../../components/CartActionButton";
import WishlistActionButton from "../../components/WishlistActionButton";
import Image from "../../components/display_Image/Image";
import { Product } from "../../api/classModels";
import {
  addItemToWishlist,
  removeItemFromWishlist,
  getWishlist,
  getCartProductsList,
} from "../../api/api";
interface Props {
  activeUserId: string;
  setWishlistProductsList: (value: React.SetStateAction<Product[]>) => void;
  setCartProductsList: (value: React.SetStateAction<Product[]>) => void;
}

const SingleProduct = ({
  activeUserId,
  setWishlistProductsList,
  setCartProductsList,
}: Props) => {
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [isProductInCart, setIsProductInCart] = useState(false);

  const { state } = useLocation();
  const product: Product = state?.product;
  let { product_id } = useParams();
  const productId: string = product_id!;

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

  // async function handleWishlist() {
  //   isProductInWishlist
  //     ? await removeItemFromWishlist(activeUserId, productId)
  //     : await addItemToWishlist(activeUserId, productId);
  //   const response = await getWishlist(activeUserId);
  //   setWishlistProductsList(response);
  // }

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
              <CartActionButton
                variant={"contained"}
                isProductInCart={isProductInCart}
                text={isProductInCart ? "Go to cart " : "Add To cart"}
                action="add"
                activeUserId={activeUserId}
                productId={productId}
                setCartProductsList={setCartProductsList}
                buttonClass="cart-action-button"
              />
              <WishlistActionButton
                variant={"contained"}
                isProductInWishlist={isProductInWishlist}
                text={isProductInWishlist ? "wishlisted" : "wishlist"}
                action={isProductInWishlist ? "remove" : "add"}
                activeUserId={activeUserId}
                productId={productId}
                setWishlistProductsList={setWishlistProductsList}
                buttonClass={`add-to-wishlist-button ${
                  isProductInWishlist && "button-is-clicked"
                }`}
              />
              {/* <Button
                className={`add-to-wishlist-button ${
                  isProductInWishlist && "button-is-clicked"
                }`}
                variant="contained"
                onClick={handleWishlist}
              >
                {isProductInWishlist ? "wishlisted" : "wishlist"}
              </Button> */}
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
