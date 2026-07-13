import "./Sidebar.css";
import SidebarProfile from "./SidebarProfile";
import SidebarNav from "./SidebarNav";
import SidebarHistory from "./SidebarHistory";
import { useState } from "react";
import NewChatModal from "../NewChatModal/NewChatModal";

function Sidebar({onLogout, conversations, setConversations, activeConversation, setActiveConversation}) {

    const [showNewChatModal, setShowNewChatModal] = useState(false);

    const handleConversationCreated = (conversation) => {

    setConversations(prev => [

        conversation,

        ...prev

    ]);

    setActiveConversation(conversation._id);

};

    return (

        <>

        <aside className="desktop-sidebar">

            <SidebarProfile />

            <SidebarNav
    onLogout={onLogout}
    onNewChat={() => setShowNewChatModal(true)}
    conversations={conversations}
    setConversations={setConversations}
    setActiveConversation={setActiveConversation}
/>

            <div className="desktop-sidebar-divider" />

            <SidebarHistory
    conversations={conversations}
    activeConversation={activeConversation}
    setActiveConversation={setActiveConversation}
/>

        </aside>

        <NewChatModal

    isOpen={showNewChatModal}

    onClose={() =>

        setShowNewChatModal(false)

    }

    onCreate={handleConversationCreated}

/>

</>

    );

}

export default Sidebar;