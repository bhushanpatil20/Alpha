import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import useAuth from "../../hooks/useAuth";

// import {
//     AuthLayout,
//     AuthInput,
//     PasswordInput,
//     AuthButton
// } from "../../components/auth";

import "./Register.css";

function Register() {

    const navigate = useNavigate();

    const { register: registerUser } = useAuth();

    const [loading, setLoading] = useState(false);

    const {

        register,

        handleSubmit,

        watch,

        formState: { errors }

    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {

        try {

            setLoading(true);

            await registerUser({

                fullName: data.fullName,
                email: data.email,
                password: data.password

            });

            toast.success("Account created successfully!");

            navigate("/dashboard");

        }

        catch (error) {

            toast.error(

                error.response?.data?.message ||

                "Registration failed."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <AuthLayout

            title="Create Account"

            subtitle="Join Alpha and start generating AI content."

        >

            <form

                className="login-form"

                onSubmit={handleSubmit(onSubmit)}

            >

                <AuthInput

                    label="Full Name"

                    placeholder="Enter your full name"

                    error={errors.fullName?.message}

                    {...register("fullName", {

                        required: "Full name is required.",

                        minLength: {

                            value: 3,

                            message: "Minimum 3 characters."

                        }

                    })}

                />

                <AuthInput

                    label="Email"

                    type="email"

                    placeholder="Enter your email"

                    error={errors.email?.message}

                    {...register("email", {

                        required: "Email is required.",

                        pattern: {

                            value: /^\S+@\S+\.\S+$/,

                            message: "Invalid email."

                        }

                    })}

                />

                <PasswordInput

                    label="Password"

                    placeholder="Create a password"

                    error={errors.password?.message}

                    {...register("password", {

                        required: "Password is required.",

                        minLength: {

                            value: 8,

                            message: "Minimum 8 characters."

                        }

                    })}

                />

                <PasswordInput

                    label="Confirm Password"

                    placeholder="Confirm your password"

                    error={errors.confirmPassword?.message}

                    {...register("confirmPassword", {

                        required: "Please confirm your password.",

                        validate: value =>

                            value === password ||

                            "Passwords do not match."

                    })}

                />

                <AuthButton

                    type="submit"

                    loading={loading}

                >

                    Create Account

                </AuthButton>

            </form>

            <p className="auth-switch">

                Already have an account?{" "}

                <Link to="/login">

                    Sign In

                </Link>

            </p>

        </AuthLayout>

    );

}

export default Register;