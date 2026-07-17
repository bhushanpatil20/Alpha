import "./Sidebar.css";
import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarHistory from "./SidebarHistory";
import { useState } from "react";
import NewChatModal from "../NewChatModal/NewChatModal";
import { useChat } from "../../../../context/ChatContext";

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
            <aside className="dash-sidebar">
                <div className="dash-sidebar-scrollable">
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

                <div className="dash-sidebar-bottom">
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