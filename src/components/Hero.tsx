"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Send } from "lucide-react";
import ScrollIcon from "./ScrollIcon";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const roles = ["Software Developer", "Fullstack Developer", "Java Developer"];
    const typingSpeed = isDeleting ? 50 : 100;

    useEffect(() => {
        const currentRole = roles[roleIndex];
        const timer = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:pl-8 lg:pl-12 text-center md:text-left pt-12 md:pt-0"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-white/20">
                        <Terminal className="w-4 h-4 text-blue-500" />
                        <span className="text-xs md:text-sm font-medium">Available for Hiring</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                        <span className="text-slate-500 dark:text-slate-400 font-medium text-2xl md:text-4xl">Hi, I'm</span> <br />
                        <span className="font-display bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 dark:from-white dark:via-blue-200 dark:to-slate-300 bg-clip-text text-transparent md:-ml-3.5">
                            Jeevanantham S
                        </span>
                    </h1>

                    <div className="h-10 md:h-12 mb-8 md:mb-10">
                        <p className="text-xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 font-sans tracking-wide">
                            {displayText}
                            <span className="inline-block w-0.5 h-6 md:h-7 bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse" />
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5 justify-center md:justify-start items-center">
                        <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 text-lg">
                            Let's Connect <Send className="w-5 h-5" />
                        </a>

                        <div className="flex items-center gap-4">
                            <a href="https://github.com/Jeeva1121" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full hover:scale-110 transition-all border border-slate-200 dark:border-white/20 shadow-lg bg-white flex items-center justify-center">
                                <Icon icon="logos:github-icon" width="24" height="24" />
                            </a>
                            <a href="https://www.linkedin.com/in/jeevanantham5b2a19324" target="_blank" rel="noopener noreferrer" className="p-3.5 glass rounded-full hover:scale-110 transition-all border-white/20 shadow-xl bg-white/10 dark:bg-white/5 flex items-center justify-center">
                                <Icon icon="logos:linkedin-icon" width="24" height="24" />
                            </a>
                            <a href="mailto:jeevanantham1035@gmail.com" className="p-3.5 glass rounded-full hover:scale-110 transition-all border-white/20 shadow-xl bg-white/10 dark:bg-white/5 flex items-center justify-center">
                                <Icon icon="logos:google-gmail" width="24" height="24" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: isMobile ? 0.7 : 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: [0, -20, 0]
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                            y: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        className="relative z-10 md:ml-4 lg:ml-8"
                    >
                        <div className="relative max-w-[600px] w-full">
                            <Image
                                src="/hero-custom-transparent.png"
                                alt="Senior Full-Stack Engineer"
                                width={800}
                                height={800}
                                priority
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl -z-10"
                    />
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIcon href="#about" label="Scroll to About" />
            </div>
        </section>
    );
}
