import { OAuth2Client } from "google-auth-library";
import User from "../models/user.model.js";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const verifyGoogleToken = async (credential) => {

    const ticket = await client.verifyIdToken({

        idToken: credential,
        audience: process.env.GOOGLE_CLIENT_ID,

    });

    return ticket.getPayload();

};

export const findOrCreateGoogleUser = async (payload) => {

    const {

        email,
        name,
        picture,
        email_verified

    } = payload;

    if (!email_verified) {

        throw new Error("Google email is not verified.");

    }

    let user = await User.findOne({ email });

    if (user) {

        if (!user.avatar && picture) {

            user.avatar = picture;

        }

        if (!user.isVerified) {

            user.isVerified = true;

        }

        if (user.provider !== "google") {

            user.provider = "google";

        }

        await user.save();

        return user;

    }

    user = await User.create({

        fullName: name,

        email,

        avatar: picture,

        provider: "google",

        isVerified: true

    });

    return user;

};