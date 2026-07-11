import { FiUser, FiLogOut } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";
import "./Sidebar.css";

const [showLogoutModal, setShowLogoutModal] = useState(false);

function SidebarProfile() {

    const { user, logout } = useAuth();

    const handleLogout = async () => {

        await logout();

    };

    return (

        <div className="sidebar-profile">

            <div className="profile-header">

                <div className="profile-avatar">

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

            <div className="profile-actions">

                <button>

                    <FiUser />

                    My Profile

                </button>

                <button

                    onClick={() => setShowLogoutModal(true)}

                >

                    <FiLogOut />

                    Logout

                </button>

            </div>

        </div>

        

    );

}

export default SidebarProfile;