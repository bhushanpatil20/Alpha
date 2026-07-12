import "./AIComposer.css";
import { useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "../../../../../constants/promptSuggestions";

function AIComposer({ value, onChange, onSubmit, onWritingChange }) {

    const isWriting = value.trim().length > 0;

    useEffect(() => {

    onWritingChange?.(isWriting);

}, [isWriting, onWritingChange]);

    return (

        <section className="ai-composer">

            <div className={`composer-card ${isWriting ? "writing" : ""}`}>

                <div className={`composer-intro ${isWriting ? "writing-hidden" : ""}`}>

                    <h3>✨ Start with your idea</h3>

                    <p>

                        Choose a template or start writing your own prompt.

                    </p>

                </div>

                <div className={`composer-chips ${isWriting ? "writing-hidden" : ""}`}>

                    {

                        promptSuggestions.map((item) => (

                            <button

                                key={item}

                                className="composer-chip"

                                onClick={() =>

                                    onChange(

                                        `Write a professional ${item.toLowerCase()} about `

                                    )

                                }

                            >

                                {item}

                            </button>

                        ))

                    }

                </div>

                <textarea

                    className="composer-input"

                    placeholder="Tell Alpha exactly what you'd like to create..."

                    value={value}

                    onChange={(e) => onChange(e.target.value)}

                    rows={3}

                    maxLength={4000}

                    onKeyDown={(e) => {

    if (e.key === "Enter" && !e.shiftKey) {

        e.preventDefault();

        if (value.trim()) {

            onSubmit();

        }

    }

}}

                />

                <div className="composer-footer">

                    <div className="composer-counter">

                        {value.length}/4000

                    </div>

                    <button

                        className="composer-send"

                        disabled={!value.trim()}

                        onClick={onSubmit}

                    >

                        <ArrowUp size={18} />

                    </button>

                </div>

            </div>

        </section>

    );

}

export default AIComposer;