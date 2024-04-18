import "./PaymentList.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
interface Props {
  activeUserId: string;
}

const CashOnDeliveryPayment = ({ activeUserId }: Props) => {
  const navigate = useNavigate();

  async function handleOrderConfirmation() {
    navigate("/checkout/confirmation");
  }

  return (
    <Card className="payment-card">
      <Container className="COD-payment">
        <Typography>Pay only when you receive your order!</Typography>
        <Button onClick={handleOrderConfirmation}>PLACE ORDER</Button>
      </Container>
    </Card>
  );
};

export default CashOnDeliveryPayment;
