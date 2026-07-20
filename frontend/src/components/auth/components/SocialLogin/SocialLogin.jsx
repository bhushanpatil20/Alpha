import "./SocialLogin.css";
import "../auth-responsive.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

function SocialLogin({onGoogleSuccess}) {

    return (

        <div className="social-login">

            <GoogleLogin
    theme="filled_black"
    shape="pill"
    text="continue_with"
    onSuccess={(credentialResponse) => {
        onGoogleSuccess(credentialResponse.credential);
    }}
    onError={() => {
        console.log("Google Login Failed");
    }}
/>

            <button className="social-btn">

                <FaApple />

                <span>

                    Continue with Apple

                </span>

            </button>

        </div>

    );

}

export default SocialLogin;