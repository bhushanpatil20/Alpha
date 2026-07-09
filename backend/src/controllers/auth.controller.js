import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {

    return jwt.sign(

        { id: userId },

        process.env.JWT_SECRET,

        {
            expiresIn: "7d"
        }

    );

};

//Register

export const registerUser = async (req, res) => {

    try {

        const {
            fullName,
            email,
            password
        } = req.body;

        if (!fullName || !email || !password) {

            return res.status(400).json({

                success: false,
                message: "All fields are required."

            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(409).json({

                success: false,
                message: "User already exists."

            });

        }

        const user = await User.create({

            fullName,
            email,
            password

        });

        const token = generateToken(user._id);

        return res.status(201).json({

            success: true,

            message: "Account created successfully.",

            token,

            user: {

                id: user._id,

                fullName: user.fullName,

                email: user.email,

                role: user.role

            }

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

//Login
export const loginUser = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                success: false,

                message: "Email and password are required."

            });

        }

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password."

            });

        }

        const isPasswordCorrect = await user.comparePassword(password);

        if (!isPasswordCorrect) {

            return res.status(401).json({

                success: false,

                message: "Invalid email or password."

            });

        }

        const token = generateToken(user._id);

        return res.status(200).json({

            success: true,

            message: "Login successful.",

            token,

            user: {

                id: user._id,

                fullName: user.fullName,

                email: user.email,

                role: user.role

            }

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

//Logout
export const logoutUser = async (req, res) => {

    return res.status(200).json({

        success: true,

        message: "Logged out successfully."

    });

};