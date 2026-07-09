import { NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../Container/Container";
import navigation from "../../../constants/navigation";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { Logo } from "../../common";
import { Button } from "../../ui";
import useAuth from "../../../hooks/useAuth";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, isAuthenticated, logout } = useAuth();


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

    return (

<nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

<Container>

 <div className="navbar-container">

<Logo/>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

    {navigation.map((item) => (

        <li key={item.id}>

            <NavLink
                to={item.path}
                onClick={() => setMenuOpen(false)}
            >
                {item.label}
            </NavLink>

        </li>

    ))}

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

<div className="navbar-actions">

    <NavLink to="/login" className="login-link">
        Login
    </NavLink>

    <Button>
        Get Started
    </Button>

</div>

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