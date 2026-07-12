import "./MobileDashboard.css";

import { useState } from "react";

import MobileTopBar from "./MobileTopBar/MobileTopBar";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import MobileHero from "./MobileHero";
import MobileComposer from "./MobileComposer";

import { logout } from "../../../api/auth.api";

function MobileDashboard() {

    const [prompt, setPrompt] = useState("");

    const [isWriting, setIsWriting] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleGenerate = () => {

        console.log(prompt);

    };

    return (

        <main className="mobile-dashboard">

            <MobileTopBar

                onMenuClick={() => setIsSidebarOpen(true)}

            />

            <MobileSidebar

                isOpen={isSidebarOpen}

                onClose={() => setIsSidebarOpen(false)}

                onLogout={logout}

            />

            <MobileHero

                isWriting={isWriting}

            />

            <MobileComposer

                value={prompt}

                onChange={setPrompt}

                onSubmit={handleGenerate}

                onWritingChange={setIsWriting}

            />

        </main>

    );

}

export default MobileDashboard;