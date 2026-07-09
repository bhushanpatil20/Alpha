import {
    HiDocumentText,
    HiEnvelope,
    HiChatBubbleLeftRight,
    HiMegaphone
} from "react-icons/hi2";

const showcase = [

    {
        id: 1,
        title: "Blog Writer",
        description: "Write a detailed blog on the future of Artificial Intelligence.",
        icon: HiDocumentText,
        prompt: "Write a detailed blog on the future of Artificial Intelligence."
    },

    {
        id: 2,
        title: "Email Generator",
        description: "Write a professional leave application for college.",
        icon: HiEnvelope,
        prompt: "Write a professional leave application for college."
    },

    {
        id: 3,
        title: "Social Media",
        description: "Generate an Instagram caption for a travel post.",
        icon: HiChatBubbleLeftRight,
        prompt: "Generate an Instagram caption for a travel post."
    },

    {
        id: 4,
        title: "Marketing Copy",
        description: "Generate Facebook ad copy for a fitness app.",
        icon: HiMegaphone,
        prompt: "Generate Facebook ad copy for a fitness app."
    }

];

export default showcase;