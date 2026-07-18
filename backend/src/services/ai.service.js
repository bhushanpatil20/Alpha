import ai from "../config/gemini.js";
import { generateCerebras } from "../config/open.js";
import { Conversation } from "../models/conversation.model.js";
import { alphaIdentity } from "../prompt/alphaIdentity.js";
import { getMessages } from "./message.service.js";

export const generateResponse = async (prompt, instructions = "") => {

    const finalPrompt = instructions
        ? `${instructions}\n\nUser: ${prompt}`
        : prompt;

    const response = await ai.models.generateContent({

        model: "models/gemma-4-26b-a4b-it",

        contents: finalPrompt

    });

    return response.text;

};

export const generateAIResponse = async (prompt) => {
    const messages = [
        {
            role: "system",
            content: "You are Alpha, a helpful AI assistant.",
        },
        {
            role: "user",
            content: prompt,
        },
    ];

    return await generateCerebras(messages);
};


export const generateStreamingResponse = async (conversationId, prompt) => {

    const conversation = await Conversation.findById(conversationId);
    const previousMessages = await getMessages(conversationId);
    const history = previousMessages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [
        {
            text: message.content,
        },
    ],
}));

    const instructions = conversation?.workspace?.context || "";
    const chat = ai.chats.create({

    model: "models/gemma-4-26b-a4b-it",

    history,

    config: {

        systemInstruction: `
${alphaIdentity}

${instructions ? `Workspace Context:\n${instructions}` : ""}
`

    }

});

return await chat.sendMessageStream({

    message: prompt

});

};

export const generateConversationTitle = async (
    prompt,
    response
) => {

    const titlePrompt = `
Generate a concise conversation title.

Rules:
- Maximum 5 words.
- No quotation marks.
- No punctuation at the end.
- Return ONLY the title.

User:
${prompt}

Assistant:
${response}
`;

    const result = await ai.models.generateContent({

        model: "models/gemma-4-26b-a4b-it",

        contents: titlePrompt

    });

    return result.text.trim();

};