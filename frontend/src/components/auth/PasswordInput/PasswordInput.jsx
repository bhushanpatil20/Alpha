import { useState, forwardRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./PasswordInput.css";

const PasswordInput = forwardRef(({

    label,

    placeholder = "Enter your password",

    value,

    onChange,

    error,

    required = false,

    ...props

}, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="password-input-group">

            <label>
                {label}
                {required && <span>*</span>}
            </label>

            <div className="password-input-wrapper">

                <input
                    ref={ref}
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...props}
                />

                <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                        showPassword
                            ? "Hide password"
                            : "Show password"
                    }
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>

            </div>

            {error && <small>{error}</small>}

        </div>

    );

});

export default PasswordInput;