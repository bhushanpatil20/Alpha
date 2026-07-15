import "./env.js";
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

console.log("Gemini Key:", process.env.GEMINI_API_KEY?.substring(0, 10));

export default ai;