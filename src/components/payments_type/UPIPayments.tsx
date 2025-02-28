import { useEffect, useState } from "react";
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
import { validUpi } from "../../helpers/commonFunctions";
interface Props {
  activeUserId: string;
}

/**
 * 
 * @returns a card/form to fill upi details and 'PAY NOW' button.
 */
const UPIPayments = ({ activeUserId }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [upiId, setUpiId] = useState<string>("");
  const [isUpiValid, setIsUpiValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isValid = validUpi(upiId);
    isValid ? setIsUpiValid(true) : setIsUpiValid(false);
  }, [upiId]);

  async function handleOrderConfirmation() {
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
              required
              id="outlined-basic"
              label="Enter UPI ID here"
              variant="outlined"
              value={upiId}
              onChange={handleUpiIdChange}
              // sx={{
              //   "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
              //     {
              //       color: isUpiValid ? "auto" : "red",
              //     },
              //   "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              //     {
              //       borderColor: isUpiValid ? "auto" : "red",
              //     },
              // }}
            />
            <Button
              variant="contained"
              className="UPI-payments-button"
              onClick={handleOrderConfirmation}
              disabled={isUpiValid ? false : true}
            >
              PAY NOW
            </Button>
          </Box>
        )}
      </Container>
    </Card>
  );
};

export default UPIPayments;
