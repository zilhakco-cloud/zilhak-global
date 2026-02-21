import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Calendar, BarChart3, Users, Code, Building } from "lucide-react";

export const metadata: Metadata = {
    title: "Investors",
    description:
        "Zilhak Global Associates investor relations — AI infrastructure for Pakistan. View our traction, team, and pitch deck.",
};

const traction = [
    { icon: Code, label: "Projects Shipped", value: "25+" },
    { icon: Users, label: "Student Builders", value: "150+" },
    { icon: BarChart3, label: "Service Verticals", value: "6" },
    { icon: Building, label: "FBR Registered", value: "Yes" },
];

export default function InvestorsPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(10,132,255,0.12) 0%, transparent 60%)" }} />
                <div className="container relative z-10 text-center max-w-3xl mx-auto">
                    <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">For Investors & Partners</span>
                    <h1 className="font-display font-bold mb-6">
                        Building AI Infrastructure for{" "}
                        <span className="gradient-text">Pakistan and the World</span>
                    </h1>
                    <p className="text-lg text-z-text-muted mb-10">
                        Zilhak Global Associates bridges the AI adoption gap in Pakistani SMEs
                        while growing the next generation of AI builders through DigiNext Society.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#" className="px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/25 flex items-center gap-2">
                            <Download size={18} /> Download Pitch Deck
                        </a>
                        <a href="#" className="px-8 py-3.5 glass text-z-text-primary font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                            <Calendar size={18} /> Schedule a Call
                        </a>
                    </div>
                </div>
            </section>

            {/* Problem / Solution */}
            <section className="section">
                <div className="container max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass rounded-3xl p-16 md:p-20">
                            <h3 className="font-display font-bold text-2xl mb-6 text-red-400 uppercase tracking-wider">The Problem</h3>
                            <ul className="space-y-3 text-sm text-z-text-muted">
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> Pakistani SMEs are 5-10 years behind on AI adoption</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> Massive talent gap — demand for AI builders far exceeds supply</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> Local tech agencies offer websites, not intelligent systems</li>
                                <li className="flex items-start gap-2"><span className="text-red-400 mt-1">•</span> No bridge between university talent and industry needs</li>
                            </ul>
                        </div>
                        <div className="glass rounded-3xl p-16 md:p-20" style={{ background: "linear-gradient(135deg, rgba(0,229,195,0.05), transparent)" }}>
                            <h3 className="font-display font-bold text-2xl mb-6 text-z-teal uppercase tracking-wider">Our Solution</h3>
                            <ul className="space-y-3 text-sm text-z-text-muted">
                                <li className="flex items-start gap-2"><span className="text-z-teal mt-1">•</span> Zilhak builds tools — AI chatbots, agentic systems, automations</li>
                                <li className="flex items-start gap-2"><span className="text-z-teal mt-1">•</span> DigiNext grows talent — 150+ students trained in practical AI</li>
                                <li className="flex items-start gap-2"><span className="text-z-teal mt-1">•</span> Built-in hiring pipeline from society to company</li>
                                <li className="flex items-start gap-2"><span className="text-z-teal mt-1">•</span> IP ownership of all projects under one registered entity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Traction */}
            <section className="section-sm bg-z-bg-surface/50 border-y border-z-border py-20 md:py-32">
                <div className="container">
                    <h2 className="text-center font-display font-bold text-3xl mb-16">Traction</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
                        {traction.map((t, i) => (
                            <div key={i} className="text-center">
                                <t.icon size={24} className="text-z-blue mx-auto mb-3 opacity-70" />
                                <div className="text-2xl font-display font-bold gradient-text mb-1">{t.value}</div>
                                <span className="text-xs text-z-text-muted">{t.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Market */}
            <section className="section">
                <div className="container max-w-3xl mx-auto text-center">
                    <h2 className="font-display font-bold text-2xl mb-6">Market Opportunity</h2>
                    <p className="text-z-text-muted mb-8 leading-relaxed">
                        Pakistan&apos;s IT industry is projected to reach $10B+ by 2030. The AI automation
                        market alone is growing at 35% CAGR. With 220M+ population and rapid digital
                        adoption, the opportunity for AI-first service companies is massive.
                    </p>
                    <div className="glass rounded-2xl p-12 inline-block max-w-2xl">
                        <p className="text-sm text-z-text-muted mb-4 uppercase tracking-widest font-mono">We are looking for</p>
                        <p className="font-display font-semibold text-xl leading-relaxed text-white">Microsoft for Startups · Google for Startups · NAVTTC Partnership · Strategic Investment</p>
                    </div>
                </div>
            </section>

            {/* Downloads */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="font-display font-bold text-2xl mb-8">Downloads</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="glass rounded-xl px-8 py-6 flex items-center gap-4 hover:border-z-blue/40 transition-all group">
                            <Download size={22} className="text-z-blue group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-base font-semibold text-white">Pitch Deck PDF</p>
                                <p className="text-xs text-z-text-muted">Updated quarterly</p>
                            </div>
                        </a>
                        <a href="#" className="glass rounded-xl px-8 py-6 flex items-center gap-4 hover:border-z-blue/40 transition-all group">
                            <Download size={22} className="text-z-blue group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-base font-semibold text-white">Company Overview</p>
                                <p className="text-xs text-z-text-muted">One-pager</p>
                            </div>
                        </a>
                        <a href="#" className="glass rounded-xl px-8 py-6 flex items-center gap-4 hover:border-z-blue/40 transition-all group">
                            <Download size={22} className="text-z-blue group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                                <p className="text-base font-semibold text-white">FBR Certificate</p>
                                <p className="text-xs text-z-text-muted">Registration scan</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center max-w-2xl mx-auto">
                    <div className="glass rounded-2xl p-10" style={{ background: "linear-gradient(135deg, rgba(10,132,255,0.08), transparent)" }}>
                        <h2 className="font-display font-bold text-2xl mb-4">Ready to Talk?</h2>
                        <p className="text-z-text-muted mb-8">Schedule a call with our founding team or send us a message.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" className="px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all flex items-center gap-2">
                                <Calendar size={18} /> Schedule Call
                            </a>
                            <Link href="/contact" className="px-8 py-3.5 glass text-z-text-primary font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2">
                                Send Email <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
