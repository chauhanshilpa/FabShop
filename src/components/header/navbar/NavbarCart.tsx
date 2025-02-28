import { styled } from "@mui/material/styles";
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

/**
 * 
 * @returns navbar cart icon with a badge to display number of products in cart
 */
const NavbarCart = ({ totalProductsInCart, isUserLoggedIn }: Props) => {
  return (
    <StyledBadge
      badgeContent={isUserLoggedIn ? totalProductsInCart : 0}
      color="primary"
    >
      <ShoppingCartIcon
        className={isUserLoggedIn ? "cart-icon" : "disable-cart"}
      />
    </StyledBadge>
  );
};

export default NavbarCart;
