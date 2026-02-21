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
                    "bg-base": "#0D1117",
                    "bg-surface": "#0A0F1A",
                    "bg-elevated": "#111827",
                    blue: "#0A84FF",
                    teal: "#00E5C3",
                    purple: "#6E40C9",
                    gold: "#F59E0B",
                    "text-primary": "#E6EDF3",
                    "text-muted": "#8B949E",
                    border: "#1E2D3D",
                    "border-hover": "#30363D",
                },
            },
            fontFamily: {
                display: ["Outfit", "sans-serif"],
                body: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
            borderRadius: {
                sm: "6px",
                md: "12px",
                lg: "20px",
            },
            transitionTimingFunction: {
                "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
            },
            animation: {
                "marquee": "marquee 30s linear infinite",
                "marquee-reverse": "marquee-reverse 30s linear infinite",
                "float": "float 6s ease-in-out infinite",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
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
                    "0%, 100%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                },
                "fade-up": {
                    from: { opacity: "0", transform: "translateY(30px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
