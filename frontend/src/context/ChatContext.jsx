import { getMessages, createMessage, streamMessage} from "../api/message.api";
import { getConversations, openConversation } from "../api/conversation.api";
import { useContext, createContext, useEffect, useState } from "react";
const ChatContext = createContext();

export function ChatProvider({ children }) {

    const [conversations, setConversations] = useState([]);
    const [activeConversation, setActiveConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showWorkspace, setShowWorkspace] = useState(false);
    const [prompt, setPrompt] = useState("");

     const fetchConversations = async () => {

        try {

            const data = await getConversations();

             console.log("Fetched conversations:", data);

            setConversations(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    useEffect(() => {

    fetchConversations();

}, []);

useEffect(() => {

    setPrompt("");

}, [activeConversation]);

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

    if (!activeConversation || isGenerating) return;
    setPrompt("");
    setIsGenerating(true);
    try {
        await createMessage(activeConversation, "user", content);
        await fetchMessages(activeConversation);
        await fetchConversations();
    }

    catch (error) {

        console.error("sendMessage Error:", error);

    }

    finally {

        setIsGenerating(false);

    }

};

const sendStreamingMessage = async (content) => {

    if (!activeConversation || isGenerating) return;
    setPrompt("");
    setIsGenerating(true);
    try {
        await streamMessage(activeConversation, "user", content);
        await fetchMessages(activeConversation);
        await fetchConversations();
    }

    catch (error) {

        console.error("sendStreamingMessage Error:", error);

    }

    finally {

        setIsGenerating(false);

    }

};

    return (

        <ChatContext.Provider value={
            {
            conversations, activeConversation, setActiveConversation, messages, 
            isGenerating, showWorkspace, fetchConversations, fetchMessages, handleConversationClick,
            sendMessage, sendStreamingMessage, setShowWorkspace, prompt, setPrompt, isGenerating
            }
        }>

            {children}

        </ChatContext.Provider>

    );

}

export function useChat() {

    return useContext(ChatContext);

}