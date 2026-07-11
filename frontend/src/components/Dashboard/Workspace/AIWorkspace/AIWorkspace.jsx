import "./AIWorkspace.css";
import { useState } from "react";
import PromptComposer from "../PromptComposer/PromptComposer";

function AIWorkspace({ children }) {

    const [prompt, setPrompt] = useState("");

    return (

        <section className="ai-workspace">

            <div className="workspace-header">

                <div>

                    <span className="workspace-badge">

                        <span className="workspace-status"></span>

                        AI Workspace

                    </span>

                    <h2>

                        Create Content

                    </h2>

                    <p>

                        Describe what you'd like Alpha to generate for you.

                    </p>

                </div>

            </div>

            <div className="workspace-content">

                {children}

            </div>

        </section>

    );

}

export default AIWorkspace;