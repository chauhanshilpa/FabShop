// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// for custom login button
// import { useGoogleLogin } from "@react-oauth/google";
// import LoginButton from "./LoginButton";

function GoogleLogin() {
  return (
    // <GoogleOAuthProvider clientId={}>
      {/* <LoginButton /> */}
    // </GoogleOAuthProvider>
  );
}

export default GoogleLogin;

// button
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

// for custom login
// import { useGoogleLogin } from "@react-oauth/google";

// const LoginButton = () => {
//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => console.log(codeResponse),
//     flow: "auth-code",
//   });

//   return (
    //  <GoogleLogin
    //     onSuccess={(credentialResponse) => {
    //       console.log(jwtDecode(credentialResponse.credential));
    //     }}
    //     onError={() => {
    //       console.log("Login Failed");
    //     }}
    //   />
//     <button
//       onClick={() => login()}
//       style={{ backgroundColor: "aqua", padding: "5px", margin: "5px" }}
//     >
//       Sign in with Google 🚀
//     </button>
//   );
// };

// export default LoginButton;
