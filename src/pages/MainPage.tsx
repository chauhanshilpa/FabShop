import ProductList from "./productList/ProductList";
import Carousel from "./carousel/Carousel";
import banner1 from "../assets/images/thank_you.jpg";

const MainPage = () => {
  return (
    <>
      <Carousel />
      <ProductList />
      <img
        src={banner1}
        alt="Thank you"
        style={{ width: "100%", height: "22rem", marginTop: "10px" }}
      />
    </>
  );
};

export default MainPage;
