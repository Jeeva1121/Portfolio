"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronUp, ChevronDown, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMinimized) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isMinimized]);

    return (
        <div className="contents">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isHidden ? -100 : 0,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-max max-w-7xl"
            >
                <div className="relative">
                    <AnimatePresence mode="wait">
                        {!isMinimized ? (
                            <motion.div
                                key="expanded"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                className="glass px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 md:gap-6 shadow-2xl border-white/20"
                            >
                                {/* Navigation Links */}
                                <div className="flex items-center gap-3 md:gap-8 px-2 overflow-x-auto no-scrollbar">
                                    {navItems.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="flex items-center gap-1.5 text-[10px] md:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors whitespace-nowrap"
                                            aria-label={item.name}
                                        >
                                            {item.icon && <item.icon className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-600" />}
                                            <span className={item.icon ? "hidden sm:inline" : ""}>{item.name}</span>
                                        </a>
                                    ))}
                                </div>

                                {/* Divider & Actions - ONLY visible on mobile inside this bar */}
                                <div className="md:hidden flex items-center gap-2">
                                    <div className="w-px h-6 bg-slate-200 dark:bg-white/10 mx-1" />
                                    <ThemeToggle />
                                    <a
                                        href="#contact"
                                        className="glass-button py-1.5! px-4! text-[10px] font-bold rounded-full text-slate-900 dark:text-white whitespace-nowrap"
                                    >
                                        Hire Me
                                    </a>

                                    <button
                                        onClick={() => setIsMinimized(true)}
                                        className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400"
                                        aria-label="Minimize Navbar"
                                    >
                                        <ChevronUp className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.button
                                key="minimized"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={() => setIsMinimized(false)}
                                className="glass p-3 rounded-full shadow-2xl border-white/20 text-blue-600 flex items-center justify-center mx-auto md:hidden"
                                aria-label="Show Navbar"
                            >
                                <Menu className="w-5 h-5" />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>

            {/* Top Right Actions - Desktop Only */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? 50 : 0
                }}
                className="hidden md:flex fixed top-6 right-8 z-50 items-center gap-4"
            >
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href="#contact"
                        className="glass-button py-2! px-6! text-sm font-bold rounded-full text-slate-900 dark:text-white whitespace-nowrap"
                    >
                        Hire Me
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
