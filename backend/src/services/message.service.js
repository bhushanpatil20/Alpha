import { Conversation } from "../models/conversation.model.js";
import { generateResponse } from "./ai.service.js";
import { Message } from "../models/message.model.js";
import { generateAIResponse } from "./ai.service.js";

export const getMessages = async (conversationId) => {

    return await Message.find({

        conversation: conversationId

    }).sort({

        createdAt: 1

    });

};

export const createMessage = async (conversationId, role, content) => {

    const message = await Message.create({
        conversation: conversationId,
        role,
        content
    });

    await Conversation.findByIdAndUpdate(
        conversationId,
        {
            lastMessage: content,
            lastMessageAt: new Date()
        }
    );

    return message;

};