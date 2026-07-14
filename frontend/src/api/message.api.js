import api from "./axios";

export const getMessages = async (conversationId) => {

    const response = await api.get(`/messages/${conversationId}`);

    return response.data.messages;

};

export const createMessage = async ( conversationId, role, content) => {

    const response = await api.post("/messages", { conversationId, role, content });

    return response.data.message;

};