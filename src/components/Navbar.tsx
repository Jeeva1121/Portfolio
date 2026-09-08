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

            {/* Mobile Navigation - Right Corner Toggle */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isMobile ? 1 : (isHidden ? 0 : 1),
                    x: isMobile ? 0 : (isHidden ? 50 : 0),
                    pointerEvents: isMobile ? "auto" : (isHidden ? "none" : "auto")
                }}
                className="md:hidden fixed top-4 right-4 z-999 flex items-center gap-2 font-poppins"
            >
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-white/95 backdrop-blur-md p-2.5 rounded-full text-slate-900 shadow-md border border-slate-200/90 flex items-center justify-center transition-transform active:scale-95"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                            transition={{ duration: 0.25 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 z-998 bg-slate-950/45 backdrop-blur-sm"
                        />
                        
                        {/* Modern Floating Sheet Menu */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: -16 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: -16 }}
                            transition={{ type: "spring", stiffness: 400, damping: 28 }}
                            className="md:hidden fixed top-18 right-4 left-4 max-w-[340px] ml-auto z-1000 bg-white/95 backdrop-blur-2xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.22),0_4px_20px_rgba(0,0,0,0.06)] rounded-3xl flex flex-col font-poppins overflow-hidden border border-slate-200/90 p-4"
                        >
                            {/* Menu Header Status Bar */}
                            <div className="flex items-center justify-between px-2 pb-3 mb-2 border-b border-slate-100">
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                    </span>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        Available for work
                                    </span>
                                </div>
                                <span className="text-xs font-black tracking-tight text-slate-900">
                                    Portfolio<span className="text-blue-600">.</span>
                                </span>
                            </div>

                            {/* Nav Items */}
                            <div className="flex flex-col gap-1.5">
                                {navItems.map((item, idx) => {
                                    const isHome = item.href === "#";
                                    const sectionId = isHome ? "" : item.href.replace("#", "");
                                    const isActive = activeSection === sectionId || (isHome && activeSection === "");
                                    
                                    const icons: Record<string, string> = {
                                        Home: "lucide:home",
                                        About: "lucide:user",
                                        Projects: "lucide:folder-code",
                                        Skills: "lucide:sparkles",
                                        Contact: "lucide:mail",
                                    };

                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.04 }}
                                            onClick={() => {
                                                setActiveSection(sectionId);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className={`flex items-center justify-between px-4 py-3 text-sm rounded-2xl font-poppins transition-all duration-200 ${
                                                isActive 
                                                    ? "bg-slate-950 text-white font-bold shadow-sm" 
                                                    : "text-slate-700 hover:bg-slate-100/90 hover:text-slate-950 font-semibold"
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <Icon 
                                                    icon={icons[item.name] || "lucide:arrow-right"} 
                                                    className={`w-4.5 h-4.5 ${isActive ? "text-white" : "text-slate-400"}`} 
                                                />
                                                <span>{item.name}</span>
                                            </div>
                                            {isActive ? (
                                                <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                                            ) : (
                                                <Icon icon="lucide:chevron-right" className="w-4 h-4 text-slate-300 opacity-60" />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Divider & Action Buttons */}
                            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold text-slate-950 bg-[#D3F85A] hover:bg-[#c4eb46] border border-[#b8dd3a] rounded-2xl transition-all duration-200 font-poppins shadow-xs active:scale-98"
                                >
                                    <span>Hire Me</span>
                                    <Icon icon="lucide:arrow-up-right" className="w-4 h-4" />
                                </a>

                                {/* Social links */}
                                <div className="flex items-center justify-center gap-3 pt-1">
                                    <a
                                        href="https://github.com/Jeeva1121"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-[11px] font-bold text-slate-700 transition-colors"
                                    >
                                        <Icon icon="mdi:github" className="w-3.5 h-3.5" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/jeevanantham5b2a19324"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-sky-50 border border-slate-200/80 text-[11px] font-bold text-slate-700 hover:text-[#0A66C2] transition-colors"
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
