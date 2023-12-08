import ProductList from "../components/productList/ProductList";
import Carousel from "../components/carousel/Carousel";
import banner from "../server/assets/images/thank_you.jpg";
import { Product } from "../server/classModels";
import { Image } from "../server/classModels";

const Home = ({
  allProducts,
  allImages,
}: {
  allProducts: Product[];
  allImages: { [key: string]: Image };
}) => {
  return (
    <>
      <Carousel />
      <ProductList allProducts={allProducts} allImages={allImages} />
      <img
        src={banner}
        alt="Thank you"
        style={{ width: "100%", height: "22rem", marginTop: "10px" }}
      />
    </>
  );
};

export default Home;
