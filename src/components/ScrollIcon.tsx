"use client";

import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

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
                {/* High-Visibility Circular Container: Solid Primary Color, No Glow */}
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-full flex items-center justify-center bg-blue-600 text-white transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110 shadow-none!"
                >
                    {/* Double Down Icon with Bold Stroke */}
                    <ChevronsDown className="w-5 h-5 stroke-[3px]" />
                </motion.div>
            </a>
        </div>
    );
}
