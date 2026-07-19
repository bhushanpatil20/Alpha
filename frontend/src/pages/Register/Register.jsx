import "./Register.css";
import {AuthLayout, AuthCard, SocialLogin, AuthDivider, AuthInput} from "../../components/auth/components/index"
import { useRef, useState, useContext, use } from "react";
import { useNavigate, Link, redirect } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";


function Register() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ fullName: "", email: "", password: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { register } = useAuth();

    const handleRegister = async (e) => {

    e.preventDefault();

    setError("");

    if (
        !formData.fullName.trim() ||
        !formData.email.trim() ||
        !formData.password.trim() ||
        !formData.confirmPassword.trim()
    ) {
        
        setError("Please fill in all fields.");

        return;
    }

    if (formData.password !== formData.confirmPassword) {

        setError("Passwords do not match.");

        return;
    }

    try {

        setLoading(true);

        await register({

            fullName: formData.fullName,
            email: formData.email,
            password: formData.password

        });

        toast.success("Account created successfully!");

        navigate("/login");

    } catch (err) {

        const message =
            err.response?.data?.message ||
            "Registration failed.";

        setError(message);

        toast.error(message);

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
    title="Create Account"
    subtitle="Start creating with Alpha."
>

    <form onSubmit={handleRegister}>

  <AuthInput
    label="Full Name"
    name="fullName"
    type="text"
    value={formData.fullName}
    onChange={handleChange}
    placeholder="Enter your full name"
/>

<AuthInput
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Enter your email"
/>

<AuthInput
    label="Password"
    name="password"
    type="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Create a password"
/>

<AuthInput
    label="Confirm Password"
    name="confirmPassword"
    type="password"
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm your password"
/>

   <button
    className="primary-btn"
    type="submit"
    disabled={loading}
>

    {

        loading

            ? "Creating Account..."

            : "Create Account"

    }

</button>

    </form>

    <div className="auth-footer">

        <span>
            Already have an account?
        </span>

        <Link to="/login">
            Sign In
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

export default Register;