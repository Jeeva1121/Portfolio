"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

export default function About() {
    return (
        <section id="about" className="pt-12 sm:pt-16 pb-14 sm:pb-18 notebook-ruled-bg relative overflow-hidden border-t border-t-slate-200 border-b-2 border-dashed border-b-slate-300 scroll-mt-0" style={{ contain: "layout style" }}>
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                
                {/* Handwritten Top-Left Note */}
                <div className="mb-3 sm:mb-4 pl-2 sm:pl-4">
                    <span className="font-caveat text-3xl sm:text-4xl text-slate-800 -rotate-3 inline-block select-none font-bold">
                        about me!
                    </span>
                </div>

                {/* Centered Heading Box matching user's reference */}
                <div className="text-center mb-8 sm:mb-10">
                    <Reveal delay={0}>
                        <div className="inline-block px-7 sm:px-10 py-2.5 sm:py-3 border-2 border-slate-950 rounded-lg bg-white shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 font-poppins tracking-tight leading-none">
                                what&apos;s up
                            </h2>
                        </div>
                    </Reveal>
                </div>

                {/* Scrapbook Spread: Left Polaroid, Center Bio & Stickers, Right Polaroid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.65fr_1fr] gap-8 lg:gap-10 items-center mb-20">
                    
                    {/* Left Polaroid: Jeeva's Photo */}
                    <Reveal delay={0.06} direction="left" className="w-full max-w-[280px] mx-auto">
                        <div className="bg-white p-3.5 pb-6 rounded-md shadow-xl border border-slate-200/90 -rotate-3 hover:rotate-0 transition-transform duration-300 select-none relative group">
                            
                            {/* Pastel Washi Tape at Top Corners */}
                            <div 
                                className="absolute -top-3 left-4 w-12 sm:w-14 h-5.5 bg-[#93C5FD]/75 backdrop-blur-xs border border-blue-300/80 shadow-2xs z-20 pointer-events-none rounded-[1px]"
                                style={{ transform: "rotate(-12deg)" }}
                            />
                            <div 
                                className="absolute -top-3 right-4 w-12 sm:w-14 h-5.5 bg-[#FDE047]/75 backdrop-blur-xs border border-amber-300/80 shadow-2xs z-20 pointer-events-none rounded-[1px]"
                                style={{ transform: "rotate(12deg)" }}
                            />

                            {/* Photo Container */}
                            <div className="aspect-square relative overflow-hidden bg-slate-100 rounded-xs shadow-inner">
                                <Image
                                    src="/about-me.png"
                                    alt="Jeevanantham S."
                                    fill
                                    sizes="(max-width: 768px) 280px, 320px"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    priority
                                />
                            </div>

                            {/* Polaroid Chin Handwritten Caption */}
                            <p className="text-center font-caveat text-2xl text-slate-800 font-bold mt-3">
                                2026
                            </p>
                        </div>
                    </Reveal>

                    {/* Center Column: Handwritten & Conversational Story + Torn Sticker Badges */}
                    <Reveal delay={0.12}>
                        <div className="text-center max-w-xl mx-auto px-2 sm:px-4">
                            
                            <p className="font-caveat text-2xl sm:text-3xl lg:text-[2.1rem] text-slate-900 font-bold leading-snug tracking-wide">
                                I&apos;m a developer who gets a little too excited about making complicated things feel simple.
                            </p>

                            <p className="font-caveat text-xl sm:text-2xl lg:text-[1.8rem] text-slate-800 font-bold leading-snug mt-4">
                                I care about the small details, the edge cases everyone forgets, and shipping work that genuinely makes someone&apos;s day easier. 🎨
                            </p>

                            <p className="font-poppins text-xs sm:text-sm text-slate-500 font-medium mt-4 tracking-wide">
                                Based in Bangalore, India • Full-stack engineering & creative web applications.
                            </p>

                            {/* Colorful Jagged Stickers (matching reference image) */}
                            <div className="flex flex-col items-center gap-3.5 mt-8">
                                
                                {/* Row 1 */}
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    {/* Yellow Sticker */}
                                    <div className="inline-flex items-center gap-2">
                                        <div className="sticker-jagged px-5 py-2.5 bg-[#FFB92E] text-slate-950 font-poppins font-black text-xs sm:text-sm tracking-wide shadow-xs">
                                            Interaction Design
                                        </div>
                                        <div className="w-9 h-9 rounded-md bg-[#FFB92E] flex items-center justify-center text-slate-950 shadow-xs">
                                            <Icon icon="lucide:sparkles" className="w-4 h-4 text-slate-950" />
                                        </div>
                                    </div>

                                    {/* Green Sticker */}
                                    <div className="inline-flex items-center gap-2">
                                        <div className="sticker-jagged px-5 py-2.5 bg-[#10B981] text-white font-poppins font-black text-xs sm:text-sm tracking-wide shadow-xs">
                                            Prototyping & 3D
                                        </div>
                                        <div className="w-9 h-9 rounded-md bg-[#10B981] flex items-center justify-center text-white shadow-xs">
                                            <Icon icon="lucide:palette" className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="flex flex-wrap items-center justify-center gap-3">
                                    {/* Pink Sticker */}
                                    <div className="inline-flex items-center gap-2">
                                        <div className="sticker-jagged px-5 py-2.5 bg-[#EC4899] text-white font-poppins font-black text-xs sm:text-sm tracking-wide shadow-xs">
                                            User Research
                                        </div>
                                        <div className="w-9 h-9 rounded-md bg-[#EC4899] flex items-center justify-center text-white shadow-xs">
                                            <Icon icon="lucide:puzzle" className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    {/* Blue Sticker */}
                                    <div className="inline-flex items-center gap-2">
                                        <div className="sticker-jagged px-5 py-2.5 bg-[#2563EB] text-white font-poppins font-black text-xs sm:text-sm tracking-wide shadow-xs">
                                            Motion Design
                                        </div>
                                        <div className="w-9 h-9 rounded-md bg-[#2563EB] flex items-center justify-center text-white shadow-xs">
                                            <Icon icon="lucide:eye" className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </Reveal>

                    {/* Right Polaroid: Workspace Photo */}
                    <Reveal delay={0.18} direction="right" className="w-full max-w-[280px] mx-auto">
                        <div className="bg-white p-3.5 pb-6 rounded-md shadow-xl border border-slate-200/90 rotate-3 hover:rotate-0 transition-transform duration-300 select-none relative group">
                            
                            {/* Pastel Washi Tape at Top Corners */}
                            <div 
                                className="absolute -top-3 left-4 w-12 sm:w-14 h-5.5 bg-[#93C5FD]/75 backdrop-blur-xs border border-blue-300/80 shadow-2xs z-20 pointer-events-none rounded-[1px]"
                                style={{ transform: "rotate(-12deg)" }}
                            />
                            <div 
                                className="absolute -top-3 right-4 w-12 sm:w-14 h-5.5 bg-[#FDE047]/75 backdrop-blur-xs border border-amber-300/80 shadow-2xs z-20 pointer-events-none rounded-[1px]"
                                style={{ transform: "rotate(12deg)" }}
                            />

                            {/* Photo Container */}
                            <div className="aspect-square relative overflow-hidden bg-slate-100 rounded-xs shadow-inner">
                                <Image
                                    src="/workspace.jpg"
                                    alt="Developer Workspace"
                                    fill
                                    sizes="(max-width: 768px) 280px, 320px"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Polaroid Chin Handwritten Caption */}
                            <p className="text-center font-caveat text-2xl text-slate-800 font-bold mt-3">
                                my workspace
                            </p>
                        </div>
                    </Reveal>

                </div>

                {/* School (Education) & Intern (Experience) - Scrapbook Index Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-6">
                    
                    {/* Education / School Index Card */}
                    <Reveal delay={0.22} direction="left">
                        <div 
                            className="bg-white rounded-2xl p-7 sm:p-9 shadow-lg border-2 border-slate-200 relative -rotate-1 hover:rotate-0 transition-transform duration-300 font-poppins"
                        >
                            {/* Washi Tape Pinning Card */}
                            <div 
                                className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 bg-[#A7F3D0]/80 backdrop-blur-xs border border-emerald-300/90 shadow-2xs z-20 pointer-events-none rounded-[2px]"
                                style={{ transform: "translateX(-50%) rotate(-1deg)" }}
                            />

                            {/* Header Row */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-slate-200">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-poppins block mb-0.5">
                                        Academic Background
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                                        Education
                                    </h3>
                                </div>
                                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center p-1.5 relative overflow-hidden shrink-0 hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src="/school-icon.png"
                                        alt="School & Education"
                                        width={52}
                                        height={52}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Education Items - Clean Cards with Zero AI Lines */}
                            <div className="space-y-4">
                                <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition-colors">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                        <span className="text-xs font-bold text-emerald-700 font-poppins uppercase tracking-wider">
                                            2022 — 2026
                                        </span>
                                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 font-bold font-poppins text-xs shadow-2xs">
                                            ★ 8.01 CGPA
                                        </span>
                                    </div>
                                    <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                                        B.E. (Hons) Computer Science & Engineering
                                    </h4>
                                    <p className="text-slate-500 text-xs sm:text-sm font-medium font-poppins mt-1">
                                        Jansons Institute of Technology
                                    </p>
                                </div>

                                <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/70 hover:bg-slate-50 transition-colors">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                        <span className="text-xs font-bold text-slate-500 font-poppins uppercase tracking-wider">
                                            2021 — 2022
                                        </span>
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold font-poppins text-xs">
                                            78% Aggregate
                                        </span>
                                    </div>
                                    <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                                        Higher Secondary School
                                    </h4>
                                    <p className="text-slate-500 text-xs sm:text-sm font-medium font-poppins mt-1">
                                        SSM Lakshmi Ammal School
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Internship / Experience Index Card */}
                    <Reveal delay={0.26} direction="right">
                        <div 
                            className="bg-white rounded-2xl p-7 sm:p-9 shadow-lg border-2 border-slate-200 relative rotate-1 hover:rotate-0 transition-transform duration-300 font-poppins"
                        >
                            {/* Washi Tape Pinning Card */}
                            <div 
                                className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 bg-[#FED7AA]/80 backdrop-blur-xs border border-amber-300/90 shadow-2xs z-20 pointer-events-none rounded-[2px]"
                                style={{ transform: "translateX(-50%) rotate(1deg)" }}
                            />

                            {/* Header Row */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-dashed border-slate-200">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-poppins block mb-0.5">
                                        Work Experience
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                                        Internship
                                    </h3>
                                </div>
                                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center p-1.5 relative overflow-hidden shrink-0 hover:scale-105 transition-transform duration-200">
                                    <Image
                                        src="/job-icon.png"
                                        alt="Internship & Job"
                                        width={52}
                                        height={52}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Internship Experience - Clean Card with Zero AI Lines */}
                            <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/70">
                                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                    <span className="text-xs font-bold text-amber-800 font-poppins uppercase tracking-wider">
                                        Nov &apos;25 — Jan &apos;26 (3 Mos)
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 font-bold font-poppins text-xs">
                                        Full Stack
                                    </span>
                                </div>
                                
                                <h4 className="font-extrabold text-base sm:text-lg text-slate-900 leading-tight">
                                    Full Stack Developer Intern
                                </h4>
                                <p className="text-slate-600 text-xs sm:text-sm font-semibold font-poppins mt-0.5 mb-3">
                                    SUVID Solutions
                                </p>

                                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 font-medium font-poppins">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold">✓</span>
                                        <span>Engineered secure JWT API authentication &amp; role-based routes.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold">✓</span>
                                        <span>Crafted interactive high-fidelity user interfaces with React.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-600 font-bold">✓</span>
                                        <span>Refactored backend SQL queries, reducing load times by 25%.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}
