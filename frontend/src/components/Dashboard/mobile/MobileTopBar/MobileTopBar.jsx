import "./MobileTopBar.css";
import { Menu } from "lucide-react";
import useAuth from "../../../../hooks/useAuth";

function MobileTopBar({ onMenuClick }) {
    const { user } = useAuth(); //[cite: 24]
    const displayName = user?.fullName || "Anonymous"; //[cite: 24]
    const displayInitial = displayName.charAt(0).toUpperCase(); //[cite: 24]

    return (
        <header className="mobile-topbar">
            <button
                className="mobile-menu-btn"
                onClick={onMenuClick}
            >
                <Menu size={20} />
            </button>
            
            <h2 className="mobile-logo">
                ALPHA
            </h2>
            
            <div className="mobile-avatar">
                {user?.avatar ? (
                    <img src={user.avatar} alt={displayName} />
                ) : (
                    displayInitial
                )}
            </div>
        </header>
    );
}

export default MobileTopBar;