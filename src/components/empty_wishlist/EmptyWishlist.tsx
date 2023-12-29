import "./EmptyWishlist.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../Image/Image";

const EmptyWishlist = () => {
  return (
    <Box className="empty-wishlist-container">
      <Image
        src="https://drive.google.com/uc?export=view&id=1Gu-cncD6Rld6S2NufGwPARi3esz5NSp4"
        alt="empty wishlist"
      />
      <Box className="empty-wishlist-text">
        <Typography
          variant="h5"
          sx={{ fontWeight: "regular", fontStyle: "italic" }}
        >
          Uh-oh! It seems like your wishlist is as empty as a shopping cart on a
          Sunday. 😱 Time to sprinkle some magic! Explore our enchanting
          collection and add a touch of joy to your list. Your wishes await
          fulfillment!
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyWishlist;
