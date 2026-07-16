import "./SidebarHistory.css";
import SidebarHistoryItem from "./SidebarHistoryItem";
import { useChat } from "../../../../context/ChatContext";
import { BsChatLeftDotsFill } from "react-icons/bs";

function SidebarHistory() {
    const { conversations, activeConversation, handleConversationClick } = useChat();

    return (
        <div className="desktop-history">
            <div className="history-header">
                <BsChatLeftDotsFill size={16} />
                <br/>
                <span>Chats</span>
            </div>
            
            <div className="history-list">
                {conversations.map((chat) => (
                    <SidebarHistoryItem
                        key={chat._id}
                        chat={{
                            id: chat._id,
                            title: chat.title,
                            active: activeConversation === chat._id
                        }}
                        onClick={() => handleConversationClick(chat._id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default SidebarHistory;