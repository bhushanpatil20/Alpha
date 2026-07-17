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

    const conversation = await Conversation.findById(conversationId);

    if (conversation) {

        conversation.lastMessage = content;
        conversation.lastMessageAt = new Date();

        await conversation.save();

    }

    return message;

};