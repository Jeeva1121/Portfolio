"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="about" className="py-24 bg-[#eef2f6] relative overflow-hidden border-t border-slate-200">
            
            {/* Extremely Subtle Ambient Glow */}
            <div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-linear-to-tr from-blue-200/40 to-transparent blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
                    
                    {/* Left Column: Minimalist ID Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        animate={{ y: [0, -15, 0], rotate: isMobile ? [-1, 1, -1] : [-4, 4, -4] }}
                        viewport={{ once: true }}
                        transition={{ 
                            y: { repeat: Infinity, duration: 3, ease: "easeInOut" },
                            rotate: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                        }}
                        className="relative mx-auto w-full max-w-[360px]"
                    >
                        {/* Lanyard Clip (The "Tie") */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 flex flex-col items-center z-20 pb-2">
                            {/* Ribbon */}
                            <div className="w-5 h-96 bg-[#006aff] shadow-inner -mb-2 border-x-2 border-blue-800" />
                            {/* Metal Clip */}
                            <div className="w-10 h-14 border-4 border-slate-300 rounded-full bg-linear-to-b from-slate-100 to-slate-300 shadow-sm" />
                            <div className="w-20 h-4 bg-linear-to-r from-slate-300 via-slate-100 to-slate-400 rounded-md -mt-3 shadow-md border border-slate-400" />
                        </div>

                        {/* Apple-style Glass Card */}
                        <motion.div 
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={isMobile ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" }}
                            className="bg-white md:bg-white/90 md:backdrop-blur-2xl p-6 rounded-3xl shadow-[0_20px_60px_rgb(0,0,0,0.08)] border border-white relative overflow-hidden group mt-4"
                        >
                            
                            {/* Subtle animated gradient background inside card */}
                            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="relative z-10">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl font-bold font-poppins text-slate-800 tracking-wide uppercase">Developer ID</h3>
                                </div>
                                <div className="aspect-4/5 relative rounded-2xl overflow-hidden mb-6 bg-slate-100 shadow-inner flex items-center justify-center">
                                    <Image 
                                        src="/hero-custom-clay.png" 
                                        alt="Jeevanantham S." 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-105" 
                                    />
                                </div>
                                <div className="space-y-4 pt-2">
                                    <div className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                            <Icon icon="logos:google-gmail" className="w-4 h-4" />
                                        </div>
                                        <span className="truncate font-medium">jeevanantham1035@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                            <Icon icon="twemoji:spiral-calendar" className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">21 / 10 / 2004</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-700">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                                            <Icon icon="twemoji:round-pushpin" className="w-4 h-4" />
                                        </div>
                                        <span className="font-medium">Salem, TN</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Bio & Experience */}
                    <div className="space-y-10">
                        
                        {/* Bio Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                        >
                            <div className="mb-6">
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 font-poppins tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                    Jeevanantham S.
                                </h2>
                                <p className="text-[#006aff] font-medium text-lg mt-2 tracking-wide">Web and Software Developer</p>
                            </div>

                            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    I build responsive, secure, and user-centric platforms. My focus is on creating elegant solutions to complex problems, merging modern aesthetics with high-performance engineering.
                                </p>
                                <p>
                                    I am constantly learning new trends to create quality digital products that deliver practical and impressive value to businesses.
                                </p>
                            </div>
                        </motion.div>

                        {/* Experience & Education Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            
                            {/* Education Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                                        <Icon icon="twemoji:graduation-cap" className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">Education</h3>
                                </div>
                                
                                <div className="space-y-0">
                                    <div className="border-b border-slate-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                        <span className="text-sm font-semibold text-[#006aff] tracking-wider uppercase mb-1 block">2022 - 2026</span>
                                        <h4 className="font-bold text-lg text-slate-900 leading-tight">B.E. (Hons) CSE</h4>
                                        <p className="text-slate-500 text-sm mt-1 mb-2">Jansons Institute of Technology</p>
                                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">8.01 CGPA</span>
                                    </div>
                                    
                                    <div className="border-b border-slate-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                        <span className="text-sm font-semibold text-slate-500 tracking-wider uppercase mb-1 block">2021 - 2022</span>
                                        <h4 className="font-bold text-lg text-slate-900 leading-tight">High School</h4>
                                        <p className="text-slate-500 text-sm mt-1 mb-2">SSM Lakshmi Ammal School</p>
                                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-semibold">78%</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Experience Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
                            >
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shadow-sm">
                                        <Icon icon="twemoji:briefcase" className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">Experience</h3>
                                </div>
                                
                                <div className="space-y-0">
                                    <div className="border-b border-slate-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                                        <span className="text-sm font-semibold text-[#006aff] tracking-wider uppercase mb-1 block">Nov '25 - Jan '26</span>
                                        <h4 className="font-bold text-lg text-slate-900 leading-tight">Full Stack Developer Intern</h4>
                                        <p className="text-slate-500 text-sm mt-1 mb-3">SUVID Solutions</p>
                                        <ul className="space-y-2 text-sm text-slate-600">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                                <span>Engineered secure JWT APIs.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                                <span>Crafted high-fidelity React interfaces.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                                <span>Refactored SQL queries, reducing time by 25%.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
