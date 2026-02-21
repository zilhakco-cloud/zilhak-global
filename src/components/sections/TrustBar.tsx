"use client";

import { useCountUp } from "@/lib/animations";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

export function TrustBar() {
    return (
        <section className="section-sm relative border-y border-white/[0.04]">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <StatItem {...stat} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
    const ref = useCountUp(value, 2000);

    return (
        <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-1">
                <span ref={ref}>0</span>
                <span className="gradient-text">{suffix}</span>
            </div>
            <div className="text-sm text-slate-500 font-medium">{label}</div>
        </div>
    );
}
