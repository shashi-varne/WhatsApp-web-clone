import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./stateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="http://pngimg.com/uploads/whatsapp/whatsapp_PNG20.png"
          style={{ width: "100px", height: "100px" }}
        />
        <div className="login__text">
          <h1>Sign into WhatsApp</h1>
        </div>
        <Button onClick={signIn} type="submit">
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
