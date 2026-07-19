import "./AuthCard.css";

function AuthCard({ title, subtitle, children }) {
    return (
        <section className="auth-card">

            <header className="auth-card-header">

                <h2>{title}</h2>

                <p>{subtitle}</p>

            </header>

            <div className="auth-card-body">

                {children}

            </div>

        </section>
    );
}

export default AuthCard;