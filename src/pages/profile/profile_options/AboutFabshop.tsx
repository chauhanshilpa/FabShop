import "./ProfileOptions.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * 
 * @returns sample page about FabShop.
 */
const AboutFabshop = () => {
  return (
    <Box className="main sample-page-container">
      <Typography variant="h6" className="sample-page">
        This is the sample page. Here you can write about the web-app.
      </Typography>
    </Box>
  );
};

export default AboutFabshop;
