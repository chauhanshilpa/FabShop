import "./MultiCarousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Product } from "../../../api/classModels";
import MultiCarouselProduct from "./MultiCarouselProduct";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const MultiCarousel = ({ listOfProducts }: { listOfProducts: Product[] }) => {
  return (
    <Carousel
      responsive={responsive}
      itemClass="carousel-item"
      swipeable={false}
      draggable={false}
      ssr={true}
      slidesToSlide={3}
      keyBoardControl={true}
      infinite={true}
    >
      {listOfProducts.map((product) => (
        <MultiCarouselProduct product={product} />
      ))}
    </Carousel>
  );
};

export default MultiCarousel;
