import "./MobileDashboard.css";

function MobileDashboard({ children }) {

    return (

        <main className="mobile-dashboard">

    <div className="mobile-content">

        {children}

    </div>

</main>

    );

}

export default MobileDashboard;