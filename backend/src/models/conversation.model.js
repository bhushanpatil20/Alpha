import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 50
        },

        instructions: {
            type: String,
            default: "",
            maxlength: 1000
        },

        workspace: {

    contentType: {
        type: String,
        default: "General"
    },

    tone: {
        type: String,
        default: "Professional"
    },

    context: {
        type: String,
        default: ""
    }

},

        lastMessage: {
            type: String,
            default: ""
        },

        lastMessageAt: {
            type: Date,
            default: null
        }
    },
    {
        timestamps: true
    }
);

export const Conversation = mongoose.model(
    "Conversation",
    conversationSchema
);