import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            default: null,
            minlength: 8,
        },

        avatar: {
            type: String,
            default: null,
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        provider: {

    type: [String],

    enum: ["local", "google"],

    default: ["local"],

},
    },
    {
        timestamps: true,
    }
);

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {

        return next();

    }

    if (!this.password) {

        return next();

    }

    this.password = await bcrypt.hash(this.password, 10);

    next();

});

userSchema.methods.comparePassword = async function (password) {

    return await bcrypt.compare(password, this.password);

};

const User = mongoose.model("User", userSchema);

export default User;