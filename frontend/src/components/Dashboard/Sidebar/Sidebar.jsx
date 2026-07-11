import "./Sidebar.css";
import dashboardNavigation from "../../../constants/dashboardNavigation";
import SidebarItem from "./SidebarItem";
import Logo from "../../common/Logo/Logo"
import SidebarProfile from "./SidebarProfile";

function Sidebar() {

    return (

        <aside className="sidebar">

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