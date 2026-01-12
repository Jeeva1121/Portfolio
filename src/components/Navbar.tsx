"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto max-w-2xl"
            >
                <div className="glass px-4 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-full flex items-center justify-between md:justify-center shadow-2xl border-white/20 overflow-x-auto no-scrollbar">
                    <div className="flex items-center gap-4 md:gap-8 px-2 md:px-4 mx-auto">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 transition-colors whitespace-nowrap"
                                aria-label={item.name}
                            >
                                {item.icon && <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />}
                                <span className={item.icon ? "hidden md:inline" : ""}>{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Top Right Actions */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="fixed top-6 right-8 z-50 flex items-center gap-4"
            >
                <ThemeToggle />
                <a href="#contact" className="glass-button py-2! px-6! text-sm font-bold rounded-full text-slate-900 dark:text-white">
                    Hire Me
                </a>
            </motion.div>
        </>
    );
}
