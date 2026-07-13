import "./DesktopDashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import {logout} from "../../../api/auth.api"
import DashboardHero from "../desktop/home/DashboardHero/DashboardHero"
import Workspace from "./Workspace/Workspace";
import AIComposer from "../desktop/Workspace/AIComposer/AIComposer";
import { useState } from "react";

function DesktopDashboard() {

    const [prompt, setPrompt] = useState("");

    const [isWriting, setIsWriting] = useState(false);

    const [conversations, setConversations] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null);

    const handleGenerate = () => {

    console.log(prompt);

};

    return (

        <div className="desktop-dashboard">

            <Sidebar
    onLogout={logout}
    conversations={conversations}
    setConversations={setConversations}
    activeConversation={activeConversation}
    setActiveConversation={setActiveConversation}
/>

             <Workspace hero={<DashboardHero isWriting={isWriting}/>}
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


        </div>

    );

}

export default DesktopDashboard;