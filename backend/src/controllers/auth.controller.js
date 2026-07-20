import User from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";
import { registerService, loginService } from "../services/auth.service.js";
import { getGoogleAccessToken, getGoogleUser, findOrCreateGoogleUser } from "../services/googleAuth.service.js";
import { getGithubAccessToken, getGithubUser, findOrCreateGithubUser } from "../services/githubAuth.service.js";

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

//Google Login
export const googleLogin = async (req, res) => {

    try {

        console.log("Google Controller Hit");

        const { code } = req.body;

        if (!code) {

            return res.status(400).json({

                success: false,
                message: "Authorization code is required."

            });

        }

        const accessToken = await getGoogleAccessToken(code);

        console.log("Google Access Token:", accessToken);

        const googleUser = await getGoogleUser(accessToken);

        const user = await findOrCreateGoogleUser(googleUser);

        const token = generateToken(user._id);

        return res.status(200).json({

            success: true,

            data: {

                token,
                user

            }

        });

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

//Github Login
export const githubLogin = async (req, res) => {

    console.log("GitHub Controller Hit");

    try {

        const { code } = req.body;

        if (!code) {

            return res.status(400).json({

                success:false,

                message:"GitHub authorization code is required."

            });

        }

        const accessToken = await getGithubAccessToken(code);

        const githubUser = await getGithubUser(accessToken);

        const user = await findOrCreateGithubUser(githubUser);

        const token = generateToken(user._id);

        return res.status(200).json({

            success:true,

            statusCode:200,

            message:"Login Successful.",

            data:{

                token,

                user

            }

        });

    }

    catch(error){

        console.error(error);

        return res.status(401).json({

            success:false,

            message:error.message || "GitHub authentication failed."

        });

    }

};