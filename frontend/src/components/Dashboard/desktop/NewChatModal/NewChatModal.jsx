import "./NewChatModal.css";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { createConversation } from "../../../../api/conversation.api";

function NewChatModal({ isOpen, onClose, onCreate }) {
    const [title, setTitle] = useState("");
    const [instructions, setInstructions] = useState("");
    const inputRef = useRef(null);

    const handleCreate = async () => {
        try {
            const conversation = await createConversation({
                title,
                instructions
            });
            onCreate(conversation);
            onClose();
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            setTitle("");
            setInstructions("");
            setTimeout(() => {
                inputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="new-chat-overlay">
            <div className="new-chat-modal">
                <button className="close-btn" onClick={onClose}>
                    <X size={18} />
                </button>
                
                <h2>Create your Workspace</h2>
                <p className="modal-subtitle">
                    Initialize a new generative workspace.
                </p>
                
                <label>Workspace Name</label>
                <input
                    ref={inputRef}
                    type="text"
                    value={title}
                    maxLength={50}
                    placeholder="e.g., LinkedIn Campaign"
                    onChange={(e) => setTitle(e.target.value)}
                />
                
                <label>Context (Optional)</label>
                <textarea
                    rows={5}
                    maxLength={1000}
                    placeholder="Define the tone, target audience, or specific constraints..."
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                
                <div className="instruction-count">
                    {instructions.length}/1000
                </div>
                
                <div className="modal-actions">
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className="create-btn"
                        disabled={title.trim().length < 3}
                        onClick={handleCreate}
                    >
                        Initialize
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NewChatModal;