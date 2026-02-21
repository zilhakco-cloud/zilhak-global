"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { cn } from "@/lib/utils";

const PARTICLE_COUNT = 800;

function Particles() {
    const meshRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    const { positions, originalPositions, colors, sizes } = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const origPos = new Float32Array(PARTICLE_COUNT * 3);
        const col = new Float32Array(PARTICLE_COUNT * 3);
        const siz = new Float32Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            let x: number, y: number, z: number;

            if (i < PARTICLE_COUNT * 0.35) {
                const t = i / (PARTICLE_COUNT * 0.35);
                if (t < 0.33) {
                    x = (t / 0.33) * 4 - 2;
                    y = 2 + (Math.random() - 0.5) * 0.2;
                } else if (t < 0.66) {
                    const dt = (t - 0.33) / 0.33;
                    x = 2 - dt * 4;
                    y = 2 - dt * 4;
                } else {
                    const dt = (t - 0.66) / 0.34;
                    x = -2 + dt * 4;
                    y = -2 + (Math.random() - 0.5) * 0.2;
                }
                z = (Math.random() - 0.5) * 0.8;
                x += (Math.random() - 0.5) * 0.4;
                y += (Math.random() - 0.5) * 0.4;
            } else {
                x = (Math.random() - 0.5) * 15;
                y = (Math.random() - 0.5) * 10;
                z = (Math.random() - 0.5) * 5;
            }

            pos[i3] = x;
            pos[i3 + 1] = y;
            pos[i3 + 2] = z;
            origPos[i3] = x;
            origPos[i3 + 1] = y;
            origPos[i3 + 2] = z;

            const colorChoice = Math.random();
            if (colorChoice < 0.5) {
                col[i3] = 34 / 255; col[i3 + 1] = 211 / 255; col[i3 + 2] = 238 / 255;
            } else if (colorChoice < 0.8) {
                col[i3] = 37 / 255; col[i3 + 1] = 99 / 255; col[i3 + 2] = 235 / 255;
            } else {
                col[i3] = 139 / 255; col[i3 + 1] = 92 / 255; col[i3 + 2] = 246 / 255;
            }

            siz[i] = Math.random() * 2 + 0.5;
        }

        return { positions: pos, originalPositions: origPos, colors: col, sizes: siz };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const posArray = meshRef.current.geometry.attributes.position.array as Float32Array;
        const time = state.clock.elapsedTime;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            const ox = originalPositions[i3];
            const oy = originalPositions[i3 + 1];
            const oz = originalPositions[i3 + 2];

            // Calmer, more subtle floating
            posArray[i3] = ox + Math.sin(time * 0.15 + i * 0.01) * 0.08;
            posArray[i3 + 1] = oy + Math.cos(time * 0.1 + i * 0.015) * 0.08;
            posArray[i3 + 2] = oz + Math.sin(time * 0.2 + i * 0.02) * 0.05;

            const mx = mouseRef.current.x * 5;
            const my = mouseRef.current.y * 3;
            const dx = posArray[i3] - mx;
            const dy = posArray[i3 + 1] - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 1.5) {
                const force = (1.5 - dist) / 1.5;
                posArray[i3] += dx * force * 0.15;
                posArray[i3 + 1] += dy * force * 0.15;
            }
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.z = time * 0.005;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" args={[positions, 3]} />
                <bufferAttribute attach="attributes-color" args={[colors, 3]} />
                <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
            </bufferGeometry>
            <pointsMaterial
                vertexColors transparent opacity={0.3} size={0.05}
                sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false}
            />
        </points>
    );
}

function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 7], fov: 55 }}
            style={{ position: "absolute", inset: 0 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
        >
            <color attach="background" args={["#030712"]} />
            <fog attach="fog" args={["#030712", 6, 16]} />
            <Particles />
        </Canvas>
    );
}

function StaticFallback() {
    return (
        <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 30% 40%, rgba(34,211,238,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(37,99,235,0.06) 0%, transparent 60%), #030712",
        }} />
    );
}

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const DynamicScene = dynamic(() => Promise.resolve(Scene), {
    ssr: false,
    loading: () => <StaticFallback />,
});

import { siteConfig } from "@/lib/data";

export function Hero() {
    const [showCanvas, setShowCanvas] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReducedMotion(prefersReduced);
        if (!prefersReduced) {
            const timer = setTimeout(() => setShowCanvas(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {reducedMotion ? <StaticFallback /> : showCanvas ? <DynamicScene /> : <StaticFallback />}

            {/* Aceternity Spotlight Effects */}
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 211, 238, 0.4)" />
            <Spotlight className="top-10 left-full -translate-x-[40%] md:-top-20" fill="rgba(37, 99, 235, 0.3)" />

            {/* Background Beams */}
            <BackgroundBeams className="opacity-15" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030712] z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full glass border-white/10 text-sm text-slate-400 mb-10 shadow-xl">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-glow" />
                        {siteConfig.hero.badge}
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 gradient-text-hero leading-[1.05]"
                    initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {siteConfig.hero.titleMain}
                    <br />
                    <span className="gradient-text">{siteConfig.hero.titleGradient}</span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    {siteConfig.hero.description}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <PremiumButton
                        href="/work"
                        variant="primary"
                    >
                        See Our Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </PremiumButton>
                    <PremiumButton
                        href="/contact"
                        variant="secondary"
                    >
                        Start a Project
                    </PremiumButton>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ChevronDown size={24} className="text-slate-500" />
            </motion.div>
        </section>
    );
}

function PremiumButton({
    href,
    variant = "primary",
    children,
}: {
    href: string;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
    const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Calculate distance from center, capped at a reasonable "pull" range
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        mouseX.set(distanceX * 0.35); // Adjust sensitivity
        mouseY.set(distanceY * 0.35);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <Link href={href} className="relative group">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    x: springX,
                    y: springY,
                }}
            >
                {/* Background Glow */}
                <div className={`absolute -inset-4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 ${variant === "primary" ? "bg-cyan-400/20" : "bg-blue-600/15"}`} />

                {/* Inner Ring Glow */}
                <div className={`absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ${variant === "primary" ? "bg-cyan-400/10" : "bg-blue-600/10"}`} />

                <div className={cn(
                    "relative flex items-center justify-center gap-3 px-16 py-5 rounded-full font-bold transition-all duration-300 active:scale-95 no-underline border whitespace-nowrap min-w-[280px]",
                    variant === "primary"
                        ? "bg-white text-slate-900 border-white shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]"
                        : "glass glass-hover text-white border-white/10 hover:border-white/30"
                )}>
                    {children}
                </div>
            </motion.div>
        </Link>
    );
}
