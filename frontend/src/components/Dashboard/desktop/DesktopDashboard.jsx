import "./DesktopDashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import {logout} from "../../../api/auth.api"
import DashboardHero from "../desktop/home/DashboardHero/DashboardHero"
import Workspace from "./Workspace/Workspace";
import AIComposer from "../desktop/Workspace/AIComposer/AIComposer";
import DashboardHome from "./DashboardHome/DashboardHome";
import { useState, useEffect } from "react";
import { getConversations } from "../../../api/conversation.api";

function DesktopDashboard({conversations, setConversations, activeConversation, setActiveConversation}) {

    const [prompt, setPrompt] = useState("");

    const [isWriting, setIsWriting] = useState(false);

    const handleGenerate = () => {

    console.log(prompt);

};

useEffect(() => {

    const loadConversations = async () => {

        try {

            const data = await getConversations();

            setConversations(data);

            if (data.length > 0) {

                setActiveConversation(data[0]._id);

            }

        }

        catch (error) {

            console.error(error);

        }

    };

    loadConversations();

}, []);

    return (

        <div className="desktop-dashboard">

            <Sidebar
    onLogout={logout}
    conversations={conversations}
    setConversations={setConversations}
    activeConversation={activeConversation}
    setActiveConversation={setActiveConversation}
/>

           {activeConversation ? (

    <Workspace

        hero={<DashboardHero isWriting={isWriting} />}

        conversation={<></>}

        composer={

            <AIComposer

                value={prompt}

                onChange={setPrompt}

                onSubmit={handleGenerate}

                onWritingChange={setIsWriting}

            />

        }

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