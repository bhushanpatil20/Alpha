import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
    return (
        <Link to="/" className="alpha-logo">
            <div className="alpha-logo-icon">
                A
            </div>

            <span className="alpha-logo-text">
                Alpha
            </span>
        </Link>
    );
}

export default Logo;