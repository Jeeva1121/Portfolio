"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedButton from "./AnimatedButton";

const roles = [
    "Software Developer.",
    "Web Developer."
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    const glowRef = useRef<HTMLDivElement>(null);
    const imageWrapRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (window.matchMedia("(hover: none)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const section = sectionRef.current;
        if (!section) return;

        let frameId = 0;
        let targetX = 0, targetY = 0;
        let currentX = 0, currentY = 0;
        let running = false;
        let isIntersecting = true;

        const animate = () => {
            if (!isIntersecting) {
                running = false;
                return;
            }

            const dx = targetX - currentX;
            const dy = targetY - currentY;

            // Stop ticking when close enough to save GPU/CPU
            if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) {
                currentX = targetX;
                currentY = targetY;
                if (glowRef.current)
                    glowRef.current.style.transform = `translate3d(calc(-50% + ${currentX * 55}px), ${currentY * 35}px, 0)`;
                if (imageWrapRef.current)
                    imageWrapRef.current.style.transform = `translate3d(${currentX * 20}px, ${currentY * 14}px, 0)`;
                running = false;
                return;
            }

            currentX += dx * 0.08;
            currentY += dy * 0.08;

            if (glowRef.current)
                glowRef.current.style.transform = `translate3d(calc(-50% + ${currentX * 55}px), ${currentY * 35}px, 0)`;
            if (imageWrapRef.current)
                imageWrapRef.current.style.transform = `translate3d(${currentX * 20}px, ${currentY * 14}px, 0)`;

            frameId = requestAnimationFrame(animate);
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!isIntersecting) return;
            targetX = (e.clientX / window.innerWidth) - 0.5;
            targetY = (e.clientY / window.innerHeight) - 0.5;
            if (!running) {
                running = true;
                frameId = requestAnimationFrame(animate);
            }
        };

        const onMouseLeave = () => {
            targetX = 0;
            targetY = 0;
            if (!running) {
                running = true;
                frameId = requestAnimationFrame(animate);
            }
        };

        const observer = new IntersectionObserver(([entry]) => {
            isIntersecting = entry.isIntersecting;
            if (!entry.isIntersecting) {
                running = false;
                cancelAnimationFrame(frameId);
            }
        }, { threshold: 0.1 });

        observer.observe(section);
        section.addEventListener("mousemove", onMouseMove, { passive: true });
        section.addEventListener("mouseleave", onMouseLeave, { passive: true });

        return () => {
            section.removeEventListener("mousemove", onMouseMove);
            section.removeEventListener("mouseleave", onMouseLeave);
            observer.disconnect();
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#2D45FA]"
            style={{ contain: "layout style" }}
        >
            <div
                ref={glowRef}
                className="hidden md:block absolute top-1/4 left-1/2 w-[800px] h-[400px] pointer-events-none -z-10 will-change-transform"
                style={{
                    transform: "translate3d(-50%, 0, 0)",
                    background: "radial-gradient(ellipse at center, rgba(255,255,255,0.16) 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto px-6 relative z-10 pt-20 sm:pt-32 pb-16 flex flex-col items-center justify-center text-center">

                {/* Role cycling */}
                <div className="flex items-center justify-center mb-6 w-full min-h-[105px] sm:min-h-[125px] md:min-h-[165px]">
                    <AnimatePresence mode="popLayout">
                        <motion.h1
                            key={roleIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[2.6rem] sm:text-[4.15rem] md:text-[5.15rem] lg:text-[6.1rem] font-bold tracking-tight leading-tight sm:leading-tight font-poppins text-transparent bg-clip-text bg-linear-to-br from-white via-blue-50 to-blue-200 px-4 py-4 max-w-full"
                        >
                            {roles[roleIndex]}
                        </motion.h1>
                    </AnimatePresence>
                </div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15px] sm:text-base md:text-[17px] text-blue-100/85 max-w-xl font-normal leading-relaxed mb-10"
                >
                    I build responsive, secure, and user-centric web platforms with a focus on modern aesthetics and high performance.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row items-center gap-6 mb-16"
                >
                    <AnimatedButton href="#projects" text="View My Work" className="bg-[#D3F85A]! border-[#b8dd3a]! text-slate-900! [&_path]:fill-slate-900! hover:bg-[#c2e849]! hover:border-[#a6cc29]! active:border-[#b8dd3a]! [&_span]:font-semibold!" />
                    <AnimatedButton href="/resume.pdf" text="Download Resume" target="_blank" rel="noopener noreferrer" className="bg-[#1c1c1c]! border-[#333333]! hover:bg-[#2a2a2a]! hover:border-[#444444]! active:border-[#333333]! [&_span]:font-semibold!" />
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[370px] aspect-square -mt-4 sm:-mt-8"
                >
                    <div
                        ref={imageWrapRef}
                        className="w-full h-full relative will-change-transform"
                        style={{ transform: "translate3d(0,0,0)" }}
                    >
                        <div className="w-full h-full relative animate-float">
                            <Image
                                src="/hero-image-new.png"
                                alt="Jeevanantham S."
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
