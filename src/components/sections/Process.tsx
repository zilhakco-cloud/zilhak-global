"use client";

import { processSteps } from "@/lib/data";
import { motion } from "framer-motion";

export function Process() {
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
                <div className="relative max-w-4xl mx-auto">
                    {/* Connector line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-z-blue via-z-teal to-z-purple transform -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                className="relative text-center"
                            >
                                {/* Step number */}
                                <div className="relative z-10 w-14 h-14 mx-auto mb-4 rounded-full bg-z-bg-elevated border-2 border-z-border flex items-center justify-center group-hover:border-z-blue transition-colors">
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
