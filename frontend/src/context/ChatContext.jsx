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

    try {

        const content = prompt;
        setPrompt("");

        // Optimistically add the user's message
        const tempUserMessage = {
            _id: `user-${Date.now()}`,
            role: "user",
            content,
            createdAt: new Date().toISOString()
        };

        setMessages(prev => [
            ...prev,
            tempUserMessage
        ]);

        // Show thinking indicator
        setIsGenerating(true);

        // Start streaming
        const response = await streamMessage(activeConversation, content);

        if (!response.ok || !response.body) {
            throw new Error("Unable to start streaming.");
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        let assistantText = "";
        let assistantCreated = false;
        let streamingId = "";
        let streamFinished = false;

        while (true) {

            const { done, value } = await reader.read();

            if (done) {
                break;
            }

            const chunk = decoder.decode(value, { stream: true });

            const lines = chunk.split("\n");

            for (const line of lines) {

                if (!line.startsWith("data: ")) continue;

                const json = line.replace("data: ", "").trim();

                if (!json) continue;

                let data;

                try {

                    data = JSON.parse(json);

                }

                catch {

                    continue;

                }

                // End event
                if (data.done) {

                    streamFinished = true;
                    break;

                }

                // Create assistant message only when first token arrives
                if (!assistantCreated) {

                    assistantCreated = true;

                    streamingId = `assistant-${Date.now()}`;

                    setIsGenerating(false);

                    setMessages(prev => [

                        ...prev,

                        {
                            _id: streamingId,
                            role: "assistant",
                            content: "",
                            createdAt: new Date().toISOString()
                        }

                    ]);

                }

                assistantText += data.text ?? "";

                setMessages(prev =>
                    prev.map(message =>
                        message._id === streamingId
                            ? {
                                  ...message,
                                  content: assistantText
                              }
                            : message
                    )
                );

            }

            if (streamFinished) {
                break;
            }

        }

        // Synchronize with database
        await fetchMessages(activeConversation);

    }

    catch (error) {

        console.error("Streaming message error:", error);

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