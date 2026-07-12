import "./MobileHero.css";

function MobileHero({isWriting}) {

    return (

        <section className={`mobile-hero ${isWriting ? "mobile-hero-hidden" : ""}`}>

            <p className="mobile-greeting">

                Good Morning,

            </p>

            <h1>

                Patil 👋

            </h1>

            <p className="mobile-description">

                What would you like Alpha to create today?

            </p>

        </section>

    );

}

export default MobileHero;