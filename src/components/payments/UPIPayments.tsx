import React from 'react';
import "./PaymentList.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Container from "@mui/material/Container";

const UPIPayments = () => {
  return (
    <Container className="UPI-payment">
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Pay using UPI</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Amazon Pay"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Google Pay"
          />
          <FormControlLabel value="other" control={<Radio />} label="Paytm" />
        </RadioGroup>
      </FormControl>
    </Container>
  );
}

export default UPIPayments
