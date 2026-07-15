import { getMessages, createMessage} from "../api/message.api";
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

// const sendMessage = async (content) => {

//        console.log({
//         activeConversation,
//         isGenerating,
//         content
//     });

//     if (!activeConversation || !isGenerating) return;

//     try {

//         await createMessage(activeConversation, "user", content);
//         await fetchMessages(activeConversation);
//         await fetchConversations();
//         setPrompt("");
//     }

//     catch (error) {

//         console.error(error);

//     }
//     finally {
//         setIsGenerating(false);
//     }

// };

const sendMessage = async (content) => {

    console.log("1. sendMessage started");

    if (!activeConversation || isGenerating) return;

    setIsGenerating(true);

    try {

        console.log("2. Calling createMessage...");

        await createMessage(
            activeConversation,
            "user",
            content
        );

        console.log("3. createMessage finished");

        await fetchMessages(activeConversation);

        console.log("4. fetchMessages finished");

        await fetchConversations();

        console.log("5. fetchConversations finished");

        setPrompt("");

        console.log("6. Prompt cleared");

    }

    catch (error) {

        console.error("sendMessage Error:", error);

    }

    finally {

        setIsGenerating(false);

        console.log("7. Finished");

    }

};

    return (

        <ChatContext.Provider value={
            {
            conversations, activeConversation, setActiveConversation, messages, 
            isGenerating, showWorkspace, fetchConversations, fetchMessages, handleConversationClick,
            sendMessage, setShowWorkspace, prompt, setPrompt, isGenerating
            }
        }>

            {children}

        </ChatContext.Provider>

    );

}

export function useChat() {

    return useContext(ChatContext);

}