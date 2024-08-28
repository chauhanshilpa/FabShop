import "./SellerDashboard.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import SellerProfile from "../../components/seller/SellerProfile";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
interface Props {
  activeSellerId: string;
}

const SellerDashboard = ({ activeSellerId }: Props) => {
  return (
    <Box className="main seller-dashboard">
      <Box>
        <SellerProfile activeSellerId={activeSellerId} />
        <Tooltip title="launchpad">
          <Button variant="outlined" className="button">
            <RocketLaunchOutlinedIcon />
            &nbsp; &nbsp;Launch new Product
          </Button>
        </Tooltip>
      </Box>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          marginTop: "1rem",
          marginLeft: "1rem",
          color: "red",
          letterSpacing: "3px",
          fontWeight: "600",
        }}
      >
        <LogoutIcon sx={{ marginRight: "1rem" }} />
        Logout
      </Typography>
    </Box>
  );
};

export default SellerDashboard;