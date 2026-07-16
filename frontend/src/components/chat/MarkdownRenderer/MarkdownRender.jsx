import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "./MarkdownRender.css"

function MarkdownRenderer({ content }) {

    return (

        <div className="markdown">

        <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
        >
            {content}
        </ReactMarkdown>

        </div>

    );

}

export default MarkdownRenderer;