import {
    FiHome,
    FiCpu,
    FiClock,
    FiFileText,
    FiStar,
    FiSettings
} from "react-icons/fi";

const dashboardNavigation = [

    {
        id: 1,
        label: "Dashboard",
        path: "/dashboard",
        icon: FiHome
    },

    {
        id: 2,
        label: "Workspace",
        path: "/workspace",
        icon: FiCpu
    },

    {
        id: 3,
        label: "History",
        path: "/history",
        icon: FiClock
    },

    {
        id: 4,
        label: "Templates",
        path: "/templates",
        icon: FiFileText
    },

    {
        id: 5,
        label: "Favorites",
        path: "/favorites",
        icon: FiStar
    },

    {
        id: 6,
        label: "Settings",
        path: "/settings",
        icon: FiSettings
    }

];

export default dashboardNavigation;