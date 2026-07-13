import api from "./axios";

export const createConversation = async (data) => {

    const response = await api.post(
        "/conversations",
        data
    );

    return response.data.conversation;

};