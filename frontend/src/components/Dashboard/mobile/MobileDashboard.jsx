import "./MobileDashboard.css";
import { useState } from "react";
import MobileTopBar from "./MobileTopBar/MobileTopBar";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import MobileHero from "./MobileHero";
import MobileComposer from "./MobileComposer";
import { logout } from "../../../api/auth.api";
import { useChat } from "../../../context/ChatContext";
import Conversation from "../desktop/Workspace/Conversations/Conversation";

function MobileDashboard() {
    
    const [isWriting, setIsWriting] = useState(false);
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

            <Conversation />
            
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
            
            <MobileComposer
                onWritingChange={setIsWriting}
            />
        </main>
    );
}

export default MobileDashboard;