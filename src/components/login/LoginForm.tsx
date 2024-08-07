import { useState, useRef } from "react";
import "./LoginForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
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
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../../helpers/Google/GoogleLoginButton";
import { jwtDecode } from "jwt-decode";
interface Props {
  setIsLoginFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSignUpFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveUserId: React.Dispatch<React.SetStateAction<string>>;
}

export default function LoginForm({
  setIsLoginFormOpen,
  setIsUserLoggedIn,
  setIsSignUpFormOpen,
  setActiveUserId,
}: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [modalText, setModalText] = useState({ title: "", description: "" });

  const togglePopup = useRef<HTMLButtonElement>(null);

  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function closeLoginForm() {
    setIsLoginFormOpen(false);
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (event.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleUserPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = () => {
    closeLoginForm();
    setIsSignUpFormOpen(true);
  };

  const handleLoginSubmit = async () => {
    if (email.length <= 0 || password.length <= 0) {
      setModalText({
        title: "Missing Information",
        description:
          "Please complete all required fields before submitting the form.",
      });
      togglePopup.current?.click();
      return;
    }
    if (emailError === false) {
      const response = await getActiveUserId(email, password);
      if (response !== "") {
        setActiveUserId(response);
        setIsUserLoggedIn(true);
        setPassword("");
        setEmail("");
        closeLoginForm();
        return;
      } else {
        setModalText({
          title: "Invalid Credentials",
          description: "No such user exists. Please enter valid credentials.",
        });
        togglePopup.current?.click();
      }
    } else {
      setModalText({
        title: "Invalid Email Address",
        description:
          "Please enter a valid email in the format 'user@domain.com'.",
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
    closeLoginForm();
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Box className="login-form-container">
        <Container className="login-form">
          <ClearIcon className="cancel" onClick={closeLoginForm} />
          <Typography sx={{ fontSize: "xx-large", fontWeight: "600" }}>
            Login
          </Typography>
          <Box className="input-field">
            <TextField
              required
              id="standard-basic"
              label="E-mail"
              name="email"
              type="email"
              error={emailError}
              helperText={emailError && "Please enter a valid email"}
              variant="standard"
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
                onChange={handleUserPasswordChange}
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
          <ModalComponent
            togglePopup={togglePopup}
            title={modalText.title}
            description={modalText.description}
          />
          <Button className="submit-button" onClick={handleLoginSubmit}>
            LOGIN
          </Button>
          <GoogleLoginButton onSuccessFunction={showUserInformation} />
          <Typography
            sx={{ color: "blue", textDecoration: "underline" }}
            className="sign-up"
            onClick={handleSignUpClick}
          >
            Sign-up
          </Typography>
        </Container>
      </Box>
    </GoogleOAuthProvider>
  );
}
