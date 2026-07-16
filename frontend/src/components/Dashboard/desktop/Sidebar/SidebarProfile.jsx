import "./SidebarProfile.css";
import useAuth from "../../../../hooks/useAuth";
import { Bell } from "lucide-react";

function SidebarProfile() {
    const { user } = useAuth();

    return (
        <div className="compact-profile">
            <div className="compact-avatar">
                {user?.avatar ? (
                    <img src={user.avatar} alt={user.fullName} />
                ) : (
                    user?.fullName?.charAt(0).toUpperCase() || "U"
                )}
            </div>
            <div className="compact-profile-info">
                <span>{user?.email ? user.email.split('@')[0] : "User"}</span>
            </div>
            <button className="profile-notification-btn">
                <Bell size={16} />
            </button>
        </div>
    );
}

export default SidebarProfile;