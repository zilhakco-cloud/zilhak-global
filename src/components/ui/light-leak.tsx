"use client";

import { motion } from "framer-motion";

export function LightLeak() {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Top Left Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px]"
            />

            {/* Bottom Right Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.3, 1],
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-600/10 blur-[140px]"
            />

            {/* Center Subtle Accent */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] rounded-full bg-purple-500/5 blur-[160px]"
            />
        </div>
    );
}
