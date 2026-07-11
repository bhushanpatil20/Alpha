import "./Sidebar.css";
import dashboardNavigation from "../../../constants/dashboardNavigation";
import SidebarItem from "./SidebarItem";
import Logo from "../../common/Logo/Logo"
import SidebarProfile from "./SidebarProfile";
import { HiOutlineX } from "react-icons/hi";

function Sidebar({sidebarOpen, setSidebarOpen}) {

    return (

        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

            <button className="sidebar-close-btn" onClick={() => setSidebarOpen(false)}>

    <HiOutlineX />

</button>

            <div className="sidebar-top">

                <div className="sidebar-brand">

                    <Logo />

                    <div>

                        <h1>ALPHA</h1>

                        <p>AI Content Studio</p>

                    </div>

                </div>

                <div className="ai-status">

                    <span className="status-dot"></span>

                    <span>AI Ready</span>

                </div>

                
                    <nav className="sidebar-nav">

    {

        dashboardNavigation.map((item) => (

            <SidebarItem

                key={item.id}

                item={item}

                setSidebarOpen={setSidebarOpen}

            />

        ))

    }

</nav>

            </div>

            <SidebarProfile />

        </aside>
        
    );

}

export default Sidebar;