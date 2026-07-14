import { getMessages } from "../services/message.service.js";

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