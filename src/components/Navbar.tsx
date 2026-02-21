"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/lib/data";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/diginext", label: "DigiNext" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { scrollY } = useScroll();

    // Elastic header transformations
    const headerPadding = useTransform(scrollY, [0, 80], ["20px", "12px"]);
    const headerBgOpacity = useTransform(scrollY, [0, 80], [0, 0.8]);
    const headerBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(20px)"]);
    const headerBorder = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.06)"]);

    return (
        <motion.header
            style={{
                paddingTop: headerPadding,
                paddingBottom: headerPadding,
                backgroundColor: headerBgOpacity, // Framer Motion handles MotionValues in style
                backdropFilter: headerBlur,
                borderBottomColor: headerBorder,
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
            }}
            className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200"
        >
            <nav className="container max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="relative w-8 h-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-base">
                            Z
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="font-bold text-lg text-white tracking-tight">
                            ZILHAK
                        </span>
                        <span className="font-light text-xs text-slate-500 ml-1 tracking-widest uppercase">
                            {siteConfig.tagline}
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors rounded-md hover:bg-white/[0.04] font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/investors"
                        className="ml-3 px-7 py-2.5 text-sm font-semibold bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-all hover:shadow-lg hover:shadow-white/5"
                    >
                        Investors
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
                    >
                        <div className="container max-w-7xl mx-auto py-4 flex flex-col gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-slate-400 hover:text-white hover:bg-white/[0.04] rounded-lg transition-colors font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/investors"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 px-7 py-3.5 text-sm font-semibold bg-white text-slate-900 rounded-lg text-center hover:bg-slate-100 transition-all"
                            >
                                Investors
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
