import { forwardRef } from "react";
import "./AuthInput.css";

const AuthInput = forwardRef(({

    label,

    type = "text",

    placeholder,

    value,

    onChange,

    error,

    required = false,

    ...props

}))
 {

    return (

        <div className="auth-input-group">

            <label>

                {label}

                {required && <span>*</span>}

            </label>

            <input

                type={type}

                placeholder={placeholder}

                value={value}

                onChange={onChange}

                {...props}

            />

            {

                error && (

                    <small>

                        {error}

                    </small>

                )

            }

        </div>

    );

}

export default AuthInput;