import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Container from "../Container/Container";

import "./Navbar.css";
import { Logo } from "../../common";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

<Container>

 <div className="navbar-container">

                <Logo/>

                <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                    <li>

                        <NavLink to="/">
                            Home
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/features">
                            Features
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/pricing">
                            Pricing
                        </NavLink>

                    </li>

                    <li>

                        <NavLink to="/login">
                            Login
                        </NavLink>

                    </li>

                    <li>

                        <NavLink
                            to="/register"
                            className="signup-btn"
                        >
                            Sign Up
                        </NavLink>

                    </li>

                </ul>

                {/* <div className="navbar-actions">

                Login

                Get Started

                Menu

            </div> */}

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