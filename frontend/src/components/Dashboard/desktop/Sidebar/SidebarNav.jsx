import "./SidebarNav.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import { useState } from "react";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel"

function SidebarNav({ onNewChat, onLogout }) {

    const [showLogoutModal, setShowLogoutModal] = useState(false);

    return (

        <>

        <nav className="desktop-sidebar-nav">

            <button
                className="desktop-nav-item"
                onClick={onNewChat}
            >

                <BsFillPlusSquareFill size={18}/>

                <span>New Chat</span>

            </button>

             <button className="desktop-nav-item" onClick={() => setShowLogoutModal(true)}>

                <IoLogOut size={18} />

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

        await onLogout();

    }}

/>

</>

    );

}

export default SidebarNav;