import "./MobileSidebar.css";
import { X, LogOut, Plus, History } from "lucide-react";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel";
import { useChat } from "../../../../context/ChatContext";
import { createConversation } from "../../../../api/conversation.api";

function MobileSidebar({ isOpen, onClose }) {
    const { logout, user } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const {
        conversations,
        activeConversation,
        handleConversationClick
    } = useChat();

    const displayName = user?.fullName || "Anonymous";
    const displayInitial = displayName.charAt(0).toUpperCase();

    const handleNewChat = async () => {

    try {

        const conversation = await createConversation({

            title: "New Chat",

            workspace: {

                context: ""

            }

        });

        handleConversationClick(conversation._id);

        onClose();

    } catch (error) {

        console.error(error);

    }

};

    return (
        <>
            <div
                className={`mobile-sidebar-overlay ${isOpen ? "show" : ""}`}
                onClick={onClose}
            />

            <aside className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
                <div className="sidebar-top-section">
                    <div className="sidebar-header">
                        <button className="sidebar-close" onClick={onClose}>
                            <X size={20} />
                        </button>
                    </div>

                    <div className="sidebar-nav">
                        <button
    className="new-chat-btn"
    onClick={handleNewChat}
>
                            <Plus size={18} />
                            <span>New</span>
                        </button>
                    </div>

                    <div className="sidebar-history-container">
                        <div className="history-header-title">
                            <History size={16} />
                            <span>History</span>
                        </div>
                        
                        <div className="sidebar-history">
                            {conversations.map((chat) => (
                                <button
                                    key={chat._id}
                                    className={`history-item ${activeConversation === chat._id ? "active" : ""}`}
                                    onClick={() => {
                                        handleConversationClick(chat._id); 
                                        onClose();
                                    }}
                                >
                                    <span className="history-text">{chat.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="sidebar-bottom-section">
                    <button className="mobile-logout-btn" onClick={() => setShowLogoutModal(true)}>
                        <LogOut size={16} />
                        <span>Logout</span>
                    </button>
                    <div className="mobile-sidebar-divider" />
                    <div className="compact-profile">
                        <div className="compact-avatar">
                            {user?.avatar ? <img src={user.avatar} alt={displayName} /> : displayInitial}
                        </div>
                        <div className="compact-profile-info">
                            <span>{displayName}</span>
                        </div>
                    </div>
                </div>
            </aside>

            <ConfirmationModal
                isOpen={showLogoutModal}
                title="Logout"
                message="Are you sure you want to logout from Alpha?"
                confirmText="Logout"
                cancelText="Stay"
                onCancel={() => setShowLogoutModal(false)}
                onConfirm={async () => {
                    setShowLogoutModal(false);
                    onClose();
                    await logout();
                }}
            />
        </>
    );
}

export default MobileSidebar;