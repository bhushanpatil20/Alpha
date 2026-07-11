import "./PromptComposer.css";
import promptSuggestions from "../../../../constants/promptSuggestions";

function PromptComposer({ value, onChange, onSubmit }) {
    return (
        <div className="prompt-composer">

            {/* Placeholder */}

            {!value && (
                <div className="prompt-placeholder">

                    <h3>
                        ✨ Start with your idea
                    </h3>

                    <p>
                        Describe what you'd like Alpha to create.
                    </p>

                </div>
            )}

            {/* Suggestion Chips */}

            <div className="prompt-suggestions">

                {promptSuggestions.map((item) => (
                    <button
                        key={item}
                        className="suggestion-chip"
                        onClick={() =>
                            onChange(
                                `Write a professional ${item.toLowerCase()} about `
                            )
                        }
                    >
                        {item}
                    </button>
                ))}

            </div>

            {/* Prompt Input */}

            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                maxLength={4000}
            />

            {/* Footer */}

            <div className="prompt-footer">

                <span className="character-counter">
                    {value.length}/4000
                </span>

                <button
                    className="send-btn"
                    disabled={!value.trim()}
                    onClick={onSubmit}
                >
                    ↑
                </button>

            </div>

        </div>
    );
}

export default PromptComposer;