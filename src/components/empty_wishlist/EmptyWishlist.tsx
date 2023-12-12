import "./EmptyWishlist.css"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const EmptyWishlist = () => {
  return (  
  <Box className="empty-wishlist-container">
    <Typography>
        Wishlist is Empty
    </Typography>
  </Box>
  )
};

export default EmptyWishlist;
