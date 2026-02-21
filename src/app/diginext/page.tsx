import type { Metadata } from "next";
import Link from "next/link";
import { Users, GraduationCap, Lightbulb, Rocket, ArrowRight, Trophy, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "DigiNext Society",
    description:
        "DigiNext Society — AI & Technology Society at Superior University Sargodha. 150+ students building real AI products under Zilhak Global Associates.",
};

const pillars = [
    { icon: GraduationCap, title: "LEARN", description: "Weekly workshops on AI, web dev, app dev, and emerging tech — led by industry practitioners, not just academics." },
    { icon: Lightbulb, title: "BUILD", description: "Real projects with real clients. Every DigiNext project ships under Zilhak's IP framework with GitHub attribution." },
    { icon: Rocket, title: "LAUNCH", description: "Top builders get startup support. Three DigiNext teams are already building investable products under Zilhak mentorship." },
];

const events = [
    { title: "AI Hackathon 2026", date: "March 2026", description: "48-hour AI hackathon at Superior University. 50+ participants, 12 judges, real prizes.", type: "Hackathon" },
    { title: "Agentic AI Workshop", date: "February 2026", description: "Hands-on workshop building autonomous AI agents with LangGraph and Claude.", type: "Workshop" },
    { title: "Tech Career Seminar", date: "January 2026", description: "Industry leaders discuss career paths in AI, tech startups, and freelancing.", type: "Seminar" },
];

export default function DigiNextPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(110,64,201,0.15) 0%, transparent 60%)" }} />
                <div className="container relative z-10 text-center max-w-3xl mx-auto">
                    <span className="text-sm font-mono text-z-purple tracking-widest uppercase mb-3 block">DigiNext Society</span>
                    <h1 className="font-display font-bold mb-6">
                        Where Pakistan&apos;s AI Generation{" "}
                        <span className="gradient-text-purple">Is Born</span>
                    </h1>
                    <p className="text-lg text-z-text-muted mb-8">
                        Digital & Next-Gen Skills Society at Superior University Sargodha.
                        150+ students. Real AI projects. Direct pipeline to Zilhak Global Associates.
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-z-text-muted">
                        <span className="w-2 h-2 rounded-full bg-z-purple animate-pulse-glow" />
                        Innovation arm of Zilhak Global Associates
                    </div>
                </div>
            </section>

            {/* Mission Pillars */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center font-display font-bold text-2xl mb-12">Three Pillars</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <div key={i} className="glass rounded-xl p-8 text-center hover:border-z-purple/20 transition-all group">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-z-purple/10 flex items-center justify-center mb-6 group-hover:bg-z-purple/20 transition-colors">
                                    <p.icon size={28} className="text-z-purple" />
                                </div>
                                <h3 className="font-display font-bold text-xl mb-3">{p.title}</h3>
                                <p className="text-sm text-z-text-muted leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-sm bg-z-bg-surface/50 border-y border-z-border">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-3xl font-display font-bold gradient-text-purple">150+</div><div className="text-sm text-z-text-muted">Active Members</div></div>
                        <div><div className="text-3xl font-display font-bold gradient-text-purple">25+</div><div className="text-sm text-z-text-muted">Projects Shipped</div></div>
                        <div><div className="text-3xl font-display font-bold gradient-text-purple">3</div><div className="text-sm text-z-text-muted">Cohorts Completed</div></div>
                        <div><div className="text-3xl font-display font-bold gradient-text-purple">2024</div><div className="text-sm text-z-text-muted">Established</div></div>
                    </div>
                </div>
            </section>

            {/* Events */}
            <section className="section" id="events">
                <div className="container">
                    <h2 className="text-center font-display font-bold text-2xl mb-12">Events & Activities</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {events.map((event, i) => (
                            <div key={i} className="glass rounded-xl p-6 hover:border-z-purple/20 transition-all">
                                <div className="flex items-center gap-2 mb-3">
                                    <Calendar size={14} className="text-z-purple" />
                                    <span className="text-xs font-mono text-z-text-muted">{event.date}</span>
                                    <span className="px-2 py-0.5 rounded text-xs font-mono bg-z-purple/10 text-z-purple">{event.type}</span>
                                </div>
                                <h3 className="font-display font-semibold mb-2">{event.title}</h3>
                                <p className="text-sm text-z-text-muted">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join CTA */}
            <section className="section" id="join">
                <div className="container text-center max-w-2xl mx-auto">
                    <div className="glass rounded-2xl p-10" style={{ background: "linear-gradient(135deg, rgba(110,64,201,0.1), transparent)" }}>
                        <Users size={40} className="text-z-purple mx-auto mb-4" />
                        <h2 className="font-display font-bold text-2xl mb-4">Join DigiNext Society</h2>
                        <p className="text-z-text-muted mb-8">Are you a student at Superior University Sargodha? Join 150+ peers building the future of AI in Pakistan.</p>
                        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-z-purple text-white font-semibold rounded-lg hover:bg-z-purple/90 transition-all hover:shadow-lg hover:shadow-z-purple/25">
                            Apply Now <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust statement */}
            <section className="section-sm">
                <div className="container text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-z-text-muted">
                        <Trophy size={14} className="text-z-gold" />
                        DigiNext Society is the innovation arm of Zilhak Global Associates
                    </div>
                </div>
            </section>
        </div>
    );
}
