import "./MobileComposer.css";
import { FiArrowUp } from "react-icons/fi";
import mobilePromptSuggestions from "../../../constants/mobilePromptSuggestions";
import { useRef } from "react";
import { useChat } from "../../../context/ChatContext";

function MobileComposer() {
    const {prompt, setPrompt, sendMessage} = useChat();
    const textareaRef = useRef(null);

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

    const handleSubmit = async () => {

    if (!prompt.trim()) return;

    await sendMessage(prompt);

    handleResetHeight();

};

    return (
        <section className="mobile-composer">
            <div className={`mobile-chip-row ${prompt.trim() ? "mobile-chip-hidden" : ""}`}>
                {mobilePromptSuggestions.map((item) => (
                    <button
                        key={item.label}
                        className="mobile-chip"
                        onClick={() => {
                            setPrompt(item.prompt);
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
                    value={prompt}
                    onChange={handleInput}
                    placeholder="Tell Alpha what you'd like to create..."
                    className="mobile-input"
                    rows={1}
                    maxLength={4000}
                />
                <div className="mobile-composer-footer">
                    <span>
                        {prompt.length}/4000
                    </span>
                    <button
                        className="mobile-send-btn"
                        onClick={
                            async ()=>{
                                await handleSubmit();
                            }
                        }
                        disabled={!prompt.trim()}
                    >
                        <FiArrowUp />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default MobileComposer;