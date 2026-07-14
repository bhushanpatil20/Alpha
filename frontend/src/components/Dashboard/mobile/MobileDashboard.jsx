import "./MobileDashboard.css";
import { useState } from "react";
import MobileTopBar from "./MobileTopBar/MobileTopBar";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import MobileHero from "./MobileHero";
import MobileComposer from "./MobileComposer";
import { logout } from "../../../api/auth.api";
import { useChat } from "../../../context/ChatContext";

function MobileDashboard() {
    
    const [prompt, setPrompt] = useState("");
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

    sendMessage

} = useChat();

    const handleGenerate = async () => {
        await sendMessage(prompt);
        setPrompt("");
    };

    return (
        <main className="mobile-dashboard">
            <MobileTopBar
                onMenuClick={() => setIsSidebarOpen(true)}
            />
            
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
                value={prompt}
                onChange={setPrompt}
                onSubmit={handleGenerate}
                onWritingChange={setIsWriting}
            />
        </main>
    );
}

export default MobileDashboard;