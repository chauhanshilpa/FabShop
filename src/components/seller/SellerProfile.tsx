import { useEffect, useState } from "react";
import "./SellerComponents.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getActiveSellerDetails } from "../../api/api";
import Typography from "@mui/material/Typography";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

interface Props {
  activeSellerId: string;
}

const SellerProfile = ({ activeSellerId }: Props) => {
  const [activeSellerDetails, setActiveSellerDetails] = useState({
    name: "",
    email: "",
    contact: "",
  });

  useEffect(() => {
    (async function () {
      const response = await getActiveSellerDetails(activeSellerId);
      setActiveSellerDetails({ ...response });
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ background: "transparent" }}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            <AccountCircleIcon sx={{ marginRight: "1rem" }} />
            {activeSellerDetails.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
              marginLeft: "1rem",
            }}
          >
            <EmailIcon sx={{ marginRight: "1rem" }} />
            {activeSellerDetails.email}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
              marginLeft: "1rem",
              position: "fixed"
            }}
          >
            {activeSellerDetails.contact && (
              <CallIcon sx={{ marginRight: "1rem" }} />
            )}
            {activeSellerDetails.contact}
          </Typography>
        </List>
      </Box>
    </Box>
  );
};

export default SellerProfile;
