import { useState } from "react";
import "./PaymentList.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
interface Props {
  activeUserId: string;
}

const CardPayment = ({ activeUserId }: Props) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [NameOnCard, setNameOnCard] = useState<string>("");
  const [cardValidity, setCardValidity] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");

  const navigate = useNavigate();

  async function handleOrderConfirmation() {
    navigate("/checkout/confirmation");
  }

  function handleCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCardNumber(event.target.value);
  }

  function handleNameOnCardChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameOnCard(event.target.value);
  }

  function handleCardValidityChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setCardValidity(event.target.value);
  }

  function handleChangeCVV(event: React.ChangeEvent<HTMLInputElement>) {
    setCVV(event.target.value);
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
          onChange={handleCardNumberChange}
          value={cardNumber}
        />
        <TextField
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
          className="text-field"
          onChange={handleNameOnCardChange}
          value={NameOnCard}
        />
        <Box className="validity-and-CVV">
          <TextField
            id="outlined-basic"
            label="Valid Thru(MM/YY)"
            variant="outlined"
            className="text-field"
            onChange={handleCardValidityChange}
            value={cardValidity}
          />
          <TextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            className="text-field"
            onChange={handleChangeCVV}
            value={CVV}
          />
        </Box>
        <Button
          onClick={handleOrderConfirmation}
          disabled={
            cardNumber.length > 1 &&
            NameOnCard.length > 1 &&
            cardValidity.length > 1 &&
            CVV.length > 1
              ? false
              : true
          }
        >
          PAY NOW
        </Button>
      </Container>
    </Card>
  );
};

export default CardPayment;
