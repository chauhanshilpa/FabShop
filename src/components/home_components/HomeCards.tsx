import "./Home.css";
import { Product } from "../../api/classModels";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import HomeCardImages from "./HomeCardImages";
import Typography from "@mui/material/Typography";

interface Props {
  heading: string;
  homeCardProducts: { [key: string]: Product[] };
}

const HomeCards = ({ heading, homeCardProducts }: Props) => {
  return (
    <Card className="home-card">
        <Typography variant="subtitle1" className="card-header">
          {heading}
        </Typography>
        <Box className="home-card-images">
          {homeCardProducts[heading].map((product) => (
            <HomeCardImages
              key={product.image.id}
              imgSrc={product.image.url}
              alt={product.type}
              imgLabel={product.type}
            />
          ))}
        </Box>
    </Card>
  );
};

export default HomeCards;
