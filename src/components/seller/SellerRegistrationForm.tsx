import { useState, useRef } from "react";
import "./SellerComponents.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { MuiTelInput } from "mui-tel-input";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../../helpers/Google/GoogleLoginButton";
import { jwtDecode } from "jwt-decode";
import Button from "@mui/material/Button";
import {
  addNewSeller,
  checkSellerAvailability,
  getActiveSellerId,
} from "../../api/api";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import ModalComponent from "../modal/ModalComponent";

interface Props {
  setActiveSellerId: React.Dispatch<React.SetStateAction<string>>;
  setIsLoginFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignupFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellerRegistrationForm = ({
  setActiveSellerId,
  setIsLoginFormOpen,
  setIsSignupFormOpen,
}: Props) => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const [sellerName, setSellerName] = useState("");
  const [sellerMail, setSellerMail] = useState("");
  const [sellerContact, setSellerContact] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [modalText, setModalText] = useState({ title: "", description: "" });

  const togglePopup = useRef<HTMLButtonElement>();

  const navigate = useNavigate();

  const showUserInformation = async (userInfo: any) => {
    const credentials = jwtDecode<{
      name: string;
      email: string;
      sub: string;
    }>(userInfo.credential);
    const isSellerExists = await checkSellerAvailability(sellerMail);
    if (isSellerExists === false) {
      await addNewSeller(
        credentials.name,
        credentials.email,
        credentials.sub,
        ""
      );
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSellerMail(event.target.value);
    if (event.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleContactNumberChange: (
    value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (eventOrValue) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setSellerContact(value);
  };

  const handleSellerRegister = async () => {
    if (
      sellerMail.length <= 0 ||
      password.length <= 0 ||
      sellerName.length <= 0 ||
      sellerContact.length <= 0
    ) {
      setModalText({
        title: "Missing Information",
        description:
          "Please complete all required fields before submitting the form.",
      });
      togglePopup.current?.click();
      return;
    }
    const isSellerExists = await checkSellerAvailability(sellerMail);
    if (isSellerExists) {
      setModalText({
        title: "Duplicate Email",
        description:
          "User with this email already exists. Try to login instead.",
      });
      togglePopup.current?.click();
      return;
    }
    if (emailError === false) {
      await addNewSeller(sellerName, sellerMail, password, sellerContact);
      const sellerId = await getActiveSellerId(sellerMail, password);
      setActiveSellerId(sellerId);
      setSellerName("");
      setSellerMail("");
      setPassword("");
      setSellerContact("");
      navigate("/seller/dashboard");
    } else {
      setModalText({
        title: "Invalid Email Address",
        description:
          "Please enter a valid email in the format 'user@domain.com'.",
      });
      togglePopup.current?.click();
    }
  };

  return (
    <>
      <ModalComponent
        togglePopup={togglePopup}
        title={modalText.title}
        description={modalText.description}
      />
      <Card className="seller-registration-form">
        <Typography
          variant="h6"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Register as a seller
        </Typography>
        <Box className="input-field-content">
          <Box className="input-field-box">
            <TextField
              required
              id="standard-basic-username"
              label="your name"
              variant="standard"
              value={sellerName}
              onChange={(event) => setSellerName(event.target.value)}
            />
          </Box>
          <Box className="input-field-box">
            <TextField
              required
              id="standard-basic-email"
              label="E-mail"
              variant="standard"
              name="email"
              type="email"
              error={emailError}
              helperText={emailError && "Please enter a valid email"}
              value={sellerMail}
              onChange={handleEmailChange}
            />
          </Box>
          <Box className="input-field-box">
            <FormControl sx={{ width: "100%" }} variant="standard" required>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(event) => event.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box className="input-field-box">
            <MuiTelInput
              defaultCountry={"IN"}
              value={sellerContact}
              onChange={handleContactNumberChange}
            />
          </Box>
        </Box>
        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
          <GoogleLoginButton onSuccessFunction={showUserInformation} />
        </GoogleOAuthProvider>
        <Button
          variant="outlined"
          className="seller-register-button"
          onClick={handleSellerRegister}
        >
          Register
        </Button>
        <Box className="login">
          <Box component="span">
            Already registered?
            <Box
              component="span"
              sx={{
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsLoginFormOpen(true);
                setIsSignupFormOpen(false);
              }}
            >
              Login
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default SellerRegistrationForm;
