"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIconProps {
    href: string;
    label: string;
}

export default function ScrollIcon({ href, label }: ScrollIconProps) {
    return (
        <div className="flex flex-col items-center gap-3">
            <a
                href={href}
                className="group relative"
                aria-label={label}
            >
                {/* Animated Ripple Effect */}
                <motion.div
                    className="absolute -inset-4 rounded-full bg-blue-600/10 -z-10"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Main Circle Container */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-14 h-14 glass rounded-full flex items-center justify-center text-blue-600 shadow-xl border-white/30 backdrop-blur-xl group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300"
                >
                    <ChevronDown className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" />

                    {/* Internal Animated Dot */}
                    <motion.div
                        className="absolute top-2 w-1 h-1 bg-blue-600 rounded-full"
                        animate={{ opacity: [0, 1, 0], y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.div>
            </a>
        </div>
    );
}
创新
