import "./Login.css";
import {AuthLayout, AuthCard, SocialLogin, AuthDivider, AuthInput} from "../../components/auth/components/index"
import { useRef, useState, useContext, use } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


function Login() {

   

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const {login, googleLogin} = useAuth();

    const handleGoogleLogin = async (credential) => {

    try {

        setLoading(true);

        await googleLogin(credential);

        toast.success("Welcome to Alpha!");

        navigate("/dashboard");

    } catch (err) {

        toast.error(
            err.response?.data?.message || "Google Login Failed."
        );

    } finally {

        setLoading(false);

    }

};

    const handleLogin = async (e) => {

    e.preventDefault();

    if (loading) return;

    setError("");

    if (!formData.email.trim()) {

        setError("Email is required.");

        return;

    }

    if (!formData.password.trim()) {

        setError("Password is required.");

        return;

    }

    try {

        setLoading(true);

        await login(formData);

        toast.success(`Welcome back!`);

        navigate("/dashboard");

    } catch (err) {

    console.error("Google Login Error:", err);

    console.error("Response:", err.response);

    console.error("Data:", err.response?.data);

    toast.error(
        err.response?.data?.message || err.message || "Google Login Failed."
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

    <SocialLogin onGoogleSuccess={handleGoogleLogin} />

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
    disabled={loading}
    />

    <AuthInput
        ref={passwordRef}
        name="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        disabled={loading}
        placeholder="Enter your password"
    />

    <button
    className="primary-btn"
    disabled={loading}
>

    {

        loading ? (

            <>

                <span className="spinner"></span>

                Signing In...

            </>

        ) : (

            "Sign In"

        )

    }

</button>

    </form>

    

  <Link
    to="/forgot-password"
    className="forgot-btn"
>

    Forgot Password?

</Link>

    <div className="auth-footer">

        <span>
            Don't have an account?
        </span>

        <Link to="/register">
            Create Account
        </Link>

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