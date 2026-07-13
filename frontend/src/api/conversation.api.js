import api from "./axios";

export const createConversation = async (data) => {

    const response = await api.post(
        "/conversations",
        data
    );

    return response.data.conversation;

};

export const getConversations = async () => {

    const response = await api.get(

        "/conversations"

    );

    return response.data.conversations;

};

export const openConversation = async ( conversationId ) => {

    const response = await api.patch(

        `/conversations/${conversationId}/open`

    );

    return response.data.conversation;

};
