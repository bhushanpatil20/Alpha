import { Link } from "react-router-dom";
import LogoImage from "../../../assets/logos/Logo.svg";
import "./Logo.css";

function Logo() {
    return (
        <Link to="/" className="alpha-logo">
            <img
                src={LogoImage}
                alt="Alpha Logo"
                className="alpha-logo-image"
            />

            <span className="alpha-logo-text">
                Alpha
            </span>
        </Link>
    );
}

export default Logo;