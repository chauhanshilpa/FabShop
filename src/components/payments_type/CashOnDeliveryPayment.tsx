import "./PaymentList.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useNavigate } from "react-router-dom";
import { makeCartEmpty } from "../../api/api";

interface Props {
  activeUserId: string;
}

const CashOnDeliveryPayment = ({ activeUserId }: Props) => {
  const navigate = useNavigate();

  async function handleOrderConfirmation() {
    await makeCartEmpty(activeUserId);
    navigate("/checkout/confirmation");
  }

  return (
    <Card className="payment-card">
      <Container className="COD-payment">
        <Typography>
          ₹29 will be charged extra for Cash On Delivery Option.
        </Typography>
        <Button onClick={handleOrderConfirmation}>PLACE ORDER</Button>
      </Container>
    </Card>
  );
};

export default CashOnDeliveryPayment;
