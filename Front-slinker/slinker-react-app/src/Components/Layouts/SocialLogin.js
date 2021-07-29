import axios from "axios";
import React from "react";
import { useState } from "react";
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";

const SocialLogin = ({ orType }) => {

  const [error, setError] = useState("");

  let history = useHistory()
  const fbResponse = (response) => {
    console.log(response.accessToken);
    axios.post("http://127.0.0.1:8000/api/auth/facebook",{
      auth_token:response.accessToken
    }).then( res => {
      if(res.data.error){
        setError("Email already exists")
      }else if(res.data.token){
        sessionStorage.setItem("token_user", res.data.token);
        history.push("/");
      }
    }).catch(err => {
      console.log(err)
    })
  } 
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    axios.post("http://127.0.0.1:8000/api/auth/google",{
      auth_token:response.tokenId
    }).then( res => {
      console.log(res)
      if(res.data.error){
        setError("Email already exists")
      }else if(res.data.token){
        sessionStorage.setItem("token_user", res.data.token);
        history.push("/");
      }
    }).catch(err => {
      console.log(err)
    })
  } 
  return (
    <div className="socials__sign">
      <div className="social__sign">
    {/*     <span className="fb__sign butn__sign">
          <i className="fab fa-facebook-f"></i>
          Login with Facebook
        </span>
        <span className="google__sign butn__sign">
          <i className="fab fa-google"></i>
          Login with Google
        </span> */}
        <FacebookLogin
          className="fb__sign butn__sign"
          textButton="Login with Facebook"
          appId= "962023414341219"
          callback={fbResponse}
        />

        <GoogleLogin
          className="google__sign butn__sign"
          clientId="338514051366-2l7uuqka8l7fmbe9dhim3i476k8n6889.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>

      
      <div
        className={`${
          orType === "login" ? "or__login__sign" : "or__register__sign"
        }`}
      >
        {error !== "" ? <p>{error}</p> : ""}
        <p>-OR-</p>
      </div>
    </div>
  );
};

export default SocialLogin;
