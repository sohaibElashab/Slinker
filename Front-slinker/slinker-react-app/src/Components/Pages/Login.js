import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import LeftSectionSign from "../Layouts/LeftSectionSign";
import SocialLogin from "../Layouts/SocialLogin";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const changePassword = (e) => {
    setpassword(e.target.value);
  };
  const changeEmail = (e) => {
    setemail(e.target.value);
  };
  let history = useHistory();
  const UserLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response");
        console.log(response);
        sessionStorage.setItem("token_user", response.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="section__sign">
      <LeftSectionSign
        title="Please Login to your account."
        subtitle="We are so happy to see you again!"
      />

      <div className="right__section__sign">
        <div className="form__login__sign">
          <SocialLogin orType="login" />

          <div className="container__sign">
            <form>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input
                    type="email"
                    onChange={(e) => setemail(e.target.value)}
                    required
                  />
                  <div className="underline"></div>
                  <label htmlFor="">Email Address</label>
                </div>
              </div>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="password" onChange={changePassword} required />
                  <div className="underline"></div>
                  <label htmlFor="">Password</label>
                </div>
              </div>

              <div className="newsletter__sign">
                <div className="checkbox__sign">
                  <input type="checkbox" name="" id="stay-online" />
                  <label htmlFor="stay-online">Remember Me</label>
                </div>
                <div>
                  <a className="anchor-custom" href="">
                    Forget Password ?
                  </a>
                </div>
              </div>

              <div className="form-btn">
                <button onClick={UserLogin} className="btn--register">
                  Login
                </button>
                <Link to="/register" type="submit" className="btn--login">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
          <div className="terms__login__sign">
            <p>
              By Signing up, you agree to Slinker’s <br />
              <a className="anchor__custom__sign" href="">
                Terms and Conditions
              </a>{" "}
              &
              <a className="anchor__custom__sign" href="">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
