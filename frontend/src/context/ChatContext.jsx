import { createContext, useContext } from "react";

const ChatContext = createContext();

export function ChatProvider({

    children,

    value

}) {

    return (

        <ChatContext.Provider value={value}>

            {children}

        </ChatContext.Provider>

    );

}

export function useChat() {

    return useContext(ChatContext);

}