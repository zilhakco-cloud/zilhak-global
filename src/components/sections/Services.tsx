"use client";

import { services } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";

const accentMap = {
    blue: { border: "hover:border-cyan-500/20", icon: "text-cyan-400", shine: ["#22d3ee", "#2563eb"] },
    teal: { border: "hover:border-emerald-500/20", icon: "text-emerald-400", shine: ["#10b981", "#22d3ee"] },
    purple: { border: "hover:border-violet-500/20", icon: "text-violet-400", shine: ["#8b5cf6", "#22d3ee"] },
    gold: { border: "hover:border-amber-500/20", icon: "text-amber-400", shine: ["#f59e0b", "#22d3ee"] },
};

// Bento grid sizing: first & second cards are large (2-col), rest are normal
const bentoSpan = [
    "sm:col-span-2 sm:row-span-1",
    "sm:col-span-1",
    "sm:col-span-1",
    "sm:col-span-1",
    "sm:col-span-2 sm:row-span-1",
    "sm:col-span-1",
];

export function Services() {
    return (
        <section className="section relative" id="services">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
                        What We Build
                    </span>
                    <h2 className="font-bold tracking-tighter mb-4 text-white">
                        Six Verticals.{" "}
                        <span className="gradient-text">One Mission.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From mobile apps to autonomous AI agents — we cover the full
                        spectrum of modern tech solutions.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {services.map((service, i) => {
                        const accent = accentMap[service.color];

                        // Flashlight + 3D Tilt logic
                        const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            // Calculate rotation (max 10deg)
                            const rotateY = ((x / rect.width) - 0.5) * 15;
                            const rotateX = ((y / rect.height) - 0.5) * -15;

                            e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                            e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                            e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                        };

                        const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
                            e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                        };

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)", y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className={bentoSpan[i] || ""}
                            >
                                <ShineBorder
                                    borderRadius={16}
                                    borderWidth={1}
                                    duration={14 + i * 2}
                                    color={accent.shine}
                                    className="h-full"
                                >
                                    <Link
                                        href={`/services#${service.id}`}
                                        onMouseMove={handleMouseMove}
                                        onMouseLeave={handleMouseLeave}
                                        className={`group block bg-white/[0.03] backdrop-blur-lg rounded-[15px] p-12 md:p-16 h-full transition-all duration-500 hover:bg-white/[0.06] ${accent.border} flashlight-card`}
                                        style={{ transition: "transform 0.1s ease-out, background 0.3s ease" }}
                                    >
                                        <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-8 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${accent.icon}`}>
                                            <service.icon size={28} />
                                        </div>
                                        <h3 className="font-bold tracking-tight text-2xl text-white mb-4 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-base text-slate-400 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                                            <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">
                                                {service.trust}
                                            </span>
                                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors">
                                                <ArrowUpRight
                                                    size={18}
                                                    className="text-slate-600 group-hover:text-cyan-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </div>
                                        </div>
                                    </Link>
                                </ShineBorder>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
