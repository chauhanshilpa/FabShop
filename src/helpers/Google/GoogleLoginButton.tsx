import { GoogleLogin } from "@react-oauth/google";

interface Props {
  onSuccessFunction: any
}

/**
 * 
 * @returns google login button on login/signup form.
 */
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
