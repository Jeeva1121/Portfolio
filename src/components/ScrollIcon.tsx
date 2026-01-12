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
                className="group relative flex items-center justify-center w-10 h-10"
                aria-label={label}
            >
                {/* Senior-Level Circle Container: Small, Solid Contrast, Sharp Shadow */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 group-hover:scale-110"
                >
                    <ChevronDown className="w-5 h-5 stroke-[2.5px] transition-transform" />

                    {/* Precision Animated Dot */}
                    <motion.div
                        className="absolute top-1.5 w-1 h-1 bg-slate-900 dark:bg-white rounded-full group-hover:bg-white dark:group-hover:bg-slate-900 shadow-sm"
                        animate={{ opacity: [0, 1, 0], y: [0, 3, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.div>
            </a>
        </div>
    );
}
