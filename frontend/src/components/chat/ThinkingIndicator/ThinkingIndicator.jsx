import { useEffect, useState } from "react";
import "./ThinkingIndicator.css";

const thinkingMessages = [
    "Thinking",
    "Analyzing your request",
    "Planning the response",
    "Searching for the best answer",
    "Almost there..."
];

function ThinkingIndicator() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex((prev) => (prev + 1) % thinkingMessages.length);

        }, 1800);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="assistant-message thinking-message">

            <div className="thinking-container">

                <span className="thinking-text">

                    {thinkingMessages[index]}

                </span>

                <div className="thinking-dots">

                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>

        </div>

    );

}

export default ThinkingIndicator;