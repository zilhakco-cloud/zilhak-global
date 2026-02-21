"use client";

import { useEffect, useRef } from "react";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        let animationFrame: number;

        async function initLenis() {
            const Lenis = (await import("lenis")).default;
            const lenis = new Lenis({
                duration: 1.2,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                touchMultiplier: 2,
            });

            lenisRef.current = lenis;

            function raf(time: number) {
                lenis.raf(time);
                animationFrame = requestAnimationFrame(raf);
            }
            animationFrame = requestAnimationFrame(raf);
        }

        initLenis();

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}
