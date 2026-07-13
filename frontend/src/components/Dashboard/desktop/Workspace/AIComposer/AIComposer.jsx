import "./AIComposer.css";
import { useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";
import promptSuggestions from "../../../../../constants/promptSuggestions";

function AIComposer({ value, onChange, onSubmit, onWritingChange }) {
    const isWriting = value.trim().length > 0;
    const textareaRef = useRef(null);

    useEffect(() => {
        onWritingChange?.(isWriting);
    }, [isWriting, onWritingChange]);

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

    return (
        <section className="ai-composer">
            <div className={`composer-chips ${isWriting ? "writing-hidden" : ""}`}>
                {promptSuggestions.map((item) => (
                    <button
                        key={item}
                        className="composer-chip"
                        onClick={() => {
                            onChange(`Write a professional ${item.toLowerCase()} about `);
                            if (textareaRef.current) {
                                textareaRef.current.focus();
                            }
                        }}
                    >
                        {item}
                    </button>
                ))}
            </div>

            <div className={`composer-card ${isWriting ? "writing" : ""}`}>
                <textarea
                    ref={textareaRef}
                    className="composer-input"
                    placeholder="Tell Alpha exactly what you'd like to create..."
                    value={value}
                    onChange={handleInput}
                    rows={1}
                    maxLength={4000}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (value.trim()) {
                                onSubmit();
                                handleResetHeight();
                            }
                        }
                    }}
                />
                <div className="composer-actions">
                    <span className="composer-counter">
                        {value.length}/4000
                    </span>
                    <button
                        className="composer-send"
                        disabled={!value.trim()}
                        onClick={() => {
                            onSubmit();
                            handleResetHeight();
                        }}
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default AIComposer;