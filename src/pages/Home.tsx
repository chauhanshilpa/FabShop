import ProductList from "../components/productList/ProductList";
import Carousel from "../components/carousel/Carousel";
import banner from "../assets/images/thank_you.jpg";

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductList />
      <img
        src={banner}
        alt="Thank you"
        style={{ width: "100%", height: "22rem", marginTop: "10px" }}
      />
    </>
  );
};

export default Home;
