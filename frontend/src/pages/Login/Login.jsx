import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { AuthLayout, AuthInput, PasswordInput, AuthButton } from "../../components/auth";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const { register: registerField, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
        email: "",
        password: ""
    }

});

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        });

    };

    const onSubmit = async (data) => {

    try {

        setLoading(true);

        await login(data);

        toast.success("Welcome back!");

        navigate("/dashboard");

    }

    catch (error) {

        toast.error(

            error.response?.data?.message ||

            "Login failed."

        );

    }

    finally {

        setLoading(false);

    }

};



    return (

        <AuthLayout

            title="Welcome Back"

            subtitle="Sign in to continue using Alpha."

        >

            <form

                className="login-form"

                onSubmit={handleSubmit(onSubmit)}

            >

               <AuthInput

    label="Email"

    type="email"

    placeholder="Enter your email"

    error={errors.email?.message}

    {...registerField("email", {

        required: "Email is required.",

        pattern: {

            value: /^\S+@\S+\.\S+$/,

            message: "Please enter a valid email."

        }

    })}

/>

           <PasswordInput

    label="Password"

    placeholder="Enter your password"

    error={errors.password?.message}

    {...registerField("password", {

        required: "Password is required.",

        minLength: {

            value: 8,

            message: "Password must be at least 8 characters."

        }

    })}

/>

                <div className="login-options">

                    <label>

                        <input type="checkbox" />

                        Remember me

                    </label>

                    <button

                        type="button"

                        className="forgot-btn"

                    >

                        Forgot password?

                    </button>

                </div>

                <AuthButton

                    type="submit"

                    loading={loading}

                >

                    Sign In

                </AuthButton>

            </form>

            <p className="auth-switch">

                Don't have an account?{" "}

                <Link to="/register">

                    Create one

                </Link>

            </p>

        </AuthLayout>

    );

}

export default Login;