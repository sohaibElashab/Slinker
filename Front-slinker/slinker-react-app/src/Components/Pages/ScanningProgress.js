import React from "react";

const ScanningProgress = () => {
  return (
    <>
      <section className="top-menu scanning_logo">
        <div className="top_logo">
          <a href="">
            <img
              className="logo"
              src="https://localhost:3000/Assets/slinker_logo.png"
            />
          </a>
        </div>
      </section>
      <section className="scanning">
        <span className="title">
          We’re scanning <span className="site__title">https://eysi.net</span>
        </span>
        <span className="time">Take 2 minutes on average</span>
        <div className="resultes">
          <span className="progress">
            <i className="fas fa-check-circle done"></i>{" "}
            <span>Crawling the website</span>
          </span>
          <div className="shema done__shema"></div>
          <span className="progress">
            <i className="fas fa-check-circle done"></i>{" "}
            <span>Passing verification tests</span>{" "}
          </span>
          <div className="shema in_progress__shema"></div>
          <span className="progress">
            <i className="fas fa-check-circle in_progress"></i>{" "}
            <span>Detecting Affiliates links </span>{" "}
          </span>
          <div className="shema not__yet__shema"></div>
          <span className="progress">
            <i className="fas fa-check-circle not__yet"></i>{" "}
            <span>Calculating Products Links </span>{" "}
          </span>
          <div className="shema not__yet__shema"></div>
          <span className="progress" style={{ PaddingLeft: "20px" }}>
            <i className="fas fa-check-circle not__yet"></i>{" "}
            <span>Get Results </span>{" "}
          </span>
        </div>
      </section>
    </>
  );
};

export default ScanningProgress;
