"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -4 }}
            style={{ willChange: "transform, opacity" }}
            className={cn("glass-card p-6 md:p-8 group overflow-hidden relative", className)}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            rgba(139, 92, 246, 0.08),
                            transparent 80%
                        )
                    `,
                }}
            />
            
            {/* Ambient inner glow highlight border */}
            <div className="absolute inset-px rounded-[23px] border border-black/5 pointer-events-none group-hover:border-black/10 transition-colors duration-500" />

            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
}
