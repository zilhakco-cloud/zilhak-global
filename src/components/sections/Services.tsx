"use client";

import { services } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const colorMap = {
    blue: "hover:border-z-blue/40 hover:shadow-z-blue/10",
    teal: "hover:border-z-teal/40 hover:shadow-z-teal/10",
    purple: "hover:border-z-purple/40 hover:shadow-z-purple/10",
    gold: "hover:border-z-gold/40 hover:shadow-z-gold/10",
};

const iconColorMap = {
    blue: "text-z-blue",
    teal: "text-z-teal",
    purple: "text-z-purple",
    gold: "text-z-gold",
};

export function Services() {
    return (
        <section className="section relative" id="services">
            <div className="container">
                <div className="text-center mb-16">
                    <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">
                        What We Build
                    </span>
                    <h2 className="font-display font-bold mb-4">
                        Six Verticals.{" "}
                        <span className="gradient-text">One Mission.</span>
                    </h2>
                    <p className="text-z-text-muted max-w-2xl mx-auto">
                        From mobile apps to autonomous AI agents — we cover the full
                        spectrum of modern tech solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <Link
                                href={`/services#${service.id}`}
                                className={`group block glass rounded-xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${colorMap[service.color]}`}
                            >
                                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${iconColorMap[service.color]}`}>
                                    <service.icon size={24} />
                                </div>
                                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-z-text-muted mb-4 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-z-text-muted font-mono">
                                        {service.trust}
                                    </span>
                                    <ArrowUpRight
                                        size={16}
                                        className="text-z-text-muted group-hover:text-z-blue transition-colors"
                                    />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
