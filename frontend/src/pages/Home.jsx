import { Button, Input, Card } from "../components/ui";

function Home() {
    return (
        <div style={{ maxWidth: "500px", margin: "60px auto" }}>

            <Card>

                <h2>Alpha UI Library</h2>

                <br />

                <Input placeholder="Enter your prompt..." />

                <br />
                <br />

                <Button>
                    Generate Content
                </Button>

            </Card>

        </div>
    );
}

export default Home;