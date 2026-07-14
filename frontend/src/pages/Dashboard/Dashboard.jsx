import DesktopDashboard from "../../components/Dashboard/desktop/DesktopDashboard";
import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";
import useDevice from "../../hooks/useDevice";
import { useState, useEffect } from "react";
import { getConversations, openConversation } from "../../api/conversation.api";
import {getMessages} from "../../api/message.api";
import { ChatProvider } from "../../context/ChatContext";

function Dashboard() {

    const [conversations, setConversations] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null);

    const [messages, setMessages] = useState([]);

    const [isGenerating, setIsGenerating] = useState(false);

    const [showWorkspace, setShowWorkspace] = useState(false);

    const isMobile = useDevice();

    useEffect(() => {

    const fetchConversations = async () => {

        try {

            const data = await getConversations();

            setConversations(data);

        }

        catch (error) {

            console.error(error);

        }

    };

    fetchConversations();

}, []);

const fetchMessages = async (conversationId) => {

    try {

        const data = await getMessages(conversationId);

        setMessages(data);

    }

    catch (error) {

        console.error(error);

    }

};

const handleConversationClick = async (conversationId) => {

    try {

        await openConversation(conversationId);

        const updatedConversations =
            await getConversations();

        setConversations(updatedConversations);

        await fetchMessages(conversationId);

        setActiveConversation(conversationId);

        setShowWorkspace(true);

    }

    catch (error) {

        console.error(error);

    }

};

return (

    <ChatProvider

        value={{

            conversations,

            setConversations,

            activeConversation,

            setActiveConversation,

            messages,

            setMessages,

            isGenerating,

            setIsGenerating,

            handleConversationClick

        }}

    >

        {

            isMobile

                ? <MobileDashboard />

                : <DesktopDashboard />

        }

    </ChatProvider>

);
   
}

export default Dashboard;