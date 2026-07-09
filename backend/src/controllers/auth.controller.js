import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";
import { registerService, loginService } from "../services/auth.service.js";

//Register

export const registerUser = asyncHandler(async (req, res) => {

    const {

        fullName,
        email,
        password

    } = req.body;

    if (!fullName || !email || !password) {

        throw new ApiError(
            400,
            "All fields are required."
        );

    }

    const result = await registerService(req.body);

    return res.status(201).json(

        new ApiResponse(

            201,

            result,

            "Account created successfully."

        )

    );

});

//Login
export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {

        throw new ApiError(
            400,
            "Email and password are required."
        );

    }

    const result = await loginService(email, password);

    return res.status(200).json(

        new ApiResponse(

            200,

            result,

            "Login successful."

        )

    );

});



//Logout
export const logoutUser = asyncHandler(async (req, res) => {

    return res.status(200).json(

        new ApiResponse(

            200,

            null,

            "Logged out successfully."

        )

    );

});

//protected route
export const getCurrentUser = asyncHandler(async (req, res) => {

    return res.status(200).json(

        new ApiResponse(

            200,

            req.user,

            "User fetched successfully."

        )

    );

});