import "./Sidebar.css";

import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarHistory from "./SidebarHistory";

function Sidebar({logout}) {

    return (

        <aside className="desktop-sidebar">

            <SidebarProfile />

            <SidebarNav onLogout={logout}/>

            <div className="desktop-sidebar-divider" />

            <SidebarHistory />

        </aside>

    );

}

export default Sidebar;