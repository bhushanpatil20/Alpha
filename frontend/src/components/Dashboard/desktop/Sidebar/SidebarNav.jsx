import "./SidebarNav.css";
import { BsPlusLg } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { useState } from "react";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel";
import useAuth from "../../../../hooks/useAuth";

function SidebarNav({ onNewChat, onLogout }) {
    const { logout } = useAuth();
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <>
            <nav className="dash-nav-container">
                <button
                    className="dash-nav-btn dash-btn-new"
                    onClick={onNewChat}
                >
                    <BsPlusLg size={16} className="dash-btn-icon dash-btn-new" />
                    <span>New Chat</span>
                </button>

                <button 
                    className="dash-nav-btn dash-btn-logout" 
                    onClick={() => setShowLogoutModal(true)}
                >
                    <IoLogOutOutline size={18} className="dash-btn-icon" />
                    <span>Logout</span>
                </button> 
            </nav>

            <ConfirmationModal
                isOpen={showLogoutModal}
                title="Logout"
                message="Are you sure you want to logout from Alpha?"
                confirmText="Logout"
                cancelText="Stay"
                onCancel={() => setShowLogoutModal(false)}
                onConfirm={async () => {
                    setShowLogoutModal(false);
                    await logout();
                }}
            />
        </>
    );
}

export default SidebarNav;