import "./SocialLogin.css";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function SocialLogin() {

    return (

        <div className="social-login">

            <button className="social-btn">

                <FcGoogle />

                <span>

                    Continue with Google

                </span>

            </button>

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