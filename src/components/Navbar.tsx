"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Home, 
    User, 
    Code2, 
    FolderKanban, 
    Mail, 
    Menu, 
    ChevronUp
} from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderKanban },
    { name: "Contact", href: "#contact", icon: Mail },
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

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            
            lastScrollY.current = currentScrollY;

            // Update active link highlight
            const sections = ["about", "skills", "projects", "contact"];
            let current = "";
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        current = section;
                        break;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
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
                className="flex fixed top-4 left-4 md:top-8 md:left-8 z-50 items-center font-poppins"
            >
                <a
                    href="#home"
                    className="text-2xl font-black tracking-tighter text-slate-900 hover:opacity-80 transition-opacity"
                >
                    Portfolio<span className="text-[#006aff]">.</span>
                </a>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isHidden ? -100 : 0,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 lg:w-max max-w-7xl"
            >
                <div className="bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-4 shadow-sm border border-slate-200 relative font-poppins">
                    
                    <div className="flex items-center gap-2 relative z-10">
                        {navItems.map((item) => {
                            const isHome = item.href === "#";
                            const sectionId = isHome ? "" : item.href.replace("#", "");
                            const isActive = activeSection === sectionId || (isHome && activeSection === "");
                            
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative flex items-center gap-1.5 text-sm font-medium transition-all duration-300 py-2 px-4 rounded-full tracking-wide ${isActive ? "text-blue-700 font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
                                    aria-label={item.name}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavBackground"
                                            className="absolute inset-0 bg-blue-50 rounded-full border border-blue-100 -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {item.icon && <item.icon className="w-4 h-4" />}
                                    <span>{item.name}</span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </motion.nav>

            {/* Desktop Top Right Actions */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? 50 : 0
                }}
                className="hidden md:flex fixed top-6 right-8 z-50 items-center gap-4 font-poppins"
            >
                <AnimatedButton href="#contact" text="Hire Me" size="sm" />
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
                    className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-md border border-slate-200 text-slate-700 flex items-center justify-center transition-all active:scale-95"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <ChevronUp className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.div>

            {/* Mobile Menu Contents */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Invisible overlay to close on click outside */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 z-998 bg-slate-900/10 backdrop-blur-sm"
                        />
                        
                        {/* Apple-style floating menu */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                            className="md:hidden fixed top-20 left-4 right-4 z-1000 bg-white/70 backdrop-blur-3xl rounded-3xl shadow-[0_30px_60px_rgb(0,0,0,0.12)] border border-white/50 overflow-hidden p-3 font-poppins"
                        >
                            <div className="flex flex-col gap-1.5">
                                {navItems.map((item) => {
                                    const isHome = item.href === "#";
                                    const sectionId = isHome ? "" : item.href.replace("#", "");
                                    const isActive = activeSection === sectionId || (isHome && activeSection === "");
                                    
                                    return (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-4 px-5 py-3.5 text-[15px] font-medium rounded-2xl transition-all ${isActive ? "text-[#006aff] bg-white shadow-sm font-semibold" : "text-slate-600 hover:text-slate-900 hover:bg-white/60"}`}
                                        >
                                            {item.icon && <item.icon className={`w-5 h-5 ${isActive ? 'text-[#006aff]' : 'text-slate-400'}`} />}
                                            <span>{item.name}</span>
                                        </a>
                                    );
                                })}
                                <div className="h-px bg-slate-200/60 my-2 mx-4" />
                                <a
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 px-5 py-3.5 text-[15px] font-semibold text-white bg-[#006aff] rounded-2xl shadow-md active:scale-95 transition-all mt-1 mx-1"
                                >
                                    <span>Hire Me</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
