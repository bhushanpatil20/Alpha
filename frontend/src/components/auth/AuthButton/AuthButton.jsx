import { FiLoader } from "react-icons/fi";
import "./AuthButton.css";

function AuthButton({

    children,

    loading = false,

    type = "button",

    disabled = false,

    ...props

}) {

    return (

        <button

            type={type}

            className="auth-button"

            disabled={loading || disabled}

            {...props}

        >

            {

                loading ? (

                    <>

                        <FiLoader className="spinner" />

                        <span>Processing...</span>

                    </>

                ) : (

                    children

                )

            }

        </button>

    );

}

export default AuthButton;