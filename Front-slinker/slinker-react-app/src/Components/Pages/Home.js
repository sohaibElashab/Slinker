import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [sessionToken, setsessionToken] = useState();

  useEffect(() => {
    console.log(localStorage.getItem("token_user"));
  });

  const checkLogin = () => {
    sessionStorage.getItem("token_user")
      ? setsessionToken(true)
      : setsessionToken(false);
  };
  const logout = () => {
    axios
      .post(
        "http://127.0.0.1:8000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: "token " + sessionStorage.getItem("token_user"),
          },
        }
      )
      .then(() => {
        sessionStorage.removeItem("token_user");
        localStorage.removeItem("token_user");
        checkLogin();
      });
  };

  return (
    <>
      <section className="containe__home top__home">
        <div className="layout__home"></div>
      </section>
      <section className="containe__upgrade__home">
        <div className="header__home">
          <section className="topbar__home">
            <div className="logo__home">
              <img
                src="./Assets/Slinker logo.svg"
                alt=""
                srcSet=""
                onClick={logout}
              />
            </div>
            <div className="compte__home">
              {/* <i className="far fa-user"></i>
              <span>3</span> */}
              {sessionToken || sessionStorage.getItem("token_user") || localStorage.getItem("token_user") ? (
                <>
                  <i className="far fa-user"></i>
                  <span>3</span>
                </>
              ) : (
                <Link to="/login" className="login__home">
                  Login
                </Link>
              )}
              {/* <Link to="/login" className="login__home">Login</Link> */}
            </div>
          </section>
          <section className="search__home">
            <h1>Enter Your website</h1>
            <span>Welcome to Slinker !</span>
            <div className="searchBar__home">
              <input
                type="text"
                placeholder="Enter your domain to check affiliate’s links"
              />
              <button>Analyze</button>
            </div>
          </section>
        </div>
        <section className="search__upgrade__home">
          <h1>Enter Your website</h1>
          <span>Welcome to Slinker !</span>
          <div className="searchBar__home">
            <textarea
              cols="30"
              rows="10"
              placeholder="Enter your domain to check affiliate’s links"
            ></textarea>
            <button className="apgrade__button">Analyze</button>
          </div>
        </section>
        <div className="upgrade__home">
          <button>Upgrade Plan</button>
        </div>
      </section>
    </>
  );
};

export default Home;
