import "../AssistantMessage/AssistantMessage.css";
import MessageTimestamp from "../MessageTimestamp/MessageTimestamp";

function AssistantMessage({ message }) {

    return (

        <div className="message-row assistant">

            <div className="assistant-avatar">

                A

            </div>

            <div className="message-bubble assistant-bubble">

                <p>{message.content}</p>

                <MessageTimestamp
                    date={message.createdAt}
                />

            </div>

        </div>

    );

}

export default AssistantMessage;