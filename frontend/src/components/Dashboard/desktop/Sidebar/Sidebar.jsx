import "./Sidebar.css";

import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarHistory from "./SidebarHistory";

function Sidebar() {

    return (

        <aside className="desktop-sidebar">

            <SidebarProfile />

            <SidebarNav />

            <div className="desktop-sidebar-divider" />

            <SidebarHistory />

        </aside>

    );

}

export default Sidebar;