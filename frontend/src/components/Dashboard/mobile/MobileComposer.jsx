import "./MobileComposer.css"
import { FiArrowUp } from "react-icons/fi";
import mobilePromptSuggestions from "../../../constants/mobilePromptSuggestions";
import { useRef } from "react";

function MobileComposer({ value, onChange, onSubmit }) {

    const textareaRef = useRef(null);

    return (

        <section className="mobile-composer">

            <div className={`mobile-chip-row ${value.trim() ? "mobile-chip-hidden" : ""}`}>

                {!value.trim() && (

    <div className="mobile-chip-row">

        {mobilePromptSuggestions.map((item) => (

            <button

                key={item.label}

                className="mobile-chip"

                onClick={() => {
                    onChange(item.prompt)

                    textareaRef.current?.focus();
                }
            }

            >

                {item.label}

            </button>

        ))}

    </div>

)}

            </div>

            <div className={`mobile-input-card ${value.trim() ? "writing" : ""}`}>

                <textarea

                    ref={textareaRef}

                    value={value}

                    onChange={(e)=>onChange(e.target.value)}

                    placeholder="Tell Alpha exactly what you'd like to create..."

                    className="mobile-input"

                />

                <div className="mobile-composer-footer">

                    <span>

                        {value.length}/4000

                    </span>

                    <button

                        className="mobile-send-btn"

                        onClick={onSubmit}

                    >

                        <FiArrowUp />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default MobileComposer;