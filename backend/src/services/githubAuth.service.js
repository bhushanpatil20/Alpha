import axios from "axios";
import User from "../models/user.model.js";
import qs from "qs";

export const getGithubAccessToken = async (code) => {

    const { data } = await axios.post(
        "https://github.com/login/oauth/access_token",
        qs.stringify({
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code
        }),
        {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
    );

    console.log("Full GitHub Token Response:", data);

     if (data.error) {
        throw new Error(`GitHub OAuth error: ${data.error} - ${data.error_description}`);
    }

    if (!data.access_token) {
        throw new Error("No access token returned from GitHub");
    }

    return data.access_token;
};

export const getGithubUser = async (accessToken) => {

     console.log("Access Token:", accessToken);

     const { data: profile } = await axios.get(
    "https://api.github.com/user",
    {
        headers: {
            Authorization: `token ${accessToken}`,
            Accept: "application/vnd.github+json",
            "User-Agent": "Alpha"
        }
    }
);

    let email = profile.email;

    if (!email) {

        const { data: emails } = await axios.get(

            "https://api.github.com/user/emails",

            {

                headers: {

                    Authorization: `token ${accessToken}`

                }

            }

        );

        const primaryEmail = emails.find(

            email => email.primary && email.verified

        );

        email = primaryEmail?.email || null;

    }

    return {

        ...profile,

        email

    };

};

export const findOrCreateGithubUser = async (githubUser) => {

    if (!githubUser.email) {

        throw new Error("GitHub account has no verified email.");

    }

    let user = await User.findOne({

        email: githubUser.email

    });

    if (user) {

        if (!user.provider.includes("github")) {

            user.provider.push("github");

            await user.save();

        }

        return user;

    }

    user = await User.create({

        fullName: githubUser.name || githubUser.login,

        email: githubUser.email,

        avatar: githubUser.avatar_url,

        isVerified: true,

        provider: ["github"]

    });

    return user;

};