import "./LoginForm.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginForm() {
  return (
    <Box className="login-form-container">
      <Container className="login-form">
        <Typography sx={{ fontSize: "xx-large", fontWeight: "600" }}>
          Login
        </Typography>
        <Box className="input-field">
          <TextField
            required
            id="standard-basic"
            label="Username"
            variant="standard"
          />
        </Box>
        <Box className="input-field">
          <TextField
          className="text"
            required
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </Box>
        <Button>LOGIN</Button>
        <Typography variant="caption" sx={{ color: "#343935" }}>
          Or Sign Up Using
        </Typography>
      </Container>
    </Box>
  );
}
