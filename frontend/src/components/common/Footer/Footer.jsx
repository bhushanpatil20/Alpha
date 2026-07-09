import { NavLink } from "react-router-dom";

import { Logo } from "../../common";

import Container from "../../layout/Container/Container";

import footerLinks from "../../../constants/footerLinks";

import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <Container>

                <div className="footer-grid">

                    <div className="footer-brand">

                        <Logo />

                        <p>

                            AI-powered content generation platform
                            built to help students, professionals,
                            creators and businesses write faster.

                        </p>

                    </div>

                    {

                        footerLinks.map((section) => (

                            <div
                                key={section.title}
                                className="footer-column"
                            >

                                <h4>

                                    {section.title}

                                </h4>

                                {

                                    section.links.map((link) => (

                                        <NavLink

                                            key={link.label}

                                            to={link.path}

                                        >

                                            {link.label}

                                        </NavLink>

                                    ))

                                }

                            </div>

                        ))

                    }

                </div>

                <div className="footer-bottom">

                    <p>

                        © 2026 Alpha. All rights reserved.

                    </p>

                    <span>

                        Version 1.0.0

                    </span>

                </div>

            </Container>

        </footer>

    );

}

export default Footer;