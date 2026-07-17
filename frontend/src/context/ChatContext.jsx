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

const sendStreamingMessage = async () => {

    if (!prompt.trim()) return;

    const content = prompt;

    setPrompt("");

    const now = new Date().toISOString();

    const tempUserMessage = {

    _id: `user-${Date.now()}`,

    role: "user",

    content,

    createdAt: now

};

const streamingId = `streaming-${Date.now()}`;

const tempAssistantMessage = {
    _id: streamingId,
    role: "assistant",
    content: "",
    createdAt: now
};

setMessages(prev => [

    ...prev,

    tempUserMessage,

    tempAssistantMessage

]);

const response = await streamMessage(activeConversation._id, content);

const reader = response.body.getReader();

const decoder = new TextDecoder();

let assistantText = "";

while (true) {

    const { done, value } = await reader.read();

    const chunk = decoder.decode(value, { stream: true });

const lines = chunk.split("\n");

for (const line of lines) {

    if (!line.startsWith("data: ")) continue;

    const json = line.replace("data: ", "");

    if (!json) continue;

    try {

       const data = JSON.parse(json);

            if (data.done) {

    await fetchMessages(activeConversation._id);

    return;

}

assistantText += data.text;

        setMessages(prev => {

    console.log(
        "Streaming messages:",
        prev.filter(message => message._id.startsWith("streaming"))
    );

    return prev.map(message =>
        message._id === streamingId
            ? {
                ...message,
                content: assistantText
            }
            : message
    );

});

    }

    catch(error){

        console.error(error);

    }

} 

    }

}

    return (

        <ChatContext.Provider value={
            {
            conversations, activeConversation, setActiveConversation, messages, 
            isGenerating, showWorkspace, fetchConversations, fetchMessages, handleConversationClick,
            sendMessage, sendStreamingMessage, setShowWorkspace, prompt, setPrompt
            }
        }>

            {children}

        </ChatContext.Provider>

    );

};

export function useChat() {

    return useContext(ChatContext);

}