import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Image from "../Image/Image";
import Typography from "@mui/material/Typography";
import { Product } from "../../api/classModels";

interface Props {
  product: Product;
}

const HomeCardProduct = ({ product }: Props) => {
  const navigate = useNavigate();

  function openProduct(product_id: string) {
    navigate(`/product/${product_id}`, { state: { product } });
  }

  return (
    <Box className="inner-image" onClick={() => openProduct(product.id)}>
      <Image src={product.image.url} alt="product" />
      <Typography variant="subtitle2" className="product-name">
        {product.name}
      </Typography>
    </Box>
  );
};

export default HomeCardProduct;
