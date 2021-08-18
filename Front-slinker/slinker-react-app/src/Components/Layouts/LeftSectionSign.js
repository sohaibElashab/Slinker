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
      </div>
    </div>
  );
};

export default LeftSectionSign;
