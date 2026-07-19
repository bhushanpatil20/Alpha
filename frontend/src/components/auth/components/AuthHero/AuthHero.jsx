import "./AuthHero.css";
import "../auth-responsive.css"

function AuthHero() {
    return (
        <section className="auth-hero">

            <span className="hero-badge">
                Meet Alpha
            </span>

            <h1>
                One intelligent workspace
                <br />
                for creating, coding
                <br />
                and researching.
            </h1>

            <p>
                Generate content, analyze documents, write code,
                collaborate with AI, and organize everything in
                one premium workspace.
            </p>

        </section>
    );
}

export default AuthHero;