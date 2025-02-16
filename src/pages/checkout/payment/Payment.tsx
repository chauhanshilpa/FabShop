import { useState } from "react";
import "./Payment.css";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "../../../components/Image/Image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardPayment from "../../../components/payments_type/CardPayment";
import UPIPayments from "../../../components/payments_type/UPIPayments";
import CashOnDeliveryPayment from "../../../components/payments_type/CashOnDeliveryPayment";
import ScrollToTop from "../../../components/utils/ScrollToTop";
import SavedPaymentCard from "./SavedPaymentCard";
interface Props {
  activeUserId: string;
}

export default function Payment({ activeUserId }: Props) {
  const [openCashOnDeliverPayment, setOpenCashOnDeliverPayment] =
    useState(false);
  const [openUPIPayment, setOpenUPIPayment] = useState(false);
  const [openCardsPayment, setOpenCardsPayment] = useState(false);

  const handleCashOnDeliveryPayment = () => {
    setOpenCashOnDeliverPayment(true);
    setOpenUPIPayment(false);
    setOpenCardsPayment(false);
  };

  const handleUPIPayment = () => {
    setOpenUPIPayment(true);
    setOpenCashOnDeliverPayment(false);
    setOpenCardsPayment(false);
  };

  const handleCardPayment = () => {
    setOpenCardsPayment(true);
    setOpenCashOnDeliverPayment(false);
    setOpenUPIPayment(false);
  };

  return (
    <>
      <ScrollToTop />
      <Container className="payment-container">
        <Grid container>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              className="payment-list"
            >
              <ListItemButton onClick={handleCashOnDeliveryPayment}>
                <Box>
                  <Image
                    src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/cash-on-delivery.png"
                    alt="Cash On Delivery(Cash/UPI)"
                  />
                </Box>
                <ListItemText
                  primary="Cash On Delivery(Cash/UPI)"
                  className="list-item-text"
                />
              </ListItemButton>
              <ListItemButton onClick={handleUPIPayment}>
                <Box>
                  <Image
                    src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/upi.png"
                    alt="UPI"
                  />
                </Box>
                <ListItemText primary="UPI" className="list-item-text" />
              </ListItemButton>
              <ListItemButton onClick={handleCardPayment}>
                <Box>
                  <Image
                    src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/atm-card.png"
                    alt="Credit/Debit Card"
                  />
                </Box>
                <ListItemText
                  primary="Credit/Debit Card"
                  className="list-item-text"
                />
              </ListItemButton>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            lg={7}
            xl={7}
            className="payment-type"
          >
            {openCashOnDeliverPayment && (
              <CashOnDeliveryPayment activeUserId={activeUserId} />
            )}
            {openCardsPayment && <CardPayment activeUserId={activeUserId} />}
            {openUPIPayment && <UPIPayments activeUserId={activeUserId} />}
          </Grid>
        </Grid>
        <SavedPaymentCard activeUserId={activeUserId} />
      </Container>
    </>
  );
}
