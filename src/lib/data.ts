import {
    Smartphone,
    Globe,
    TrendingUp,
    Cpu,
    Bot,
    MessageSquare,
    LucideIcon,
} from "lucide-react";

import servicesData from "@/content/services.json";
import projectsData from "@/content/projects.json";
import testimonialsData from "@/content/testimonials.json";
import statsData from "@/content/stats.json";
import processStepsData from "@/content/processSteps.json";
import diginextStatsData from "@/content/diginextStats.json";
import siteConfigData from "@/content/siteConfig.json";

const iconMap: Record<string, LucideIcon> = {
    Smartphone,
    Globe,
    TrendingUp,
    Cpu,
    Bot,
    MessageSquare,
};

export const services = servicesData.items.map(s => ({
    ...s,
    icon: iconMap[s.icon] || Globe,
    color: s.color as "blue" | "teal" | "gold" | "purple"
}));

export const projects = projectsData.items.map(p => ({
    ...p,
    size: p.size as "large" | "small"
}));

export const testimonials = testimonialsData.items;

export const stats = statsData.items;

export const processSteps = processStepsData.items;

export const diginextStats = diginextStatsData.items;

export const siteConfig = siteConfigData;

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
