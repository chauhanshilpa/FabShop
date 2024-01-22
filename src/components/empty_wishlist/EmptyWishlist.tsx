import "./EmptyWishlist.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../utils/Image";

const EmptyWishlist = () => {
  return (
    <Box className="empty-wishlist-container">
      <Image
        src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/empty+wishlist.jpg"
        alt="empty wishlist"
      />
      <Box className="empty-wishlist-text">
        <Typography
          variant="h5"
          sx={{ fontWeight: "regular", fontStyle: "italic" }}
        >
          Uh-oh! It seems like your wishlist is empty. Explore our enchanting
          collection and add a touch of joy to your list. Your wishes await
          fulfillment!
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyWishlist;
