import { useEffect, useState } from "react";
import "./PaymentList.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { prevent_e_onInputTypeNumber, validCard } from "../../helpers/commonFunctions";
interface Props {
  activeUserId: string;
}

const CardPayment = ({ activeUserId }: Props) => {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [NameOnCard, setNameOnCard] = useState<string>("");
  const [cardValidity, setCardValidity] = useState<string>("");
  const [CVV, setCVV] = useState<string>("");
  const [isCardValid, setIsCardValid] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (cardValidity.length === 7) {
      const isValid = validCard(cardNumber, NameOnCard, cardValidity, CVV);
      isValid ? setIsCardValid(true) : setIsCardValid(false);
    } else {
      setIsCardValid(false);
    }
  }, [cardNumber, NameOnCard, cardValidity, CVV]);

  async function handleOrderConfirmation() {
    navigate("/checkout/confirmation");
  }

  function handleCardNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    if (value.length > 16) {
      return;
    }
    setCardNumber(event.target.value);
  }

  function handleNameOnCardChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNameOnCard(event.target.value);
  }

  function handleCardValidityChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    let value = event.target.value.replace(/[^\d/]/g, ""); // Keep digits and slash

    // Check if backspace was used to remove slash
    if (value.length === 3 && value.includes("/")) {
      value = `${value.slice(0, 2)}`;
    }

    if (value.length > 7) return;
    if (value.length === 3) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    setCardValidity(value);
  }

  function handleChangeCVV(event: React.ChangeEvent<HTMLInputElement>) {
    let value = event.target.value;
    if (value.length > 3) {
      return;
    }
    setCVV(value);
  }

  return (
    <Card className="payment-card">
      <Container className="card-payment">
        <Typography variant="h6" sx={{ mb: "10px" }}>
          Enter your card details here
        </Typography>
        <TextField
          required
          id="outlined-basic"
          label="Card Number"
          variant="outlined"
          className="text-field"
          type="number"
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            prevent_e_onInputTypeNumber(event)
          }
          onChange={handleCardNumberChange}
          value={cardNumber}
        />
        <TextField
          required
          id="outlined-basic"
          label="Name on card"
          variant="outlined"
          className="text-field"
          onChange={handleNameOnCardChange}
          value={NameOnCard}
        />
        <Box className="validity-and-CVV">
          <TextField
            required
            id="outlined-basic"
            label="Valid Thru(MM/YY)"
            variant="outlined"
            className="text-field"
            onChange={handleCardValidityChange}
            value={cardValidity}
          />
          <TextField
            required
            type="number"
            onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
              prevent_e_onInputTypeNumber(event)
            }
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            className="text-field"
            onChange={handleChangeCVV}
            value={CVV}
          />
        </Box>
        <Button
          variant="contained"
          onClick={handleOrderConfirmation}
          className="card-payment-button"
          disabled={isCardValid ? false : true}
        >
          PAY NOW
        </Button>
        {/* <Button
            variant="contained"
            onClick={handleCardSave}
          >
            SAVE CARD
          </Button> */}
      </Container>
    </Card>
  );
};

export default CardPayment;
