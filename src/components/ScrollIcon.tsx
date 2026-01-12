"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIconProps {
    href: string;
    label: string;
}

export default function ScrollIcon({ href, label }: ScrollIconProps) {
    return (
        <div className="flex flex-col items-center">
            <a
                href={href}
                className="group relative flex items-center justify-center w-14 h-14"
                aria-label={label}
            >
                {/* Animated Ripple Effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-blue-600/10 -z-10"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Circle Container */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full glass rounded-full flex items-center justify-center text-blue-600 shadow-[0_8px_32px_rgba(37,99,235,0.2)] border-white/40 backdrop-blur-xl group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-500"
                >
                    <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />

                    {/* Premium Animated Dot */}
                    <motion.div
                        className="absolute top-2.5 w-1.5 h-1.5 bg-blue-600 rounded-full shadow-[0_0_8px_rgba(37,99,235,0.8)]"
                        animate={{ opacity: [0, 1, 0], y: [0, 4, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.div>
            </a>
        </div>
    );
}
