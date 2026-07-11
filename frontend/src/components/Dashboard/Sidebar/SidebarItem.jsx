import { NavLink } from "react-router-dom";

function SidebarItem({ item, setSidebarOpen }) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-item active"
                    : "sidebar-item"
            }

            onClick={() => {

        if(window.innerWidth <= 768){

            setSidebarOpen(false);

        }

    }}

        >

            <span className="sidebar-item-indicator"></span>

            <Icon className="sidebar-icon" />

            <span className="sidebar-label">

                {item.label}

            </span>

        </NavLink>

    );

}

export default SidebarItem;