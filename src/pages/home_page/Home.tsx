import Carousel from "../../components/carousel/Carousel";
import HomeContents from "../../components/home_components/HomeContents";

const Home = ({ activeUserId }: { activeUserId :string}) => {
  return (
    <>
      <Carousel />
      <HomeContents activeUserId={activeUserId} />
    </>
  );
};

export default Home;
