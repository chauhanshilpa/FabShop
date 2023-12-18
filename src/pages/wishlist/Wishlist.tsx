import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import WishlistCard from "../../components/wishlist_card/WishlistedItemCard";
import { Product } from "../../api/classModels";
import EmptyWishlist from "../../components/empty_wishlist/EmptyWishlist";

interface Props {
  activeUserId: string;
  wishlist: Product[];
  setWishlist: (value: React.SetStateAction<Product[]>) => void;
}

const Wishlist = ({ activeUserId, wishlist, setWishlist }: Props) => {
  return (
    <>
      {wishlist.length > 0 ? (
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {wishlist.map((product) => (
              <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={product.id}>
                <WishlistCard
                  key={product.id}
                  activeUserId={activeUserId}
                  product={product}
                  setWishlist={setWishlist}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <EmptyWishlist />
      )}
    </>
  );
};

export default Wishlist;
