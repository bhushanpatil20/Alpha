import "./MobileTopBar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import useAuth from "../../../../hooks/useAuth";

function MobileTopBar({ onMenuClick }) {
    const {user} = useAuth();
    const displayName = user?.fullName || "Anonymous";
    const displayInitial = displayName.charAt(0).toUpperCase();
    return (
        <header className="mobile-topbar">
            <button
                className="mobile-menu-btn"
                onClick={onMenuClick}
            >
                <HiMenuAlt2 />
            </button>
            
            <h2 className="mobile-logo">
                ALPHA
            </h2>
            
            <div className="mobile-avatar">
                {user?.avatar ? <img src={user.avatar} alt={displayName} /> : displayInitial}
            </div>
        </header>
    );
}

export default MobileTopBar;