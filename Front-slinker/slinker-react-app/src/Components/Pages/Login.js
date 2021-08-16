import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import LeftSectionSign from "../Layouts/LeftSectionSign";
import SocialLogin from "../Layouts/SocialLogin";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [email_err, setemail_err] = useState("");
  const [password_err, setpassword_err] = useState("");
  const [credential_err, setcredential_err] = useState("");
  const [remember_me, setremember_me] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem("token_user"));
  });

  const changeRemember = (e) => {
    setremember_me(e.target.checked);
    alert(remember_me);
  };

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
        sessionStorage.setItem("token_user", response.data.token);
        if (remember_me === true) {
          localStorage.setItem("token_user", response.data.token);
        }
        history.push("/");
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data.email) {
          setemail_err(err.response.data.email[0]);
        } else {
          setemail_err("");
        }
        if (err.response.data.password) {
          setpassword_err(err.response.data.password[0]);
        } else {
          setpassword_err("");
        }
        if (err.response.data.non_field_errors) {
          setcredential_err(err.response.data.non_field_errors[0]);
        } else {
          setcredential_err("");
        }
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

          {credential_err !== "" ? (
            <p className="mb-5">{credential_err}</p>
          ) : (
            ""
          )}
          <div className="container__sign">
            <form>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="email" onChange={changeEmail} required />
                  <div className="underline"></div>
                  <label htmlFor="">Email Address</label>
                </div>
              </div>
              {email_err !== "" ? <p>{email_err}</p> : ""}
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="password" onChange={changePassword} required />
                  <div className="underline"></div>
                  <label htmlFor="">Password</label>
                </div>
              </div>
              {password_err !== "" ? <p>{password_err}</p> : ""}
              <div className="newsletter__sign">
                <div className="checkbox__sign">
                  <input
                    type="checkbox"
                    name=""
                    id="stay-online"
                    onChange={changeRemember}
                  />
                  <label htmlFor="stay-online">Remember Me</label>
                </div>
                <div>
                  <a className="anchor-custom" href="/">
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
              <a className="anchor__custom__sign" href="/">
                Terms and Conditions
              </a>{" "}
              &
              <a className="anchor__custom__sign" href="/">
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
