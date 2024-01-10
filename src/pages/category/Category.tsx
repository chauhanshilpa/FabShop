import "./Category.css";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/product_card/ProductCard";
import { Product } from "../../api/classModels";
import Image from "../../components/Image/Image";

const Category = ({ allProducts }: { allProducts: Product[] }) => {
  let { page } = useParams();
  const filteredProducts = allProducts.filter(
    ({ category }) => category === page
  );

  return (
    <Box className="main">
      <Box className="category-banner">
        <Image
          src={
            page === "Men"
              ? "https://drive.google.com/uc?export=view&id=154VljOC4-7HVzwjzikQ-61iWlXrgAHWP"
              : page === "Women"
              ? "https://drive.google.com/uc?export=view&id=1dUqyyxp1kR0ju1509vRiLWTjrDh9xT3Q"
              : "https://drive.google.com/uc?export=view&id=1_NBMAm4WECWObR_q7TVnJQlyY3wrXPPo"
          }
          alt={`${page}Banner`}
        />
      </Box>
      <Container className="product-cards-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {filteredProducts.map((product) => (
            <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Category;
