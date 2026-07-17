import "./SidebarProfile.css";
import useAuth from "../../../../hooks/useAuth";
import { Bell } from "lucide-react";

function SidebarProfile() {
    const { user } = useAuth();

    return (
        <div className="dash-profile-card">
            <div className="dash-profile-left">
                <div className="dash-profile-avatar">
                    {user?.fullName?.charAt(0).toUpperCase() || "T"}
                </div>
                <div className="dash-profile-info">
                    <span className="dash-profile-name">
                        {user?.fullName || user?.email?.split('@')[0] || "tejash123"}
                    </span>
                    <span className="dash-profile-status">Online</span>
                </div>
            </div>
            
            <button className="dash-notification-btn" aria-label="Notifications">
                <Bell size={18} />
            </button>
        </div>
    );
}

export default SidebarProfile;