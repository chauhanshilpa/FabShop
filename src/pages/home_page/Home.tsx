import ProductList from "../../components/products_list/ProductsList";
import Carousel from "../../components/carousel/Carousel";
import { Product } from "../../api/classModels";

const Home = ({ allProducts }: { allProducts: Product[] }) => {
  return (
    <>
      <Carousel />
      <ProductList allProducts={allProducts} />
    </>
  );
};

export default Home;
