import "./Wishlist.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WishlistedItemCard from "../../components/wishlist_card/WishlistedItemCard";
import { Product } from "../../api/classModels";
import Typography from "@mui/material/Typography";
interface Props {
  activeUserId: string;
  wishlistProductsList: Product[];
  removeFromWishlist: (productId: string) => Promise<void>;
  addToCart: (productId: string) => Promise<void>;
}

/**
 *
 * @returns list of product in a card with add to add to card and cancel option for every individual product.
 */
const Wishlist = ({
  activeUserId,
  wishlistProductsList,
  removeFromWishlist,
  addToCart,
}: Props) => {
  return (
    <Box className="main wishlist">
      {wishlistProductsList.length > 0 ? (
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {wishlistProductsList.map((product) => (
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={product.id}>
                <WishlistedItemCard
                  key={product.id}
                  activeUserId={activeUserId}
                  product={product}
                  removeFromWishlist={removeFromWishlist}
                  addToCart={addToCart}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <Box className="empty-wishlist-container">
          <Typography
            variant="h5"
            sx={{ fontWeight: "regular", fontStyle: "italic" }}
            className="empty-wishlist-text"
          >
            Uh-oh! It seems like your wishlist is empty. Explore our enchanting
            collection and add a touch of joy to your list. Your wishes await
            fulfillment!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Wishlist;
