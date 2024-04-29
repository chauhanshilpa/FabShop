import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { BadgeProps } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: 6,
    top: 13,
    border: "unset",
    padding: "0 4px",
    backgroundColor: "#f8f07a",
    color: "black",
  },
}));

interface Props {
  totalProductsInCart: number;
  isUserLoggedIn: boolean;
}

const NavbarCart = ({ totalProductsInCart, isUserLoggedIn }: Props) => {
  return (
    <IconButton aria-label="navbar-cart">
      <StyledBadge badgeContent={isUserLoggedIn? totalProductsInCart : 0} color="primary">
        <ShoppingCartIcon className={isUserLoggedIn ? "cart-icon" : "disable-cart"} />
      </StyledBadge>
    </IconButton>
  );
};

export default NavbarCart;
