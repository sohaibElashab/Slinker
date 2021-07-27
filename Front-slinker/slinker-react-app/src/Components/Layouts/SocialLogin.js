import React from 'react'

const SocialLogin = ({orType}) => {
    return (
        <div class="socials__sign">
            <div class="social__sign">
                <span class="fb__sign butn__sign">
                    <i class="fab fa-facebook-f"></i>
                    Login with Facebook
                </span>
                <span class="google__sign butn__sign">
                    <i class="fab fa-google"></i>
                    Login with Google
                </span>
            </div>
            <div className={`${orType == 'login' ? 'or__login__sign' : 'or__register__sign'}`}>
                <p>-OR-</p>
            </div>
        </div>
    )
}

export default SocialLogin
