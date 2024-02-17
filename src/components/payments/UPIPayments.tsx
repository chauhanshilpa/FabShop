import "./PaymentList.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Image from "../Image/Image";
import Card from "@mui/material/Card";

const UPIPayments = () => {
  return (
    <Card className="payment-card">
      <Container className="UPI-payments">
        <FormControl>
          <Typography variant="h6" sx={{ mb: "10px" }}>
            Pay using UPI
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="PayPal"
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/paypal.png"
                alt="PayPal"
              />
            </Box>
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Google Pay"
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/google-pay.png"
                alt="Google Pay"
              />
            </Box>
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Paytm"
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/Paytm.jpg"
                alt="Paytm"
              />
            </Box>
          </RadioGroup>
        </FormControl>
      </Container>
    </Card>
  );
};

export default UPIPayments;
