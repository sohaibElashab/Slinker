import React from "react";

const LeftSectionSign = ({ title, subtitle }) => {
  return (
    <div className="left__section__sign">
      <div className="left__section__item__sign">
        <div className="logo__sign">
          <a href="">
            <img
              className="logo"
              src="https://localhost:3000/Assets/Slinker logo.svg"
            />
          </a>
        </div>
        <div className="title__sign">
          <h2 className="">{title}</h2>
          <p className="">{subtitle}</p>
        </div>
        <div className="terms__left__sign">
          <p>
            By Signing up, you agree to Slinker’s <br />
            <a className="anchor__custom__sign" href="/">
              Terms and Conditions&ensp;
            </a>{" "}
            &
            <a className="anchor__custom__sign" href="/">
            &ensp;Privacy Policy
            </a>
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default LeftSectionSign;
