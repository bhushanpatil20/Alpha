import "./SidebarHistory.css";
import SidebarHistoryItem from "./SidebarHistoryItem";
import { useChat } from "../../../../context/ChatContext";
import { BsChatSquareTextFill } from "react-icons/bs";

function SidebarHistory() {
    const { conversations, activeConversation, handleConversationClick } = useChat();

    return (
        <div className="dash-history-wrapper">
            <div className="dash-history-header">
                <BsChatSquareTextFill size={12} />
                <span>RECENT CHATS</span>
            </div>
            
            <div className="dash-history-list">
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