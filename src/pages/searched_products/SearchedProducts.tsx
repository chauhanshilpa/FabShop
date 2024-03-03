import { useLocation } from "react-router-dom";
import ProductsList from "../../components/products_list/ProductsList";
import { Product } from "../../api/classModels";

const SearchedProducts = () => {
  const { state } = useLocation();
  const productsList: Product[] = state?.newSearchedProducts;
  return <ProductsList productsList={productsList} />;
};

export default SearchedProducts;
