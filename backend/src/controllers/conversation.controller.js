import { createConversation, getConversations, openConversation } from "../services/conversation.service.js";

export const createConversationController = async (req, res) => {

    try {

        const { title, workspace } = req.body;

        const conversation = await createConversation(

            req.user._id,

            title,

            workspace

        );

        return res.status(201).json({

            success: true,

            message: "Conversation created successfully.",

            conversation

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



export const getConversationsController = async (req, res) => {

    try {

        const conversations = await getConversations(

            req.user._id

        );

        return res.status(200).json({

            success: true,

            conversations

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};

export const openConversationController = async (

    req,

    res

) => {

    try {

        const conversation = await openConversation(

            req.params.id,

            req.user._id

        );

        if (!conversation) {

            return res.status(404).json({

                success: false,

                message: "Conversation not found."

            });

        }

        return res.json({

            success: true,

            conversation

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};