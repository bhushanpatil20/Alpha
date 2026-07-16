import { getMessages } from "../services/message.service.js";
import { createMessage } from "../services/message.service.js";
import { generateStreamingResponse } from "../services/ai.service.js";

export const getMessagesController = async (req, res) => {

    try {

        const messages = await getMessages(req.params.conversationId);

        return res.status(200).json({

            success: true,

            messages

        });

    }

    catch(error){

            console.error("Create Message Error:");
    console.error(error);

        return res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

export const createMessageController = async (req, res) => {
    try {

        const { conversationId, role, content } = req.body;

        const message = await createMessage(conversationId, role, content);

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


export const streamMessageController = async (req, res) => {

    try {

        const { prompt } = req.body;

        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader( "Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        const stream = await generateStreamingResponse(prompt);

        for await (const chunk of stream) {

            const text = chunk.text || "";

            console.log(text);

            res.write(
                `data: ${JSON.stringify({text})}\n\n`
            );

        }

        res.write("event: end\ndata: done\n\n");

        res.end();

    }

    catch(error){

        console.error(error);

        res.end();

    }

};