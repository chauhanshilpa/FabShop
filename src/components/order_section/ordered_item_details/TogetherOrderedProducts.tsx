import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";
import TogetherOrderedProductCard from "./TogetherOrderedProductCard";
import { CartProductInterface } from "../../../api/api";
import Divider from "@mui/material/Divider";

interface Props {
  productId: string;
  orderedProductList: CartProductInterface[];
  totalAmountOfOrder: number;
}

const TogetherOrderedProducts = ({
  productId,
  orderedProductList,
  totalAmountOfOrder,
}: Props) => {
  const firstProduct = orderedProductList.filter(
    (product: CartProductInterface) => product.id === productId
  )[0];

  const otherProducts = orderedProductList.filter(
    (product: CartProductInterface) => product.id !== firstProduct.id
  );

  return (
    <>
      <Card className="first-product">
        <TogetherOrderedProductCard product={firstProduct} />
        {otherProducts.length === 0 && (
          <>
            <Divider />
            <Box className="order-amount">
              <Typography className="total">Total Order Price :</Typography>
              <Typography className="amount">{totalAmountOfOrder}</Typography>
            </Box>
          </>
        )}
      </Card>

      {otherProducts.length > 0 && (
        <Card className="otherProducts">
          <Typography
            variant="h6"
            sx={{ marginBottom: "1rem", fontWeight: "700", fontSize: "larger" }}
          >
            Other orders with this item
          </Typography>
          {otherProducts.map((product: CartProductInterface) => (
            <Box key={uuidv4()} className="single-ordered-product">
              <TogetherOrderedProductCard product={product} />
            </Box>
          ))}
          <Divider />
          <Box className="order-amount">
            <Typography className="total">Total Order Price :</Typography>
            <Typography className="amount">{totalAmountOfOrder}</Typography>
          </Box>
        </Card>
      )}
    </>
  );
};

export default TogetherOrderedProducts;
