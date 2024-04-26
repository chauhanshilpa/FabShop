import { useState } from "react";
import "./SignUpForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MuiTelInput } from "mui-tel-input";
import { getActiveUserId, addNewUser } from "../../api/api";

interface Props {
  setIsSignUpFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoginFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveUserId: React.Dispatch<React.SetStateAction<string>>;
}

const SignUpForm = ({
  setIsSignUpFormOpen,
  setIsUserLoggedIn,
  setIsLoginFormOpen,
  setActiveUserId,
}: Props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const closeSignUpForm = () => {
    setIsSignUpFormOpen(false);
  };

  const handleLoginClick = () => {
    closeSignUpForm();
    setIsLoginFormOpen(true);
  };

  const handleContactNumberChange: (
    value: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void = (eventOrValue) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setContactNumber(value);
  };

  const handleUserSignup = async () => {
    await addNewUser(username, email, password, contactNumber);
    const response = await getActiveUserId(email, password);
    setActiveUserId(response);
    setIsUserLoggedIn(true);
    closeSignUpForm();
  };

  return (
    <Box className="signup-form-container">
      <Container className="signup-form">
        <ClearIcon className="cancel" onClick={closeSignUpForm} />
        <Typography sx={{ fontSize: "xx-large", fontWeight: "600" }}>
          Signup
        </Typography>
        <Box className="input-field">
          <TextField
            required
            id="standard-basic"
            label="Username"
            variant="standard"
            value={username}
            onChange={handleUsernameChange}
          />
        </Box>
        <Box className="input-field">
          <TextField
            required
            id="standard-basic"
            label="E-mail"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
          />
        </Box>
        <Box className="input-field">
          <TextField
            className="text"
            required
            id="standard-basic"
            label="create password"
            variant="standard"
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
        <Box className="input-field">
          <TextField
            className="text"
            required
            id="standard-basic"
            label="Confirm password"
            variant="standard"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </Box>
        <Box className="input-field">
          <MuiTelInput
            defaultCountry={"IN"}
            value={contactNumber}
            onChange={handleContactNumberChange}
          />
        </Box>
        <Button className="submit-button" onClick={handleUserSignup}>
          SIGNUP
        </Button>
        <Typography variant="caption" sx={{ color: "#343935" }}>
          Or Sign up Using Google
        </Typography>
        <Typography
          className="login"
          sx={{ color: "blue", textDecoration: "underline" }}
          onClick={handleLoginClick}
        >
          Login
        </Typography>
      </Container>
    </Box>
  );
};

export default SignUpForm;
