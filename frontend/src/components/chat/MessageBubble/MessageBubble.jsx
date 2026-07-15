import UserMessage from "../UserMessage/UserMessage";
import AssistantMessage from "../AssistantMessage/AssistantMessage";

function MessageBubble({ message }) {

    if (message.role === "user") {

        return <UserMessage message={message} />;

    }

    return <AssistantMessage message={message} />;

}

export default MessageBubble;