import { useState, useEffect } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getActiveUserDetails } from "../../api/api";

/**
 *
 * @returns Account details of user
 */

interface Props {
  isUserLoggedIn: boolean;
  activeUserId: string;
}

const Profile = ({ isUserLoggedIn, activeUserId }: Props) => {
  const [activeUser, setActiveUser] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    isUserLoggedIn &&
      (async function () {
        const response = await getActiveUserDetails(activeUserId);
        setActiveUser({ ...response });
      })();
    // eslint-disable-next-line
  }, []);

  return (
    <Box className="my-account-section main">
      <Card className="card">
        <Box className="row-1">
          <Box>
            <Typography className="first-heading">
              {activeUser.name ? activeUser.name : "Username"}
            </Typography>
            <Typography className="second-heading">
              {activeUser.contact ? activeUser.contact : "Contact"} &#124;{" "}
              {activeUser.email ? activeUser.email : "Email"}
            </Typography>
          </Box>
          <Box className="icon">
            <AccountCircleIcon
              sx={{ fontSize: "xxx-large", verticalAlign: "middle" }}
            />
          </Box>
        </Box>
      </Card>
      <Card className="card">
        <Box className="row-2" onClick={() => navigate("/user/Orders")}>
          <Box>
            <LocalMallIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">My Orders</Typography>
            <Typography className="second-heading">
              Track, cancel and return orders
            </Typography>
          </Box>
        </Box>
        <Box className="row-3" onClick={() => navigate("/customer-support")}>
          <Box>
            <HeadsetMicIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">Customer Support</Typography>
            <Typography className="second-heading">
              Help regarding your purchase
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card className="card">
        <Box className="row-4" onClick={() => navigate("/user/Wishlists")}>
          <Box>
            <FavoriteBorderIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">Wishlist</Typography>
            <Typography className="second-heading">
              Your favourite products
            </Typography>
          </Box>
        </Box>
        <Box className="row-6" onClick={() => navigate("/payment-information")}>
          <Box>
            <AccountBalanceWalletIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">My Payments</Typography>
            <Typography className="second-heading">
              Details about your payments and saved cards
            </Typography>
          </Box>
        </Box>
        <Box className="row-7" onClick={() => navigate("/my-addresses")}>
          <Box>
            <LocationOnIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">My Addresses</Typography>
            <Typography className="second-heading">
              Save addresses for faster checkout
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card className="card card-actions">
        <Typography onClick={() => navigate("/about-FabShop")}>
          About Us
        </Typography>
        <Typography onClick={() => navigate("/privacy-policy")}>
          Privacy Policy
        </Typography>
        <Typography onClick={() => navigate("/terms-&-conditions")}>
          Terms and Conditions
        </Typography>
      </Card>
    </Box>
  );
};

export default Profile;
