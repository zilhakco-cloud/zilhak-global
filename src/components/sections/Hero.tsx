"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 600;

function Particles() {
    const meshRef = useRef<THREE.Points>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    // Generate Z-shaped particle positions
    const { positions, originalPositions, colors, sizes } = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const origPos = new Float32Array(PARTICLE_COUNT * 3);
        const col = new Float32Array(PARTICLE_COUNT * 3);
        const siz = new Float32Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const i3 = i * 3;
            let x: number, y: number, z: number;

            // First ~40% form the Z shape loosely
            if (i < PARTICLE_COUNT * 0.4) {
                const t = (i / (PARTICLE_COUNT * 0.4));
                if (t < 0.33) {
                    // Top bar of Z
                    x = (t / 0.33) * 4 - 2;
                    y = 2 + (Math.random() - 0.5) * 0.3;
                } else if (t < 0.66) {
                    // Diagonal of Z
                    const dt = (t - 0.33) / 0.33;
                    x = 2 - dt * 4;
                    y = 2 - dt * 4;
                } else {
                    // Bottom bar of Z
                    const dt = (t - 0.66) / 0.34;
                    x = -2 + dt * 4;
                    y = -2 + (Math.random() - 0.5) * 0.3;
                }
                z = (Math.random() - 0.5) * 1;
                // Add some organic spread
                x += (Math.random() - 0.5) * 0.5;
                y += (Math.random() - 0.5) * 0.5;
            } else {
                // Remaining particles are scattered in the field
                x = (Math.random() - 0.5) * 10;
                y = (Math.random() - 0.5) * 6;
                z = (Math.random() - 0.5) * 3;
            }

            pos[i3] = x;
            pos[i3 + 1] = y;
            pos[i3 + 2] = z;
            origPos[i3] = x;
            origPos[i3 + 1] = y;
            origPos[i3 + 2] = z;

            // Color gradient: blue → teal → purple
            const colorChoice = Math.random();
            if (colorChoice < 0.4) {
                // Blue
                col[i3] = 10 / 255;
                col[i3 + 1] = 132 / 255;
                col[i3 + 2] = 255 / 255;
            } else if (colorChoice < 0.7) {
                // Teal
                col[i3] = 0;
                col[i3 + 1] = 229 / 255;
                col[i3 + 2] = 195 / 255;
            } else {
                // Purple
                col[i3] = 110 / 255;
                col[i3 + 1] = 64 / 255;
                col[i3 + 2] = 201 / 255;
            }

            siz[i] = Math.random() * 3 + 1;
        }

        return { positions: pos, originalPositions: origPos, colors: col, sizes: siz };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
            setHovered(true);
        };

        const handleMouseLeave = () => setHovered(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
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

            // Gentle floating motion
            posArray[i3] = ox + Math.sin(time * 0.3 + i * 0.01) * 0.15;
            posArray[i3 + 1] = oy + Math.cos(time * 0.2 + i * 0.015) * 0.15;
            posArray[i3 + 2] = oz + Math.sin(time * 0.4 + i * 0.02) * 0.1;

            // Mouse repulsion
            if (hovered) {
                const mx = mouseRef.current.x * 5;
                const my = mouseRef.current.y * 3;
                const dx = posArray[i3] - mx;
                const dy = posArray[i3 + 1] - my;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 2) {
                    const force = (2 - dist) / 2;
                    posArray[i3] += dx * force * 0.3;
                    posArray[i3 + 1] += dy * force * 0.3;
                }
            }
        }

        meshRef.current.geometry.attributes.position.needsUpdate = true;
        meshRef.current.rotation.z = time * 0.01;
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[colors, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[sizes, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                vertexColors
                transparent
                opacity={0.8}
                size={2.5}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function Scene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 60 }}
            style={{ position: "absolute", inset: 0 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
        >
            <color attach="background" args={["#05070A"]} />
            <fog attach="fog" args={["#05070A", 5, 15]} />
            <Particles />
        </Canvas>
    );
}

function StaticFallback() {
    return (
        <div
            className="absolute inset-0"
            style={{
                background:
                    "radial-gradient(ellipse at 30% 40%, rgba(10,132,255,0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(0,229,195,0.15) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%), #05070A",
            }}
        />
    );
}

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const DynamicScene = dynamic(() => Promise.resolve(Scene), {
    ssr: false,
    loading: () => <StaticFallback />,
});

export function Hero() {
    const [showCanvas, setShowCanvas] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        setReducedMotion(prefersReduced);
        if (!prefersReduced) {
            // Delay canvas load for LCP optimization
            const timer = setTimeout(() => setShowCanvas(true), 100);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            {reducedMotion ? <StaticFallback /> : showCanvas ? <DynamicScene /> : <StaticFallback />}

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-z-bg-base z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-z-bg-base/50 via-transparent to-z-bg-base/50 z-10" />

            {/* Content */}
            <div className="relative z-20 container text-center max-w-4xl mx-auto px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-z-text-muted mb-8 animate-fade-up">
                    <span className="w-2 h-2 rounded-full bg-z-teal animate-pulse-glow" />
                    FBR-Registered AI & Tech Company
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                    AI That Thinks.{" "}
                    <span className="gradient-text">Solutions That Scale.</span>
                </h1>

                <p className="text-lg sm:text-xl text-z-text-muted max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                    We build agentic AI systems, ship production apps, and grow businesses
                    with intelligent automations — backed by 150+ trained builders from DigiNext Society.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                    <Link
                        href="/work"
                        className="group px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/25 flex items-center gap-2"
                    >
                        See Our Work
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-3.5 glass text-z-text-primary font-semibold rounded-lg hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        Start a Project
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-float">
                <ChevronDown size={24} className="text-z-text-muted" />
            </div>
        </section>
    );
}
