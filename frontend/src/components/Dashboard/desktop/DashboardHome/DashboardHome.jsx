import React, { useState, useEffect } from "react";
import "./DashboardHome.css";

function DashboardHome({ onNewChat }) {
    const [streamingText, setStreamingText] = useState("");
    const [activeTone, setActiveTone] = useState("Witty");
    const blogDraft = "In the rapidly evolving landscape of digital spaces, holding attention is currency. The secret isn't writing more; it's engineering text hooks that disrupt the scroll mechanism entirely...";
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setStreamingText(blogDraft.slice(0, index));
            index++;
            if (index > blogDraft.length) {
                setTimeout(() => { index = 0; }, 4000); // Pause and reset
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    // --- SEO Optimizer State (Analytics Section) ---
    const [seoScore, setSeoScore] = useState(74);
    const [keywordsChecked, setKeywordsChecked] = useState([true, false, true, false]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeoScore(prev => (prev < 96 ? prev + 1 : 74));
            setKeywordsChecked(prev => [
                true,
                Math.random() > 0.4,
                true,
                Math.random() > 0.5
            ]);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // Static text examples for the Omni-Channel section
    const omniPrompts = {
        linkedin: "🚀 Stop writing boring updates. The algorithm favors conversational storytelling over dense formatting. Here's how to structure your next outline...",
        twitter: "Your content is failing because it lacks a clear hook. 🧵 Here are 3 frameworks to instantly fix your copywriting today:",
        blog: "# The Art of the Micro-Hook\n\nTraditional content relies heavily on long preambles. Modern attention demands immediately valuable structural frameworks..."
    };

    return (
        <div className="dashboard-scroll-container">
            
            {/* SECTION 1: HERO & GENERATIVE WORKSPACE */}
            <section className="dashboard-section">
                <div className="section-header text-center">
                    <p className="home-greeting">Welcome to Alpha</p>
                    <h1 className="home-title">Your Textual Content Engine</h1>
                    <p className="home-description">
                        Generate blogs, orchestrate social media campaigns, and let Alpha 
                        handle the heavy lifting of copywriting. 
                    </p>
                    <button className="home-button" onClick={onNewChat}>
                        + Start Writing
                    </button>
                </div>

                <div className="bento-grid">
                    <div className="bento-card span-2-cols bg-gradient-glow">
                        <span className="badge">Engine v3.2</span>
                        <h2 className="card-title">Live Text Generation</h2>
                        <p className="card-desc">Watch text stream and compile in real-time, optimized by contextual weights.</p>
                        <div className="live-terminal">
                            <div className="terminal-header">
                                <span className="token-type">Format: Long-Form Essay</span>
                                <span className="token-speed">Tokens: 65ch/s</span>
                            </div>
                            <div className="terminal-body text-stream">
                                {streamingText}<span className="text-cursor">|</span>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card flex-center">
                        <h3 className="card-title">Tone Parameter</h3>
                        <div className="tone-selector">
                            {["Professional", "Casual", "Witty", "Bold"].map(tone => (
                                <button 
                                    key={tone} 
                                    className={`tone-btn ${activeTone === tone ? "active" : ""}`}
                                    onClick={() => setActiveTone(tone)}
                                >
                                    {tone}
                                </button>
                            ))}
                        </div>
                        <p className="sub-caption-text">Adjusting lexical weight variations live.</p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: OMNI-CHANNEL STUDIO */}
            <section className="dashboard-section">
                <div className="section-header">
                    <h2 className="section-title">One Prompt. Complete Ubiquity.</h2>
                    <p className="section-desc">Input a raw idea; view targeted text adaptations structured across formats simultaneously.</p>
                </div>
                
                <div className="bento-grid">
                    <div className="bento-card">
                        <div className="card-header-icon">🔗 LinkedIn Format</div>
                        <div className="text-preview-box static-text">{omniPrompts.linkedin}</div>
                        <span className="metrics-tag">Est. Engagement: +42%</span>
                    </div>

                    <div className="bento-card">
                        <div className="card-header-icon">🐦 X Thread Opener</div>
                        <div className="text-preview-box static-text unique-font">{omniPrompts.twitter}</div>
                        <span className="metrics-tag">Character Count: 134/280</span>
                    </div>

                    <div className="bento-card">
                        <div className="card-header-icon">📝 Blog Markdown</div>
                        <div className="text-preview-box static-text code-font">{omniPrompts.blog}</div>
                        <span className="metrics-tag">Read Time: 4 min</span>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SEO & SOCIAL SANDBOX */}
            <section className="dashboard-section">
                <div className="bento-grid">
                    
                    {/* SEO Card */}
                    <div className="bento-card span-2-cols">
                        <h2 className="card-title">Live Text Optimization Diagnostics</h2>
                        <div className="seo-score-container">
                            <div className="score-ring">
                                <span className="score-num">{seoScore}</span>
                                <span className="score-label">SEO Health</span>
                            </div>
                            <div className="score-metrics-list">
                                <div className="metric-bar-item">
                                    <div className="metric-labels">
                                        <span>Readability (Flesch-Kincaid)</span>
                                        <span>{seoScore}%</span>
                                    </div>
                                    <div className="progress-bg"><div className="progress-fill" style={{width: `${seoScore}%`}}></div></div>
                                </div>
                                <div className="metric-bar-item">
                                    <div className="metric-labels">
                                        <span>Keyword Density</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="progress-bg"><div className="progress-fill" style={{width: '85%'}}></div></div>
                                </div>
                            </div>
                        </div>
                        <ul className="checklist">
                            <li className={keywordsChecked[0] ? "checked" : ""}>Primary Keyword in H1</li>
                            <li className={keywordsChecked[1] ? "checked" : ""}>Semantic density threshold check</li>
                            <li className={keywordsChecked[2] ? "checked" : ""}>Meta description length limit</li>
                        </ul>
                    </div>

                    {/* Social Preview Card */}
                    <div className="bento-card style-mock-center">
                        <h2 className="card-title text-center" style={{marginBottom: '16px'}}>Native Rendering</h2>
                        <div className="social-mockup-ui">
                            <div className="mock-profile-row">
                                <div className="mock-avatar"></div>
                                <div className="mock-user-details">
                                    <strong>Bhushan Patil</strong>
                                    <span>Sponsored • Live Preview</span>
                                </div>
                            </div>
                            <div className="mock-content-body">
                                {streamingText || "Waiting for text engine..."}
                            </div>
                            <div className="mock-interaction-bar">
                                <span>👍 1,402</span>
                                <span>💬 84</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            
        </div>
    );
}

export default DashboardHome;