import { useState } from "react";
import "./AddressForm.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { MuiTelInput } from "mui-tel-input";
import { STATES_LIST } from "../../FabShop_constants";
import { customerAddressDetails } from "../../api/api";

interface Props {
  activeUserId: string;
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const states = {
  options: STATES_LIST,
};

const AddressForm = ({ activeUserId, activeStep, setActiveStep }: Props) => {
  const [customerName, setCustomerName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");
  const [locality, setLocality] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string | null>(null);
  const [inputState, setInputState] = useState<string>("");
  const [landmark, setLandmark] = useState<string>("");
  const [secondPhoneNumber, setSecondPhoneNumber] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
  };

  const handlePhoneChange: (
    value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (eventOrValue) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setPhoneNumber(value);
  };

  const handlePincodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 6) {
      setPincode(event.target.value);
    }
  };

  const handleLocalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocality(event.target.value);
  };

  const handleCustomerStreetAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStreetAddress(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: any, newValue: string | null) => {
    setState(newValue);
  };

  const handleInputStateChange = (event: any, newValue: string) => {
    setInputState(newValue);
  };

  const handleLandmark = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLandmark(event.target.value);
  };

  const handleSecondPhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length <= 10) {
      setSecondPhoneNumber(event.target.value);
    }
  };

  async function handleNextMove() {
    const prevStep = activeStep;
    setActiveStep(prevStep + 1);
    await customerAddressDetails(
      activeUserId,
      customerName,
      phoneNumber,
      pincode,
      locality,
      streetAddress,
      city,
      state,
      landmark,
      secondPhoneNumber
    );
  }

  function goToPreviousMove() {
    const prevStep = activeStep;
    setActiveStep(prevStep - 1);
  }

  return (
    <Container>
      <Box>
        <TextField
          required
          id="standard-search"
          label="Name"
          type="text"
          variant="standard"
          value={customerName}
          onChange={handleNameChange}
        />
        <MuiTelInput
          defaultCountry={"IN"}
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <TextField
          required
          id="standard-search pincode"
          label="Pincode"
          type="number"
          variant="standard"
          value={pincode}
          onChange={handlePincodeChange}
        />
        <TextField
          required
          id="standard-basic"
          label="Locality"
          type="text"
          variant="standard"
          value={locality}
          onChange={handleLocalityChange}
        />
      </Box>
      <Box>
        <TextField
          required
          multiline
          rows={4}
          type="text"
          className="multiline-address"
          id="standard-multiline-static"
          label="Address (Area and Street)"
          variant="standard"
          value={streetAddress}
          onChange={handleCustomerStreetAddress}
        />
      </Box>
      <Box>
        <TextField
          required
          id="standard-basic"
          label="City/District/Town"
          variant="standard"
          value={city}
          onChange={handleCityChange}
        />
        <Autocomplete
          {...states}
          id="select-on-focus"
          selectOnFocus
          className="autocomplete-states-field"
          value={state}
          onChange={handleStateChange}
          inputValue={inputState}
          onInputChange={handleInputStateChange}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label="Select State"
              variant="standard"
            />
          )}
        />
        <TextField
          id="standard-basic"
          label="Landmark (Optional)"
          variant="standard"
          value={landmark}
          onChange={handleLandmark}
        />
        <TextField
          id="outlined-number"
          label="Alternate Phone (Optional)"
          type="number"
          variant="standard"
          value={secondPhoneNumber}
          onChange={handleSecondPhoneNumber}
        />
      </Box>
      <Container>
        <Box className="checkout-address-save-and-cancel-buttons">
          <Button
            variant="contained"
            color="success"
            className="save"
            onClick={handleNextMove}
          >
            SAVE AND DELIVER HERE
          </Button>
          <Button
            variant="outlined"
            color="error"
            className="cancel"
            onClick={goToPreviousMove}
          >
            CANCEL
          </Button>
        </Box>
      </Container>
    </Container>
  );
};

export default AddressForm;
