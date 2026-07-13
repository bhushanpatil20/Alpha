import "./SidebarHistory.css";
import SidebarHistoryItem from "./SidebarHistoryItem";
import { openConversation, getConversations } from "../../../../api/conversation.api";

function SidebarHistory({ conversations, activeConversation, setActiveConversation, setConversations}) {

    const history = [

    {

        title: "Today",

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

const handleConversationClick = async (conversationId) => {

    try {

        await openConversation(conversationId);

        const updatedConversations = await getConversations();

        setConversations(updatedConversations);

        setActiveConversation(conversationId);

    }

    catch (error) {

        console.error(error);

    }

};

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

    onClick={() =>

        handleConversationClick(chat.id)

    }

/>

                        ))

                    }

                </div>

            ))}

        </div>

    );

}

export default SidebarHistory;