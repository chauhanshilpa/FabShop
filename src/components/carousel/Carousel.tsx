import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import Image from "../Image/Image";
import Box from "@mui/material/Box";

const ReactCarousel = () => {
  return (
    <Box className="slider-container">
      <Carousel className="home-carousel" showArrows={true} showThumbs={false}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1HubrIW6Wek8lETxbZJ2q5Tztn8TvLqKy"
          alt="special-offer"
        />
        <Image
          src="https://drive.google.com/uc?export=view&id=11Sr6EgwMAZy1Va_oSKiGKEbUynCYT3Ca"
          alt="fashion collection for women"
        />
        <Image
          src="https://drive.google.com/uc?export=view&id=1d1ahHa1BINu5xnxbdrjkuEfmNX7SfZdy"
          alt="coming soon..."
        />
      </Carousel>
    </Box>
  );
};

export default ReactCarousel;
