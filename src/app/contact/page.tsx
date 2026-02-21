import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Zilhak Global Associates for AI development, app development, web development, and technology consulting.",
};

const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@zilhakglobal.com", href: "mailto:hello@zilhakglobal.com" },
    { icon: MapPin, label: "Location", value: "Sargodha, Punjab, Pakistan", href: "#" },
    { icon: Phone, label: "Status", value: "FBR Registered Entity", href: "#" },
];

const socials = [
    { icon: Github, href: "https://github.com/zilhak-global", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/zilhak-global", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/zilhakglobal", label: "Twitter" },
];

export default function ContactPage() {
    return (
        <div className="pt-24">
            <section className="section">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">Contact Us</span>
                        <h1 className="font-display font-bold mb-6">
                            Let&apos;s Build{" "}
                            <span className="gradient-text">Something Great</span>
                        </h1>
                        <p className="text-lg text-z-text-muted">
                            Whether you&apos;re a client, investor, or student — we&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
                        {/* Form */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>

                        {/* Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {contactInfo.map((info, i) => (
                                <a key={i} href={info.href} className="glass rounded-xl p-5 flex items-start gap-4 hover:border-z-blue/20 transition-all block">
                                    <div className="w-10 h-10 rounded-lg bg-z-blue/10 flex items-center justify-center flex-shrink-0">
                                        <info.icon size={18} className="text-z-blue" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-z-text-muted font-mono mb-1">{info.label}</p>
                                        <p className="text-sm text-z-text-primary font-medium">{info.value}</p>
                                    </div>
                                </a>
                            ))}

                            <div className="pt-4">
                                <p className="text-sm text-z-text-muted mb-3">Follow us</p>
                                <div className="flex gap-3">
                                    {socials.map((s) => (
                                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-z-text-muted hover:text-z-blue hover:border-z-blue/30 transition-all">
                                            <s.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
