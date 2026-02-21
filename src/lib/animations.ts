"use client";

import { useEffect, useRef, useCallback } from "react";

export function useScrollAnimation(options?: {
    threshold?: number;
    rootMargin?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
            }
        });
    }, []);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            ref.current?.classList.add("animate-in");
            return;
        }

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: options?.threshold ?? 0.1,
            rootMargin: options?.rootMargin ?? "0px",
        });

        const element = ref.current;
        if (element) {
            const children = element.querySelectorAll(".animate-item");
            if (children.length > 0) {
                children.forEach((child) => observer.observe(child));
            } else {
                observer.observe(element);
            }
        }

        return () => observer.disconnect();
    }, [handleIntersect, options?.threshold, options?.rootMargin]);

    return ref;
}

export function useCountUp(
    target: number,
    duration: number = 2000,
    startOnView: boolean = true
) {
    const ref = useRef<HTMLSpanElement>(null);
    const counted = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            element.textContent = String(target);
            return;
        }

        const animate = () => {
            if (counted.current) return;
            counted.current = true;

            const start = performance.now();
            const update = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                element.textContent = String(Math.floor(eased * target));
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        };

        if (!startOnView) {
            animate();
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) animate();
            },
            { threshold: 0.5 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [target, duration, startOnView]);

    return ref;
}
