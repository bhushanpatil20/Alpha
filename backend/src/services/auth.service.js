import User from "../models/user.model.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";
import buildUserResponse from "../utils/buildUserResponse.js";

//register service
export const registerService = async (userData) => {

    const token = generateToken(user);

    return {
        token,
        user: buildUserResponse(user)
    };
};

export const loginService = async (email, password) => {

    const token = generateToken(user);

    return {
        token,
        user: buildUserResponse(user)
    };
};