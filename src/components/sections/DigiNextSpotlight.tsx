"use client";

import { useCountUp } from "@/lib/animations";
import { projects } from "@/lib/data";
import { Github, ExternalLink, Users, GraduationCap, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";

const digiProjects = projects.filter((p) => p.badge.includes("DigiNext"));

export function DigiNextSpotlight() {
    return (
        <section className="section relative overflow-hidden" id="diginext-spotlight">
            {/* ✨ Aceternity Background Beams */}
            <BackgroundBeams className="opacity-40" />

            {/* Purple tinted background */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 0%, rgba(110,64,201,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(110,64,201,0.08) 0%, transparent 40%)",
                }}
            />
            <div className="absolute inset-0 border-y border-z-purple/10" />

            <div className="container relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-sm font-mono text-z-purple tracking-widest uppercase mb-3 block">
                        DigiNext Society
                    </span>
                    <h2 className="font-display font-bold mb-4">
                        Where Pakistan&apos;s AI Generation{" "}
                        <span className="gradient-text-purple">Is Born</span>
                    </h2>
                    <p className="text-z-text-muted max-w-2xl mx-auto">
                        DigiNext Society is Zilhak&apos;s innovation arm at Superior University
                        Sargodha. 150+ students building real AI products under Zilhak&apos;s IP framework.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    <StatCard icon={Users} label="Active Members" value={150} suffix="+" />
                    <StatCard icon={GraduationCap} label="Superior University" value={0} text="Sargodha" />
                    <StatCard icon={Sparkles} label="AI & Technology" value={0} text="Focus Area" />
                    <StatCard icon={Sparkles} label="Established" value={2024} suffix="" />
                </div>

                {/* DigiNext Projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {digiProjects.slice(0, 3).map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="glass rounded-xl p-6 group hover:border-z-purple/30 transition-all hover:-translate-y-1"
                        >
                            <span className="inline-flex px-2 py-1 rounded text-xs font-mono bg-z-purple/10 text-z-purple border border-z-purple/20 mb-4">
                                {project.badge}
                            </span>
                            <h3 className="font-display font-semibold mb-2">{project.name}</h3>
                            <p className="text-sm text-z-text-muted mb-4 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-z-text-muted hover:text-z-purple text-sm flex items-center gap-1">
                                    <Github size={14} /> Code
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-z-text-muted hover:text-z-purple text-sm flex items-center gap-1">
                                        <ExternalLink size={14} /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/diginext"
                        className="group inline-flex items-center gap-2 px-8 py-3.5 bg-z-purple text-white font-semibold rounded-lg hover:bg-z-purple/90 transition-all hover:shadow-lg hover:shadow-z-purple/25"
                    >
                        Explore DigiNext Society
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function StatCard({
    icon: Icon,
    label,
    value,
    suffix = "",
    text,
}: {
    icon: LucideIcon;
    label: string;
    value: number;
    suffix?: string;
    text?: string;
}) {
    const ref = useCountUp(value, 2000);

    return (
        <div className="glass rounded-xl p-5 text-center group hover:border-z-purple/20 transition-all">
            <Icon size={24} className="text-z-purple mx-auto mb-3 opacity-70" />
            <div className="text-2xl font-display font-bold text-z-text-primary mb-1">
                {text ? (
                    text
                ) : (
                    <>
                        <span ref={ref}>0</span>
                        {suffix}
                    </>
                )}
            </div>
            <span className="text-xs text-z-text-muted">{label}</span>
        </div>
    );
}
