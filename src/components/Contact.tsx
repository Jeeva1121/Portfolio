"use client";

import { useState, FormEvent } from "react";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const email = "jeevanantham1035@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const k1 = "5b2b4be6-9eab-";
            const k2 = "4068-804d-";
            const k3 = "cdc9771b6c84";
            
            const formElement = e.currentTarget;
            const formData = new FormData(formElement);
            formData.append("access_key", k1 + k2 + k3);

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                formElement.reset();
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
        <section id="contact" className="pt-14 sm:pt-20 pb-24 sm:pb-32 bg-[#F8FAFC] relative overflow-hidden scroll-mt-0" style={{ contain: "layout style" }}>
            {/* Dotted Grid Background from Uiverse.io */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height="100%"
                width="100%"
                className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
                <defs>
                    <pattern
                        patternUnits="userSpaceOnUse"
                        height="28"
                        width="28"
                        id="dottedGrid"
                    >
                        <circle fill="rgba(15,23,42,0.08)" r="1.2" cy="2" cx="2" />
                    </pattern>
                </defs>
                <rect fill="url(#dottedGrid)" height="100%" width="100%" />
            </svg>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
                    
                    {/* Left Column: Authentic Human-Crafted Heading & Details */}
                    <Reveal delay={0.06} direction="left">
                        <div className="flex flex-col gap-8">
                            
                            {/* Headline matching user's uploaded design */}
                            <div>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 font-poppins tracking-tight leading-none">
                                    <span>Let&apos;s</span>
                                    
                                    {/* Yellow 3D Envelope Box with Figma Multiplayer Cursor Badges */}
                                    <div className="relative inline-flex items-center justify-center my-1 mx-2">
                                        {/* Multiplayer Cursor: You */}
                                        <div className="absolute -top-7 -left-5 sm:-top-8 sm:-left-6 flex items-start gap-1 select-none pointer-events-none z-30">
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] fill-current drop-shadow-xs shrink-0" viewBox="0 0 24 24">
                                                <path d="M5.653 3.123A1.5 1.5 0 0 0 3 4.288V20.25a1.5 1.5 0 0 0 2.432 1.185l4.88-3.904a1.5 1.5 0 0 1 .936-.331h8.464a1.5 1.5 0 0 0 1.06-2.56L5.653 3.123z" />
                                            </svg>
                                            <span className="bg-[#10B981] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wide -mt-0.5 font-poppins">
                                                You
                                            </span>
                                        </div>

                                        {/* Soft 3D Yellow Squircle Box */}
                                        <div className="w-16 h-12 sm:w-20 sm:h-14 rounded-2xl bg-[#FFB92E] shadow-[0_8px_20px_rgba(255,185,46,0.35),inset_0_2px_0_rgba(255,255,255,0.4)] flex items-center justify-center text-white border border-amber-300">
                                            <svg className="w-7 h-7 sm:w-8 sm:h-8 stroke-white stroke-3 fill-none" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>

                                        {/* Multiplayer Cursor: Jeeva - Positioned neatly with breathing space */}
                                        <div className="absolute -bottom-6 -right-5 sm:-bottom-7 sm:-right-7 flex items-start gap-1 select-none pointer-events-none z-30">
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF6B4A] fill-current drop-shadow-xs shrink-0" viewBox="0 0 24 24">
                                                <path d="M5.653 3.123A1.5 1.5 0 0 0 3 4.288V20.25a1.5 1.5 0 0 0 2.432 1.185l4.88-3.904a1.5 1.5 0 0 1 .936-.331h8.464a1.5 1.5 0 0 0 1.06-2.56L5.653 3.123z" />
                                            </svg>
                                            <span className="bg-[#FF6B4A] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wide -mt-0.5 font-poppins">
                                                Jeeva
                                            </span>
                                        </div>
                                    </div>

                                    <span>Work</span>
                                </div>

                                {/* Tighter cohesive lockup with Together moved slightly up */}
                                <div className="flex items-center gap-6 sm:gap-8 mt-4 sm:mt-5 lg:mt-6">
                                    <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-950 font-poppins tracking-tight leading-none">
                                        Together
                                    </span>
                                    
                                    {/* Hand-drawn note & curved arrow with neat spacing */}
                                    <div className="hidden sm:flex flex-col items-start pt-1.5 pl-3 text-slate-900 leading-tight">
                                        <span className="font-poppins text-xs sm:text-sm font-bold tracking-tight text-slate-800">
                                            Don&apos;t hesitate to
                                        </span>
                                        <span className="font-poppins text-xs sm:text-sm font-bold tracking-tight text-slate-800">
                                            drop a line
                                        </span>
                                        <svg className="w-13 h-7 text-[#FFB92E] stroke-current stroke-2 fill-none mt-1.5 ml-1" viewBox="0 0 50 25">
                                            <path d="M4,6 Q24,22 42,12 Q45,10 44,18 M38,18 L44,18 L44,12" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-md mt-7 sm:mt-8 font-poppins">
                                    Have an idea, project, or full-time position you want to discuss? Send a note below or reach out directly.
                                </p>
                            </div>

                            {/* Contact Details Cards */}
                            <div className="flex flex-col gap-3 font-poppins">
                                {/* Email Card */}
                                <div 
                                    onClick={handleCopyEmail}
                                    className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 flex items-center justify-between gap-4 cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md group"
                                >
                                    <div className="flex items-center gap-3.5 min-w-0">
                                        <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-slate-100/80 transition-colors">
                                            <Icon icon="logos:google-gmail" className="w-5 h-5" />
                                        </div>
                                        <div className="min-w-0">
                                            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                Email
                                            </div>
                                            <div className="text-sm sm:text-base font-semibold text-slate-900 truncate">
                                                {email}
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        aria-label="Copy email"
                                        className="shrink-0 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold group-hover:bg-slate-900 group-hover:text-white transition-colors cursor-pointer"
                                    >
                                        {copiedEmail ? "Copied!" : "Copy"}
                                    </button>
                                </div>

                                {/* Location Card */}
                                <div className="p-4 sm:p-4.5 rounded-2xl bg-white border border-slate-200/90 flex items-center gap-3.5 shadow-xs">
                                    <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                                        <Icon icon="logos:google-maps" className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                            Location
                                        </div>
                                        <div className="text-sm sm:text-base font-semibold text-slate-900">
                                            Bangalore, Karnataka, India
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Circular Social Connect Buttons */}
                            <div className="flex items-center gap-3.5 pt-1 font-poppins">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                    Connect:
                                </span>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://github.com/Jeeva1121"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub Profile"
                                        title="GitHub"
                                        className="w-12 h-12 rounded-full bg-white hover:bg-slate-950 text-slate-800 hover:text-white border border-slate-200/90 shadow-xs hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200 group"
                                    >
                                        <Icon icon="mdi:github" className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/jeevanantham5b2a19324"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                        title="LinkedIn"
                                        className="w-12 h-12 rounded-full bg-white hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-slate-200/90 shadow-xs hover:shadow-md hover:scale-105 flex items-center justify-center transition-all duration-200 group"
                                    >
                                        <Icon icon="mdi:linkedin" className="w-6 h-6 text-[#0A66C2] group-hover:text-white transition-colors" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </Reveal>

                    {/* Right Column: Send Message Card - Distinct Neutral Slate Card with Centered Action */}
                    <Reveal delay={0.14} direction="right">
                        <div className="bg-linear-to-b from-[#F8FAFC] to-[#F1F5F9] p-8 sm:p-10 rounded-[2.2rem] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.06),0_2px_8px_rgba(0,0,0,0.02)] border-2 border-slate-200 font-poppins relative">
                            <div className="mb-7">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                                    Send a message
                                </h3>
                                <p className="text-slate-500 text-sm mt-1.5 font-normal">
                                    Fill in the fields below and I will respond promptly.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Your Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required 
                                        id="name"
                                        placeholder="Alex Smith"
                                        className="w-full bg-white border border-slate-200/90 hover:border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 rounded-xl px-4 py-3.5 text-slate-900 font-medium text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required 
                                        id="email"
                                        placeholder="alex@company.com"
                                        className="w-full bg-white border border-slate-200/90 hover:border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 rounded-xl px-4 py-3.5 text-slate-900 font-medium text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Your Message
                                    </label>
                                    <textarea 
                                        required 
                                        name="message" 
                                        id="message"
                                        rows={4}
                                        placeholder="Tell me about your project, timeline, or open role..."
                                        className="w-full bg-white border border-slate-200/90 hover:border-slate-300 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5 rounded-xl px-4 py-3.5 text-slate-900 font-medium text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs resize-none"
                                    />
                                </div>
                                
                                {/* Send Message Button - From Uiverse.io by MuhammadHasann - Centered */}
                                <div className="pt-2 flex justify-center w-full">
                                    <button 
                                        type="submit"
                                        disabled={isSubmitting || isSuccess}
                                        className="uiverse-sparkle-btn disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="dots_border" />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            className="sparkle"
                                        >
                                            <path
                                                className="path"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                stroke="currentColor"
                                                fill="currentColor"
                                                d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"
                                            />
                                            <path
                                                className="path"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                stroke="currentColor"
                                                fill="currentColor"
                                                d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"
                                            />
                                            <path
                                                className="path"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                stroke="currentColor"
                                                fill="currentColor"
                                                d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"
                                            />
                                        </svg>
                                        <span className="text_button font-poppins">
                                            {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}
