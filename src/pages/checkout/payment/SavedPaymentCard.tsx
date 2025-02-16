import { useState, useEffect } from "react";
import { Box, Card, Typography, Radio, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  getPaymentDetails,
  PaymentInterface,
  savedCardInterface,
  savedUpiPaymentsInterface,
} from "../../../api/api";
import Image from "../../../components/Image/Image";
import "./SavedPaymentCard.css";

interface Props {
  activeUserId: string;
}

const SavedPaymentCard = ({ activeUserId }: Props) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentInterface>({});
  const [selectedPaymentId, setSelectedPaymentId] = useState("");

  useEffect(() => {
    (async function () {
      const response = await getPaymentDetails();
      setPaymentDetails(response);
    })();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

  async function handleProceedButton() {
    navigate("/checkout/confirmation");
  }

  return (
    <>
      <Box className="saved-payment-container-during-checkout">
        {Object.keys(paymentDetails).map((key) => (
          <Box key={uuidv4()}>
            {/* type narrowing */}
            {"upiIdEntryName" in paymentDetails[key] && (
              <Box sx={{ display: "flex" }}>
                <Radio
                  checked={selectedPaymentId === key}
                  onChange={() => setSelectedPaymentId(key)}
                  sx={{
                    height: "fit-content",
                    alignSelf: "center",
                    marginRight: "1rem",
                  }}
                  value={key}
                  name="radio-buttons"
                  inputProps={{ "aria-label": key }}
                />
                <Card className="saved-upi-payment-details">
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        height: "20px",
                        width: "20px",
                        marginRight: "1rem",
                        alignSelf: "center",
                      }}
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
                </Card>
              </Box>
            )}
            {paymentDetails[key].hasOwnProperty("cardEntryName") && (
              <Box sx={{ display: "flex" }}>
                <Radio
                  checked={selectedPaymentId === key}
                  onChange={() => setSelectedPaymentId(key)}
                  sx={{
                    height: "fit-content",
                    alignSelf: "center",
                    marginRight: "1rem",
                  }}
                  value={key}
                  name="radio-buttons"
                  inputProps={{ "aria-label": key }}
                />
                <Card className="saved-card-payment-details">
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        height: "20px",
                        width: "20px",
                        marginRight: "1rem",
                        alignSelf: "center",
                      }}
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
                          {
                            (paymentDetails[key] as savedCardInterface)
                              .ownerName
                          }
                        </Box>
                      </Typography>
                      <Typography id="cardNumber">
                        card number:&nbsp;
                        <Box component="span" sx={{ fontWeight: "bold" }}>
                          {
                            (paymentDetails[key] as savedCardInterface)
                              .cardNumber
                          }
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
                </Card>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        className="proceed_button"
        onClick={handleProceedButton}
        disabled={selectedPaymentId ? false : true}
      >
        Proceed
      </Button>
    </>
  );
};

export default SavedPaymentCard;
