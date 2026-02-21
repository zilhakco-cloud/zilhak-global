"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
    const doubled = [...testimonials, ...testimonials];

    return (
        <section className="section relative overflow-hidden" id="testimonials">
            <div className="container mb-12">
                <div className="text-center">
                    <span className="text-sm font-mono text-z-teal tracking-widest uppercase mb-3 block">
                        What They Say
                    </span>
                    <h2 className="font-display font-bold mb-4">
                        Trusted by Builders.{" "}
                        <span className="gradient-text">Proven by Results.</span>
                    </h2>
                </div>
            </div>

            {/* Marquee Row 1 */}
            <div className="relative mb-4 overflow-hidden">
                <div className="flex gap-4 marquee hover:[animation-play-state:paused]">
                    {doubled.map((t, i) => (
                        <TestimonialCard key={`a-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Marquee Row 2 (reverse) */}
            <div className="relative overflow-hidden">
                <div className="flex gap-4 marquee-reverse hover:[animation-play-state:paused]">
                    {[...doubled].reverse().map((t, i) => (
                        <TestimonialCard key={`b-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Gradient masks */}
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-z-bg-base to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-z-bg-base to-transparent z-10 pointer-events-none" />
        </section>
    );
}

function TestimonialCard({
    name,
    role,
    quote,
}: {
    name: string;
    role: string;
    quote: string;
    avatar: string;
}) {
    return (
        <div className="flex-shrink-0 w-[380px] glass rounded-xl p-6 hover:border-z-border-hover transition-all">
            <Quote size={20} className="text-z-blue/40 mb-3" />
            <p className="text-sm text-z-text-muted leading-relaxed mb-4">
                &quot;{quote}&quot;
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-z-blue to-z-teal flex items-center justify-center text-white font-semibold text-sm">
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="text-sm font-medium text-z-text-primary">{name}</p>
                    <p className="text-xs text-z-text-muted">{role}</p>
                </div>
            </div>
        </div>
    );
}
