import "./AssistantMessage.css";
import MessageTimestamp from "../MessageTimestamp/MessageTimestamp.jsx";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { Bot } from "lucide-react";
import MarkdownRenderer from "../MarkdownRenderer/MarkdownRender.jsx";

function AssistantMessage({ message }) {
    return (
        <div className="assistant-message">
            <div className="assistant-avatar">
                <Bot size={20} />
            </div>
            
            <div className="assistant-content-wrapper">
                <div className="assistant-content">

    <MarkdownRenderer

        content={message.content}

    />

</div>
                
                {message.createdAt && (
                    <div className="assistant-timestamp">
                        <MessageTimestamp date={message.createdAt} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default AssistantMessage;