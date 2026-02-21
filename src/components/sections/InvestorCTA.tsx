"use client";

import Link from "next/link";
import { ArrowRight, Download, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";

export function InvestorCTA() {
    return (
        <section className="section relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-40 md:-top-20" fill="#22d3ee" />

            <div className="container max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="max-w-3xl mx-auto text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.06] rounded-3xl p-16 md:p-24 overflow-hidden">
                        <BorderBeam size={250} duration={15} colorFrom="#22d3ee" colorTo="#8b5cf6" borderWidth={1.5} />
                        <BorderBeam size={250} duration={15} colorFrom="#2563eb" colorTo="#22d3ee" borderWidth={1.5} delay={7.5} />

                        <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-8 block">
                            For Investors & Partners
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 text-white">
                            Building AI Infrastructure for{" "}
                            <br className="hidden md:block" />
                            <span className="gradient-text">Pakistan and the World</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Zilhak Global Associates is an FBR-registered company with a 150+
                            student talent pipeline, 6 service verticals, and a growing portfolio
                            of shipped AI products.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="/investors"
                                className="group px-10 py-4.5 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all hover:shadow-xl hover:shadow-white/10 flex items-center gap-2 whitespace-nowrap"
                            >
                                View Investor Page
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#"
                                className="px-10 py-4.5 glass glass-hover text-slate-200 font-bold rounded-xl transition-all flex items-center gap-2 whitespace-nowrap"
                            >
                                <Download size={20} />
                                Pitch Deck PDF
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
