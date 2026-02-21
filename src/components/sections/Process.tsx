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
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-sm font-mono text-z-gold tracking-widest uppercase mb-3 block">
                        How We Work
                    </span>
                    <h2 className="font-display font-bold mb-4">
                        From Discovery to{" "}
                        <span className="gradient-text">Scale</span>
                    </h2>
                    <p className="text-z-text-muted max-w-2xl mx-auto">
                        A proven 4-phase process that turns your idea into a shipped product
                        — with zero surprises along the way.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto" ref={containerRef}>
                    {/* ✨ Magic UI Animated Beams connecting steps (desktop only) */}
                    <div className="hidden md:block">
                        {stepRefs.slice(0, -1).map((fromRef, i) => (
                            <AnimatedBeam
                                key={`beam-${i}`}
                                containerRef={containerRef as React.RefObject<HTMLElement>}
                                fromRef={fromRef as React.RefObject<HTMLElement>}
                                toRef={stepRefs[i + 1] as React.RefObject<HTMLElement>}
                                curvature={-30}
                                pathColor="rgba(255,255,255,0.06)"
                                pathWidth={1.5}
                                gradientStartColor="#0A84FF"
                                gradientStopColor="#00E5C3"
                                duration={4 + i}
                                delay={i * 0.5}
                            />
                        ))}
                    </div>

                    {/* Mobile connector line fallback */}
                    <div className="md:hidden absolute top-0 bottom-0 left-7 w-px bg-gradient-to-b from-z-blue via-z-teal to-z-purple" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative text-center md:text-center text-left pl-16 md:pl-0"
                            >
                                {/* Step number */}
                                <div
                                    ref={stepRefs[i]}
                                    className="relative z-10 w-14 h-14 mx-auto md:mx-auto ml-0 mb-4 rounded-full bg-z-bg-elevated border-2 border-z-border flex items-center justify-center group-hover:border-z-blue transition-colors md:static absolute left-0 top-0"
                                >
                                    <span className="text-lg font-display font-bold gradient-text">
                                        {String(step.step).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="font-display font-semibold text-lg mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-z-text-muted leading-relaxed">
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
