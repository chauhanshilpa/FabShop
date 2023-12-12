import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product } from "../../api/classModels";
import WishlistCard from "../../components/wishlist_card/WishlistCard";
import EmptyWishlist from "../../components/empty_wishlist/EmptyWishlist";

interface Props {
  wishlist: Product[];
  setWishlist: (val: Product[]) => void;
}
// img, move to cart button, delete button, name, rating, price
const Wishlist = ({ wishlist, setWishlist }: Props) => {
  return (
    <Container>
      {wishlist.length > 0 ? (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {wishlist.map((product) => (
            <Grid item xs={12} sm={4} md={3} lg={3} xl={3} key={product.id}>
              <WishlistCard key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyWishlist />
      )}
    </Container>
  );
};

export default Wishlist;
