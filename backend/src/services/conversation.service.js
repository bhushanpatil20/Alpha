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

export const getConversations = async (userId) => {

    return await Conversation.find({

        user: userId

    }).sort({

        updatedAt: -1

    });

};

export const openConversation = async ( conversationId, userId ) => {

    const conversation = await Conversation.findOneAndUpdate(

        {

            _id: conversationId,

            user: userId

        },

        {

            $set: {

                updatedAt: new Date()

            }

        },

        {

            new: true

        }

    );

    return conversation;

};