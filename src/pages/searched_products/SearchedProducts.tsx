import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import ProductsList from "../../components/products_list/ProductsList";
import { Product } from "../../api/classModels";

const SearchedProducts = () => {
  const { state } = useLocation();
  const productsList: Product[] = state?.newSearchedProducts;
  
  return (
    <Box className= "main">
      <ProductsList productsList={productsList} />
    </Box>
  );
};

export default SearchedProducts;
