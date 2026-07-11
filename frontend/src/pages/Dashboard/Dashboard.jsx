import DashboardLayout from "../../components/dashboard/DashboardLayout/DashboardLayout";
import DashboardHero from "../../components/Dashboard/home/DashboardHero/DashboardHero";
import AIComposer from "../../components/Dashboard/Workspace/AIComposer/AIComposer";
import { useState } from "react";


function Dashboard() {

    const [prompt, setPrompt] = useState("");

      const handleGenerate = () => {

    console.log(prompt);

};

    return (

        <DashboardLayout>

           <DashboardHero />

           <AIComposer value={prompt} onChange={setPrompt} onSubmit={handleGenerate} />

        </DashboardLayout>

    );

}

export default Dashboard;