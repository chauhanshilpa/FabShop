import "./SellerComponents.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  setPersonType: React.Dispatch<React.SetStateAction<string>>;
  setActiveSellerId: React.Dispatch<React.SetStateAction<string>>;
}

function SellerNavbar({ setPersonType, setActiveSellerId }: Props) {
  const navigate = useNavigate();

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
                onClick={() => {
                  navigate("/seller/landing-page");
                  setActiveSellerId("");
                }}
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
                sx={{ color: "white", border: "1px solid white" }}
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
                onClick={() => {
                  navigate("/seller/landing-page");
                  setActiveSellerId("");
                }}
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
                sx={{ color: "white", border: "1px solid white" }}
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
