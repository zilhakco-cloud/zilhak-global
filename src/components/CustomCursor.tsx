"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Only show on desktop with pointer (no touch)
        const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (isTouch || prefersReduced) return;

        const onMouseMove = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (trailRef.current) {
                trailRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
            if (!visible) setVisible(true);
        };

        const onMouseLeave = () => setVisible(false);
        const onMouseEnter = () => setVisible(true);

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseleave", onMouseLeave);
        document.addEventListener("mouseenter", onMouseEnter);

        // Add cursor-none to body
        document.body.style.cursor = "none";
        const links = document.querySelectorAll("a, button, [role='button'], input, textarea, select");
        links.forEach((el) => {
            (el as HTMLElement).style.cursor = "none";
        });

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.body.style.cursor = "";
        };
    }, [visible]);

    return (
        <>
            {/* Main dot */}
            <div
                ref={cursorRef}
                className="custom-cursor-dot"
                style={{ opacity: visible ? 1 : 0 }}
                aria-hidden="true"
            />
            {/* Trail */}
            <div
                ref={trailRef}
                className="custom-cursor-trail"
                style={{ opacity: visible ? 1 : 0 }}
                aria-hidden="true"
            />
        </>
    );
}
