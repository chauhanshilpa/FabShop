import "./PaymentList.css";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Image from "../Image/Image";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { useState } from "react";

const UPIPayments = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const navigate = useNavigate();

  function handleOrderConfirmation() {
    navigate("/checkout/confirmation");
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <Card className="payment-card">
      <Container className="UPI-payments">
        <FormControl>
          <Typography variant="h6" sx={{ mb: "10px" }}>
            Pay using UPI
          </Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="PayPal"
            name="radio-buttons-group"
            onChange={handleRadioChange}
          >
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="PayPal"
                control={<Radio />}
                label="PayPal"
                checked={selectedOption === "PayPal"}
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/paypal.png"
                alt="PayPal"
              />
            </Box>
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="Google Pay"
                control={<Radio />}
                label="Google Pay"
                checked={selectedOption === "Google Pay"}
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/google-pay.png"
                alt="Google Pay"
              />
            </Box>
            <Box className="UPI-payment-type">
              <FormControlLabel
                value="Paytm"
                control={<Radio />}
                label="Paytm"
                checked={selectedOption === "Paytm"}
              />
              <Image
                src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/Paytm.jpg"
                alt="Paytm"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        {selectedOption && (
          <Box className="UPI-Id-form">
            <TextField
              id="outlined-basic"
              label="Enter UPI ID here"
              variant="outlined"
            />
            <Button onClick={handleOrderConfirmation}>PAY NOW</Button>
          </Box>
        )}
      </Container>
    </Card>
  );
};

export default UPIPayments;
