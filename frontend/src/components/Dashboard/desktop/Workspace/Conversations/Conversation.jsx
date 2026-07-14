import "./Conversation.css";
import { useChat } from "../../../../../context/ChatContext";

function Conversation() {

    const { messages } = useChat();

    console.log("Conversation Render:", messages);

    if (messages.length === 0) {

        return (

            <div className="conversation-empty">

                <h3>

                    No messages yet

                </h3>

                <p>

                    Start chatting below.

                </p>

            </div>

        );

    }

    return (

        <div className="conversation-list">

            {

                messages.map((message) => (

                    <div

                        key={message._id}

                        className={`message ${message.role}`}

                    >

                        {message.content}

                    </div>

                ))

                

            }

        </div>

    );

}

export default Conversation;