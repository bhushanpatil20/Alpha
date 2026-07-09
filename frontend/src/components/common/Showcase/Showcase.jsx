import "./Showcase.css";
import { Container } from "../../layout";
import showcase from "../../../constants/showcase";
import { HiArrowRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

function Showcase() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

}, []);

const showcaseItems = isMobile ? showcase : [...showcase, ...showcase];

    return (

        <section className="showcase">

            <Container>

                <div className="showcase-header">

                    <h2>
                        What can Alpha create?
                    </h2>

                    <p>

                        Explore some of the content types you can generate
                        with Alpha in just a few seconds.

                    </p>

                </div>

                <div className="showcase-slider">

    <div className="showcase-track">

        {showcaseItems.map((item, index) => {

            const Icon = item.icon;

            return (

                <div
                    key={`${item.id}-${index}`}
                    className="showcase-card"
                >

                    <div className="showcase-icon">
                        <Icon />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <button className="showcase-button">

                        Try Example

                        <HiArrowRight />

                    </button>

                </div>

            );

        })}

    </div>

</div>

            </Container>

        </section>

    );

}

export default Showcase;