import "./MobileSidebar.css";

import {
    X,
    House,
    Sparkles,
    LogOut,
    MessageSquare
} from "lucide-react";

const demoChats = {

    Today: [
        "Build React Dashboard",
        "AI Startup Ideas"
    ],

    Yesterday: [
        "Resume Improvements",
        "LinkedIn Post"
    ],

    "Previous 7 Days": [
        "Internship Roadmap",
        "Gemini API Setup"
    ]

};

function MobileSidebar({

    isOpen,

    onClose

}) {

    return (

        <>

            <div

                className={`mobile-sidebar-overlay ${
                    isOpen ? "show" : ""
                }`}

                onClick={onClose}

            />

            <aside

                className={`mobile-sidebar ${
                    isOpen ? "open" : ""
                }`}

            >

                <button

                    className="sidebar-close"

                    onClick={onClose}

                >

                    <X size={22} />

                </button>

                <div className="sidebar-profile">

                    <div className="sidebar-avatar">

                        P

                    </div>

                    <h3>

                        Bhushan Patil

                    </h3>

                    <p>

                        bhushan@gmail.com

                    </p>

                </div>

                <nav className="sidebar-nav">

                    <button>

                        <House size={20}/>

                        Home

                    </button>

                    <button>

                        <Sparkles size={20}/>

                        New Chat

                    </button>

                </nav>

                <div className="sidebar-history">

                    {

                        Object.entries(demoChats).map(

                            ([title,chats])=>(

                                <div
                                    key={title}
                                    className="history-group"
                                >

                                    <h4>

                                        {title}

                                    </h4>

                                    {

                                        chats.map(chat=>(

                                            <button
                                                key={chat}
                                                className="history-item"
                                            >

                                                <MessageSquare
                                                    size={16}
                                                />

                                                <span>

                                                    {chat}

                                                </span>

                                            </button>

                                        ))

                                    }

                                </div>

                            )

                        )

                    }

                </div>

                <div className="sidebar-footer">

                    <button>

                        <LogOut size={20}/>

                        Logout

                    </button>

                </div>

            </aside>

        </>

    );

}

export default MobileSidebar;