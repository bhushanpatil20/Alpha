import DesktopDashboard from "../../components/Dashboard/desktop/DesktopDashboard";
import { useState } from "react";
import { logout } from "../../api/auth.api";

function Dashboard() {

   const [isWriting, setIsWriting] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [prompt, setPrompt] = useState("");

    const handleGenerate = () => {

    console.log(prompt);

};

return (

    <DesktopDashboard

        prompt={prompt}

        setPrompt={setPrompt}

        handleGenerate={handleGenerate}

        isWriting={isWriting}

        setIsWriting={setIsWriting}

    />

);

}

export default Dashboard;
