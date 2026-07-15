function MessageTimestamp({ date }) {

    return (

        <span className="message-time">

            {new Date(date).toLocaleTimeString([], {

                hour: "2-digit",

                minute: "2-digit"

            })}

        </span>

    );

}

export default MessageTimestamp;