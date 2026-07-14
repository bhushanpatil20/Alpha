import "./DesktopDashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import {logout} from "../../../api/auth.api"
import DashboardHero from "../desktop/home/DashboardHero/DashboardHero"
import Workspace from "./Workspace/Workspace";
import AIComposer from "../desktop/Workspace/AIComposer/AIComposer";
import DashboardHome from "./DashboardHome/DashboardHome";
import { useState, useEffect } from "react";
import { getConversations } from "../../../api/conversation.api";
import Conversation from "./Workspace/Conversations/Conversation"
import { useChat } from "../../../context/ChatContext";

function DesktopDashboard() {

    const [prompt, setPrompt] = useState("");

    const [isWriting, setIsWriting] = useState(false);

    const [showNewChatModal, setShowNewChatModal] = useState("");

    const handleGenerate = () => {

    console.log(prompt);

};

const { conversations, setConversations, activeConversation, setActiveConversation, messages, handleConversationClick } = useChat();

    return (

        <div className="desktop-dashboard">

            <Sidebar
    onLogout={logout}
    conversations={conversations}
    setConversations={setConversations}
    activeConversation={activeConversation}
    setActiveConversation={setActiveConversation}
    onConversationClick={handleConversationClick}
/>

           {activeConversation ? (

    <Workspace

        hero={<DashboardHero isWriting={isWriting} />}

        conversation={<Conversation messages={messages} />}

        composer={

            <AIComposer

                value={prompt}

                onChange={setPrompt}

                onSubmit={handleGenerate}

                onWritingChange={setIsWriting}

            />

        }

        messages={messages}

    />

) : (

    <DashboardHome

        onNewChat={() => setShowNewChatModal(true)}

    />

)}


        </div>

    );

}

export default DesktopDashboard;