import "./AIBackground.css";

function AIBackground() {

    return (

        <div className="ai-network">

            <svg
                viewBox="0 0 600 600"
                className="network-svg"
            >

                {/* Connections */}

                <line x1="120" y1="120" x2="300" y2="170" />

                <line x1="300" y1="170" x2="470" y2="120" />

                <line x1="300" y1="170" x2="180" y2="340" />

                <line x1="180" y1="340" x2="430" y2="410" />

                <line x1="430" y1="410" x2="300" y2="520" />

                {/* Nodes */}

                <circle cx="120" cy="120" r="8"/>

                <circle cx="300" cy="170" r="10"/>

                <circle cx="470" cy="120" r="8"/>

                <circle cx="180" cy="340" r="9"/>

                <circle cx="430" cy="410" r="8"/>

                <circle cx="300" cy="520" r="9"/>

                {/* Data Packet */}

                <circle className="packet" r="5">

                    <animateMotion

                        dur="6s"

                        repeatCount="indefinite"

                        path="M120 120 L300 170 L470 120"

                    />

                </circle>

                <circle className="packet delay1" r="5">

                    <animateMotion

                        dur="7s"

                        repeatCount="indefinite"

                        path="M300 170 L180 340 L430 410 L300 520"

                    />

                </circle>

            </svg>

        </div>

    );

}

export default AIBackground;