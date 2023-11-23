
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import banner1 from "../../assets/images/special offer.jpg";
import banner2 from "../../assets/images/fashion_collection_for_women.jpg";
import banner3 from "../../assets/images/coming soon.jpg";

const ReactCarousel = () => {
  return (
    <Carousel className="carousel">
      <div>
        <img src={banner1} alt="special offer"/>
      </div>
      <div>
        <img src={banner2} alt="fashion collection for women"/>
      </div>
      <div>
        <img src={banner3} alt="coming soon..." />
      </div>
    </Carousel>
  );
};

export default ReactCarousel;
