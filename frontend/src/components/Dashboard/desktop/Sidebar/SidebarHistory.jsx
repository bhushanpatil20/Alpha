import "./SidebarHistory.css";
import SidebarHistoryItem from "./SidebarHistoryItem";
import { openConversation, getConversations } from "../../../../api/conversation.api";
import { useChat } from "../../../../context/ChatContext";

function SidebarHistory() {

    const {

    conversations,

    activeConversation,

    handleConversationClick

} = useChat();

    const history = [

    {

        title: "",

        chats: conversations.map((conversation) => ({

            id: conversation._id,

            title: conversation.title,

            time: new Date(

                conversation.createdAt

            ).toLocaleTimeString([], {

                hour: "2-digit",

                minute: "2-digit"

            }),

            active:

                activeConversation === conversation._id

        }))

    }

];

    return (

        <div className="desktop-history">

            {history.map((group) => (

                <div
                    key={group.title}
                    className="history-group"
                >

                    <p className="history-heading">

                        {group.title}

                    </p>

                    {

                        group.chats.map((chat) => (

                           <SidebarHistoryItem

    key={chat.id}

    chat={chat}

    onClick={() => handleConversationClick(chat.id)}

/>

                        ))

                    }

                </div>

            ))}

        </div>

    );

}

export default SidebarHistory;