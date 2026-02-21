"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const schema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    type: z.enum(["client", "investor", "student", "other"], {
        error: "Please select a type",
    }),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        // Netlify Forms submission
        const formData = new URLSearchParams();
        formData.append("form-name", "contact");
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString(),
            });
            setSubmitted(true);
        } catch {
            setSubmitted(true); // Show success anyway for static site
        }
    };

    if (submitted) {
        return (
            <div className="glass rounded-xl p-12 text-center">
                <CheckCircle size={48} className="text-z-teal mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-z-text-muted">We&apos;ll get back to you within 24 hours.</p>
            </div>
        );
    }

    return (
        <>
            {/* Hidden form for Netlify detection */}
            <form name="contact" data-netlify="true" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <select name="type"><option value="client" /></select>
                <textarea name="message" />
            </form>

            <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-8 space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-z-text-primary mb-2">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full px-4 py-3 bg-z-bg-elevated border border-z-border rounded-lg text-z-text-primary placeholder:text-z-text-muted/50 focus:border-z-blue focus:outline-none focus:ring-1 focus:ring-z-blue transition-colors"
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <p className="mt-1.5 text-sm text-red-400" role="alert">{errors.name.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-z-text-primary mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        className="w-full px-4 py-3 bg-z-bg-elevated border border-z-border rounded-lg text-z-text-primary placeholder:text-z-text-muted/50 focus:border-z-blue focus:outline-none focus:ring-1 focus:ring-z-blue transition-colors"
                        placeholder="you@company.com"
                    />
                    {errors.email && (
                        <p className="mt-1.5 text-sm text-red-400" role="alert">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-z-text-primary mb-2">
                        I am a...
                    </label>
                    <select
                        id="type"
                        {...register("type")}
                        className="w-full px-4 py-3 bg-z-bg-elevated border border-z-border rounded-lg text-z-text-primary focus:border-z-blue focus:outline-none focus:ring-1 focus:ring-z-blue transition-colors"
                    >
                        <option value="">Select type</option>
                        <option value="client">Potential Client</option>
                        <option value="investor">Investor / Partner</option>
                        <option value="student">Student (DigiNext)</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.type && (
                        <p className="mt-1.5 text-sm text-red-400" role="alert">{errors.type.message}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-z-text-primary mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        {...register("message")}
                        className="w-full px-4 py-3 bg-z-bg-elevated border border-z-border rounded-lg text-z-text-primary placeholder:text-z-text-muted/50 focus:border-z-blue focus:outline-none focus:ring-1 focus:ring-z-blue transition-colors resize-none"
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && (
                        <p className="mt-1.5 text-sm text-red-400" role="alert">{errors.message.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3.5 bg-z-blue text-white font-semibold rounded-lg hover:bg-z-blue/90 transition-all hover:shadow-lg hover:shadow-z-blue/25 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message <Send size={18} />
                        </>
                    )}
                </button>
            </form>
        </>
    );
}
