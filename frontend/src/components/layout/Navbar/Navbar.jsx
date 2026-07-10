import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../Container/Container";
import { guestNavigation, userNavigation } from "../../../constants/navigation";
import { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { Logo } from "../../common";
import { Button } from "../../ui";
import useAuth from "../../../hooks/useAuth";
import ProfileDropdown from "./ProfileDropdown";
import toast from "react-hot-toast";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();
    const navigationItems = isAuthenticated ? userNavigation : guestNavigation;
    const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();

    const handleLogout = async () => {

    await logout();

    toast.success("Logout Successfully!");

    navigate("/");

};

useEffect(() => {

    setProfileOpen(false);

}, [location.pathname]);

useEffect(() => {

    const handleResize = () => {

        if (window.innerWidth > 768) {
            setMenuOpen(false);
        }

    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };

}, []);

useEffect(() => {

    const handleClickOutside = (event) => {

        if (

            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)

        ) {

            setProfileOpen(false);

        }

    };

    document.addEventListener(
        "mousedown",
        handleClickOutside
    );

    return () => {

        document.removeEventListener(
            "mousedown",
            handleClickOutside
        );

    };

}, []);

useEffect(() => {

    const handleEscape = (event) => {

        if (event.key === "Escape") {

            setProfileOpen(false);

        }

    };

    document.addEventListener(
        "keydown",
        handleEscape
    );

    return () => {

        document.removeEventListener(
            "keydown",
            handleEscape
        );

    };

}, []);

    return (

<nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

<Container>

 <div className="navbar-container">

<Logo/>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

    {
    navigationItems.map((item) => (

        <li key={item.id}>

            <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
            >
                {item.label}
            </NavLink>

        </li>

    ))
    }

    <li className="mobile-divider"></li>

    <li className="mobile-login">
        <NavLink
            to="/login"
            onClick={() => setMenuOpen(false)}
        >
            Login
        </NavLink>
    </li>

        <li className="mobile-cta">

        <NavLink
        to="/register"
        onClick={() => setMenuOpen(false)}
    >

        <Button>

            Get Started

        </Button>

    </NavLink>

    </li>

</ul>

{
    !isAuthenticated ? (

        <div className="navbar-actions">

            <NavLink
                to="/login"
                className="login-link"
            >
                Login
            </NavLink>

            <Button>
                Get Started
            </Button>

        </div>

    ) : (

 <div className="navbar-profile" ref={ dropdownRef } >

    <button className="profile-button" onClick={
        () =>
            setProfileOpen(!profileOpen)
        }

    >

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

        <span className="profile-name">

            {user?.fullName}

        </span>

    </button>

    {

        profileOpen && (

            <ProfileDropdown

                user={user}

                onLogout={handleLogout}

                closeMenu={() =>
                    setProfileOpen(false)
                }

            />

        )

    }

</div>

    )
}

                <button

                    className="menu-btn"

                    onClick={() =>
                        setMenuOpen(!menuOpen)
                    }

                >

                    {

                        menuOpen

                            ? <HiOutlineX />

                            : <HiOutlineMenu />

                    }

                </button>

            </div>

</Container>

        </nav>

    );

}

export default Navbar;