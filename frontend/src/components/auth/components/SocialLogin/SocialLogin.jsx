import "./SocialLogin.css";
import "../auth-responsive.css";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useGoogleAuth } from "../../../../hooks/useGoogleAuth";

function SocialLogin({ onGoogleSuccess }) {

    const googleButtonRef = useGoogleAuth(onGoogleSuccess);

    return (

        <div className="social-login">

            <button
    className="social-btn"
    type="button"
    onClick={() => {
window.location.href =
    `https://accounts.google.com/o/oauth2/v2/auth` +
    `?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}` +
    `&redirect_uri=http://localhost:3000/auth/google/callback` +
    `&response_type=code` +
    `&scope=openid%20email%20profile` +
    `&access_type=offline` +
    `&prompt=select_account`;

    }}
>
    <FcGoogle />

    <span>Continue with Google</span>

</button>

            <button
                className="social-btn"
                type="button"
                onClick={() => {

                    window.location.href =
                        `https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=http://localhost:3000/auth/github/callback&scope=read:user user:email`;

                }}
            >
                <FaGithub />

                <span>Continue with GitHub</span>

            </button>

        </div>

    );

}

export default SocialLogin;