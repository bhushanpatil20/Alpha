import "./SidebarNav.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel";
import useAuth from "../../../../hooks/useAuth";

function SidebarNav({ onNewChat, onLogout }) {
    const { logout } = useAuth(); //[cite: 10]
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (
        <>
            <nav className="desktop-sidebar-nav">
                <button
                    className="desktop-nav-item new-chat-btn"
                    onClick={onNewChat}
                >
                    <BsFillPlusSquareFill size={18} />
                    <span>New</span>
                </button>

                {/* Grouped for alignment within the new sidebar layout */}
                <div className="nav-primary-group">
                    <button 
                        className="desktop-nav-item" 
                        onClick={() => setShowLogoutModal(true)}
                    >
                        <IoLogOut size={18} />
                        <span>Logout</span>
                    </button> 
                </div>
            </nav>

            <ConfirmationModal
                isOpen={showLogoutModal}
                title="Logout"
                message="Are you sure you want to logout from Alpha?"
                confirmText="Logout"
                cancelText="Stay"
                onCancel={() => setShowLogoutModal(false)} //[cite: 10]
                onConfirm={async () => {
                    setShowLogoutModal(false);
                    await logout(); //[cite: 10]
                }}
            />
        </>
    );
}

export default SidebarNav;