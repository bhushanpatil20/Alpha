import "./MobileDashboard.css";
import { useState } from "react";
import MobileTopBar from "./MobileTopBar/MobileTopBar";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import MobileComposer from "./MobileComposer";
import { logout } from "../../../api/auth.api";
import { useChat } from "../../../context/ChatContext";
import Conversation from "../desktop/Workspace/Conversations/Conversation";

function MobileDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const {
        conversations,
        setConversations,
        activeConversation,
        setActiveConversation,
        messages,
        setMessages,
        isGenerating,
        setIsGenerating,
        handleConversationClick,
        prompt,
        setPrompt,
        sendMessage
    } = useChat();

    return (
        <main className="mobile-dashboard">
            <MobileTopBar
                onMenuClick={() => setIsSidebarOpen(true)}
            />

            <div className="mobile-content">
                <Conversation messages={messages} />
            </div>
            
            <MobileSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onLogout={logout}
                conversations={conversations}
                setConversations={setConversations}
                activeConversation={activeConversation}
                setActiveConversation={setActiveConversation}
                onConversationClick={handleConversationClick}
            />
            
            <MobileComposer />
        </main>
    );
}

export default MobileDashboard;