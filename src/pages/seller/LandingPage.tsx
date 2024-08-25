import "./LandingPage.css"
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SellerNavbar from "../../components/seller/SellerNavbar";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SellerRegistrationForm from "../../components/seller/SellerRegistrationForm";

const LandingPage = () => {
  return (
    <Box className="main">
      <SellerNavbar />
      <Box className="seller-perks-container">
        <Typography variant="h5" sx={{ fontSize: "x-large" }}>
          Why Sell with Us?
        </Typography>
        <Box className="benefits">
          <Box className="single-benefit-box">
            <GroupsOutlinedIcon className="icon" />
            <Typography className="text">23 crore+ customers</Typography>
          </Box>
          <Box className="single-benefit-box">
            <AccountBalanceWalletOutlinedIcon className="icon" />
            <Typography className="text">
              7* secure & regular payments
            </Typography>
          </Box>
          <Box className="single-benefit-box">
            <SavingsOutlinedIcon className="icon" />
            <Typography className="text">
              Low cost of doing business i.e. more savings
            </Typography>
          </Box>
          <Box className="single-benefit-box">
            <SupportAgentOutlinedIcon className="icon" />
            <Typography className="text">One click seller support</Typography>
          </Box>
          <Box className="single-benefit-box">
            <ShoppingBagOutlinedIcon className="icon" />
            <Typography className="text">
              Access to the great discount days
            </Typography>
          </Box>
        </Box>
      </Box>
      <SellerRegistrationForm />
    </Box>
  );
};

export default LandingPage;
