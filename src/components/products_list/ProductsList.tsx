import "./ProductsList.css";
import ProductCard from "../product_card/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product } from "../../api/classModels";

const ProductList = ({ allProducts }: { allProducts: Product[] }) => {
  return (
    <Container>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {allProducts.slice(0, 24).map((product) => (
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
