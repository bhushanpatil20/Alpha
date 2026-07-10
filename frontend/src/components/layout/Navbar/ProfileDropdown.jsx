import { NavLink } from "react-router-dom";
import { FiGrid, FiClock, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import "./ProfileDropdown.css";

function ProfileDropdown({ user, onLogout, closeMenu }) {

    return (

        <div className="profile-dropdown">

            <div className="dropdown-header">

                <div className="dropdown-avatar">

                    {

                        user?.avatar

                            ? (
                                <img
                                    src={user.avatar}
                                    alt={user.fullName}
                                />
                            )

                            : (

                                user?.fullName?.charAt(0).toUpperCase()

                            )

                    }

                </div>

                <div>

                    <h4>{user?.fullName}</h4>

                    <p>{user?.email}</p>

                </div>

            </div>

            <div className="dropdown-divider"></div>

            <NavLink
                to="/dashboard"
                onClick={closeMenu}
            >

                <FiGrid />

                Dashboard

            </NavLink>

            <NavLink
                to="/history"
                onClick={closeMenu}
            >

                <FiClock />

                History

            </NavLink>

            <NavLink
                to="/profile"
                onClick={closeMenu}
            >

                <FiUser />

                Profile

            </NavLink>

            <NavLink
                to="/settings"
                onClick={closeMenu}
            >

                <FiSettings />

                Settings

            </NavLink>

            <div className="dropdown-divider"></div>

            <button
                onClick={onLogout}
            >

                <FiLogOut />

                Logout

            </button>

        </div>

    );

}

export default ProfileDropdown;