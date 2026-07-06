"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

import { useEffect, useState } from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const roles = [
    "Software Engineer.",
    "Web Developer."
];

const subtitleText = "I build responsive, secure, and user-centric web platforms with a focus on modern aesthetics and high performance.";
const subtitleWords = subtitleText.split(" ");

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    // Parallax mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    const imageX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
    const imageY = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);
    
    const glowX = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
    const glowY = useTransform(smoothY, [-0.5, 0.5], [-80, 80]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (typeof window !== "undefined") {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const wordVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section id="home" onMouseMove={handleMouseMove} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#2D45FA]">
            
            {/* Ambient Glow Parallax */}
            <motion.div 
                style={{ x: glowX, y: glowY }}
                className="hidden md:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-linear-to-b from-white/10 to-transparent blur-[120px] rounded-full -z-10" 
            />

            <div className="container mx-auto px-6 relative z-10 pt-20 sm:pt-32 pb-16 flex flex-col items-center justify-center text-center">
                
                {/* Massive Animated Role */}
                <div className="flex items-center justify-center mb-6 w-full min-h-[100px] sm:min-h-[120px] md:min-h-[160px]">
                    <AnimatePresence mode="popLayout">
                        <motion.h1 
                            key={roleIndex}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.5rem] sm:text-6xl md:text-[5rem] lg:text-[6rem] font-black tracking-tighter leading-tight sm:leading-tight font-poppins text-transparent bg-clip-text bg-linear-to-br from-white via-blue-50 to-blue-200 px-4 py-4 max-w-full"
                        >
                            {roles[roleIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                {/* Staggered Subtitle */}
                <motion.p
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-lg sm:text-xl text-blue-100 max-w-2xl font-medium leading-relaxed mb-10 flex flex-wrap justify-center gap-x-1.5"
                >
                    {subtitleWords.map((word, idx) => (
                        <motion.span key={idx} variants={wordVariants}>
                            {word}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Elegant Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-6 mb-16"
                >
                    <AnimatedButton href="#projects" text="View My Work" className="bg-[#D3F85A]! border-[#b8dd3a]! text-slate-900! [&_path]:fill-slate-900! hover:bg-[#c2e849]! hover:border-[#a6cc29]! active:border-[#b8dd3a]!" />
                    <AnimatedButton href="/resume.pdf" text="Download Resume" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c]! border-[#333333]! hover:bg-[#2a2a2a]! hover:border-[#444444]! active:border-[#333333]!" />
                </motion.div>

                {/* Centered Image with Mouse Parallax & Float */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.2 }}
                    className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] aspect-square -mt-4 sm:-mt-8"
                >
                    <motion.div 
                        style={{ x: imageX, y: imageY }}
                        className="w-full h-full relative"
                    >
                        <motion.div 
                            animate={{ y: [0, -20, 0] }} 
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative"
                        >
                            <Image 
                                src="/hero-image-new.png" 
                                alt="Jeevanantham S." 
                                fill 
                                className="object-contain drop-shadow-[0_45px_45px_rgba(0,0,0,0.2)]"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
