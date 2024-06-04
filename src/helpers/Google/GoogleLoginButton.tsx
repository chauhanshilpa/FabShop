import "./google.css";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "../../components/Image/Image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const GoogleLoginButton = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <Box onClick={() => login()} className="google-login-button">
      <Typography sx={{ fontSize: "small", marginBottom:"2px" }}>Or Login Using</Typography>
      <Image
        src="https://fabshop-images.s3.ap-south-1.amazonaws.com/fabshop+images/google_logo.png"
        alt="google_logo"
      />
    </Box>
  );
};

export default GoogleLoginButton;
