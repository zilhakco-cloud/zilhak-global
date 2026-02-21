"use client";

import Link from "next/link";
import { ArrowRight, Download, Calendar } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { BorderBeam } from "@/components/ui/border-beam";

export function InvestorCTA() {
    return (
        <section className="section relative overflow-hidden">
            {/* ✨ Aceternity Spotlight */}
            <Spotlight
                className="-top-40 left-0 md:left-40 md:-top-20"
                fill="#0A84FF"
            />

            {/* Background gradient */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 50%, rgba(10,132,255,0.1) 0%, transparent 60%)",
                }}
            />

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto text-center relative">
                    {/* ✨ Magic UI Border Beam on CTA container */}
                    <div className="relative glass rounded-2xl p-10 md:p-14 overflow-hidden">
                        <BorderBeam
                            size={250}
                            duration={15}
                            colorFrom="#0A84FF"
                            colorTo="#6E40C9"
                            borderWidth={1.5}
                        />
                        <BorderBeam
                            size={250}
                            duration={15}
                            colorFrom="#00E5C3"
                            colorTo="#0A84FF"
                            borderWidth={1.5}
                            delay={7.5}
                        />

                        <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-6 block">
                            For Investors & Partners
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                            Building AI Infrastructure for{" "}
                            <span className="gradient-text">Pakistan and the World</span>
                        </h2>
                        <p className="text-lg text-z-text-muted mb-10 max-w-2xl mx-auto">
                            Zilhak Global Associates is an FBR-registered company with a 150+
                            student talent pipeline, 6 service verticals, and a growing portfolio
                            of shipped AI products.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/investors"
                                className="group px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/25 flex items-center gap-2"
                            >
                                View Investor Page
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="#"
                                className="px-8 py-3.5 glass text-z-text-primary font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <Download size={18} />
                                Pitch Deck PDF
                            </a>
                            <a
                                href="#"
                                className="px-8 py-3.5 glass text-z-text-primary font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                            >
                                <Calendar size={18} />
                                Schedule Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
