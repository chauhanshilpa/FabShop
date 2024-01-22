import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import Image from "../utils/Image";
import Box from "@mui/material/Box";

const ReactCarousel = () => {
  return (
    <Box className="slider-container">
      <Carousel className="home-carousel" showArrows={true} showThumbs={false}>
        <Image
          src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/special+offer.jpg"
          alt="special-offer"
        />
        <Image
          src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/fashion_collection_for_women.jpg"
          alt="fashion collection for women"
        />
        <Image
          src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/coming+soon.jpg"
          alt="coming soon..."
        />
      </Carousel>
    </Box>
  );
};

export default ReactCarousel;
