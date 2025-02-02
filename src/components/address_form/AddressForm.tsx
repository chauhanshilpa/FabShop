import { useState, useEffect } from "react";
import "./AddressForm.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { MuiTelInput, matchIsValidTel } from "mui-tel-input";
import { STATES_LIST } from "../../helpers/FabShop_constants";
import { Address } from "../../api/classModels";
import {
  customerAddressDuringOrder,
  saveCustomerAddress,
  getCustomerSavedAddresses,
} from "../../api/api";
import { v4 as uuidv4 } from "uuid";
import {
  prevent_e_onInputTypeNumber,
  titleCase,
} from "../../helpers/commonFunctions";
interface Props {
  activeUserId: string;
  activeStep?: number;
  setActiveStep?: React.Dispatch<React.SetStateAction<number>>;
  setIsAddressFormOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAddresses?: React.Dispatch<React.SetStateAction<Address[]>>;
  addressFormType?: string;
  toEditAddressId?: string;
}

const states = {
  options: STATES_LIST,
};

const AddressForm = ({
  activeUserId,
  activeStep,
  setActiveStep,
  setIsAddressFormOpen,
  setUserAddresses,
  addressFormType,
  toEditAddressId,
}: Props) => {
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
  const [areAllFieldValid, setAreAllFieldvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (addressFormType === "edit") {
      (async function () {
        const customerSavedAddresses = await getCustomerSavedAddresses(
          activeUserId
        );
        let selectedAddress = customerSavedAddresses.filter(
          (address) => address.id === toEditAddressId
        )[0];
        setCustomerName(selectedAddress.name);
        setPhoneNumber(selectedAddress.phoneNumber);
        setPincode(selectedAddress.pincode);
        setLocality(selectedAddress.locality);
        setStreetAddress(selectedAddress.streetAddress);
        setCity(selectedAddress.city);
        setState(selectedAddress.state);
        setInputState(selectedAddress.state as string);
        setLandmark(selectedAddress.landmark);
        setSecondPhoneNumber(selectedAddress.secondPhoneNumber);
      })();
    }
    // eslint-disable-next-line
  }, [addressFormType]);

  useEffect(() => {
    checkValidity();
    // eslint-disable-next-line
  }, [
    customerName,
    phoneNumber,
    pincode,
    locality,
    streetAddress,
    city,
    state,
    inputState,
    landmark,
    secondPhoneNumber,
  ]);

  function checkValidity() {
    const isValidPhoneNumber = matchIsValidTel(phoneNumber);
    const isValidPinCode = pincode.length === 6;
    const isValidCustomerName = customerName.length > 2;
    const isValidLocality = locality.length > 2;
    const isValidStreetAddress = streetAddress.length > 2;
    const isValidCityName = city.length > 2;
    const isValidStateName = state !== null && state.length > 2;
    if (
      isValidPhoneNumber &&
      isValidPinCode &&
      isValidCustomerName &&
      isValidLocality &&
      isValidStreetAddress &&
      isValidCityName &&
      isValidStateName
    ) {
      setAreAllFieldvalid(true);
      return true;
    } else {
      setAreAllFieldvalid(false);
      return false;
    }
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let customerName = titleCase(value);
    setCustomerName(customerName);
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
    let value = event.target.value;
    if (value.includes("e") || value.length > 6) return;

    setPincode(value);
  };

  const handleLocalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let locality = titleCase(value);
    setLocality(locality);
  };

  const handleCustomerStreetAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    let streetName = titleCase(value);
    setStreetAddress(streetName);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let cityName = titleCase(value);
    setCity(cityName);
  };

  const handleStateChange = (event: any, newValue: string | null) => {
    setState(newValue);
  };

  const handleInputStateChange = (event: any, newValue: string) => {
    setInputState(newValue);
  };

  const handleLandmark = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let landmark = titleCase(value);
    setLandmark(landmark);
  };

  const handleSecondPhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    if (value.length <= 10) {
      setSecondPhoneNumber(value);
    }
  };

  async function handleNextMove() {
    if (activeStep !== undefined && setActiveStep !== undefined) {
      const prevStep = activeStep;
      setActiveStep(prevStep + 1);
    }
    if (areAllFieldValid) {
      const addressId = uuidv4();
      await customerAddressDuringOrder(
        activeUserId,
        addressId,
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
      await saveCustomerAddress(
        activeUserId,
        addressId,
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
    } else {
      alert("fields are not valid");
    }
  }

  function goToPreviousMove() {
    if (activeStep !== undefined && setActiveStep !== undefined) {
      const prevStep = activeStep;
      setActiveStep(prevStep - 1);
    }
  }

  async function handleAddressSave() {
    let addressId: string =
      addressFormType === "edit" && toEditAddressId
        ? toEditAddressId
        : uuidv4();
    if (areAllFieldValid) {
      await saveCustomerAddress(
        activeUserId,
        addressId,
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
    } else {
      alert("not valid data");
    }

    if (setIsAddressFormOpen !== undefined && setUserAddresses !== undefined) {
      const response = await getCustomerSavedAddresses(activeUserId);
      setIsAddressFormOpen(false);
      setUserAddresses(response);
    }
  }

  return (
    <Container className="address-form">
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
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            prevent_e_onInputTypeNumber(event)
          }
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
              className="state-textField"
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
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            prevent_e_onInputTypeNumber(event)
          }
          variant="standard"
          value={secondPhoneNumber}
          onChange={handleSecondPhoneNumber}
        />
      </Box>
      {activeStep && (
        <Container>
          <Box className="checkout-address-save-and-cancel-buttons">
            <Button
              variant="contained"
              disabled={areAllFieldValid ? false : true}
              className="save-and-deliver"
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
      )}
      {setIsAddressFormOpen !== undefined && setUserAddresses !== undefined && (
        <Button
          variant="contained"
          className="save-address"
          onClick={handleAddressSave}
          disabled={areAllFieldValid ? false : true}
        >
          {addressFormType === "edit" ? "Update Address" : "Save Address"}
        </Button>
      )}
    </Container>
  );
};

export default AddressForm;
