import ai from "../config/gemini.js";

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