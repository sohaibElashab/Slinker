import axios from "axios";
import { useState } from "react";
import { Link , useHistory } from "react-router-dom";
import LeftSectionSign from "../Layouts/LeftSectionSign";
import SocialLogin from "../Layouts/SocialLogin";

const Register = () => {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [site, setsite] = useState("");
  const [password, setpassword] = useState("");

  const changePassword = (e) => {
    setpassword(e.target.value);
  };
  const changeEmail = (e) => {
    setemail(e.target.value);
  };
  const changeName = (e) => {
    setname(e.target.value);
  };
  const changeSite = (e) => {
    setsite(e.target.value);
  };
  let history = useHistory();
  const UserRegsiter = (e) => {
    e.preventDefault();
    console.log(email,
        name,
        site,
        password)
    axios
      .post("http://127.0.0.1:8000/api/auth/register", {
        email: email,
        username: name,
        website: site,
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
        title="Please Sign Up to your account."
        subtitle="Welcome to Slinker !"
      />

      <div className="right__section__sign">
        <div className="form__register__sign">
          <SocialLogin orType="register" />

          <div className="container__sign">
            <form action="#" onSubmit={UserRegsiter}>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="text" onChange={changeName} required />
                  <div className="underline"></div>
                  <label for="">Name</label>
                </div>
              </div>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="text" onChange={changeEmail} required />
                  <div className="underline"></div>
                  <label for="">Email Address</label>
                </div>
              </div>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="text" onChange={changeSite} required />
                  <div className="underline"></div>
                  <label for="">Your Website</label>
                </div>
              </div>
              <div className="form__row__sign">
                <div className="input__data__sign">
                  <input type="password" onChange={changePassword} required />
                  <div className="underline"></div>
                  <label for="">Password</label>
                </div>
              </div>

              <div className="newsletter__sign">
                <div className="checkbox__sign">
                  <input type="checkbox" name="" id="Enable-Notifications" />
                  <label for="Enable-Notifications">Enable Notifications</label>
                </div>
                <div className="checkbox__sign">
                  <input type="checkbox" name="" id="Enable-Emails" />
                  <label for="Enable-Emails">Enable Emails</label>
                </div>
              </div>

              <div className="form-btn">
                <button type="submit" className="btn--register">
                  Sign Up
                </button>
                <Link to="/Login" type="submit" className="btn--login">
                  Login
                </Link>
              </div>
            </form>
          </div>
          <div className="terms__register__sign">
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

export default Register;
