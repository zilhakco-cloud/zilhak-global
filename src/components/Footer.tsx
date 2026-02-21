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
    Services: [
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
        <footer className="bg-[#0a0f1a] border-t border-white/[0.04]">
            <div className="container max-w-7xl mx-auto py-16">
                {/* Top */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="relative w-9 h-9">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg" />
                                <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                                    Z
                                </span>
                            </div>
                            <div>
                                <span className="font-bold text-lg text-white tracking-tight">
                                    ZILHAK
                                </span>
                                <span className="font-light text-sm text-slate-500 ml-1 tracking-widest">
                                    GLOBAL
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                            FBR-registered AI & tech company building intelligent solutions
                            for businesses across Pakistan and beyond. Powered by DigiNext
                            Society — 150+ trained AI builders.
                        </p>
                        <div className="flex gap-2.5">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-200"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-white tracking-tight mb-4 text-sm">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
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
                <div className="border-t border-white/[0.04] pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
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
