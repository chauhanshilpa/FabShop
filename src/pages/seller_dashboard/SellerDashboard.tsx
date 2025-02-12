import "./SellerDashboard.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SellerProfile from "../../components/seller/SellerProfile";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
interface Props {
  activeSellerId: string;
  setActiveSellerId: React.Dispatch<React.SetStateAction<string>>;
  isSellerLoggedIn: boolean;
  setIsSellerLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellerDashboard = ({
  activeSellerId,
  setActiveSellerId,
  isSellerLoggedIn,
  setIsSellerLoggedIn,
}: Props) => {
  const navigate = useNavigate();

  return (
    <Box className="main seller-dashboard">
      <Box>
        <SellerProfile
          activeSellerId={activeSellerId}
          isSellerLoggedIn={isSellerLoggedIn}
        />
        <Tooltip title="launchpad">
          <Button
            variant="outlined"
            className="button"
            onClick={() => navigate("/seller/launchpad")}
          >
            <RocketLaunchOutlinedIcon />
            &nbsp; &nbsp;Launch new Product
          </Button>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          marginLeft: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "red",
            letterSpacing: "3px",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/seller/landing-page");
            setActiveSellerId("");
            setIsSellerLoggedIn(false);
          }}
        >
          <LogoutIcon sx={{ marginRight: "1rem" }} />
          Logout
        </Typography>
      </Box>
    </Box>
  );
};

export default SellerDashboard;
