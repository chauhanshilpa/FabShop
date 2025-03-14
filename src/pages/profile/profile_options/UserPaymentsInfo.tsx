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
  savedUpiPaymentsInterface,
  savedCardInterface,
  addUpiDetails,
  addCardDetails,
  getPaymentDetails,
  deletePaymentDetail,
} from "../../../api/api";
import { v4 as uuidv4 } from "uuid";
import {
  titleCase,
  validUpi,
  validCard,
  prevent_e_onInputTypeNumber,
} from "../../../helpers/commonFunctions";
interface Props {
  activeUserId: string;
}

/**
 * 
 * @returns psaved ayment information of user- Card details and UPI details.
 */
const UserPaymentsInfo = ({ activeUserId }: Props) => {
  const [isCardDetailsFormOpen, setIsCardDetailsFormOpen] = useState(false);
  const [isUpiDetailsFormOpen, setIsUpiDetailsFormOpen] = useState(false);
  const [upiIdEntryName, setUpiIdEntryName] = useState("");
  const [upiId, setUpiId] = useState<string>("");
  const [cardEntryName, setCardEntryName] = useState("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [ownerName, setOwnerName] = useState<string>("");
  const [cardValidity, setCardValidity] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [paymentDetails, setPaymentDetails] = useState<PaymentInterface>({});
  const [isCardValid, setIsCardValid] = useState(false);
  const [isUpiValid, setIsUpiValid] = useState(false);

  //It fetches saved payment details while opening page.
  useEffect(() => {
    (async function () {
      const response = await getPaymentDetails();
      setPaymentDetails(response);
    })();
  }, []);

  useEffect(() => {
    if (cardValidity.length === 7) {
      const isValid = validCard(cardNumber, ownerName, cardValidity, cvv);
      isValid ? setIsCardValid(true) : setIsCardValid(false);
    } else {
      setIsCardValid(false);
    }
  }, [cardEntryName, cardNumber, ownerName, cardValidity, cvv]);

  useEffect(() => {
    const isValid = validUpi(upiId);
    isValid ? setIsUpiValid(true) : setIsUpiValid(false);
  }, [upiIdEntryName, upiId]);

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

  const handleDeletePaymentDetail = async (id: string) => {
    await deletePaymentDetail(id);
    const response = await getPaymentDetails();
    setPaymentDetails({ ...response });
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    if (value.length > 16) {
      return;
    }
    setCardNumber(value);
  };

  const handleCvvChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = event.target.value;
    if (value.length > 3) {
      return;
    }
    setCvv(event.target.value);
  };

  const handleCardValidityChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          sx={{
            width: { xs: "85%", sm: "80%" },
          }}
        >
          <CloseIcon
            className="close-card-details-form"
            onClick={() => setIsCardDetailsFormOpen(false)}
          />
          <Container>
            <Typography variant="h6">Enter your card details here</Typography>
            <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
              <TextField
                required
                id="outlined-basic"
                label="Name of the entry"
                variant="outlined"
                value={cardEntryName}
                onChange={(event) =>
                  setCardEntryName(titleCase(event.target.value))
                }
                sx={{ width: "50%" }}
              />
            </Box>
            <TextField
              required
              type="number"
              id="outlined-basic"
              label="Card Number"
              variant="outlined"
              className="text-field"
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
              onChange={(event) => setOwnerName(event.target.value)}
              value={ownerName}
            />
            <Box>
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
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                className="text-field"
                onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
                  prevent_e_onInputTypeNumber(event)
                }
                onChange={handleCvvChange}
                value={cvv}
              />
            </Box>
            <Button
              className="profile-saved-payments-save-button"
              variant="contained"
              disabled={isCardValid ? false : true}
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
          sx={{ width: { xs: "85%", sm: "50%" } }}
        >
          <CloseIcon
            className="close-paymnets-details-form"
            onClick={() => setIsUpiDetailsFormOpen(false)}
          />
          <Typography variant="h6">Enter your UPI details here</Typography>
          <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
            <TextField
              required
              id="outlined-basic"
              label="Name of the entry"
              variant="outlined"
              value={upiIdEntryName}
              onChange={(event) =>
                setUpiIdEntryName(titleCase(event.target.value))
              }
              sx={{ width: "50%" }}
            />
          </Box>
          <Box sx={{ display: "block", width: "100%", marginTop: "1rem" }}>
            <TextField
              required
              id="outlined-basic"
              label="Enter UPI ID here"
              variant="outlined"
              value={upiId}
              onChange={(event) => setUpiId(event.target.value)}
              sx={{ width: "100%" }}
            />
          </Box>
          <Button
            className="profile-saved-payments-save-button"
            variant="contained"
            disabled={isUpiValid ? false : true}
            onClick={saveUpiPaymentDetails}
          >
            Save Details
          </Button>
        </Card>
      )}

      {!isCardDetailsFormOpen && Object.keys(paymentDetails).length <= 0 ? (
        <Box className="empty-payment-list-container">
          <Typography
            variant="h5"
            sx={{ fontWeight: "regular", fontStyle: "italic" }}
            className="empty-payment-list-text"
          >
            You haven't saved any payment info yet. Add one to make checkout
            easier!
          </Typography>
        </Box>
      ) : (
        Object.keys(paymentDetails).map((key) => (
          <Box key={uuidv4()}>
            {/* type narrowing */}
            {"upiIdEntryName" in paymentDetails[key] && (
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
                    <Typography variant="h6" id="upiIdEntryName">
                      {
                        (paymentDetails[key] as savedUpiPaymentsInterface)
                          .upiIdEntryName
                      }
                    </Typography>
                    <Typography id="upiId">
                      UPI Id:&nbsp;
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {
                          (paymentDetails[key] as savedUpiPaymentsInterface)
                            .upiId
                        }
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDeletePaymentDetail(key)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Card>
            )}
            {paymentDetails[key].hasOwnProperty("cardEntryName") && (
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
                    <Typography variant="h6" id="cardEntryName">
                      {
                        (paymentDetails[key] as savedCardInterface)
                          .cardEntryName
                      }
                    </Typography>
                    <Typography id="ownerName">
                      Name on card:&nbsp;
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {(paymentDetails[key] as savedCardInterface).ownerName}
                      </Box>
                    </Typography>
                    <Typography id="cardNumber">
                      card number:&nbsp;
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {(paymentDetails[key] as savedCardInterface).cardNumber}
                      </Box>
                    </Typography>
                    <Typography className="cardValidity">
                      validity:&nbsp;
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {
                          (paymentDetails[key] as savedCardInterface)
                            .cardValidity
                        }
                      </Box>
                    </Typography>
                    <Typography className="cvv">
                      CVV:&nbsp;
                      <Box component="span" sx={{ fontWeight: "bold" }}>
                        {(paymentDetails[key] as savedCardInterface).cvv}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
                <Tooltip title="Delete">
                  <IconButton onClick={() => handleDeletePaymentDetail(key)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Card>
            )}
          </Box>
        ))
      )}
    </Container>
  );
};

export default UserPaymentsInfo;
