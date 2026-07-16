import "./AIComposer.css";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import promptSuggestions from "../../../../../constants/promptSuggestions";
import { useChat } from "../../../../../context/ChatContext";

function AIComposer({ onSubmit, onWritingChange }) {
    const { prompt, setPrompt, isGenerating } = useChat();
    const isWriting = prompt.trim().length > 0;
    const textareaRef = useRef(null);

    useEffect(() => {
        onWritingChange?.(isWriting);
    }, [isWriting, onWritingChange]);

    const handleInput = (e) => {
        setPrompt(e.target.value);
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
                            setPrompt(`Write a professional ${item.toLowerCase()} about `);
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
                    placeholder="Ask Alpha anything..."
                    value={prompt}
                    onChange={handleInput}
                    rows={1}
                    maxLength={4000}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            if (prompt.trim()) {
                                onSubmit();
                                handleResetHeight();
                            }
                        }
                    }}
                />
                
                <div className="composer-bottom-bar">
                    <div className="composer-actions">
                        <span className="composer-counter">
                            {prompt.length}/4000
                        </span>
                        <button
                            className={`composer-send ${isGenerating ? "disabled" : ""}`}
                            disabled={!prompt.trim() || isGenerating}
                            onClick={() => {
                                if(prompt.trim()){
                                    onSubmit();
                                    handleResetHeight();
                                }
                            }}
                            aria-label="Send prompt"
                        >
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AIComposer;