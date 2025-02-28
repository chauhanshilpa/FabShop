import "./Category.css";
import Box from "@mui/material/Box";
import { useParams } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Product } from "../../api/classModels";
import Image from "../../components/Image/Image";
import ProductsList from "../../components/products_list/ProductsList";

/**
 *
 * @returns product list based on category which in result showcases all product cards of a category.
 */
const Category = ({ allProducts }: { allProducts: Product[] }) => {
  let { page } = useParams();
  //filter products according to category
  const filteredProducts = allProducts.filter(
    ({ category }) => category === page
  );

  return (
    <Box className="main">
      <Box className="category-banner">
        <Image
          src={
            page === "Men"
              ? "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/men_banner.jpg"
              : page === "Women"
              ? "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/women_banner.jpg"
              : "https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/kids_banner.jpg"
          }
          alt={`${page}Banner`}
        />
      </Box>
      <Container className="product-cards-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <ProductsList productsList={filteredProducts} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Category;
