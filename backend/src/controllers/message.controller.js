import { getMessages } from "../services/message.service.js";
import { createMessage } from "../services/message.service.js";

export const getMessagesController = async (req, res) => {

    try {

        const messages = await getMessages(

            req.params.conversationId

        );

        return res.status(200).json({

            success: true,

            messages

        });

    }

    catch(error){

        return res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

export const createMessageController = async (

    req,

    res

) => {

    try {

        const {

            conversationId,

            role,

            content

        } = req.body;

        const message = await createMessage(

            conversationId,

            role,

            content

        );

        return res.status(201).json({

            success: true,

            message

        });

    }

    catch (error) {

        return res.status(500).json({

            success: false,

            message: error.message

        });

    }

};