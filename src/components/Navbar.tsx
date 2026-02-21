"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/diginext", label: "DigiNext" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "glass-strong py-3 shadow-lg shadow-black/20"
                    : "py-5 bg-transparent"
                }`}
        >
            <nav className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-9 h-9">
                        <div className="absolute inset-0 bg-gradient-to-br from-z-blue to-z-teal rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                        <span className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-lg">
                            Z
                        </span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="font-display font-bold text-lg text-z-text-primary tracking-tight">
                            ZILHAK
                        </span>
                        <span className="font-display font-light text-xs text-z-text-muted ml-1 tracking-widest">
                            GLOBAL
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm text-z-text-muted hover:text-z-text-primary transition-colors rounded-md hover:bg-white/5 font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/investors"
                        className="ml-3 px-5 py-2 text-sm font-semibold bg-z-blue text-white rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/20"
                    >
                        Investors
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden p-2 text-z-text-muted hover:text-z-text-primary transition-colors"
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
                        className="md:hidden glass-strong border-t border-z-border overflow-hidden"
                    >
                        <div className="container py-4 flex flex-col gap-1">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="px-4 py-3 text-z-text-muted hover:text-z-text-primary hover:bg-white/5 rounded-lg transition-colors font-medium"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/investors"
                                onClick={() => setMobileOpen(false)}
                                className="mt-2 px-5 py-3 text-sm font-semibold bg-z-blue text-white rounded-lg text-center hover:bg-z-blue/90 transition-all"
                            >
                                Investors
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
