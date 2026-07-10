import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";
import buildUserResponse from "../utils/buildUserResponse.js";

//register service
export const registerService = async (userData) => {

    const existingUser = await User.findOne({

        email: userData.email

    });

    if (existingUser) {

        throw new ApiError(409, "User already exists.");

    }

    const user = await User.create(userData);

    const token = generateToken(user._id);

    return {

        token,

        user: buildUserResponse(user)

    };

};

//login service
export const loginService = async (email, password) => {

    const user = await User.findOne({ email });

    if (!user) {

        throw new ApiError(401, "Invalid email or password.");

    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {

        throw new ApiError(401, "Invalid email or password.");

    }

    const token = generateToken(user._id);

    return {

        token,

        user: buildUserResponse(user)

    };

};