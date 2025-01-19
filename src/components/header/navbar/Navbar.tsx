import { useState } from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { Link, NavLink, useNavigate } from "react-router-dom";
import SearchBar from "../search_bar/SearchBar";
import NavbarCart from "./NavbarCart";
import { Product } from "../../../api/classModels";
import { CartProductInterface, OrderInterface } from "../../../api/api";
import StoreIcon from "@mui/icons-material/Store";

const PAGES = ["Men", "Women", "Kids"];
const ACTIONS = ["Profile", "Wishlists", "Orders"];

interface Props {
  setPersonType: React.Dispatch<React.SetStateAction<string>>;
  totalProductsInCart: number;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoginFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveUserId: React.Dispatch<React.SetStateAction<string>>;
  setWishlistProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
  setCartProductsList: React.Dispatch<
    React.SetStateAction<CartProductInterface[]>
  >;
  setOrdersData: React.Dispatch<React.SetStateAction<OrderInterface>>;
  setRecentlyViewedProductsList: React.Dispatch<
    React.SetStateAction<Product[]>
  >;
}

function Navbar({
  setPersonType,
  totalProductsInCart,
  isUserLoggedIn,
  setIsUserLoggedIn,
  setIsLoginFormOpen,
  setActiveUserId,
  setWishlistProductsList,
  setCartProductsList,
  setOrdersData,
  setRecentlyViewedProductsList,
}: Props) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  console.log(totalProductsInCart);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleUserLogin = () => {
    setIsLoginFormOpen(true);
  };

  const handleLogoutClick = () => {
    setAnchorElUser(null);
    setIsUserLoggedIn(false);
    setActiveUserId("");
    setWishlistProductsList([]);
    setOrdersData({});
    setCartProductsList([]);
    setRecentlyViewedProductsList([]);
    navigate("/");
  };

  return (
    <>
      <AppBar className="navbar">
        <Container maxWidth="xl">
          <Toolbar disableGutters className="toolbar">
            {/* for small screen */}
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              className="menu-navbar"
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {PAGES.map((page) => (
                  <Link to={`/category/${page}`} key={page}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" sx={{ color: "black" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                }}
              >
                <NavLink to="/">
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "500",
                    }}
                    className="app-logo"
                  >
                    FabShop
                  </Typography>
                </NavLink>
              </Box>
            </Box>

            {/* for other larger screens */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            >
              <NavLink to="/">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "500",
                  }}
                  className="app-logo"
                >
                  FabShop
                </Typography>
              </NavLink>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
              }}
            >
              {PAGES.map((page) => (
                <NavLink to={`/category/${page}`} key={page}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
              <SearchBar />
            </Box>
            {isUserLoggedIn ? (
              <NavLink to="/checkout">
                <NavbarCart
                  totalProductsInCart={totalProductsInCart}
                  isUserLoggedIn={isUserLoggedIn}
                />
              </NavLink>
            ) : (
              <NavbarCart
                totalProductsInCart={totalProductsInCart}
                isUserLoggedIn={isUserLoggedIn}
              />
            )}
            {/* store icon to login as seller(todo: responsive) */}
            <Box
              className="store-icon"
              onClick={() => {
                setPersonType("seller");
                navigate("/seller/landing-page");
              }}
            >
              <Tooltip title="login as seller">
                <StoreIcon />
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="user actions">
                {isUserLoggedIn ? (
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon className="profile-icon" />
                  </IconButton>
                ) : (
                  <Button
                    className="login-button"
                    variant="outlined"
                    onClick={handleUserLogin}
                  >
                    Login
                  </Button>
                )}
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {ACTIONS.map((action) => (
                  <Link to={`/user/${action}`} key={action}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" sx={{ color: "black" }}>
                        {action}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
                <MenuItem onClick={handleLogoutClick}>
                  <Typography textAlign="center" sx={{ color: "black" }}>
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
          <Box
            sx={{
              display: { sm: "none" },
              mb: "10px",
            }}
          >
            <SearchBar />
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
