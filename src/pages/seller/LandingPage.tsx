import "./LandingPage.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SellerRegistrationForm from "../../components/seller/SellerRegistrationForm";
import { useState } from "react";
import LoginForm from "../../components/login/LoginForm";

interface Props {
  setActiveSellerId: React.Dispatch<React.SetStateAction<string>>;
  setIsSellerLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  personType: string;
}

const LandingPage = ({
  personType, 
  setActiveSellerId,
  setIsSellerLoggedIn,
}: Props) => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setIsSignupFormOpen] = useState(true);

  return (
    <Box className="main">
      {isLoginFormOpen && (
        <LoginForm
          personType={personType}
          setIsLoginFormOpen={setIsLoginFormOpen}
          setIsUserLoggedIn={setIsSellerLoggedIn}
          setIsSignUpFormOpen={setIsSignupFormOpen}
          setActiveUserId={setActiveSellerId}
          setIsSellerLoggedIn={setIsSellerLoggedIn}
        />
      )}
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
      {isSignUpFormOpen && (
        <SellerRegistrationForm
          setActiveSellerId={setActiveSellerId}
          setIsLoginFormOpen={setIsLoginFormOpen}
          setIsSignupFormOpen={setIsSignupFormOpen}
          setIsSellerLoggedIn={setIsSellerLoggedIn}
        />
      )}
    </Box>
  );
};

export default LandingPage;
