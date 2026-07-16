import "./Workspace.css";

function Workspace({ conversation, composer }) {
    return (
        <main className="desktop-workspace">
            <section className="workspace-content">
                {conversation}
            </section>
            {composer}
        </main>
    );
}

export default Workspace;