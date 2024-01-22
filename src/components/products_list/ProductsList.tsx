import "./ProductsList.css";
import ProductCard from "../product_card/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product } from "../../api/classModels";

const ProductList = ({ productsList }: { productsList: Product[] }) => {
  return (
    <Container className="products-list">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {productsList.map((product) => (
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
