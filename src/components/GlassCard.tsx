"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]
            }}
            className={cn("glass-card p-5 md:p-8 group overflow-hidden", className)}
        >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}
