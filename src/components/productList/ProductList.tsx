import "./ProductList.css";
import ProductCard from "../productCard/ProductCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product, Image } from "../../server/classModels";

const ProductList = ({
  allProducts,
  allImages,
}: {
  allProducts: Product[];
  allImages: { [key: string]: Image };
}) => {
  return (
    <Container className="product-cards">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {allProducts
          .slice(0, 24)
          .map(({ product_id, name, image_id, description, price }) => (
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={product_id}>
              <ProductCard
                product_id={product_id}
                name={name}
                image_id={image_id}
                description={description}
                price={price}
                allImages={allImages}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
