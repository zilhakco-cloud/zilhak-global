import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                z: {
                    "bg-base": "#030712",
                    "bg-surface": "#0a0f1a",
                    "bg-elevated": "#111827",
                    cyan: "#22d3ee",
                    blue: "#2563eb",
                    purple: "#8b5cf6",
                    emerald: "#10b981",
                    amber: "#f59e0b",
                    "text-primary": "#f8fafc",
                    "text-secondary": "#94a3b8",
                    "text-muted": "#64748b",
                    border: "rgba(255,255,255,0.06)",
                    "border-hover": "rgba(255,255,255,0.12)",
                },
            },
            fontFamily: {
                sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
                mono: ["JetBrains Mono", "Fira Code", "monospace"],
            },
            letterSpacing: {
                tighter: "-0.03em",
            },
            borderRadius: {
                sm: "6px",
                md: "12px",
                lg: "16px",
                xl: "24px",
            },
            transitionTimingFunction: {
                "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            animation: {
                "marquee": "marquee 40s linear infinite",
                "marquee-reverse": "marquee-reverse 40s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                "spotlight": "spotlight 2s ease 0.75s 1 forwards",
                "border-beam": "border-beam var(--duration) infinite linear",
                "shine": "shine var(--shine-pulse-duration) infinite linear",
                "shimmer": "shimmer 3s ease-in-out infinite",
            },
            keyframes: {
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(-50%)" },
                },
                "marquee-reverse": {
                    from: { transform: "translateX(-50%)" },
                    to: { transform: "translateX(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.4" },
                    "50%": { opacity: "1" },
                },
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(20px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                spotlight: {
                    "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
                    "100%": { opacity: "1", transform: "translate(-50%, -40%) scale(1)" },
                },
                "border-beam": {
                    "100%": { "offset-distance": "100%" },
                },
                shine: {
                    "0%": { "background-position": "0% 0%" },
                    "50%": { "background-position": "100% 100%" },
                    "100%": { "background-position": "0% 0%" },
                },
                shimmer: {
                    "0%": { "background-position": "-200% 0" },
                    "100%": { "background-position": "200% 0" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
