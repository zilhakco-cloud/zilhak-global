"use client";

import { useCountUp } from "@/lib/animations";
import { stats } from "@/lib/data";

export function TrustBar() {
    return (
        <section className="section-sm relative border-y border-z-border bg-z-bg-surface/50">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat) => (
                        <StatItem key={stat.label} {...stat} />
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
            <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
                <span ref={ref}>0</span>
                {suffix}
            </div>
            <div className="text-sm text-z-text-muted font-medium">{label}</div>
        </div>
    );
}
