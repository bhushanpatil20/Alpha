import { Conversation } from "../models/conversation.model.js";

export const createConversation = async (
    userId,
    title,
    instructions
) => {

    const conversation = await Conversation.create({

        user: userId,

        title,

        instructions

    });

    return conversation;

};