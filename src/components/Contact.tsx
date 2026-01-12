"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("sent"), 1500);
    };

    return (
        <section id="contact" className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Get In Touch
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-emerald-600 rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Let's build something <br /> extraordinary together.</h3>
                        <p className="text-lg text-slate-500 dark:text-slate-400 mb-10">
                            I'm always open to discussing new projects, high-load architecture challenges,
                            or opportunities to lead engineering teams.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@jeevan.dev" },
                                { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Toronto, Canada" },
                                { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 000-0000" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform border-white/20">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium opacity-50">{item.label}</div>
                                        <div className="text-lg font-bold">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <GlassCard className="p-10!">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-60 ml-1">Name</label>
                                    <input
                                        required
                                        className="w-full glass bg-white/5 border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-blue-500/50 transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold opacity-60 ml-1">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full glass bg-white/5 border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-blue-500/50 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold opacity-60 ml-1">Subject</label>
                                <input
                                    required
                                    className="w-full glass bg-white/5 border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-blue-500/50 transition-colors"
                                    placeholder="Project Collaboration"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold opacity-60 ml-1">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full glass bg-white/5 border-white/10 px-5 py-4 rounded-2xl outline-none focus:border-blue-500/50 transition-colors resize-none"
                                    placeholder="Hey, let's talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status !== "idle"}
                                className={`w-full glass-button py-5 text-lg font-bold flex items-center justify-center gap-3 ${status === "sent" ? "bg-emerald-600 border-none" : "bg-blue-600 border-none"
                                    }`}
                            >
                                {status === "idle" && <><Send className="w-5 h-5" /> Send Message</>}
                                {status === "sending" && "Sending..."}
                                {status === "sent" && "Message Sent!"}
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}
