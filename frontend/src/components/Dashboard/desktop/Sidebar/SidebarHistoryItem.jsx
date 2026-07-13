import "./SidebarHistoryItem.css";

import { MessageSquare } from "lucide-react";

function SidebarHistoryItem({ chat, onClick }) {

    return (

        <button
            className={`history-item ${chat.active ? "active" : ""}`}
            onClick={onClick}
        >

            <div className="history-icon">

                <MessageSquare size={16} />

            </div>

            <div className="history-content">

                <h5>

                    {chat.title}

                </h5>

                <p>

                    {chat.time}

                </p>

            </div>

        </button>

    );

}

export default SidebarHistoryItem;