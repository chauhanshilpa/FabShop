import "./ProductList.css";
import { products } from "../../assets/all_products";
import ProductCard from "../productCard/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const ProductList = () => {
  return (
    <Container className="product-cards">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {products.slice(1, 25).map(({ id, name, description, image, price }) => (
          <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={id}>
            <ProductCard
              id={id}
              name={name}
              image={image}
              description={description}
              price={price}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
