import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Image from "../../../components/Image/Image";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import CardPayment from "../../../components/payments_type/CardPayment";

interface Props {
  activeUserId: string;
}

const UserPaymentsInfo = ({ activeUserId }: Props) => {
  const [isCardDetailsFormOpen, setIsCardDetailsFormOpen] = useState(false);
  const [isUpiDetailsFormOpen, setIsUpiDetailsFormOpen] = useState(false);

  const OpenFormToSaveCardDetails = () => {
    setIsCardDetailsFormOpen(true);
  };

  const OpenFormToSaveUpiDetails = () => {
    setIsUpiDetailsFormOpen(true);
  };

  return (
    <Container className="profile-saved-payments main">
      <Box sx={{ display: "flex", columnGap: "20px" }}>
        <Button
          className="add-new-card-button"
          onClick={OpenFormToSaveCardDetails}
        >
          Save card details
          <Box sx={{ height: "30px", width: "30px" }}>
            <Image
              src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/atm-card.png"
              alt="Credit/Debit Card"
            />
          </Box>
        </Button>
        <Button
          className="add-new-upi-button"
          onClick={OpenFormToSaveUpiDetails}
        >
          Save upi address
          <Box sx={{ height: "30px", width: "30px" }}>
            <Image
              src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/upi.png"
              alt="UPI"
            />
          </Box>
        </Button>
      </Box>
      <Divider />
      {isCardDetailsFormOpen && (
        <Box className="card-details-form">
          <CardPayment activeUserId={activeUserId} />
        </Box>
      )}
      {isUpiDetailsFormOpen && (
        <Card className="upi-details-form" sx={{ width:"50%", margin:"10px", padding:"20px"}}>
          <TextField
            id="outlined-basic"
            label="Enter UPI ID here"
            variant="outlined"
            // value={upiId}
            // onChange={handleUpiIdChange}
          />
        </Card>
      )}
    </Container>
  );
};

export default UserPaymentsInfo;
