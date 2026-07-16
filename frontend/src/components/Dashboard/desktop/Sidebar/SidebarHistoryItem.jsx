import "./SidebarHistoryItem.css";

function SidebarHistoryItem({ chat, onClick }) {
    return (
        <button
            className={`history-item ${chat.active ? "active" : ""}`}
            onClick={onClick}
        >
            <span className="history-text">{chat.title}</span>
        </button>
    );
}

export default SidebarHistoryItem;