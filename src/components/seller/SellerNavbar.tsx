import "./SellerComponents.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  setPersonType: React.Dispatch<React.SetStateAction<string>>;
  isSellerLoggedIn: boolean;
  activeSellerId: string;
}

/**
 *
 * @returns navbar for seller containing brand icon and a switch to customer button.
 */
function SellerNavbar({
  setPersonType,
  isSellerLoggedIn,
  activeSellerId,
}: Props) {
  const navigate = useNavigate();

  function handleLogoClick() {
    if (isSellerLoggedIn) {
      navigate(`/seller/dashboard/${activeSellerId}`);
    } else {
      navigate("/seller/landing-page");
    }
  }

  return (
    <>
      <AppBar className="navbar">
        <Container maxWidth="xl">
          {/* for small screen */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                className="app-logo"
                onClick={handleLogoClick}
              >
                FabShop
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  alignSelf: "flex-end",
                  marginLeft: "0.4rem",
                  marginBottom: "0.8rem",
                  fontStyle: "italic",
                }}
              >
                For Sellers
              </Typography>
            </Box>
            <Box>
              <Button
                className="switch-to-customer-button"
                onClick={() => {
                  navigate("/");
                  setPersonType("customer");
                }}
              >
                Switch to customer
              </Button>
            </Box>
          </Box>

          {/* for other larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                mr: 1,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                }}
                className="app-logo"
                onClick={handleLogoClick}
              >
                FabShop
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  alignSelf: "flex-end",
                  marginLeft: "0.3rem",
                  marginBottom: "0.8rem",
                  fontStyle: "italic",
                }}
              >
                For Sellers
              </Typography>
            </Box>
            <Box>
              <Button
                className="switch-to-customer-button"
                onClick={() => {
                  navigate("/");
                  setPersonType("customer");
                }}
              >
                Switch to customer
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
export default SellerNavbar;
