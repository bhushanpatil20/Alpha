import { Container } from "../../layout";
import "./Hero.css";
import { NavLink } from "react-router-dom";
import { Button } from "../../ui";
import { HiArrowUpRight } from "react-icons/hi2";
import { HiBolt, HiSparkles, HiCheckBadge } from "react-icons/hi2";

function Hero() {
    return (
        <section className="hero">

            <Container>

                <div className="hero-content">

                    <div className="hero-badge">
                        <HiSparkles className="sparkles"/> Welcome to Alpha
                    </div>

                    <h1 className="hero-title">
                        Your AI-Powered
                        <span> Content Partner</span>
                    </h1>

                    <div className="hero-mobile-action">
                    <NavLink to="/register">
                        <Button>
                                Get Started
                                <HiArrowUpRight className="arrow" />
                        </Button>
                    </NavLink>
                    </div>

                    <div className="hero-description">

    <h2>
        Generate better content faster.
    </h2>

    <p>
        Create blogs, emails, social media posts,
        marketing copy, product descriptions and
        much more using one intelligent AI assistant.
    </p>

    <div className="hero-highlights">

        <div className="highlight-chip">
        <HiBolt className="bolt" />
        <span>Fast</span>
    </div>

    <div className="highlight-chip">
        <HiCheckBadge className="badge" />
        <span>Accurate</span>
    </div>

    <div className="highlight-chip">
        <HiSparkles className="sparkles" />
        <span>Creative</span>
    </div>


    </div>

</div>

                </div>

            </Container>

        </section>
    );
}

export default Hero;