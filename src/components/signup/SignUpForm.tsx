import { useState, useRef } from "react";
import "./SignUpForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MuiTelInput } from "mui-tel-input";
import {
  getActiveUserId,
  addNewUser,
  checkUserAvailability,
} from "../../api/api";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ModalComponent from "../modal/ModalComponent";
import GoogleLoginButton from "../../helpers/Google/GoogleLoginButton";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { titleCase } from "../../helpers/titleCaseFunction";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [modalText, setModalText] = useState({ title: "", description: "" });

  const togglePopup = useRef<HTMLButtonElement>();

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(titleCase(event.target.value));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
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

  const handleSignupSubmit = async () => {
    if (
      email.length <= 0 ||
      password.length <= 0 ||
      username.length <= 0 ||
      contactNumber.length <= 0
    ) {
      setModalText({
        title: "Missing Information",
        description:
          "Please complete all required fields before submitting the form.",
      });
      togglePopup.current?.click();
      return;
    }
    const isUserExists = await checkUserAvailability(email);
    if (isUserExists) {
      setModalText({
        title: "Duplicate Email",
        description:
          "User with this email already exists. Try to login instead.",
      });
      togglePopup.current?.click();
      return;
    }
    if (confirmPassword === password) {
      if (emailError === false) {
        await addNewUser(username, email, password, contactNumber);
        const response = await getActiveUserId(email, password);
        setActiveUserId(response);
        setIsUserLoggedIn(true);
        closeSignUpForm();
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setContactNumber("");
      } else {
        setModalText({
          title: "Invalid Email Address",
          description:
            "Please enter a valid email in the format 'user@domain.com'.",
        });
        togglePopup.current?.click();
      }
    } else {
      setModalText({
        title: "Password Mismatch",
        description: "Please re-enter the same password in both fields.",
      });
      togglePopup.current?.click();
    }
  };

  const showUserInformation = async (userInfo: any) => {
    const credentials = jwtDecode<{ name: string; email: string; sub: string }>(
      userInfo.credential
    );
    const isUserExists = await checkUserAvailability(email);
    if (isUserExists === false) {
      await addNewUser(
        credentials.name,
        credentials.email,
        credentials.sub,
        ""
      );
    }
    const response = await getActiveUserId(credentials.email, credentials.sub);
    setActiveUserId(response);
    setIsUserLoggedIn(true);
    closeSignUpForm();
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Box className="signup-form-container">
        <Container className="signup-form">
          <ClearIcon className="cancel" onClick={closeSignUpForm} />
          <Typography sx={{ fontSize: "xx-large", fontWeight: "600" }}>
            Signup
          </Typography>
          <Box className="input-field">
            <TextField
              required
              id="standard-basic-username"
              label="Username"
              variant="standard"
              value={username}
              onChange={handleUsernameChange}
            />
          </Box>
          <Box className="input-field">
            <TextField
              required
              id="standard-basic-email"
              label="E-mail"
              variant="standard"
              name="email"
              type="email"
              error={emailError}
              helperText={emailError && "Please enter a valid email"}
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box className="input-field">
            <FormControl sx={{ width: "100%" }} variant="standard" required>
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                value={password}
                onChange={handlePasswordChange}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box className="input-field">
            <FormControl sx={{ width: "100%" }} variant="standard" required>
              <InputLabel htmlFor="standard-adornment-password">
                Confirm password
              </InputLabel>
              <Input
                id="standard-adornment-confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box className="input-field">
            <MuiTelInput
              defaultCountry={"IN"}
              value={contactNumber}
              onChange={handleContactNumberChange}
            />
          </Box>
          <ModalComponent
            togglePopup={togglePopup}
            title={modalText.title}
            description={modalText.description}
          />
          <Button className="submit-button" onClick={handleSignupSubmit}>
            SIGNUP
          </Button>
          <GoogleLoginButton onSuccessFunction={showUserInformation} />
          <Typography
            className="login"
            sx={{ color: "blue", textDecoration: "underline" }}
            onClick={handleLoginClick}
          >
            Login
          </Typography>
        </Container>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default SignUpForm;
