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
            <BackgroundBeams className="opacity-30" />

            {/* Subtle purple tinted background */}
            <div className="absolute inset-0" style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 60%)",
            }} />
            <div className="absolute inset-0 border-y border-white/[0.04]" />

            <div className="container max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-mono text-violet-400 tracking-widest uppercase mb-3 block">
                        DigiNext Society
                    </span>
                    <h2 className="font-bold tracking-tighter mb-4 text-white">
                        Where Pakistan&apos;s AI Generation{" "}
                        <span className="gradient-text-purple">Is Born</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        DigiNext Society is Zilhak&apos;s innovation arm at Superior University
                        Sargodha. 150+ students building real AI products.
                    </p>
                </motion.div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <StatCard icon={Users} label="Active Members" value={150} suffix="+" />
                    <StatCard icon={GraduationCap} label="Superior University" value={0} text="Sargodha" />
                    <StatCard icon={Sparkles} label="AI & Technology" value={0} text="Focus Area" />
                    <StatCard icon={Sparkles} label="Established" value={2024} suffix="" />
                </div>

                {/* DigiNext Projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {digiProjects.slice(0, 3).map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-xl p-6 group hover:border-violet-500/20 hover:bg-white/[0.05] transition-all duration-300"
                        >
                            <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-mono bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-4">
                                {project.badge}
                            </span>
                            <h3 className="font-bold tracking-tight text-white mb-2">{project.name}</h3>
                            <p className="text-sm text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                                {project.description}
                            </p>
                            <div className="flex gap-3">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-violet-400 text-sm flex items-center gap-1 transition-colors">
                                    <Github size={14} /> Code
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-violet-400 text-sm flex items-center gap-1 transition-colors">
                                        <ExternalLink size={14} /> Live
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/diginext"
                        className="group inline-flex items-center gap-2 px-8 py-3.5 bg-violet-500 text-white font-semibold rounded-lg hover:bg-violet-400 transition-all hover:shadow-lg hover:shadow-violet-500/20"
                    >
                        Explore DigiNext Society
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
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
        <div className="bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-xl p-5 text-center group hover:border-violet-500/15 transition-all duration-300">
            <Icon size={22} className="text-violet-400 mx-auto mb-3 opacity-60" />
            <div className="text-2xl font-bold tracking-tight text-white mb-1">
                {text || (
                    <>
                        <span ref={ref}>0</span>
                        {suffix}
                    </>
                )}
            </div>
            <span className="text-xs text-slate-500">{label}</span>
        </div>
    );
}
