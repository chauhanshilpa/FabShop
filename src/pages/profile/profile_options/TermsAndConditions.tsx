import "./ProfileOptions.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

/**
 * 
 * @returns sample page for terms and conditions.
 */
const TermsAndConditions = () => {
  return (
    <Box className="main sample-page-container">
      <Typography variant="h6" className="sample-page">
        This is the sample page. Here you can write term and conditions about
        web-app.
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
