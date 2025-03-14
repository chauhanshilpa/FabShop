import "./HomeComponents.css";
import HomeCards from "./HomeCards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Product } from "../../api/classModels";
import {
  getHomeCardProducts,
  getUsersBrowsingHistoryList,
} from "../../api/api";
import MultiCarousel from "../carousel/react_multi_carousel/MultiCarousel";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";

interface Props {
  activeUserId: string;
  recentlyViewedProductsList: Product[];
  setRecentlyViewedProductsList: React.Dispatch<
    React.SetStateAction<Product[]>
  >;
}

/**
 * 
 * @returns home page with cards having products including carousel of "Today's deals" and browsing history.
 */
const HomeContents = ({
  activeUserId,
  recentlyViewedProductsList,
  setRecentlyViewedProductsList,
}: Props) => {
  const [homeCardProducts, setHomeCardProducts] = useState<{
    [key: string]: Product[];
  }>({});

  useEffect(() => {
    async function homeCardProducts() {
      const products = await getHomeCardProducts(activeUserId);
      setHomeCardProducts(products);
      const recentlyViewedProducts = await getUsersBrowsingHistoryList(
        activeUserId
      );
      setRecentlyViewedProductsList(recentlyViewedProducts!);
    }
    homeCardProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="home-content-row-1"
      >
        {Object.keys(homeCardProducts)
          .splice(0, 4)
          .map((heading) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={uuidv4()}>
              <HomeCards
                homeCardProducts={homeCardProducts}
                heading={heading}
              />
            </Grid>
          ))}
      </Grid>
      <Box className="multi-products-carousel">
        <Typography variant="subtitle1" className="home-content-row-2-heading">
          {Object.keys(homeCardProducts).splice(4, 1)[0]}
        </Typography>
        {Object.keys(homeCardProducts)
          .splice(4, 1)
          .map((heading) => (
            <MultiCarousel
              key={uuidv4()}
              listOfProducts={homeCardProducts[heading]}
            />
          ))}
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="home-content-row-1 home-content-row-3"
      >
        {Object.keys(homeCardProducts)
          .splice(5, 8)
          .map((heading) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3} key={uuidv4()}>
              <HomeCards
                homeCardProducts={homeCardProducts}
                heading={heading}
              />
            </Grid>
          ))}
      </Grid>
      {activeUserId !== "" && recentlyViewedProductsList.length > 0 && (
        <Box className="recently-viewed-products-carousel">
          <Typography
            variant="subtitle1"
            className="recently-viewed-products-heading"
          >
            Your browsing history
          </Typography>
          <MultiCarousel
            key={uuidv4()}
            listOfProducts={recentlyViewedProductsList}
          />
        </Box>
      )}
    </>
  );
};

export default HomeContents;
