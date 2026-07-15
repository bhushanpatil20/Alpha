import ai from "../config/gemini.js";
import { generateCerebras } from "../config/open.js";

export const generateResponse = async (prompt, instructions = "") => {

    const finalPrompt = instructions
        ? `${instructions}\n\nUser: ${prompt}`
        : prompt;

    const response = await ai.models.generateContent({

        model: "gemini-flash-latest",

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