import "./SidebarNav.css";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

function SidebarNav({ onNewChat, onLogout }) {

    return (

        <nav className="desktop-sidebar-nav">

            <button
                className="desktop-nav-item"
                onClick={onNewChat}
            >

                <BsFillPlusSquareFill size={18}/>

                <span>New Chat</span>

            </button>

            <button
                className="desktop-nav-item"
                onClick={onLogout}
            >

                <IoLogOut size={18} />

                <span>Logout</span>

            </button>

        </nav>

    );

}

export default SidebarNav;