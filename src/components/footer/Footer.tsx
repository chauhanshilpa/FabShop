import "./Footer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        FabShop
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
      className="footer"
    >
      <Box className="row-1">
        <Box>
          <Typography variant="button" className="heading">
            ONLINE SHOPPING
          </Typography>
          <Box className="content">
            <Box>
              <a href="/category/Men">Men</a>
            </Box>
            <Box>
              <a href="/category/Women">Women</a>
            </Box>
            <Box>
              <a href="/category/Kids">Kids</a>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="button" className="heading">
            KEEP IN TOUCH
          </Typography>
          <Box className="content">
            <InstagramIcon className="icon" />
            <FacebookIcon className="icon" />
            <TwitterIcon className="icon" />
          </Box>
        </Box>
      </Box>
      <Box className="row-2">
        <Typography variant="button" className="heading">
          POPULAR SEARCHES
        </Typography>
        <Typography variant="body2" className="content">
          Dresses | Bodysuit | T-Shirts | Sandals | Handbags | Watches | Bags |
          Sport Shoes | Casual Shoes | Tops | Jeans | Shorts | Shirt
        </Typography>
      </Box>
      <Box className="row-3 copyright">
        <Copyright />
      </Box>
    </Box>
  );
};
export default Footer;
