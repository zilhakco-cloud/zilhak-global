import {
    Smartphone,
    Globe,
    TrendingUp,
    Cpu,
    Bot,
    MessageSquare,
} from "lucide-react";

export const services = [
    {
        id: "app-dev",
        icon: Smartphone,
        title: "App Development",
        tagline: "From idea to App Store in 90 days",
        description:
            "Cross-platform mobile apps built with React Native and Flutter. From MVP to scale — we ship apps that users love.",
        trust: "3 apps shipped with 10K+ combined downloads",
        color: "blue" as const,
    },
    {
        id: "web-dev",
        icon: Globe,
        title: "Web Development",
        tagline: "Websites that convert visitors into clients",
        description:
            "High-performance websites and web apps with Next.js, React, and modern tooling. SEO-first, mobile-first, always.",
        trust: "Core Web Vitals: 95+ across all projects",
        color: "teal" as const,
    },
    {
        id: "seo",
        icon: TrendingUp,
        title: "SEO & Growth",
        tagline: "Organic traffic that compounds while you sleep",
        description:
            "Data-driven SEO strategies, content marketing, and growth engineering that delivers measurable ROI.",
        trust: "240% average traffic growth in 6 months",
        color: "gold" as const,
    },
    {
        id: "ai-auto",
        icon: Cpu,
        title: "AI Automations",
        tagline: "Replace 10 hours of work with one AI workflow",
        description:
            "Custom AI workflows that automate repetitive tasks, extract insights from data, and streamline operations.",
        trust: "1,200+ hours saved for clients monthly",
        color: "purple" as const,
    },
    {
        id: "agentic",
        icon: Bot,
        title: "Agentic AI Systems",
        tagline: "AI that thinks, plans, and acts autonomously",
        description:
            "Multi-agent architectures that can reason, plan, and execute complex tasks with minimal human oversight.",
        trust: "Autonomous task completion rate: 94%",
        color: "blue" as const,
    },
    {
        id: "chatbots",
        icon: MessageSquare,
        title: "AI Chatbots",
        tagline: "Your smartest employee — available 24/7",
        description:
            "Intelligent conversational agents for WhatsApp, web, and enterprise — trained on your data, speaking your brand.",
        trust: "3,000+ queries handled monthly per bot",
        color: "teal" as const,
    },
];

export const projects = [
    {
        id: "1",
        name: "ClawBot — WhatsApp AI Assistant",
        description:
            "Agentic AI chatbot handling 3,000+ customer queries/month for retail businesses in Lahore.",
        image: "/projects/clawbot.jpg",
        tags: ["Python", "LangChain", "WhatsApp API", "OpenAI"],
        category: "ai",
        size: "large" as const,
        badge: "Built by Zilhak Global",
        github: "https://github.com/zilhak-global/clawbot",
        live: "https://clawbot.zilhakglobal.com",
    },
    {
        id: "2",
        name: "DigiNext Portal",
        description:
            "Full-stack student management portal for DigiNext Society — workshops, projects, and member tracking.",
        image: "/projects/diginext-portal.jpg",
        tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        category: "web",
        size: "large" as const,
        badge: "Built via DigiNext x Zilhak",
        github: "https://github.com/zilhak-global/diginext-portal",
        live: "https://diginext.zilhakglobal.com",
    },
    {
        id: "3",
        name: "SmartInvoice AI",
        description:
            "AI-powered invoice processing system that extracts data from scanned documents with 98% accuracy.",
        image: "/projects/smartinvoice.jpg",
        tags: ["Python", "Computer Vision", "OCR", "FastAPI"],
        category: "ai",
        size: "small" as const,
        badge: "Built by Zilhak Global",
        github: "https://github.com/zilhak-global/smart-invoice",
        live: null,
    },
    {
        id: "4",
        name: "FitTrack Pro",
        description:
            "Cross-platform fitness tracking app with AI-powered workout recommendations and progress analytics.",
        image: "/projects/fittrack.jpg",
        tags: ["React Native", "Firebase", "TensorFlow Lite"],
        category: "app",
        size: "small" as const,
        badge: "Built via DigiNext x Zilhak",
        github: "https://github.com/zilhak-global/fittrack-pro",
        live: "https://fittrack.app",
    },
    {
        id: "5",
        name: "AgentFlow Platform",
        description:
            "No-code platform for building and deploying agentic AI workflows. Drag-and-drop agent orchestration.",
        image: "/projects/agentflow.jpg",
        tags: ["Next.js", "Python", "LangGraph", "Redis"],
        category: "ai",
        size: "small" as const,
        badge: "Built by Zilhak Global",
        github: "https://github.com/zilhak-global/agentflow",
        live: null,
    },
    {
        id: "6",
        name: "Sargodha Business Directory",
        description:
            "SEO-optimized local business directory with AI-powered recommendations and reviews for Sargodha businesses.",
        image: "/projects/sargodha-biz.jpg",
        tags: ["Next.js", "Supabase", "Google Maps API"],
        category: "web",
        size: "small" as const,
        badge: "Built via DigiNext x Zilhak",
        github: "https://github.com/zilhak-global/sargodha-directory",
        live: "https://sargodhabiz.com",
    },
];

