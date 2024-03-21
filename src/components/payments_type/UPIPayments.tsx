import { useState } from "react";
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
import { makeCartEmpty } from "../../api/api";

interface Props {
  activeUserId: string;
}

const UPIPayments = ({ activeUserId }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [upiId, setUpiId] = useState<string>("")

  const navigate = useNavigate();

  async function handleOrderConfirmation() {
    await makeCartEmpty(activeUserId);
    navigate("/checkout/confirmation");
  }

  async function handleUpiIdChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUpiId(event.target.value);
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              value={upiId}
              onChange={handleUpiIdChange}
            />
            <Button onClick={handleOrderConfirmation} disabled={upiId.length > 0 ? false : true}>PAY NOW</Button>
          </Box>
        )}
      </Container>
    </Card>
  );
};

export default UPIPayments;
