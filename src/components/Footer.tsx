import Link from "next/link";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const footerLinks = {
    Company: [
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
    ],
    "Services": [
        { label: "App Development", href: "/services#app-dev" },
        { label: "Web Development", href: "/services#web-dev" },
        { label: "AI Automations", href: "/services#ai-auto" },
        { label: "Agentic AI", href: "/services#agentic" },
        { label: "AI Chatbots", href: "/services#chatbots" },
        { label: "SEO & Growth", href: "/services#seo" },
    ],
    "DigiNext Society": [
        { label: "About DigiNext", href: "/diginext" },
        { label: "Projects", href: "/work?filter=diginext" },
        { label: "Join DigiNext", href: "/diginext#join" },
        { label: "Events", href: "/diginext#events" },
    ],
};

const socials = [
    { icon: Github, href: "https://github.com/zilhak-global", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/zilhak-global", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/zilhakglobal", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@zilhakglobal.com", label: "Email" },
];

export function Footer() {
    return (
        <footer className="bg-z-bg-surface border-t border-z-border">
            <div className="container py-16">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 bg-gradient-to-br from-z-blue to-z-teal rounded-lg" />
                                <span className="absolute inset-0 flex items-center justify-center text-white font-display font-bold text-xl">
                                    Z
                                </span>
                            </div>
                            <div>
                                <span className="font-display font-bold text-xl text-z-text-primary tracking-tight">
                                    ZILHAK
                                </span>
                                <span className="font-display font-light text-sm text-z-text-muted ml-1 tracking-widest">
                                    GLOBAL
                                </span>
                            </div>
                        </Link>
                        <p className="text-z-text-muted text-sm leading-relaxed max-w-sm mb-6">
                            FBR-registered AI & tech company building intelligent solutions
                            for businesses across Pakistan and beyond. Powered by DigiNext
                            Society — 150+ trained AI builders.
                        </p>
                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-z-bg-elevated border border-z-border flex items-center justify-center text-z-text-muted hover:text-z-blue hover:border-z-blue/30 transition-all"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-display font-semibold text-z-text-primary mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-z-text-muted hover:text-z-text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-z-border pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-z-text-muted">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex items-center gap-1.5">
                                <MapPin size={14} />
                                <span>Sargodha, Punjab, Pakistan</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Phone size={14} />
                                <span>FBR Registered Entity</span>
                            </div>
                        </div>
                        <p>
                            © {new Date().getFullYear()} Zilhak Global Associates. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
