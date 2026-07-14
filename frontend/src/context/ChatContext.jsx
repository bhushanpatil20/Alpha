import { createContext, useContext } from "react";
import { getMessages } from "../api/message.api";
import { getConversations, openConversation } from "../api/conversation.api";
const ChatContext = createContext();

export function ChatProvider({

    children,

    value

}) {

    return (

        <ChatContext.Provider value={value}>

            {children}

        </ChatContext.Provider>

    );

}

export function useChat() {

    return useContext(ChatContext);

}

const fetchMessages = async (conversationId) => {

    try {

        const data = await getMessages(conversationId);

        setMessages(data);

    }

    catch(error){

        console.error(error);

    }

};

const handleConversationClick = async (conversationId) => {

    console.log("Clicked:", conversationId);

    await openConversation(conversationId);

    const updatedConversations = await getConversations();

    setConversations(updatedConversations);

    const loadedMessages = await getMessages(conversationId);

    console.log("Loaded Messages:", loadedMessages);

    setMessages(loadedMessages);

    setActiveConversation(conversationId);

};

const sendMessage = async (content) => {

    if (!activeConversation) return;

    try {

        await createMessage(activeConversation, "user", content);

        await fetchMessages(activeConversation);

    }

    catch (error) {

        console.error(error);

    }

};