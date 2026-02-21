"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";

const filters = [
    { label: "All", value: "all" },
    { label: "App Dev", value: "app" },
    { label: "Web Dev", value: "web" },
    { label: "AI / Automation", value: "ai" },
];

export function WorkGrid() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section className="section relative" id="work">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
                        Our Work
                    </span>
                    <h2 className="font-bold tracking-tighter mb-4 text-white">
                        Built. Shipped.{" "}
                        <span className="gradient-text">Proven.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Real projects with real links. Every project card shows verified
                        GitHub ownership and live demos.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === f.value
                                ? "bg-white text-slate-900 shadow-lg shadow-white/5"
                                : "glass text-slate-400 hover:text-white hover:bg-white/[0.06]"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[320px]">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className={`group relative rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-md border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300 ${project.size === "large" ? "sm:col-span-2" : ""
                                    }`}
                            >
                                {/* Border Beam on featured cards */}
                                {project.size === "large" && (
                                    <BorderBeam
                                        size={300}
                                        duration={12}
                                        colorFrom="#22d3ee"
                                        colorTo="#2563eb"
                                        borderWidth={1.5}
                                    />
                                )}

                                {/* Subtle gradient background */}
                                <div className="absolute inset-0 opacity-20" style={{
                                    background: `radial-gradient(ellipse at 50% 0%, ${project.category === "ai" ? "rgba(34,211,238,0.12)" : project.category === "web" ? "rgba(16,185,129,0.12)" : "rgba(245,158,11,0.12)"}, transparent 70%)`,
                                }} />

                                <div className="relative z-10 p-9 h-full flex flex-col justify-between">
                                    <div>
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/[0.06] text-slate-400 mb-4">
                                            {project.badge}
                                        </span>
                                        <h3 className="font-bold tracking-tight text-lg text-white mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-500">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                                                <Github size={14} /> Code
                                            </a>
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-emerald-400 transition-colors">
                                                    <ExternalLink size={14} /> Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-lg text-sm font-medium text-slate-400 hover:text-white transition-all"
                    >
                        View All Projects
                        <ExternalLink size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
