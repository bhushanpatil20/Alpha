import "./Login.css";
import {AuthLayout, AuthCard, SocialLogin, AuthDivider, AuthInput} from "../../components/auth/components/index"
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";


function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {

    e.preventDefault();

    setError("");

    if (!formData.email.trim() || !formData.password.trim()) {

        setError("Please fill in all fields.");

        return;

    }

    try {

        setLoading(true);

        await login(formData);

        navigate("/dashboard");

        console.log(user);

    } catch (err) {

        setError(

            err.response?.data?.message ||

            "Login failed."

        );

    } finally {

        setLoading(false);

    }

};

const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prev => ({
        ...prev,
        [name]: value
    }));

};

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (

        <AuthLayout>

        <AuthCard
    title="Welcome Back"
    subtitle="Sign in to continue to Alpha."
>

    <SocialLogin />

    <AuthDivider />

    <form onSubmit={handleLogin}>

    <AuthInput
        ref={emailRef}
        name="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        autoComplete="off"
        onKeyDown={(e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            passwordRef.current?.focus();
        }
    }}
    />

    <AuthInput
        ref={passwordRef}
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
    />

    <button className="primary-btn" type="submit">
        {loading ? "Signing In..." : "Sign In"}
    </button>

    </form>

    

    <button className="forgot-btn">
        Forgot Password?
    </button>

    <div className="auth-footer">

        <span>
            Don't have an account?
        </span>

        <a href="/register">
            Create Account
        </a>

    </div>

      {
    error && (

        <p className="auth-error">

            {error}

        </p>

    )
}

</AuthCard>

        </AuthLayout>

    );

}

export default Login;