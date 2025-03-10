import { Product } from "../../api/classModels";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import HomeCardProduct from "./HomeCardProduct";
import Typography from "@mui/material/Typography";

interface Props {
  heading: string;
  homeCardProducts: { [key: string]: Product[] };
}

/**
 * 
 * @returns Single card for home page
 */
const HomeCards = ({ heading, homeCardProducts }: Props) => {
  return (
    <Card className="home-card">
      <Typography variant="subtitle1" className="card-header">
        {heading}
      </Typography>
      <Box className="home-card-images">
        {homeCardProducts[heading].map((product) => (
          <HomeCardProduct key={product.id} product={product} />
        ))}
      </Box>
    </Card>
  );
};

export default HomeCards;
