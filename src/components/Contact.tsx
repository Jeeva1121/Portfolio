"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Mail, Send, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mqakoene", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("sent");
                form.reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="min-h-screen flex items-center py-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white text-center"
                    >
                        Let's <span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-linear-to-r from-emerald-600 to-blue-600 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            Ready to bring your <br />
                            <span className="text-blue-600 dark:text-blue-400">vision to life?</span>
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 font-sans leading-relaxed">
                            Whether you have a specific project in mind or just want to chat about
                            the latest tech, I'm just a message away.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: <Mail className="w-6 h-6" />, label: "Email Me", value: "jeevanantham1035@gmail.com", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                                { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "Salem, Tamilnadu", color: "text-blue-500", bg: "bg-blue-500/10" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-6 group cursor-pointer"
                                >
                                    <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-all border border-white/10 shadow-lg`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold opacity-50 uppercase tracking-widest">{item.label}</div>
                                        <div className="text-xl font-bold text-slate-900 dark:text-white">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <GlassCard className="p-8 md:p-12 relative overflow-hidden group/form shadow-2xl! border-white/20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover/form:bg-blue-500/20 transition-all duration-700" />

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                                    <input
                                        required
                                        name="name"
                                        className="w-full glass bg-white/5 dark:bg-black/20 border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all shadow-inner font-medium"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="w-full glass bg-white/5 dark:bg-black/20 border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all shadow-inner font-medium"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Subject</label>
                                <input
                                    required
                                    name="subject"
                                    className="w-full glass bg-white/5 dark:bg-black/20 border-slate-200 dark:border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all shadow-inner font-medium"
                                    placeholder="Project Collaboration"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={5}
                                    className="w-full glass bg-white/5 dark:bg-black/20 border-slate-200 dark:border-white/10 px-6 py-5 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all shadow-inner resize-none font-medium text-lg leading-relaxed"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "sending" || status === "sent"}
                                className={`w-full py-5 text-lg font-bold flex items-center justify-center gap-4 rounded-full transition-all duration-500 shadow-xl relative overflow-hidden group/btn ${status === "sent"
                                    ? "bg-emerald-600 text-white"
                                    : status === "error"
                                        ? "bg-rose-600 text-white"
                                        : "bg-blue-600 hover:bg-blue-700 text-white hover:scale-[1.02] active:scale-[0.98]"
                                    } dark:disabled:opacity-80`}
                            >
                                {status === "idle" && (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </>
                                )}
                                {status === "sending" && (
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </div>
                                )}
                                {status === "sent" && "Message Sent Successfully!"}
                                {status === "error" && "Error! Please try again."}
                            </button>
                        </form>
                    </GlassCard>
                </div>
            </div>

        </section>
    );
}
