import "./MobileComposer.css";
import { FiArrowUp } from "react-icons/fi";
import mobilePromptSuggestions from "../../../constants/mobilePromptSuggestions";
import { useRef } from "react";

function MobileComposer({ value, onChange, onSubmit }) {
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        onChange(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    const handleResetHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
        }
    };

    const handleSubmit = () => {
        if (value.trim()) {
            onSubmit();
            handleResetHeight();
        }
    };

    return (
        <section className="mobile-composer">
            <div className={`mobile-chip-row ${value.trim() ? "mobile-chip-hidden" : ""}`}>
                {mobilePromptSuggestions.map((item) => (
                    <button
                        key={item.label}
                        className="mobile-chip"
                        onClick={() => {
                            onChange(item.prompt);
                            if (textareaRef.current) {
                                textareaRef.current.style.height = "auto";
                                textareaRef.current.focus();
                            }
                        }}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <div className="mobile-input-card">
                <textarea
                    ref={textareaRef}
                    value={value}
                    onChange={handleInput}
                    placeholder="Tell Alpha what you'd like to create..."
                    className="mobile-input"
                    rows={1}
                    maxLength={4000}
                />
                <div className="mobile-composer-footer">
                    <span>
                        {value.length}/4000
                    </span>
                    <button
                        className="mobile-send-btn"
                        onClick={handleSubmit}
                        disabled={!value.trim()}
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MobileComposer;