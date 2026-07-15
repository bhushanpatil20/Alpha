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

    const userMessage = await Message.create({

        conversation: conversationId,

        role,

        content

    });

    if (role === "assistant") {

        return userMessage;

    }

    

    const conversation = await Conversation.findById(
        conversationId
    );



    const aiReply = await generateAIResponse(content, conversation.instructions);


    await Message.create({

        conversation: conversationId,

        role: "assistant",

        content: aiReply

    });


    conversation.lastMessage = aiReply;

    conversation.lastMessageAt = new Date();

    await conversation.save();

    return userMessage;

};