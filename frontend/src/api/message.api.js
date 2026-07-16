import api from "./axios";

export const getMessages = async (conversationId) => {

    const response = await api.get(`/messages/${conversationId}`);

    return response.data.messages;

};

export const createMessage = async ( conversationId, role, content) => {

    const response = await api.post("/messages", { conversationId, role, content });

    return response.data.message;

};


export const streamMessage = async (prompt) => {

    const response = await fetch("http://localhost:5000/api/messages/stream", {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                Authorization: `Bearer ${localStorage.getItem("token")}`

            },

            body: JSON.stringify({

                prompt

            })

        }

    );

    return response;

};