import "./SidebarProfile.css";

import useAuth from "../../../../hooks/useAuth";

function SidebarProfile() {

    const { user } = useAuth();

    return (

        <div className="desktop-profile">

            <div className="desktop-avatar">

                {
                    user?.avatar ? (

                        <img
                            src={user.avatar}
                            alt={user.fullName}
                        />

                    ) : (

                        user?.fullName?.charAt(0).toUpperCase()

                    )
                }

            </div>

            <h3>

                {user?.fullName}

            </h3>

            <p>

                {user?.email}

            </p>

        </div>

    );

}

export default SidebarProfile;