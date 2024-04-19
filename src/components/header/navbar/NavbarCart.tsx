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

const NavbarCart = ({
  totalProductsInCart,
}: {
  totalProductsInCart: number;
}) => {
  return (
    <IconButton aria-label="navbar-cart">
      <StyledBadge badgeContent={totalProductsInCart} color="primary">
        <ShoppingCartIcon className="cart-icon" />
      </StyledBadge>
    </IconButton>
  );
};

export default NavbarCart;
