import "./AuthLayout.css";
import { Logo } from "../../common";
import { RiSparklingLine } from "react-icons/ri";
import { FiLayers, FiShield } from "react-icons/fi";
import AIBackground from "../AIBackground/AIBackground";

function AuthLayout({

    title,

    subtitle,

    children

}) {

    return (

        <main className="auth-layout">

            <section className="auth-left">

                <AIBackground />

                <Logo />

                <span className="auth-badge">

                    Welcome to Alpha

                </span>

                <h1>

                    Build smarter content with AI.

                </h1>

                <p>

                    Generate blogs, emails, product descriptions,
                    captions and marketing copy within seconds.

                </p>

                <div className="auth-feature-list">

                    <div className="auth-feature">

                        <RiSparklingLine />

                        <span>

                            Lightning-fast AI generation

                        </span>

                    </div>

                    <div className="auth-feature">

                        <FiLayers />

                        <span>

                            Premium prompt templates

                        </span>

                    </div>

                    <div className="auth-feature">

                        <FiShield />

                        <span>

                            Secure cloud workspace

                        </span>

                    </div>

                </div>

            </section>

            <section className="auth-right">

                <div className="auth-card">

                    <h2>{title}</h2>

                    <p>{subtitle}</p>

                    {children}

                </div>

            </section>

        </main>

    );

}

export default AuthLayout;