"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const [visible, setVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Main Dot Position
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Trail Position with Spring Physics
    const trailX = useSpring(cursorX, { damping: 25, stiffness: 200 });
    const trailY = useSpring(cursorY, { damping: 25, stiffness: 200 });

    useEffect(() => {
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || prefersReduced) return;

        const onMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!visible) setVisible(true);
        };

        const onMouseLeave = () => setVisible(false);
        const onMouseEnter = () => setVisible(true);

        const onOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, [role='button'], input, textarea, select")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseover", onOver);

        document.body.style.cursor = "none";

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseover", onOver);
            document.body.style.cursor = "";
        };
    }, [visible, cursorX, cursorY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Trail Glow */}
            <motion.div
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 2 : 1,
                    opacity: visible ? (isHovering ? 0.8 : 0.4) : 0,
                }}
                className="absolute w-12 h-12 rounded-full border border-blue-500/30 bg-blue-600/5 blur-sm"
            />

            {/* Main Dot */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                    opacity: visible ? 1 : 0,
                }}
                className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            />
        </div>
    );
}

