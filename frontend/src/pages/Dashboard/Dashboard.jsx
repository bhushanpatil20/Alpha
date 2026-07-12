import DashboardLayout from "../../components/dashboard/DashboardLayout/DashboardLayout";
import DashboardHero from "../../components/Dashboard/home/DashboardHero/DashboardHero";
import AIComposer from "../../components/Dashboard/Workspace/AIComposer/AIComposer";
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import { useState } from "react";
// import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";
// import MobileHero from "../../components/Dashboard/mobile/MobileHero";
// import MobileTopBar from "../../components/Dashboard/mobile/MobileTopBar/MobileTopBar";
// import MobileComposer from "../../components/Dashboard/mobile/MobileComposer";
// import MobileSidebar from "../../components/Dashboard/mobile/MobileSidebar/MobileSidebar";
import { logout } from "../../api/auth.api";

function Dashboard() {

   const [isWriting, setIsWriting] = useState(false);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [prompt, setPrompt] = useState("");

    // const isWriting = prompt.trim().length > 0;

    const handleGenerate = () => {

    console.log(prompt);

};

    return (

<DashboardLayout>

    <div className="dashboard-content">

        <Sidebar onLogout={logout} />

        <DashboardHero isWriting={isWriting} />

        {/* AI responses will live here later */}

  </div>

    <AIComposer
      value={prompt}
       onChange={setPrompt}
      onSubmit={handleGenerate}
        onWritingChange={setIsWriting}  />

 </DashboardLayout>

    );

}

export default Dashboard;


//       <MobileDashboard>

//     <MobileTopBar onMenuClick={() => setIsSidebarOpen(true)}/>

//         <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onLogout={logout}/>

// <MobileHero isWriting={isWriting} />

// <MobileComposer

//     value={prompt}

//     onChange={setPrompt}

//     onSubmit={handleGenerate}

// />

// </MobileDashboard>
