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


import "./SidebarHistory.css";

import SidebarHistoryItem from "./SidebarHistoryItem";

function SidebarHistory({ conversations, activeConversation, setActiveConversation}) {

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

        setActiveConversation(chat.id)

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