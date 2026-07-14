import DesktopDashboard from "../../components/Dashboard/desktop/DesktopDashboard";
import MobileDashboard from "../../components/Dashboard/mobile/MobileDashboard";
import useDevice from "../../hooks/useDevice";
import { useState, useEffect } from "react";
import { getConversations } from "../../api/conversation.api";

function Dashboard() {

    const [conversations, setConversations] = useState([]);

    const [activeConversation, setActiveConversation] = useState(null);

    const [messages, setMessages] = useState([]);

    const [isGenerating, setIsGenerating] = useState(false);

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

    return isMobile

        ? <MobileDashboard
        
        conversations={conversations}
        setConversations={setConversations}
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
        messages={messages}
        setMessages={setMessages}
        isGenerating={isGenerating}
        setIsGenerating={setIsGenerating}

        />

        : <DesktopDashboard

            conversations={conversations}
            setConversations={setConversations}
            activeConversation={activeConversation}
            setActiveConversation={setActiveConversation}
            messages={messages}
            setMessages={setMessages}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}

            />;

}

export default Dashboard;