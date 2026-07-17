import ai from "../config/gemini.js";
import { generateCerebras } from "../config/open.js";
import { Conversation } from "../models/conversation.model.js";

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


export const generateStreamingResponse = async (
    conversationId,
    prompt
) => {

    const conversation = await Conversation.findById(conversationId);

    const instructions = conversation?.workspace?.context || "";

    const finalPrompt = instructions
        ? `${instructions}\n\nUser: ${prompt}`
        : prompt;

    return await ai.models.generateContentStream({

        model: "models/gemma-4-26b-a4b-it",

        contents: finalPrompt

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