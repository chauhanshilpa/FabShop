import React from 'react';
import "./PaymentList.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const CashOnDeliveryPayment = () => {
  return (
    <Container className="COD-payment">
      <Typography>
        ₹29 will be charged extra for Cash On Delivery Option.
      </Typography>
      <Button>PLACE ORDER</Button>
    </Container>
  );
}

export default CashOnDeliveryPayment
