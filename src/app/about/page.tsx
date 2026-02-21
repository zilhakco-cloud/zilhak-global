import type { Metadata } from "next";
import { Target, Shield, Zap, Users, Linkedin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About",
    description:
        "Zilhak Global Associates — FBR-registered AI & tech company from Sargodha, Pakistan. Learn about our story, mission, and team.",
};

const values = [
    { icon: Target, title: "Specificity Over Vagueness", desc: "We don't say 'we build AI.' We say exactly what we built, for whom, and what results it delivered." },
    { icon: Shield, title: "IP Integrity", desc: "Every project is registered under Zilhak's GitHub org with clear ownership and attribution." },
    { icon: Zap, title: "Ship Fast, Ship Real", desc: "We prefer 6 shipped projects over 60 concepts. Working code beats pitch decks." },
    { icon: Users, title: "Talent Pipeline", desc: "DigiNext Society gives us a 150+ student R&D arm. We don't hire — we grow talent." },
];

const team = [
    { name: "Founder & CEO", role: "Zilhak Global Associates", bio: "Visionary behind Zilhak's AI-first approach. Building the bridge between Pakistani talent and global tech standards.", linkedin: "#" },
    { name: "DigiNext President", role: "DigiNext Society", bio: "Leading 150+ student builders at Superior University Sargodha. Focused on making AI education practical and project-driven.", linkedin: "#" },
    { name: "VP Engineering", role: "DigiNext Society", bio: "Overseeing all technical projects across the society. From web apps to agentic AI systems.", linkedin: "#" },
];

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="section">
                <div className="container max-w-3xl mx-auto text-center">
                    <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">About Us</span>
                    <h1 className="font-display font-bold mb-6">
                        Built in Pakistan.{" "}
                        <span className="gradient-text">Architected for the World.</span>
                    </h1>
                    <p className="text-lg text-z-text-muted leading-relaxed">
                        Zilhak Global Associates is an FBR-registered AI & technology company
                        headquartered in Sargodha, Pakistan. We combine commercial tech services
                        with a 150+ student innovation pipeline through DigiNext Society at
                        Superior University.
                    </p>
                </div>
            </section>

            {/* Structure */}
            <section className="section-sm bg-z-bg-surface/50 border-y border-z-border">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="glass rounded-xl p-8">
                            <div className="w-12 h-12 rounded-lg bg-z-blue/10 flex items-center justify-center mb-4">
                                <Shield size={24} className="text-z-blue" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-2">Zilhak Global Associates</h3>
                            <p className="text-sm text-z-text-muted font-mono mb-3">Parent Company</p>
                            <ul className="space-y-2 text-sm text-z-text-muted">
                                <li>• FBR-registered legal entity</li>
                                <li>• Commercial client-facing brand</li>
                                <li>• IP owner of ALL projects</li>
                                <li>• 6 service verticals</li>
                                <li>• Investor & Microsoft pitch vehicle</li>
                            </ul>
                        </div>
                        <div className="glass rounded-xl p-8" style={{ background: "linear-gradient(135deg, rgba(110,64,201,0.05), transparent)" }}>
                            <div className="w-12 h-12 rounded-lg bg-z-purple/10 flex items-center justify-center mb-4">
                                <Users size={24} className="text-z-purple" />
                            </div>
                            <h3 className="font-display font-bold text-xl mb-2">DigiNext Society</h3>
                            <p className="text-sm text-z-text-muted font-mono mb-3">Innovation & Talent Division</p>
                            <ul className="space-y-2 text-sm text-z-text-muted">
                                <li>• AI & Tech Society — Superior University Sargodha</li>
                                <li>• 150-200 student talent pipeline</li>
                                <li>• R&D and innovation lab</li>
                                <li>• Recruits next-gen AI/app builders</li>
                                <li>• Student projects = Zilhak-credited work</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center font-display font-bold text-2xl mb-12">What Drives Us</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {values.map((v, i) => (
                            <div key={i} className="glass rounded-xl p-6 text-center hover:-translate-y-1 transition-all">
                                <v.icon size={28} className="text-z-blue mx-auto mb-4" />
                                <h3 className="font-display font-semibold mb-2">{v.title}</h3>
                                <p className="text-sm text-z-text-muted">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center font-display font-bold text-2xl mb-12">Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="glass rounded-xl p-6 text-center group hover:border-z-blue/20 transition-all">
                                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-z-blue to-z-teal flex items-center justify-center text-white font-display font-bold text-2xl mb-4">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="font-display font-semibold mb-1">{member.name}</h3>
                                <p className="text-xs font-mono text-z-text-muted mb-3">{member.role}</p>
                                <p className="text-sm text-z-text-muted mb-4">{member.bio}</p>
                                <a href={member.linkedin} className="inline-flex items-center gap-1 text-sm text-z-text-muted hover:text-z-blue transition-colors">
                                    <Linkedin size={14} /> LinkedIn
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/25">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
