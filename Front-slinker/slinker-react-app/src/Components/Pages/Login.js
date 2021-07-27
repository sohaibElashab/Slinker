import React from 'react'
import { Link } from 'react-router-dom'
import LeftSectionSign from '../Layouts/LeftSectionSign'
import SocialLogin from '../Layouts/SocialLogin'

const Login = () => {
    return (
        <section className="section__sign">
            <LeftSectionSign title="Please Login to your account." subtitle="We are so happy to see you again!"/>
            
            <div className="right__section__sign">
                <div className="form__login__sign">
                    <SocialLogin orType='login'/>

                    <div className="container__sign">
                        <form action="#">
                            <div className="form__row__sign">
                                <div className="input__data__sign">
                                    <input type="text" required />
                                    <div className="underline"></div>
                                    <label for="">Email Address</label>
                                </div>
                            </div>
                            <div className="form__row__sign">
                                <div className="input__data__sign">
                                    <input type="password" required />
                                    <div className="underline"></div>
                                    <label for="">Password</label>
                                </div>
                            </div>

                            <div className="newsletter__sign">
                                <div className="checkbox__sign">
                                    <input type="checkbox" name="" id="stay-online" />
                                    <label for="stay-online">Remember Me</label>
                                </div>
                                <div>
                                    <a className="anchor-custom" href="">Forget Password ?</a>
                                </div>
                            </div>

                            <div className="form-btn">
                                <button type="submit" className="btn--register">Login</button>
                                <Link to="/register" type="submit" className="btn--login">Sign Up</Link>
                            </div>
                        </form>
                    </div>
                    <div className="terms__login__sign">
                        <p>
                            By Signing up, you agree to Slinker’s <br />
                            <a className="anchor__custom__sign" href="">Terms and Conditions</a> &
                            <a className="anchor__custom__sign" href="">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
