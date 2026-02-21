"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

const colorBg: Record<string, string> = {
    blue: "rgba(10,132,255,0.08)",
    teal: "rgba(0,229,195,0.08)",
    purple: "rgba(110,64,201,0.08)",
    gold: "rgba(245,158,11,0.08)",
};

const iconColor: Record<string, string> = {
    blue: "text-z-blue",
    teal: "text-z-teal",
    purple: "text-z-purple",
    gold: "text-z-gold",
};

export function ServicesPageContent() {
    return (
        <section className="section">
            <div className="container">
                <div className="space-y-20">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="scroll-mt-24"
                        >
                            <div
                                className={`glass rounded-2xl p-8 md:p-12`}
                                style={{
                                    background: `linear-gradient(135deg, ${colorBg[service.color]}, transparent 60%)`,
                                }}
                            >
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 ${iconColor[service.color]}`}
                                        >
                                            <service.icon size={28} />
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-z-blue font-medium mb-4">
                                            {service.tagline}
                                        </p>
                                        <p className="text-z-text-muted leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-mono text-z-teal">
                                            <span className="w-2 h-2 rounded-full bg-z-teal" />
                                            {service.trust}
                                        </div>
                                    </div>

                                    {/* Visual placeholder */}
                                    <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `radial-gradient(circle at 50% 50%, ${colorBg[service.color].replace("0.08", "0.3")}, transparent 70%)`,
                                            }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <service.icon
                                                size={80}
                                                className={`${iconColor[service.color]} opacity-20`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
