const history = [

    {
        title: "Today",
        chats: [
            {
                id: 1,
                title: "Build React Dashboard",
                time: "Today • 2:35 PM",
                active: true
            },
            {
                id: 2,
                title: "AI Startup Ideas",
                time: "Today • 11:40 AM"
            }
        ]
    },

    {
        title: "Yesterday",
        chats: [
            {
                id: 3,
                title: "Resume Improvements",
                time: "Yesterday • 6:12 PM"
            },
            {
                id: 4,
                title: "LinkedIn Post",
                time: "Yesterday • 3:18 PM"
            }
        ]
    },

    {
        title: "Previous 7 Days",
        chats: [
            {
                id: 5,
                title: "Gemini API Setup",
                time: "Monday"
            }
        ]
    }

];

import "./SidebarHistory.css";

import SidebarHistoryItem from "./SidebarHistoryItem";

function SidebarHistory() {

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

                            />

                        ))

                    }

                </div>

            ))}

        </div>

    );

}

export default SidebarHistory;