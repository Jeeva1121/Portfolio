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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
                setIsMobileMenuOpen(false);
            } else {
                setIsHidden(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className="contents">
            {/* Desktop Navigation - Centered Pill */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: isHidden ? -100 : 0,
                    opacity: isHidden ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 lg:w-max max-w-7xl"
            >
                <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl border-white/20">
                    <div className="flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors whitespace-nowrap"
                                aria-label={item.name}
                            >
                                {item.icon && <item.icon className="w-5 h-5 text-blue-600" />}
                                <span>{item.name}</span>
                            </a>
                        ))}
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

            {/* Mobile Navigation - Right Corner Toggle */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: isHidden ? 0 : 1,
                    x: isHidden ? 50 : 0,
                    pointerEvents: isHidden ? "none" : "auto"
                }}
                className="md:hidden fixed top-4 right-4 z-50 flex items-center gap-2"
            >
                <ThemeToggle />
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="glass p-3 rounded-full shadow-2xl border-white/20 text-blue-600 flex items-center justify-center"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <ChevronUp className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.div>

            {/* Mobile Menu Contents */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="md:hidden fixed top-20 right-4 z-40 w-48 glass rounded-2xl shadow-2xl border-white/20 overflow-hidden"
                    >
                        <div className="flex flex-col p-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    {item.icon && <item.icon className="w-4 h-4 text-blue-600" />}
                                    <span>{item.name}</span>
                                </a>
                            ))}
                            <div className="h-px bg-slate-200 dark:bg-white/10 my-1 mx-2" />
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                            >
                                <span>Hire Me</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
