import "./SocialLogin.css";
import "../auth-responsive.css";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleAuth } from "../../../../hooks/useGoogleAuth";

function SocialLogin({onGoogleSuccess}) {

    const googleSignIn = useGoogleAuth(onGoogleSuccess);

    return (

        <div className="social-login">

    {/* <div className="google-login-wrapper">

    <button
        className="social-btn"
        type="button"
    >
        <FcGoogle />

        <span>Continue with Google</span>

    </button>

    <div className="google-login-overlay">

        <GoogleLogin
            theme="outline"
            text="continue_with"
            shape="pill"
            size="large"
            onSuccess={(credentialResponse) => {

                onGoogleSuccess(credentialResponse.credential);

            }}
            onError={() => {

                console.error("Google Login Failed");

            }}
        />

    </div>

</div> */}

<button

    className="social-btn"

    onClick={() => { window.location.href =
`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:5173/auth/github/callback&scope=read:user user:email`; }}

>

    <FaGithub />

    <span>

        Continue with GitHub

    </span>

</button>

        </div>

    );

}

export default SocialLogin;