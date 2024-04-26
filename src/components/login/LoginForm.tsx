import { useState } from "react";
import "./LoginForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { getActiveUserId } from "../../api/api";

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

  function closeLoginForm() {
    setIsLoginFormOpen(false);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
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

  const handleUserLogin = async () => {
    const response = await getActiveUserId(email, password);
    if (response !== undefined) {
      setActiveUserId(response);
      setIsUserLoggedIn(true);
      console.log(response);
    }else{
      alert("No such user exists")
    }
    setPassword("");
    setEmail("");
  };

  return (
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
            variant="standard"
            value={email}
            onChange={handleUsernameChange}
          />
        </Box>
        <Box className="input-field">
          <TextField
            className="text"
            required
            id="standard-basic"
            label="Password"
            variant="standard"
            value={password}
            onChange={handleUserPasswordChange}
          />
        </Box>
        <Button onClick={handleUserLogin}>LOGIN</Button>
        {/*Google login- todo */}
        <Typography variant="caption" sx={{ color: "#343935" }}>
          Or Login Using Google
        </Typography>
        <Typography
          sx={{ color: "blue", textDecoration: "underline" }}
          className="sign-up"
          onClick={handleSignUpClick}
        >
          Sign-up
        </Typography>
      </Container>
    </Box>
  );
}
