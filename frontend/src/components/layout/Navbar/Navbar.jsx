import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

import "./Navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <div className="navbar-container">

                <Link
                    to="/"
                    className="logo"
                >
                    α Alpha
                </Link>

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

        </nav>

    );

}

export default Navbar;