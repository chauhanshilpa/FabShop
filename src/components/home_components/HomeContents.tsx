import HomeCards from "./HomeCards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import { Product } from "../../api/classModels";
import { getHomeCardProducts } from "../../api/api";
import { Carousel } from "react-responsive-carousel";

const HomeContents = ({ activeUserId }: { activeUserId : string}) => {
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
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
              <HomeCards
                homeCardProducts={homeCardProducts}
                heading={heading}
              />
            </Grid>
          ))}
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className="home-content-row-1 home-content-row-3"
      >
        {Object.keys(homeCardProducts)
          .splice(5, 8)
          .map((heading) => (
            <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
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
