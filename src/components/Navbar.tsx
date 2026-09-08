"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react";
import AnimatedButton from "./AnimatedButton";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };
        
        handleResize();
        window.addEventListener("resize", handleResize);

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;
                    const shouldHide = currentScrollY > lastScrollY.current && currentScrollY > 100;
                    
                    setIsHidden((prev) => (prev !== shouldHide ? shouldHide : prev));
                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Use IntersectionObserver for 0-overhead section tracking
        const sections = ["home", "about", "projects", "skills", "contact"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        setActiveSection(id === "home" ? "" : id);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: 0
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Desktop Top Left Logo */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? -50 : 0
                }}
                className="flex fixed top-4 left-4 md:top-7 md:left-8 z-50 items-center font-poppins"
            >
                <a
                    href="#home"
                    className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 hover:opacity-80 transition-opacity font-poppins select-none"
                >
                    Portfolio<span className="text-[#2563EB]">.</span>
                </a>
            </motion.div>

            {/* Desktop Floating Pill Navigation: White pill container, selecting alone black */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isHidden ? -100 : 0,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-7xl font-poppins"
            >
                <div className="bg-white/95 backdrop-blur-md p-1 rounded-full flex items-center gap-0.5 shadow-[0_8px_25px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.03)] border border-slate-200/90 font-poppins">
                    {navItems.map((item) => {
                        const isHome = item.href === "#";
                        const sectionId = isHome ? "" : item.href.replace("#", "");
                        const isActive = activeSection === sectionId || (isHome && activeSection === "");
                        
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveSection(sectionId)}
                                className={`relative px-3.5 sm:px-4 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-colors duration-200 tracking-normal select-none ${
                                    isActive 
                                        ? "text-white font-semibold" 
                                        : "text-slate-600 hover:text-slate-950"
                                }`}
                                aria-label={item.name}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activePillIndicator"
                                        className="absolute inset-0 bg-slate-950 rounded-full -z-10 shadow-xs"
                                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                                    />
                                )}
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        );
                    })}
                </div>
            </motion.nav>

            {/* Desktop Top Right Action: Hire Me */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? 50 : 0
                }}
                className="hidden md:flex fixed top-6 right-8 z-50 items-center gap-4 font-poppins"
            >
                <AnimatedButton href="#contact" text="Hire Me" size="sm" className="px-3.5! py-1.5! border-[3px]! [&_span]:text-xs! [&_span]:font-semibold!" />
            </motion.div>

            {/* Mobile Navigation - Right Corner Elements matching reference image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isMobile ? 1 : (isHidden ? 0 : 1),
                    x: isMobile ? 0 : (isHidden ? 50 : 0),
                    pointerEvents: isMobile ? "auto" : (isHidden ? "none" : "auto")
                }}
                className="md:hidden fixed top-4 right-4 z-999 flex items-center gap-2.5 font-poppins"
            >
                {/* Profile Avatar as in reference */}
                <a
                    href="#about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-full overflow-hidden border border-slate-200/90 shadow-sm flex items-center justify-center bg-white active:scale-95 transition-transform"
                    aria-label="My profile"
                >
                    <img
                        src="/about-me.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </a>

                {/* Circular Toggle Button matching reference */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-slate-200/90 flex items-center justify-center transition-transform active:scale-95"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
                </button>
            </motion.div>

            {/* Mobile Menu Contents */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Dark backdrop blur overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 z-998 bg-slate-950/20 backdrop-blur-xs"
                        />
                        
                        {/* Modern Floating Minimalist Menu Card matching reference */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: -12 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: -12 }}
                            transition={{ type: "spring", stiffness: 450, damping: 28 }}
                            className="md:hidden fixed top-16 right-4 z-1000 w-[240px] bg-white rounded-[28px] flex flex-col font-poppins shadow-[0_20px_50px_rgba(0,0,0,0.1),0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 p-2.5"
                        >
                            {/* Nav Items */}
                            <div className="flex flex-col gap-1">
                                {[
                                    { name: "Home", href: "#", icon: "lucide:home" },
                                    { name: "My profile", href: "#about", icon: "lucide:user" },
                                    { name: "Projects", href: "#projects", icon: "lucide:folder" },
                                    { name: "Skills", href: "#skills", icon: "lucide:flame" },
                                    { name: "Contact", href: "#contact", icon: "lucide:mail" },
                                ].map((item) => {
                                    const isHome = item.href === "#";
                                    const sectionId = isHome ? "" : item.href.replace("#", "");
                                    const isActive = activeSection === sectionId || (isHome && activeSection === "");

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => {
                                                setActiveSection(sectionId);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-[14.5px] transition-colors duration-150 ${
                                                isActive 
                                                    ? "bg-[#F4F4F6] text-slate-950 font-semibold" 
                                                    : "text-slate-700 hover:bg-[#F4F4F6] hover:text-slate-950 font-medium"
                                            }`}
                                        >
                                            <Icon 
                                                icon={item.icon} 
                                                className={`w-4.5 h-4.5 transition-colors ${
                                                    isActive ? "text-slate-950" : "text-slate-600"
                                                }`} 
                                            />
                                            <span>{item.name}</span>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Black Pill CTA button matching Share & Grow from reference */}
                            <div className="pt-1.5">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="w-full py-3 px-4 bg-[#202020] hover:bg-black text-white text-[14.5px] font-semibold rounded-2xl text-center transition-all duration-200 active:scale-98 shadow-sm flex items-center justify-center gap-2"
                                >
                                    <span>Hire Me</span>
                                </a>
                            </div>

                            {/* Faint Hairline Divider */}
                            <div className="my-2 border-t border-slate-100" />

                            {/* Bottom Item matching "Log out" layout in reference */}
                            <div className="flex flex-col gap-1">
                                <a
                                    href="/resume.pdf"
                                    download="Jeevanantham_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-3.5 py-2 rounded-2xl text-[14px] font-medium text-slate-700 hover:text-slate-950 hover:bg-[#F4F4F6] transition-colors"
                                >
                                    <Icon icon="lucide:download" className="w-4.5 h-4.5 text-slate-600" />
                                    <span>Download CV</span>
                                </a>

                                {/* Subtle Social Footer */}
                                <div className="flex items-center justify-between px-3.5 pt-1 text-[11px] font-semibold text-slate-500">
                                    <a
                                        href="https://github.com/Jeeva1121"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-slate-950 transition-colors flex items-center gap-1.5"
                                    >
                                        <Icon icon="mdi:github" className="w-3.5 h-3.5" />
                                        <span>GitHub</span>
                                    </a>
                                    <span className="text-slate-300">•</span>
                                    <a
                                        href="https://www.linkedin.com/in/jeevanantham5b2a19324"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#0A66C2] transition-colors flex items-center gap-1.5"
                                    >
                                        <Icon icon="mdi:linkedin" className="w-3.5 h-3.5 text-[#0A66C2]" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
