import "./SearchBar.css";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { getSearchedProducts } from "../../api/api";
import { ENTER_KEY } from "../../FabShop_constants";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");

  const navigate = useNavigate();

  function handleNavbarSearchChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const queryText = event.target.value;
    setQuery(queryText);
  }

  async function handleSearchedProduct(
    event: React.KeyboardEvent<HTMLElement>
  ) {
    if (event.key === ENTER_KEY) {
      const newSearchedProducts = await getSearchedProducts(
        query.toLowerCase()
      );
      navigate(`/search/${query}`, { state: { newSearchedProducts } });
      setQuery("");
    }
  }

  return (
    <Search className="search-bar">
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={query}
        onChange={handleNavbarSearchChange}
        onKeyDown={handleSearchedProduct}
        className="search-bar-input"
      />
    </Search>
  );
};

export default SearchBar;
