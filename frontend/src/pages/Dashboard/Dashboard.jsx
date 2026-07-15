import { ChatProvider } from "../../context/ChatContext";
import {useDevice} from "../../hooks/useDevice";
import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";
import DesktopDashboard from "../../components/Dashboard/desktop/DesktopDashboard";

function Dashboard() {

    const isMobile = useDevice();

    return (

        <ChatProvider>

            {

                isMobile

                    ? <MobileDashboard />

                    : <DesktopDashboard />

            }

        </ChatProvider>

    );

}

export default Dashboard;