import HomeCards from "./HomeCards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Product } from "../../api/classModels";
import { getHomeCardProducts } from "../../api/api";
import MultiCarousel from "../carousel/react_multi_carousel/MultiCarousel";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";

const HomeContents = ({ activeUserId }: { activeUserId: string }) => {
  const [homeCardProducts, setHomeCardProducts] = useState<{
    [key: string]: Product[];
  }>({});

  useEffect(() => {
    async function homeCardProducts() {
      const response = await getHomeCardProducts(activeUserId);
      setHomeCardProducts(response);
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
    </>
  );
};

export default HomeContents;
