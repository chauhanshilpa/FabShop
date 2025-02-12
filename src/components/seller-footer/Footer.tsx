import "./Footer.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link as FooterLink } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      FabShop&nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {

  return (
    <Box
      id="seller-footer"
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[300]
            : theme.palette.grey[800],
      }}
      className="footer"
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
      <Box className="row-3 copyright">
        <Copyright />
      </Box>
    </Box>
  );
};
export default Footer;
