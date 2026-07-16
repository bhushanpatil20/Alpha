import "./UserMessage.css";
import MessageTimestamp from "../MessageTimestamp/MessageTimestamp";

function UserMessage({ message }) {

    return (

        <div className="message-row user">

            <div className="message-bubble user-bubble">

                <p>{message.content}</p>

                <MessageTimestamp
                    date={message.createdAt}
                />

            </div>

            <div className="message--row-divider" />

        </div>

    );

}

export default UserMessage;