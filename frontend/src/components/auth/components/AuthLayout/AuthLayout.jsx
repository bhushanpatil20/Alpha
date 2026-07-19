import "./AuthLayout.css";
import AuthHero from "../AuthHero/AuthHero";

function AuthLayout({ children }) {

    return (

        <main className="auth-layout">

            <div className="auth-container">

                <div className="auth-left">

                    <AuthHero />

                </div>

                <div className="auth-right">

                    {children}

                </div>

            </div>

        </main>

    );

}

export default AuthLayout;