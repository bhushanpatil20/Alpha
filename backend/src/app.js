import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import conversationRoutes from "./routes/conversation.routes.js"
import messageRoutes from "./routes/message.route.js"
import { generateResponse } from "./services/ai.service.js";
import ai from "./config/gemini.js";
import { generateAIResponse } from "./services/ai.service.js";
import axios from "axios";
import "./config/env.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/conversations", conversationRoutes);

app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.send("Alpha Backend Running 🚀");
});

app.get("/test", async (req, res) => {

    try {

        const reply = await generateResponse(
            "Tell the name of any fruit in your mind"
        );

        console.log(reply);

        res.send(reply);

    }

   catch (error) {

    console.error("Gemini Error:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack
    });

}

});

app.get("/open", async (req, res) => {

    try {

        const reply = await generateAIResponse(
            "What is the name of your mother?"
        );

        console.log(reply);

        res.send(reply);

    }

   catch (error) {

    console.error("OpenRouter Error:");
    console.error(error);

    res.status(500).json({
        success: false,
        message: error.message,
        stack: error.stack
    });

}

});

app.get("/models", async (req, res)=>{
    const response = await axios.get(
  "https://api.cerebras.ai/v1/models",
  {
    headers: {
      Authorization: `Bearer ${process.env.CEREBRAS_API_KEY}`,
    },
  }
);

console.log(response.data);
})

export default app;

import errorHandler from "./middleware/error.middleware.js";

app.use(errorHandler);