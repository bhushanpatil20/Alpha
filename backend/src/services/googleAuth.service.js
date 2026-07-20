import axios from "axios";
import qs from "qs";
import User from "../models/user.model.js";

export const getGoogleAccessToken = async (code) => {

    const { data } = await axios.post(

        "https://oauth2.googleapis.com/token",

        qs.stringify({

            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_CALLBACK_URL,
            grant_type: "authorization_code"

        }),

        {

            headers: {

                "Content-Type": "application/x-www-form-urlencoded"

            }

        }

    );

    return data.access_token;

};

export const getGoogleUser = async (accessToken) => {

    const { data } = await axios.get(

        "https://www.googleapis.com/oauth2/v3/userinfo",

        {

            headers: {

                Authorization: `Bearer ${accessToken}`

            }

        }

    );

    return data;

};

export const findOrCreateGoogleUser = async (googleUser) => {

    const {

        email,
        name,
        picture,
        email_verified

    } = googleUser;

    if (!email_verified) {

        throw new Error("Google email is not verified.");

    }

    let user = await User.findOne({ email });

    if (user) {

        if (!user.provider.includes("google")) {

            user.provider.push("google");

        }

        if (!user.avatar && picture) {

            user.avatar = picture;

        }

        user.isVerified = true;

        await user.save();

        return user;

    }

    user = await User.create({

        fullName: name,

        email,

        avatar: picture,

        provider: ["google"],

        isVerified: true

    });

    return user;

};