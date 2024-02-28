import Box from "@mui/material/Box";
import Image from "../Image/Image";
import Typography from "@mui/material/Typography";

interface Props {
  imgSrc: string;
  alt: string;
  imgLabel: string;
}

const HomeCardImages = ({ imgSrc, alt, imgLabel }: Props) => {
  return (
    <Box className="inner-image">
      <Image src={imgSrc} alt={alt} />
      <Typography variant="subtitle2">{imgLabel}</Typography>
    </Box>
  );
};

export default HomeCardImages;
