import { GoogleLogin } from "@react-oauth/google";

interface Props {
  onSuccessFunction: any
}

const GoogleLoginButton = ({ onSuccessFunction }: Props) => {
  return (
    <GoogleLogin
      onSuccess={onSuccessFunction}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
