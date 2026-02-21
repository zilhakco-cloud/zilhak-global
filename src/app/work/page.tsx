import type { Metadata } from "next";
import { WorkPageContent } from "./WorkPageContent";

export const metadata: Metadata = {
    title: "Work",
    description:
        "Real projects with real links. Explore the portfolio of Zilhak Global Associates — AI chatbots, web apps, mobile apps, and agentic AI systems.",
};

export default function WorkPage() {
    return (
        <div className="pt-24">
            <section className="section-sm">
                <div className="container text-center max-w-3xl mx-auto">
                    <span className="text-sm font-mono text-z-teal tracking-widest uppercase mb-3 block">
                        Portfolio
                    </span>
                    <h1 className="font-display font-bold mb-6">
                        Built. Shipped.{" "}
                        <span className="gradient-text">Proven.</span>
                    </h1>
                    <p className="text-lg text-z-text-muted">
                        Every project shows verified GitHub ownership, live demos, and IP
                        attribution under Zilhak&apos;s framework.
                    </p>
                </div>
            </section>
            <WorkPageContent />
        </div>
    );
}
