import { useState } from "react";
import "./LoginForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
interface Props {
  setIsLoginFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoginForm({
  setIsLoginFormOpen,
  setIsUserLoggedIn,
}: Props) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function closeLoginForm() {
    setIsLoginFormOpen(false);
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleUserPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  const handleLoginButtonClick = () => {
    setIsUserLoggedIn(true);
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
            label="Username"
            variant="standard"
            value={username}
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
        <Button onClick={handleLoginButtonClick}>LOGIN</Button>
        <Typography variant="caption" sx={{ color: "#343935" }}>
          Or Sign Up Using
        </Typography>
      </Container>
    </Box>
  );
}
