import "./Profile.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LocationOnIcon from "@mui/icons-material/LocationOn";

/**
 *
 * @returns Account details of user
 */
const Profile = () => {
  return (
    <Box className="my-account-section">
      <Card className="card">
        <Box className="row-1">
          <Box>
            <Typography className="first-heading">UserName</Typography>
            <Typography className="second-heading">
              phone number | e-mail address
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
        <Box className="row-2">
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
        <Box className="row-3">
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
        <Box className="row-4">
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
        <Box className="row-5">
          <Box>
            <StarBorderIcon className="icon" />
          </Box>
          <Box>
            <Typography className="first-heading">My Reviews</Typography>
            <Typography className="second-heading">
              Your views about the products
            </Typography>
          </Box>
        </Box>
        <Box className="row-6">
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
        <Box className="row-7">
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
        <Typography>About Us</Typography>
        <Typography>Privacy Policy</Typography>
        <Typography>Terms and Conditions</Typography>
        <Typography>Feedback</Typography>
      </Card>
    </Box>
  );
};

export default Profile;
