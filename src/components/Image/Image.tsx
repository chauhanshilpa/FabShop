import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <LazyLoadImage
      className="fabshop-image"
      alt={alt}
      height="100%"
      src={src}
      width="100%"
      effect={"blur"}
      threshold={100}
    />
  );
};

export default Image;
