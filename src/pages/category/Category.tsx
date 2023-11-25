import "./Category.css"
import { useParams } from "react-router";
import { products } from "../../assets/all_products";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/productCard/ProductCard";
import KidsBanner from "../../assets/images/kids_banner.jpg";
import WomenBanner from "../../assets/images/women_banner.jpg";
import MenBanner from "../../assets/images/men_banner.jpg";

const Category = () => {
  let { page } = useParams();
  const filteredProducts = products.filter(({ category }) => category === page);

  return (
    <>
      <div className="category-banner">
        <img
          src={
            page === "Men"
              ? MenBanner
              : page === "Women"
              ? WomenBanner
              : page === "Kids"
              ? KidsBanner
              : undefined
          }
          alt={`${page}Banner`}
        />
      </div>
      <Container className="product-cards-container">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {filteredProducts.map(({ id, name, description, image, price }) => (
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
    </>
  );
};

export default Category;
