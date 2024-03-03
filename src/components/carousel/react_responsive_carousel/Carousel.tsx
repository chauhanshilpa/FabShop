import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "../../Image/Image";
import Box from "@mui/material/Box";

const ReactCarousel = ({
  carouselImageList,
}: {
  carouselImageList: { src: string; alt: string }[];
}) => {
  return (
    <Box className="slider-container">
      <Carousel showArrows={true} showThumbs={false}>
        {carouselImageList.map((image) => (
          <Image src={image.src} alt={image.alt} />
        ))}
      </Carousel>
    </Box>
  );
};

export default ReactCarousel;
