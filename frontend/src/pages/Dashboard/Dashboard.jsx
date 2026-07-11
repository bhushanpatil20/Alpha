import DashboardLayout from "../../components/dashboard/DashboardLayout/DashboardLayout";
import DashboardHero from "../../components/Dashboard/home/DashboardHero/DashboardHero";
import AIWorkspace from "../../components/Dashboard/Workspace/AIWorkspace/AIWorkspace";
import PromptEditor from "../../components/Dashboard/Workspace/PromptEditor/PromptEditor";
import PromptComposer from "../../components/Dashboard/Workspace/PromptComposer/PromptComposer";
import { useState } from "react";

function Dashboard() {

    const [prompt, setPrompt] = useState("");

      const handleGenerate = () => {

    console.log(prompt);

};

    return (

        <DashboardLayout>

           <DashboardHero />

           <AIWorkspace>

        <PromptComposer value={prompt} onChange={setPrompt} onSubmit={handleGenerate} />

            <PromptEditor value={prompt} onChange={setPrompt} />

            </AIWorkspace>


        </DashboardLayout>

    );

}

export default Dashboard;