import "./SidebarHistoryItem.css";

function SidebarHistoryItem({ chat, onClick }) {
    return (
        <button
            className={`dash-history-item ${chat.active ? "active" : ""}`}
            onClick={onClick}
            title={chat.title}
        >
            <span className="dash-history-text">{chat.title}</span>
        </button>
    );
}

export default SidebarHistoryItem;