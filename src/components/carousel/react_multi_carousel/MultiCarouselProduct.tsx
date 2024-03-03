import { useNavigate } from "react-router-dom";
import Image from "../../Image/Image";
import Box from "@mui/material/Box";
import { Product } from "../../../api/classModels";

const MultiCarouselProduct = ({ product }: { product: Product }) => {
  const navigate = useNavigate();

  function openProduct(product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Box
      className="multiCarousel-image-wrapper"
      onClick={() => openProduct(product.id)}
    >
      <Image
        key={product.image.id}
        src={product.image.url}
        alt={product.type}
      />
    </Box>
  );
};

export default MultiCarouselProduct;
