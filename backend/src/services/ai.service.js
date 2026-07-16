import ai from "../config/gemini.js";
import { generateCerebras } from "../config/open.js";

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
    prompt,
    instructions = ""
) => {

    const finalPrompt = instructions
        ? `${instructions}\n\nUser: ${prompt}`
        : prompt;

    return await ai.models.generateContentStream({

        model: "models/gemma-4-26b-a4b-it",

        contents: finalPrompt

    });

};