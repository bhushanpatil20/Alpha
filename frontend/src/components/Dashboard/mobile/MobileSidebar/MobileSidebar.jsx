import "./MobileSidebar.css";
import { X, LogOut, MessageSquare } from "lucide-react";
import { RiCloseLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel";
import { openConversation, getConversations } from "../../../../api/conversation.api";

function MobileSidebar({ isOpen, onClose, conversations, setConversations, activeConversation, setActiveConversation }) {
    const { logout, user } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const displayName = user?.fullName || "Anonymous";
    const displayInitial = displayName.charAt(0).toUpperCase();

    const handleConversationClick = async (conversationId) => {
        try {
            await openConversation(conversationId);
            const updated = await getConversations();
            setConversations(updated);
            setActiveConversation(conversationId);
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
                <button className="sidebar-close" onClick={onClose}>
                    <RiCloseLine size={18} />
                </button>

                <div className="sidebar-profile">
                    <div className="sidebar-avatar">
                        {user?.avatar ? <img src={user.avatar} alt={displayName} /> : displayInitial}
                    </div>
                    <div className="sidebar-profile-details">
                        <h3>{displayName}</h3>
                        <p>{user?.email || "AI Architect"}</p>
                    </div>
                </div>

                <div className="sidebar-nav">
                    <button onClick={onClose}>
                        <TiPlus size={18} />
                        <span>New Chat</span>
                    </button>
                    <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>
                        <LogOut size={18} />
                        <span>Logout</span>
                    </button>
                </div>

                <div className="sidebar-history-divider" />

                <p className="history-heading">Recent</p>
                
                <div className="sidebar-history">
                    {conversations.map((chat) => (
                        <button
                            key={chat._id}
                            className={`history-item ${activeConversation === chat._id ? "active" : ""}`}
                            onClick={() => handleConversationClick(chat._id)}
                        >
                            <MessageSquare size={16} />
                            <div className="history-content">
                                <span>{chat.title}</span>
                                <small>
                                    {new Date(chat.updatedAt).toLocaleDateString()}
                                </small>
                            </div>
                        </button>
                    ))}
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