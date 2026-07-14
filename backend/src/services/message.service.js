import { Message } from "../models/message.model.js";

export const getMessages = async (conversationId) => {

    return await Message.find({

        conversation: conversationId

    }).sort({

        createdAt: 1

    });

};

export const createMessage = async ( conversation, role, content ) => {

    return await Message.create({ conversation, role, content });

};