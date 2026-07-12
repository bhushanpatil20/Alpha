// import DashboardLayout from "../../components/dashboard/DashboardLayout/DashboardLayout";
// import DashboardHero from "../../components/Dashboard/home/DashboardHero/DashboardHero";
// import AIComposer from "../../components/Dashboard/Workspace/AIComposer/AIComposer";
import { useState } from "react";
import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";
import MobileHero from "../../components/Dashboard/mobile/MobileHero";
import MobileTopBar from "../../components/Dashboard/mobile/MobileTopBar/MobileTopBar";
import MobileComposer from "../../components/Dashboard/mobile/MobileComposer";


function Dashboard() {

    // const [isWriting, setIsWriting] = useState(false);

    const [prompt, setPrompt] = useState("");

    const isWriting = prompt.trim().length > 0;

    const handleGenerate = () => {

    console.log(prompt);

};

    return (

        <MobileDashboard>

    <MobileTopBar />

<MobileHero isWriting={isWriting} />

<MobileComposer

    value={prompt}

    onChange={setPrompt}

    onSubmit={handleGenerate}

/>

</MobileDashboard>

    );

}

export default Dashboard;

{/* <DashboardLayout>

    <div className="dashboard-content">

        <DashboardHero isWriting={isWriting} />

        {/* AI responses will live here later */}

//     </div>

//     <AIComposer
//         value={prompt}
//         onChange={setPrompt}
//         onSubmit={handleGenerate}
//         onWritingChange={setIsWriting}
//     />

// </DashboardLayout> */}