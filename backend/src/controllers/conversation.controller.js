import { createConversation } from "../services/conversation.service.js";

export const createConversationController = async (req, res) => {

    try {

        const { title, instructions } = req.body;

        const conversation = await createConversation(

            req.user._id,

            title,

            instructions

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