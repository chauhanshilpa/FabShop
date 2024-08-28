import "./SellerComponents.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function SellerNavbar() {
  return (
    <>
      <AppBar className="navbar">
        <Container maxWidth="xl">
          {/* for small screen */}
          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            className="menu-navbar"
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
                }}
                className="app-logo"
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
          </Box>

          {/* for other larger screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
              }}
              className="app-logo"
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
        </Container>
      </AppBar>
    </>
  );
}
export default SellerNavbar;
