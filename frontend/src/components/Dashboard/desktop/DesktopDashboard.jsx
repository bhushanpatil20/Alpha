import "./DesktopDashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import { logout } from "../../../api/auth.api";
import Workspace from "./Workspace/Workspace";
import AIComposer from "../desktop/Workspace/AIComposer/AIComposer";
import DashboardHome from "./DashboardHome/DashboardHome";
import { useState } from "react";
import Conversation from "./Workspace/Conversations/Conversation";
import { useChat } from "../../../context/ChatContext";

function DesktopDashboard() {
    const [isWriting, setIsWriting] = useState(false);
    const [showNewChatModal, setShowNewChatModal] = useState("");

    const { 
        sendStreamingMessage,
        prompt,
        conversations, 
        setConversations, 
        activeConversation, 
        setActiveConversation, 
        messages, 
        handleConversationClick 
    } = useChat();

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        await sendStreamingMessage(prompt);
        console.log("sendStreamingMessage called");
    };

    return (
        <div className="desktop-dashboard">
            <Sidebar
                onLogout={logout}
                conversations={conversations}
                setConversations={setConversations}
                activeConversation={activeConversation}
                setActiveConversation={setActiveConversation}
                onConversationClick={handleConversationClick}
            />

            {activeConversation ? (
                <Workspace
                    conversation={<Conversation messages={messages} />}
                    composer={
                        <AIComposer
                            onSubmit={handleGenerate}
                            onWritingChange={setIsWriting}
                        />
                    }
                    messages={messages}
                />
            ) : (
                <DashboardHome
                    onNewChat={() => setShowNewChatModal(true)}
                />
            )}
        </div>
    );
}

export default DesktopDashboard;