import React from 'react';
import "./PaymentList.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const CardPayment = () => {
  return (
    <Container className="card-payment">
      <TextField id="outlined-basic" label="Card Number" variant="outlined" />
      <TextField id="outlined-basic" label="Name on card" variant="outlined" />
      <TextField id="outlined-basic" label="Valid Thru(MM/YY)" variant="outlined" />
      <TextField id="outlined-basic" label="CVV" variant="outlined" />
      <Button>PAY NOW</Button>
    </Container>
  );
}

export default CardPayment
