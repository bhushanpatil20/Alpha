import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Container from "../Container/Container";
import navigation from "../../../constants/navigation";
import { useEffect, useState } from "react";
import "./Navbar.css";
import { Logo } from "../../common";
import { Button } from "../../ui";

function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className={scrolled ? "navbar navbar-scrolled" : "navbar"}>

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

</ul>

<div className="navbar-actions">

    <NavLink to="/login">
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

    useEffect(() => {

    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);

}

export default Navbar;