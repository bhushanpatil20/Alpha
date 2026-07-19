import "./AuthInput.css";
import "../auth-responsive.css"
import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const AuthInput = forwardRef(({ label, name, type = "text", placeholder,
value, onChange, onKeyDown, disabled }, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    return (
        <div className="auth-input-group">

            <label>{label}</label>

            <div className="auth-input-wrapper">

                <input
                    ref={ref}
                    name={name}
                    type={
                        isPassword
                            ? (showPassword ? "text" : "password")
                            : type
                    }
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                />

                {isPassword && (
    <button
        type="button"
        className="toggle-password"
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? "Hide password" : "Show password"}
    >
        {showPassword ? <FiEyeOff /> : <FiEye />}
    </button>
)}

            </div>

        </div>
    );

});

export default AuthInput;