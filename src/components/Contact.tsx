"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Icon } from "@iconify/react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
            if (!key) {
                alert("API Key is missing! Vercel cannot find NEXT_PUBLIC_WEB3FORMS_KEY.");
                setIsSubmitting(false);
                return;
            }
            const formData = new FormData(e.currentTarget);
            formData.append("access_key", key);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                e.currentTarget.reset();
                setTimeout(() => setIsSuccess(false), 4000);
            } else {
                console.error("Web3Forms Error:", data);
                alert("Failed to send message: " + data.message);
            }
        } catch (error) {
            console.error("Submission Error:", error);
            alert("An error occurred while sending the message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-[#fdfbf7] relative overflow-hidden">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* Contact Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="text-5xl md:text-6xl font-black text-slate-900 font-poppins mb-6">
                                    Let's Work Together.
                                </h2>
                                <p className="text-lg text-slate-700 font-medium mb-12 max-w-sm leading-relaxed">
                                    I'm always open to discussing product design work or partnership opportunities.
                                </p>

                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="relative inline-block group">
                                        <div className="absolute top-1/2 -left-4 w-[110%] h-12 bg-amber-200 -z-10 -translate-y-1/2 -rotate-2 group-hover:rotate-0 transition-transform" />
                                        <a href="mailto:jeevanantham1035@gmail.com" className="flex items-center gap-4 text-slate-900 px-2">
                                            <Icon icon="logos:google-gmail" className="w-8 h-8" />
                                            <div>
                                                <p className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Email</p>
                                                <p className="text-lg font-bold">jeevanantham1035@gmail.com</p>
                                            </div>
                                        </a>
                                    </div>
                                    <br />
                                    {/* Location */}
                                    <div className="relative inline-block group">
                                        <div className="absolute top-1/2 -left-4 w-[110%] h-12 bg-teal-200 -z-10 -translate-y-1/2 rotate-1 group-hover:rotate-0 transition-transform" />
                                        <div className="flex items-center gap-4 text-slate-900 px-2 mt-4">
                                            <Icon icon="logos:google-maps" className="w-8 h-8" />
                                            <div>
                                                <p className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Location</p>
                                                <p className="text-lg font-bold">Salem, TN, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-16 lg:mt-0 pt-12">
                                <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-6">Connect With Me</h3>
                                <div className="flex gap-4">
                                    <a href="https://github.com/Jeeva1121" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                                        <Icon icon="mdi:github" className="w-8 h-8" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/jeevanantham5b2a19324" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border-2 border-slate-900 bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all">
                                        <Icon icon="logos:linkedin-icon" className="w-7 h-7" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Creative Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#fffdf8] p-8 md:p-12 border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative"
                        >
                            {/* Tape */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-blue-100/60 backdrop-blur-xs border border-blue-200 shadow-sm rotate-2" />

                            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                                <div className="relative inline-block mb-2">
                                    <span className="absolute bottom-1 left-0 w-full h-3 bg-teal-200 -z-10 rotate-1" />
                                    <h3 className="text-3xl font-black text-slate-900 font-poppins inline-block">Send a Message</h3>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-black text-slate-900 uppercase tracking-widest">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required 
                                        id="name"
                                        className="w-full bg-white border-2 border-slate-900 px-4 py-3 text-slate-900 font-bold focus:outline-none focus:bg-amber-50 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-black text-slate-900 uppercase tracking-widest">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required 
                                        id="email"
                                        className="w-full bg-white border-2 border-slate-900 px-4 py-3 text-slate-900 font-bold focus:outline-none focus:bg-amber-50 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-black text-slate-900 uppercase tracking-widest">Message</label>
                                    <textarea 
                                        required 
                                        name="message"
                                        id="message"
                                        rows={4}
                                        className="w-full bg-white border-2 border-slate-900 px-4 py-3 text-slate-900 font-bold focus:outline-none focus:bg-amber-50 transition-colors shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] resize-none"
                                    />
                                </div>
                                
                                <button 
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`mt-4 w-full rounded-full border-2 border-slate-900 px-8 py-4 flex items-center justify-center gap-3 transition-all font-black uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-none ${isSuccess ? 'bg-teal-400 text-slate-900' : 'bg-rose-500 text-white'}`}
                                >
                                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                                    {!isSubmitting && !isSuccess && (
                                        <Icon icon="lucide:send" className="w-5 h-5" />
                                    )}
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
}
