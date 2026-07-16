import "../AssistantMessage/AssistantMessage.css";
import MessageTimestamp from "../MessageTimestamp/MessageTimestamp.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

function AssistantMessage({ message }) {

    return (

       <div className="assistant-message">

    <div className="assistant-content">

        <ReactMarkdown>

            {message.content}

        </ReactMarkdown>

    </div>

</div>

    );

}

export default AssistantMessage;