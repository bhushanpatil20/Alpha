import "./Workspace.css";

function Workspace({ hero, conversation, composer }){

    return(

        <main className="desktop-workspace">

            <section className="workspace-content">

                {hero}

                {conversation}

            </section>

            {composer}

        </main>

    );

}

export default Workspace;