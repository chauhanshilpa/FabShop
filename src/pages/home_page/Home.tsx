import ProductList from "../../components/products_list/ProductsList";
import Carousel from "../../components/carousel/Carousel";
import { Product } from "../../api/classModels";

const Home = ({ productsList }: { productsList: Product[] }) => {

  return (
    <>
      <Carousel />
      <ProductList productsList={productsList} />
    </>
  );
};

export default Home;
