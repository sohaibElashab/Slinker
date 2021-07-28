import React from "react";

const SocialLogin = ({ orType }) => {
  return (
    <div className="socials__sign">
      <div className="social__sign">
        <span className="fb__sign butn__sign">
          <i className="fab fa-facebook-f"></i>
          Login with Facebook
        </span>
        <span className="google__sign butn__sign">
          <i className="fab fa-google"></i>
          Login with Google
        </span>
      </div>
      <div
        className={`${
          orType == "login" ? "or__login__sign" : "or__register__sign"
        }`}
      >
        <p>-OR-</p>
      </div>
    </div>
  );
};

export default SocialLogin;
