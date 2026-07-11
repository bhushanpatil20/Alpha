import "./DashboardHero.css";
import getGreeting from "../../../../utils/getGreeting";
import useAuth from "../../../../hooks/useAuth";

function DashboardHero({isWriting}) {

    const { user } = useAuth();

    const firstName = user?.fullName?.split(" ")[0] || "User";

    return (

        <section className={`dashboard-hero ${isWriting ? "hero-hidden" : ""}`}>

            <span className="hero-greeting">

                {getGreeting()},

            </span>

            <h1>

                {firstName}

                <span> 👋</span>

            </h1>

            <p>

                What would you like Alpha to create today?

            </p>

            <small>

                Turn your ideas into blogs, emails, social media posts and much more.

            </small>

        </section>

    );

}

export default DashboardHero;