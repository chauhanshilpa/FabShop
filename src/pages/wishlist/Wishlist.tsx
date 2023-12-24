import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WishlistCard from "../../components/wishlist_card/WishlistedItemCard";
import { Product } from "../../api/classModels";
import EmptyWishlist from "../../components/empty_wishlist/EmptyWishlist";

interface Props {
  activeUserId: string;
  wishlistProductsList: Product[];
  setWishlistProductsList: (value: React.SetStateAction<Product[]>) => void;
}

const Wishlist = ({
  activeUserId,
  wishlistProductsList,
  setWishlistProductsList,
}: Props) => {
  return (
    <Box className="main">
      {wishlistProductsList.length > 0 ? (
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {wishlistProductsList.map((product) => (
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={product.id}>
                <WishlistCard
                  key={product.id}
                  activeUserId={activeUserId}
                  product={product}
                  setWishlistProductsList={setWishlistProductsList}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <EmptyWishlist />
      )}
    </Box>
  );
};

export default Wishlist;
