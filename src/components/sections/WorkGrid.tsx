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
            <div className="container">
                <div className="text-center mb-12">
                    <span className="text-sm font-mono text-z-teal tracking-widest uppercase mb-3 block">
                        Our Work
                    </span>
                    <h2 className="font-display font-bold mb-4">
                        Built. Shipped.{" "}
                        <span className="gradient-text">Proven.</span>
                    </h2>
                    <p className="text-z-text-muted max-w-2xl mx-auto">
                        Real projects with real links. Every project card shows verified
                        GitHub ownership and live demos.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === f.value
                                ? "bg-z-blue text-white shadow-lg shadow-z-blue/20"
                                : "glass text-z-text-muted hover:text-z-text-primary hover:bg-white/10"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className={`group glass rounded-xl overflow-hidden relative ${project.size === "large"
                                    ? "sm:col-span-2 sm:row-span-1"
                                    : ""
                                    }`}
                            >
                                {/* ✨ Magic UI Border Beam on featured cards */}
                                {project.size === "large" && (
                                    <BorderBeam
                                        size={300}
                                        duration={12}
                                        colorFrom="#0A84FF"
                                        colorTo="#00E5C3"
                                        borderWidth={1.5}
                                    />
                                )}

                                {/* Gradient Background */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        background: `linear-gradient(135deg, ${project.category === "ai"
                                            ? "rgba(10,132,255,0.2), rgba(110,64,201,0.2)"
                                            : project.category === "web"
                                                ? "rgba(0,229,195,0.2), rgba(10,132,255,0.1)"
                                                : "rgba(245,158,11,0.2), rgba(0,229,195,0.1)"
                                            })`,
                                    }}
                                />

                                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                                    <div>
                                        {/* Badge */}
                                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-z-border text-z-text-muted mb-4">
                                            {project.badge}
                                        </span>
                                        <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-z-text-muted leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div>
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-z-text-muted"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm text-z-text-muted hover:text-z-blue transition-colors"
                                            >
                                                <Github size={14} />
                                                Code
                                            </a>
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-sm text-z-text-muted hover:text-z-teal transition-colors"
                                                >
                                                    <ExternalLink size={14} />
                                                    Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Hover border glow */}
                                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-z-blue/20 transition-all pointer-events-none" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg text-sm font-medium text-z-text-muted hover:text-z-text-primary hover:bg-white/10 transition-all"
                    >
                        View All Projects
                        <ExternalLink size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
