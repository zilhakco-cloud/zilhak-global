import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import { Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Insights on AI, technology, and startup growth from Zilhak Global Associates and DigiNext Society.",
};

export default function BlogPage() {
    return (
        <div className="pt-24">
            <section className="section">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-mono text-z-blue tracking-widest uppercase mb-3 block">Blog</span>
                        <h1 className="font-display font-bold mb-6">
                            Insights &{" "}
                            <span className="gradient-text">Thought Leadership</span>
                        </h1>
                        <p className="text-lg text-z-text-muted">
                            Practical perspectives on AI, tech entrepreneurship, and building
                            in Pakistan — from the Zilhak team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {blogPosts.map((post, i) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className={`group glass rounded-xl overflow-hidden hover:border-z-blue/20 transition-all hover:-translate-y-1 ${i === 0 ? "md:col-span-2" : ""
                                    }`}
                            >
                                {/* Gradient header */}
                                <div className="h-40 relative" style={{
                                    background: `linear-gradient(135deg, ${post.category === "AI"
                                            ? "rgba(10,132,255,0.15), rgba(110,64,201,0.15)"
                                            : post.category === "DigiNext"
                                                ? "rgba(110,64,201,0.15), rgba(245,158,11,0.1)"
                                                : post.category === "Startup"
                                                    ? "rgba(0,229,195,0.15), rgba(10,132,255,0.1)"
                                                    : "rgba(245,158,11,0.15), rgba(0,229,195,0.1)"
                                        })`,
                                }}>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-2.5 py-1 rounded text-xs font-mono bg-black/20 text-z-text-primary backdrop-blur">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-z-text-muted mb-3">
                                        <time>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
                                        <span className="flex items-center gap-1">
                                            <Clock size={12} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h2 className="font-display font-semibold text-lg mb-2 group-hover:text-white transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-z-text-muted leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm text-z-blue font-medium">
                                        Read More <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
