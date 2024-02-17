import "./PaymentList.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";

const CardPayment = () => {
  const navigate = useNavigate();

  function handleOrderConfirmation() {
    navigate("/checkout/confirmation");
  }

  return (
    <Card className="payment-card">
      <Container className="card-payment">
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Enter your card details here
        </Typography>
        <TextField
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          className="text-field"
        />
        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
          className="text-field"
        />
        <Box className="validity-and-CVV">
          <TextField
            id="outlined-basic"
            label="Valid Thru(MM/YY)"
            variant="outlined"
            className="text-field"
          />
          <TextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            className="text-field"
          />
        </Box>
        <Button onClick={handleOrderConfirmation}>PAY NOW</Button>
      </Container>
    </Card>
  );
};

export default CardPayment;