export const testimonials = [
    {
        name: "Ahmad Raza",
        role: "CEO, Raza Textiles Lahore",
        quote:
            "Zilhak built us a WhatsApp chatbot that handles 3,000 customer queries a month. Our support team went from 5 people to 2.",
        avatar: "/avatars/avatar1.jpg",
    },
    {
        name: "Sarah Khan",
        role: "CTO, MedPak Health",
        quote:
            "The agentic AI system they built reduced our data processing time by 60%. It literally thinks through problems on its own.",
        avatar: "/avatars/avatar2.jpg",
    },
    {
        name: "Bilal Hussain",
        role: "Founder, EduPak",
        quote:
            "Their team delivered our mobile app 2 weeks ahead of schedule. The quality is on par with anything in the App Store.",
        avatar: "/avatars/avatar3.jpg",
    },
    {
        name: "Dr. Ayesha Siddiqui",
        role: "Professor, Superior University",
        quote:
            "DigiNext has trained 150+ students in AI. The quality of projects coming out of this society is remarkable.",
        avatar: "/avatars/avatar4.jpg",
    },
    {
        name: "Usman Ali",
        role: "Director, TechVentures PK",
        quote:
            "We looked at agencies in Islamabad, Lahore, and Karachi. Zilhak's technical depth was unmatched — and they're right here in Sargodha.",
        avatar: "/avatars/avatar5.jpg",
    },
    {
        name: "Maria Fatima",
        role: "Marketing Head, GreenLeaf PK",
        quote:
            "Our organic traffic grew 240% in 6 months. Their SEO strategy wasn't just keywords — it was a complete growth system.",
        avatar: "/avatars/avatar6.jpg",
    },
];

export const stats = [
    { label: "Students Trained", value: 150, suffix: "+" },
    { label: "Projects Delivered", value: 25, suffix: "+" },
    { label: "Service Verticals", value: 6, suffix: "" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const processSteps = [
    {
        step: 1,
        title: "Discover",
        description: "We learn your business, goals, and challenges through deep discovery sessions.",
    },
    {
        step: 2,
        title: "Design",
        description: "Architecture, wireframes, and technical specs — built before a single line of code.",
    },
    {
        step: 3,
        title: "Build",
        description: "Agile sprints with weekly demos. You see progress constantly, not just at the end.",
    },
    {
        step: 4,
        title: "Scale",
        description: "Launch, monitor, and iterate. We stay with you to ensure sustained growth.",
    },
];

export const diginextStats = [
    { label: "Active Members", value: 150, suffix: "+" },
    { label: "Institution", value: "Superior University", suffix: "" },
    { label: "Focus", value: "AI & Technology", suffix: "" },
    { label: "Founded", value: 2024, suffix: "" },
];

export const blogPosts = [
    {
        slug: "what-is-agentic-ai",
        title: "What is Agentic AI and Why Pakistani Startups Need It Now",
        excerpt: "Agentic AI systems that can reason, plan, and act autonomously are transforming how startups operate. Here's why Pakistan can't afford to miss this wave.",
        date: "2026-02-15",
        category: "AI",
        readTime: "6 min",
    },
    {
        slug: "diginext-building-ai-generation",
        title: "How DigiNext Society is Building Pakistan's Next AI Generation",
        excerpt: "150+ students, real projects, and a direct pipeline to industry. Inside the society that's redefining tech education at Superior University.",
        date: "2026-02-22",
        category: "DigiNext",
        readTime: "8 min",
    },
    {
        slug: "5-ai-automations-for-smes",
        title: "The 5 AI Automations Every Pakistani SME Should Deploy in 2026",
        excerpt: "From invoice processing to customer support — these AI automations pay for themselves in weeks, not years.",
        date: "2026-03-01",
        category: "Business",
        readTime: "5 min",
    },
    {
        slug: "microsoft-for-startups-guide",
        title: "How to Apply for Microsoft for Startups as a Pakistani Company",
        excerpt: "A step-by-step guide to getting accepted into the Founders Hub, with tips specific to Pakistani tech startups.",
        date: "2026-03-08",
        category: "Startup",
        readTime: "7 min",
    },
];
