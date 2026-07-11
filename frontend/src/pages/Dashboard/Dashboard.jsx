import DashboardLayout from "../../components/dashboard/DashboardLayout/DashboardLayout";
import DashboardHero from "../../components/Dashboard/home/DashboardHero/DashboardHero";
import AIComposer from "../../components/Dashboard/Workspace/AIComposer/AIComposer";
import { useState } from "react";


function Dashboard() {

    const [isWriting, setIsWriting] = useState(false);

    const [prompt, setPrompt] = useState("");

    const handleGenerate = () => {

    console.log(prompt);

};

    return (
        
<DashboardLayout>

    <div className="dashboard-content">

        <DashboardHero isWriting={isWriting} />

        {/* AI responses will live here later */}

    </div>

    <AIComposer
        value={prompt}
        onChange={setPrompt}
        onSubmit={handleGenerate}
        onWritingChange={setIsWriting}
    />

</DashboardLayout>

    );

}

export default Dashboard;