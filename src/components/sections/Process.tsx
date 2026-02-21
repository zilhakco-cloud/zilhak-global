"use client";

import { useRef } from "react";
import { processSteps } from "@/lib/data";
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const stepRefs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    return (
        <section className="section relative" id="process">
            <div className="container max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-mono text-amber-400 tracking-widest uppercase mb-3 block">
                        How We Work
                    </span>
                    <h2 className="font-bold tracking-tighter mb-4 text-white">
                        From Discovery to{" "}
                        <span className="gradient-text">Scale</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A proven 4-phase process that turns your idea into a shipped product
                        — with zero surprises along the way.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto" ref={containerRef}>
                    {/* Animated Beams connecting steps (desktop only) */}
                    <div className="hidden md:block">
                        {stepRefs.slice(0, -1).map((fromRef, i) => (
                            <AnimatedBeam
                                key={`beam-${i}`}
                                containerRef={containerRef as React.RefObject<HTMLElement>}
                                fromRef={fromRef as React.RefObject<HTMLElement>}
                                toRef={stepRefs[i + 1] as React.RefObject<HTMLElement>}
                                curvature={-30}
                                pathColor="rgba(255,255,255,0.04)"
                                pathWidth={1.5}
                                gradientStartColor="#22d3ee"
                                gradientStopColor="#2563eb"
                                duration={4 + i}
                                delay={i * 0.5}
                            />
                        ))}
                    </div>

                    {/* Mobile connector line */}
                    <div className="md:hidden absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-cyan-400/20 via-blue-500/20 to-violet-500/20" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative text-center md:text-center text-left pl-16 md:pl-0"
                            >
                                <div
                                    ref={stepRefs[i]}
                                    className="relative z-10 w-14 h-14 mx-auto md:mx-auto ml-0 mb-4 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center md:static absolute left-0 top-0 backdrop-blur-md"
                                >
                                    <span className="text-lg font-bold gradient-text">
                                        {String(step.step).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="font-bold tracking-tight text-lg text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
