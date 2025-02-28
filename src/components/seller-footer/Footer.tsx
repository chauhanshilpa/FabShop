import "./Footer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as FooterLink } from "react-router-dom";
import { POPULAR_CATEGORIES_TO_SELL } from "../../helpers/FabShop_constants";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link href="/" color="inherit">
        FabShop
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

/**
 * 
 * @returns seller footer.
 */
const Footer = () => {
  return (
    <Box
      component="footer"
      id="seller-footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
      }}
      className="seller-footer"
    >
      <Box className="row-1">
        <Box>
          <Typography variant="button" className="heading">
            KEEP IN TOUCH
          </Typography>
          <Box className="content">
            <FooterLink to="https://www.instagram.com" target="_blank">
              <InstagramIcon className="icon" />
            </FooterLink>
            <FooterLink to="https://www.facebook.com" target="_blank">
              <FacebookIcon className="icon" />
            </FooterLink>
            <FooterLink to="https://www.twitter.com" target="_blank">
              <TwitterIcon className="icon" />
            </FooterLink>
          </Box>
        </Box>
      </Box>
      <Box className="row-2">
        <Typography variant="button" className="heading">
          Popular categories to sell
        </Typography>
        <Typography variant="body2" className="content">
          {POPULAR_CATEGORIES_TO_SELL.map((item, index) => {
            return (
              <Box component="span" sx={{ display: "inline" }} key={index}>
                {index === POPULAR_CATEGORIES_TO_SELL.length - 1
                  ? item
                  : item + " | "}
              </Box>
            );
          })}
        </Typography>
      </Box>
      <Box className="row-3 copyright">
        <Copyright />
      </Box>
    </Box>
  );
};
export default Footer;
