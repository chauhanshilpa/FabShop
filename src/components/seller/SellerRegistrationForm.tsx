import "./SellerComponents.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { MuiTelInput } from "mui-tel-input";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../../helpers/Google/GoogleLoginButton";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { Button } from "@mui/material";

const SellerRegistrationForm = () => {
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const [sellerName, setSellerName] = useState("");
  const [sellerMail, setSellerMail] = useState("");
  const [sellerContact, setSellerContact] = useState("");
  const [emailError, setEmailError] = useState(false);

  const showUserInformation = async (userInfo: any) => {
    const credentials = jwtDecode<{
      name: string;
      email: string;
      sub: string;
    }>(userInfo.credential);
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

  return (
    <Card className="seller-registration-form">
      <Typography variant="h6" sx={{ textAlign: "center", marginTop: "1rem" }}>
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
      >
        Register
      </Button>
      <Box className="login">
        <Box component="span">
          Already a user?
          <Box
            component="span"
            sx={{
              color: "blue",
              textDecoration: "underline",
            }}
          >
            Login
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default SellerRegistrationForm;
