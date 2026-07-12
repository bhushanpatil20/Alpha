import DesktopDashboard from "../../components/Dashboard/desktop/DesktopDashboard";
import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";

import useDevice from "../../hooks/useDevice";

function Dashboard() {

    const isMobile = useDevice();

    return isMobile

        ? <MobileDashboard />

        : <DesktopDashboard />;

}

export default Dashboard;