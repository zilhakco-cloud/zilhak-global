"use client";

import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export function Testimonials() {
    const doubled = [...testimonials, ...testimonials];

    return (
        <section className="section relative overflow-hidden" id="testimonials">
            <div className="container max-w-7xl mx-auto mb-14">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-3 block">
                        What They Say
                    </span>
                    <h2 className="font-bold tracking-tighter mb-4 text-white">
                        Trusted by Builders.{" "}
                        <span className="gradient-text">Proven by Results.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Infinite Marquee Row 1 */}
            <div className="relative mb-4 overflow-hidden">
                <div className="flex gap-4 marquee hover:[animation-play-state:paused]">
                    {doubled.map((t, i) => (
                        <MagicCard key={`a-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Infinite Marquee Row 2 (reverse) */}
            <div className="relative overflow-hidden">
                <div className="flex gap-4 marquee-reverse hover:[animation-play-state:paused]">
                    {[...doubled].reverse().map((t, i) => (
                        <MagicCard key={`b-${i}`} {...t} />
                    ))}
                </div>
            </div>

            {/* Edge fade masks */}
            <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
        </section>
    );
}

function MagicCard({
    name,
    role,
    quote,
}: {
    name: string;
    role: string;
    quote: string;
    avatar: string;
}) {
    // Generate a gradient from the first letter for avatar
    const gradients: Record<string, string> = {
        A: "from-cyan-400 to-blue-500",
        B: "from-violet-400 to-purple-500",
        S: "from-emerald-400 to-cyan-500",
        D: "from-amber-400 to-orange-500",
        U: "from-blue-400 to-indigo-500",
        M: "from-rose-400 to-pink-500",
    };
    const grad = gradients[name.charAt(0)] || "from-cyan-400 to-blue-500";

    return (
        <div className="flex-shrink-0 w-[380px] group relative rounded-xl overflow-hidden transition-all duration-300">
            {/* Card with subtle border and 10% opacity fill */}
            <div className="relative p-9 bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-xl hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300">
                <Quote size={18} className="text-cyan-400/30 mb-4" />
                <p className="text-sm text-slate-400 leading-relaxed mb-5">
                    &quot;{quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                    {/* Gradient avatar placeholder */}
                    <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-white font-semibold text-sm`}>
                        {name.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white">{name}</p>
                        <p className="text-xs text-slate-500">{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
