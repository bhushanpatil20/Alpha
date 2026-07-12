import "./MobileSidebar.css";
import { X, House, Sparkles, LogOut, MessageSquare} from "lucide-react";
import { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import ConfirmationModal from "../../../common/ConfirmationModel/ConfirmationModel";

const demoChats = {

    Today: [

        {
            id:1,
            title:"Build React Dashboard",
            time:"2:35 PM"
        },

        {
            id:2,
            title:"AI Startup Ideas",
            time:"11:40 AM"
        }

    ],

    Yesterday:[

        {
            id:3,
            title:"Resume Improvements",
            time:"6:12 PM"
        },

        {
            id:4,
            title:"LinkedIn Post",
            time:"3:18 PM"
        }

    ],

    "Previous 7 Days":[

        {
            id:5,
            title:"Gemini API Setup",
            time:"Monday"
        }

    ]

};

function MobileSidebar({ isOpen, onClose}) {

    const { logout } = useAuth();

    const [showLogoutModal, setShowLogoutModal] = useState(false);

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

                      <div className="sidebar-nav">

    <button>

        <Sparkles size={20} />

        <span>New Chat</span>

    </button>

    <button className="logout-btn" onClick={() => setShowLogoutModal(true)}>

        <LogOut size={20} />

        <span>Logout</span>

    </button>

</div>

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

    key={chat.id}

    className="history-item"

>

    <MessageSquare size={18}/>

    <div className="history-content">

        <span>

            {chat.title}

        </span>

        <small>

            {title} • {chat.time}

        </small>

    </div>

</button>

                                        ))

                                    }

                                </div>

                            )

                        )

                    }

                </div>

            </aside>

            <ConfirmationModal

    isOpen={showLogoutModal}

    title="Logout"

    message="Are you sure you want to logout from Alpha?"

    confirmText="Logout"

    cancelText="Stay"

    onCancel={() => setShowLogoutModal(false)}

    onConfirm={async () => {

        setShowLogoutModal(false);

        onClose();          // Close the sidebar first

        await logout();

    }}

/>

        </>

    );

}

export default MobileSidebar;