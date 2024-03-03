import "./Home.css";
import Carousel from "../../components/carousel/react_responsive_carousel/Carousel";
import Box from "@mui/material/Box";
import HomeContents from "../../components/home_components/HomeContents";
import Container from "@mui/material/Container";

const heroImagesList: { src: string; alt: string }[] = [
  {
    src: "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/special+offer.jpg",
    alt: "special-offer",
  },
  {
    src: "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/fashion_collection_for_women.jpg",
    alt: "fashion collection for women",
  },
  {
    src: "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/coming+soon.jpg",
    alt: "coming soon...",
  },
];

const Home = ({ activeUserId }: { activeUserId: string }) => {
  return (
    <Container>
      <Box className="hero-carousel">
        <Carousel carouselImageList={heroImagesList} />
      </Box>
      <HomeContents activeUserId={activeUserId} />
    </Container>
  );
};

export default Home;
