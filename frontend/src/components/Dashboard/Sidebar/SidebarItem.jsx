import { NavLink } from "react-router-dom";

function SidebarItem({ item }) {

    const Icon = item.icon;

    return (

        <NavLink
            to={item.path}
            className={({ isActive }) =>
                isActive
                    ? "sidebar-item active"
                    : "sidebar-item"
            }
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