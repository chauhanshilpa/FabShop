import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Image from "../../../components/Image/Image";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  PaymentInterface,
  savedCardInterface,
  addUpiDetails,
  addCardDetails,
  getPaymentDetails,
  deletePaymentDetail,
} from "../../../api/api";
import { v4 as uuidv4 } from "uuid";
interface Props {
  activeUserId: string;
}

const UserPaymentsInfo = ({ activeUserId }: Props) => {
  const [isCardDetailsFormOpen, setIsCardDetailsFormOpen] = useState(false);
  const [isUpiDetailsFormOpen, setIsUpiDetailsFormOpen] = useState(false);
  const [upiIdEntryName, setUpiIdEntryName] = useState("");
  const [upiId, setUpiId] = useState<string | undefined>();
  const [cardEntryName, setCardEntryName] = useState("");
  const [cardNumber, setCardNumber] = useState<string | undefined>();
  const [ownerName, setOwnerName] = useState<string | undefined>();
  const [cardValidity, setCardValidity] = useState<string | undefined>();
  const [cvv, setCvv] = useState<string | undefined>();
  const [paymentDetails, setPaymentDetails] = useState<PaymentInterface>({});

  useEffect(()=>{
   (async function(){
    const response = await getPaymentDetails();
    setPaymentDetails(response);
  })()
  },[]);

  const saveCardDetails = async () => {
    await addCardDetails(
      activeUserId,
      cardEntryName,
      cardNumber,
      ownerName,
      cardValidity,
      cvv
    );
    const response = await getPaymentDetails();
    setPaymentDetails(response);
    setCardEntryName("");
    setCardNumber("");
    setOwnerName("");
    setCardValidity("");
    setCvv("");
    setIsCardDetailsFormOpen(false);
  };

  const saveUpiPaymentDetails = async () => {
    await addUpiDetails(activeUserId, upiIdEntryName, upiId);
    const response = await getPaymentDetails();
    setPaymentDetails(response);
    setUpiIdEntryName("");
    setUpiId("");
    setIsUpiDetailsFormOpen(false);
  };

   const handleDeletePaymentDetail = async () => {
     await deletePaymentDetail();
     const response = await getPaymentDetails();
     setPaymentDetails(response);
   };

  return (
    <Container className="profile-saved-payments main">
      <Box sx={{ display: "flex", columnGap: "20px" }}>
        <Button
          className="add-new-card-button"
          onClick={() => {
            setIsCardDetailsFormOpen(true);
            setIsUpiDetailsFormOpen(false);
          }}
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
          onClick={() => {
            setIsUpiDetailsFormOpen(true);
            setIsCardDetailsFormOpen(false);
          }}
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

      {/* form to save UPI details */}
      {isCardDetailsFormOpen && (
        <Card
          className="card-details-form"
          sx={{ width: { xs: "80%", sm: "80%" } }}
        >
          <CloseIcon
            className="close-card-details-form"
            onClick={() => setIsCardDetailsFormOpen(false)}
          />
          <Container>
            <Typography variant="h6">Enter your card details here</Typography>
            <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
              <TextField
                id="outlined-basic"
                label="Name of the entry"
                variant="outlined"
                value={cardEntryName}
                onChange={(event) => setCardEntryName(event.target.value)}
                sx={{ width: "50%" }}
              />
            </Box>
            <TextField
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              className="text-field"
              onChange={(event) => setCardNumber(event.target.value)}
              value={cardNumber}
            />
            <TextField
              id="outlined-basic"
              label="Name on card"
              variant="outlined"
              className="text-field"
              onChange={(event) => setOwnerName(event.target.value)}
              value={ownerName}
            />
            <Box>
              <TextField
                id="outlined-basic"
                label="Valid Thru(MM/YY)"
                variant="outlined"
                className="text-field"
                onChange={(event) => setCardValidity(event.target.value)}
                value={cardValidity}
              />
              <TextField
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                className="text-field"
                onChange={(event) => setCvv(event.target.value)}
                value={cvv}
              />
            </Box>
            <Button
              className="save-button"
              variant="contained"
              onClick={saveCardDetails}
            >
              SAVE CARD
            </Button>
          </Container>
        </Card>
      )}

      {/* form to save UPI details */}
      {isUpiDetailsFormOpen && (
        <Card
          className="upi-details-form"
          sx={{ width: { xs: "90%", sm: "50%" } }}
        >
          <CloseIcon
            className="close-paymnets-details-form"
            onClick={() => setIsUpiDetailsFormOpen(false)}
          />
          <Typography variant="h6">Enter your UPI details here</Typography>
          <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
            <TextField
              id="outlined-basic"
              label="Name of the entry"
              variant="outlined"
              value={upiIdEntryName}
              onChange={(event) => setUpiIdEntryName(event.target.value)}
              sx={{ width: "50%" }}
            />
          </Box>
          <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
            <TextField
              id="outlined-basic"
              label="Enter UPI ID here"
              variant="outlined"
              value={upiId}
              onChange={(event) => setUpiId(event.target.value)}
              sx={{ width: "100%" }}
            />
          </Box>
          <Button
            className="save-button"
            variant="contained"
            onClick={saveUpiPaymentDetails}
          >
            Save Details
          </Button>
        </Card>
      )}

      {/* payment details: todo */}
      {Object.values(paymentDetails).map((detailsKey) => (
        <Box key={uuidv4()}>
          {/* type narrowing */}
          {"upiIdEntryName" in detailsKey && (
            <Card className="upi-payment-details">
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ height: "20px", width: "20px", marginRight: "10px" }}
                >
                  <Image
                    src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/upi.png"
                    alt="UPI"
                  />
                </Box>
                <Box>
                  <Typography variant="h6">{detailsKey.upiId}</Typography>
                  <Typography>{detailsKey.upiIdEntryName}</Typography>
                </Box>
              </Box>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDeletePaymentDetail()}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Card>
          )}
          {detailsKey.hasOwnProperty("cardEntryName") && (
            <Card className="card-payment-details">
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{ height: "20px", width: "20px", marginRight: "10px" }}
                >
                  <Image
                    src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/atm-card.png"
                    alt="Credit/Debit Card"
                  />
                </Box>
                {/* type assertions */}
                <Box>
                  <Typography variant="h6">
                    {(detailsKey as savedCardInterface).cardEntryName}
                  </Typography>
                  <Typography>
                    {(detailsKey as savedCardInterface).cardNumber}
                  </Typography>
                  <Typography>
                    {(detailsKey as savedCardInterface).cardValidity}
                  </Typography>
                  <Typography>
                    {(detailsKey as savedCardInterface).cvv}
                  </Typography>
                  <Typography>
                    {(detailsKey as savedCardInterface).ownerName}
                  </Typography>
                </Box>
              </Box>
              <Tooltip title="Delete">
                <IconButton onClick={() => handleDeletePaymentDetail()}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Card>
          )}
        </Box>
      ))}
    </Container>
  );
};

export default UserPaymentsInfo;
