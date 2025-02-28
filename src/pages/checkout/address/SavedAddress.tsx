import { useState, useEffect } from "react";
import { Box, Card, Typography, Radio, Button } from "@mui/material";
import { Address } from "../../../api/classModels";
import { v4 as uuidv4 } from "uuid";
import {
  getCustomerSavedAddresses,
  customerAddressDuringOrder,
} from "../../../api/api";
import styles from "./savedAddress.module.css";

interface Props {
  activeUserId: string;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * 
 * @returns saved addresses list and card.
 */
const SavedAddress = ({ activeUserId, activeStep, setActiveStep }: Props) => {
  const [userAddresses, setUserAddresses] = useState<Address[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  //fetches customer address on every component render.
  useEffect(() => {
    (async function () {
      const response = await getCustomerSavedAddresses(activeUserId);
      if (response) {
        setUserAddresses([...response]);
      }
    })();
    // eslint-disable-next-line
  }, []);

  //sets selected addressId
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAddressId(event.target.value);
  };

  //sends customer address to DB during order and increase step by 1
  async function handleProceedButton() {
    let customerSavedAddresses = await getCustomerSavedAddresses(activeUserId);
    let selectedAddress = customerSavedAddresses.filter(
      (address) => address.id === selectedAddressId
    )[0];
    await customerAddressDuringOrder(
      activeUserId,
      selectedAddress.id,
      selectedAddress.name,
      selectedAddress.phoneNumber,
      selectedAddress.pincode,
      selectedAddress.locality,
      selectedAddress.streetAddress,
      selectedAddress.city,
      selectedAddress.state,
      selectedAddress.landmark,
      selectedAddress.secondPhoneNumber
    );
    const prevStep = activeStep;
    setActiveStep(prevStep + 1);
  }

  //go once step back
  function goToPreviousMove() {
    const prevStep = activeStep;
    setActiveStep(prevStep - 1);
  }

  return (
    <Box className={styles.choose_address_container}>
      {userAddresses.length > 0 && (
        <>
          <Typography className={styles.heading}>Choose a address</Typography>
          {userAddresses.map((address) => (
            <Box sx={{ display: "flex" }}>
              <Radio
                checked={selectedAddressId === address.id}
                onChange={handleChange}
                sx={{
                  height: "fit-content",
                  alignSelf: "center",
                  marginRight: "1rem",
                }}
                value={address.id}
                name="radio-buttons"
                inputProps={{ "aria-label": address.id }}
              />
              <Card
                sx={{ padding: "1rem", marginBottom: "1rem" }}
                key={uuidv4()}
              >
                <Typography sx={{ fontWeight: "550" }}>
                  {address.name}
                </Typography>
                <Typography>{address.streetAddress}</Typography>
                <Typography>{address.landmark}</Typography>
                <Typography>
                  {address.locality}, {address.pincode}
                </Typography>
                <Typography>
                  {address.city}, {address.state}
                </Typography>
                <Typography>
                  {address.phoneNumber}, {address.secondPhoneNumber}
                </Typography>
              </Card>
            </Box>
          ))}
          <Button
            variant="contained"
            className={styles.proceed_button}
            onClick={handleProceedButton}
            disabled={selectedAddressId ? false : true}
          >
            Proceed
          </Button>
          <Button
            variant="outlined"
            color="error"
            className={styles.cancel}
            onClick={goToPreviousMove}
            disabled={selectedAddressId ? false : true}
          >
            CANCEL
          </Button>
        </>
      )}
    </Box>
  );
};

export default SavedAddress;
