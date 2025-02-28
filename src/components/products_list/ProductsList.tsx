import "./ProductsList.css";
import ProductCard from "../product_card/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product } from "../../api/classModels";
import { Typography } from "@mui/material";

interface Props {
  productsList: Product[];
  userType?: string;
}

/**
 *
 * @returns a reusable component which maps product list to showcase product and if product list length is 0 on a page then it display text
 */
const ProductList = ({ productsList, userType }: Props) => {
  return (
    <Container className="products-list">
      {productsList.length === 0 ? (
        <Typography variant="body2" sx={{ lineHeight: "8" }}>
          {userType
            ? "You have not launched any products yet. Start adding your products to showcase them here!"
            : "No Product To Display😣"}
        </Typography>
      ) : (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {productsList.map((product) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProductList;
