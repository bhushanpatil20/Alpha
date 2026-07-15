import axios from "axios";
import "./env.js"

const API_URL = "https://api.cerebras.ai/v1/chat/completions";

export const generateCerebras = async (messages) => {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: "gpt-oss-120b",
                messages,
                temperature: 0.7,
                max_tokens: 4096,
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(
            "Cerebras Error:",
            error.response?.data || error.message
        );
        throw error;
    }
};

