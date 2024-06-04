import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Image from "../../../components/Image/Image";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import CardPayment from "../../../components/payments_type/CardPayment";
import { ENTER_KEY } from "../../../helpers/FabShop_constants";
import { PostUpiPayments, getUpiPayments } from "../../../api/api"; 

interface Props {
  activeUserId: string;
}

const UserPaymentsInfo = ({ activeUserId }: Props) => {
  const [isCardDetailsFormOpen, setIsCardDetailsFormOpen] = useState(false);
  const [isUpiDetailsFormOpen, setIsUpiDetailsFormOpen] = useState(false);
  const [upiId, setUpiId] = useState<string | undefined>();
  const [UpiPaymentDetailsCard, setUpiPaymentDetailsCard] = useState<string[]>(
    []
  );
  const [cardPaymentDetailsCard, setCardPaymentDetailsCard] = useState<string[]>([]);

  const handleNewUpiPaymentDetails = async (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === ENTER_KEY && upiId !== undefined) {
      setIsUpiDetailsFormOpen(false);
      await PostUpiPayments(activeUserId, upiId);
      const response = await getUpiPayments(activeUserId);
      setUpiPaymentDetailsCard(response);
    }
  };

  // const handleNewCardPaymentDetails = (
  //   event: React.KeyboardEvent<HTMLElement>
  // ) => {
  //   if (event.key === ENTER_KEY && upiId !== undefined) {
  //     setIsCardDetailsFormOpen(false);
  //     setCardPaymentDetailsCard((prev) => [...prev, upiId]);
  //   }
  // };

  return (
    <Container className="profile-saved-payments main">
      <Box sx={{ display: "flex", columnGap: "20px" }}>
        <Button
          className="add-new-card-button"
          onClick={() => setIsCardDetailsFormOpen(true)}
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
          onClick={() => setIsUpiDetailsFormOpen(true)}
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

      {UpiPaymentDetailsCard.map((upiId) => (
        <Card
          className="upi-payment-card"
          sx={{ width: { xs: "90%", sm: "60%" } }}
        >
          {upiId}
        </Card>
      ))}

      {isCardDetailsFormOpen && (
        <Box className="card-details-form">
          <CardPayment activeUserId={activeUserId} />
        </Box>
      )}

      {isUpiDetailsFormOpen && (
        <Card
          className="upi-details-form"
          sx={{ width: { xs: "90%", sm: "50%" } }}
        >
          <TextField
            id="outlined-basic"
            label="Enter UPI ID here"
            variant="outlined"
            value={upiId}
            onChange={(event) => setUpiId(event.target.value)}
            onKeyDown={handleNewUpiPaymentDetails}
            sx={{ width: "100%", marginTop: "1rem" }}
          />
          <CloseIcon
            className="close-paymnets-details-form"
            onClick={() => setIsUpiDetailsFormOpen(false)}
          />
        </Card>
      )}
    </Container>
  );
};

export default UserPaymentsInfo;
