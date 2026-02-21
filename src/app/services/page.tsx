import type { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
    title: "Services",
    description:
        "App development, web development, AI automations, agentic AI systems, chatbots, and SEO growth — six service verticals by Zilhak Global Associates.",
};

export default function ServicesPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section-sm">
                <div className="container text-center max-w-3xl mx-auto">
                    <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">
                        Our Services
                    </span>
                    <h1 className="font-display font-bold mb-6">
                        Six Verticals.{" "}
                        <span className="gradient-text">Infinite Possibilities.</span>
                    </h1>
                    <p className="text-lg text-z-text-muted">
                        From idea to scale — we build, automate, and grow with AI-first
                        solutions tailored to your business.
                    </p>
                </div>
            </section>

            <ServicesPageContent />
        </div>
    );
}

