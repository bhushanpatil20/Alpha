import "./MobileTopBar.css";
import { TfiAlignRight } from "react-icons/tfi";

function MobileTopBar({ onMenuClick }) {

    return (

        <header className="mobile-topbar">

            <button
                className="mobile-menu-btn"
                onClick={onMenuClick}
            >
                <TfiAlignRight />
            </button>

            <h2 className="mobile-logo">

                ALPHA

            </h2>

            <div className="mobile-avatar">

                P

            </div>

        </header>

    );

}

export default MobileTopBar;