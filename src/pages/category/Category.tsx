import "./Category.css";
import { useParams } from "react-router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/productCard/ProductCard";
import KidsBanner from "../../server/assets/images/kids_banner.jpg";
import WomenBanner from "../../server/assets/images/women_banner.jpg";
import MenBanner from "../../server/assets/images/men_banner.jpg";
import { Product, Image } from "../../server/classModels";

interface Props {
  allProducts: Product[];
  allImages: { [key: string]: Image };
}

const Category = ({ allProducts, allImages }: Props) => {
  let { page } = useParams();
  const filteredProducts = allProducts.filter(
    ({ category }) => category === page
  );

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
          {filteredProducts.map(
            ({ product_id, name, description, image_id, price }) => (
              <Grid item xs={6} sm={6} md={4} lg={3} xl={3} key={product_id}>
                <ProductCard
                  allImages={allImages}
                  product_id={product_id}
                  name={name}
                  image_id={image_id}
                  description={description}
                  price={price}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Category;
