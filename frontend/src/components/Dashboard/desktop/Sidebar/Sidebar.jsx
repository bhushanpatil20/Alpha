import "./Sidebar.css";
import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarHistory from "./SidebarHistory";
import { useState } from "react";
import NewChatModal from "../NewChatModal/NewChatModal";
import { useChat } from "../../../../context/ChatContext";
import { Layout } from "lucide-react"; 
function Sidebar({ onLogout }) {
    const [showNewChatModal, setShowNewChatModal] = useState(false);

    const {
        conversations,
        setConversations,
        activeConversation,
        setActiveConversation,
        handleConversationClick,
        fetchConversations
    } = useChat();

    const handleConversationCreated = async (conversation) => {
        await fetchConversations();
        setActiveConversation(conversation._id);
        setShowNewChatModal(false);
    };

    return (
        <>
            <aside className="desktop-sidebar">
                <div className="sidebar-top-section">
                    

                    <SidebarNav
                        onLogout={onLogout}
                        onNewChat={() => setShowNewChatModal(true)}
                    />

                    <SidebarHistory
                        conversations={conversations}
                        activeConversation={activeConversation}
                        setActiveConversation={setActiveConversation}
                        setConversations={setConversations}
                        onConversationClick={handleConversationClick}
                    />
                </div>

                <div className="sidebar-bottom-section">
                    <div className="desktop-sidebar-divider" />
                    <SidebarProfile />
                </div>
            </aside>

            <NewChatModal
                isOpen={showNewChatModal}
                onClose={() => setShowNewChatModal(false)}
                onCreate={handleConversationCreated}
            />
        </>
    );
}

export default Sidebar;