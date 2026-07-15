import "./Conversation.css";
import { useChat } from "../../../../../context/ChatContext";
import {useRef, useEffect} from "react";
import ThinkingMessage from "../ThinkingMessage/ThinkingMessage"
import MessageBubble from "../../../../chat/MessageBubble/MessageBubble";

function Conversation() {
    const bottomRef = useRef(null);
    const { messages, isGenerating } = useChat();

    const previousLength = useRef(0);

useEffect(() => {

    if(messages.length > previousLength.current){

        bottomRef.current?.scrollIntoView({

            behavior:"smooth"

        });

    }

    previousLength.current = messages.length;

}, [messages]);

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

                    <MessageBubble

                        key={message._id}

                        message={message}

                        className={`message ${message.role}`}

                    >

                        {message.content}

                    </MessageBubble>

                ))

                

            }

            {isGenerating && (

    <ThinkingMessage />

)}

            <div ref={bottomRef} />

        </div>

    );

}

export default Conversation;