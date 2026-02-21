"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { Github, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const filters = [
    { label: "All", value: "all" },
    { label: "App Dev", value: "app" },
    { label: "Web Dev", value: "web" },
    { label: "AI / Automation", value: "ai" },
    { label: "DigiNext", value: "diginext" },
];

export function WorkPageContent() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : activeFilter === "diginext"
                ? projects.filter((p) => p.badge.includes("DigiNext"))
                : projects.filter((p) => p.category === activeFilter);

    return (
        <section className="section">
            <div className="container">
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${activeFilter === f.value
                                    ? "bg-z-blue text-white shadow-lg shadow-z-blue/20"
                                    : "glass text-z-text-muted hover:text-z-text-primary hover:bg-white/10"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="glass rounded-xl p-6 group hover:border-z-blue/20 transition-all hover:-translate-y-1"
                            >
                                {/* Gradient Background */}
                                <div className="h-40 rounded-lg mb-5 overflow-hidden relative">
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(135deg, ${project.category === "ai"
                                                    ? "rgba(10,132,255,0.15), rgba(110,64,201,0.15)"
                                                    : project.category === "web"
                                                        ? "rgba(0,229,195,0.15), rgba(10,132,255,0.1)"
                                                        : "rgba(245,158,11,0.15), rgba(0,229,195,0.1)"
                                                })`,
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-display font-bold text-white/10">
                                        {project.name.charAt(0)}
                                    </div>
                                </div>

                                <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-z-border text-z-text-muted mb-3">
                                    {project.badge}
                                </span>
                                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-z-text-muted mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-z-text-muted">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-z-border">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-z-text-muted hover:text-z-blue transition-colors">
                                        <Github size={14} /> GitHub
                                    </a>
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-z-text-muted hover:text-z-teal transition-colors">
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
