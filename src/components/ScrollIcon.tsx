"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ScrollIconProps {
    href: string;
    label: string;
}

export default function ScrollIcon({ href, label }: ScrollIconProps) {
    return (
        <div className="hidden md:flex flex-col items-center">
            <a
                href={href}
                className="group relative flex items-center justify-center w-10 h-10"
                aria-label={label}
            >
                {/* Subtle Light Container: No High Contrast, Single Chevron */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full flex items-center justify-center bg-secondary-bg text-secondary-text border border-border-subtle transition-all duration-300 group-hover:border-text-secondary group-hover:text-primary-text group-hover:scale-110 shadow-none!"
                >
                    <ChevronDown className="w-5 h-5 stroke-[2.5px]" />
                </motion.div>
            </a>
        </div>
    );
}
