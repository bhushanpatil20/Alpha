import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { HiOutlineMenu } from "react-icons/hi";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="dashboard-layout">

            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {

sidebarOpen && (

<div

className="sidebar-overlay"

onClick={() => setSidebarOpen(false)}

/>

)

}

            <main className="dashboard-main">

                <button
                    className="mobile-menu-btn"
                    onClick={() => setSidebarOpen(true)}
                >
                    <HiOutlineMenu />
                </button>

                {children}

            </main>

        </div>

    );

}

export default DashboardLayout;