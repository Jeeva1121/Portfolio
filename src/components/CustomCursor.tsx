"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 600, mass: 0.3 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Only activate on desktop
        if (window.innerWidth < 768) return;
        setIsDesktop(true);

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = 
                target.tagName === 'A' || 
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer';
            
            setIsHovering(!!isClickable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [mouseX, mouseY, isVisible]);

    // Render nothing on mobile — zero overhead
    if (!isDesktop) return null;

    return (
        <>
            <style jsx global>{`
                /* Hide default cursor on desktop */
                @media (min-width: 768px) {
                    * {
                        cursor: none !important;
                    }
                }
            `}</style>
            
            <motion.div
                className="fixed top-0 left-0 pointer-events-none hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    zIndex: 9999,
                }}
                animate={{
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <div className="relative -top-1 -left-1">
                    {/* The Click Burst Animation — radiating dashes like Apple */}
                    {isClicking && (
                        <div className="absolute top-0 left-0 pointer-events-none">
                            {[-135, -90, -45, 0, 45].map((angle, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 left-0"
                                    style={{ transform: `rotate(${angle}deg)` }}
                                >
                                    <motion.div
                                        className="w-[3px] h-[10px] bg-black rounded-full"
                                        style={{ position: "absolute", left: -1.5, top: 0 }}
                                        initial={{ opacity: 1, y: -8 }}
                                        animate={{ opacity: 0, y: -22 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* The Apple-style Cursor Arrow */}
                    <motion.svg 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/24/svg"
                        className="drop-shadow-md origin-top-left"
                        animate={{
                            scale: isClicking ? 0.9 : isHovering ? 1.1 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    >
                        <path d="M5.5 3.21V20.8C5.5 21.43 6.24 21.78 6.73 21.38L11.31 17.65C11.5 17.49 11.75 17.41 12 17.41H18.5C19.16 17.41 19.52 16.63 19.09 16.14L6.81 2.29C6.42 1.85 5.5 2.12 5.5 3.21Z" fill="black" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    </motion.svg>
                </div>
            </motion.div>
        </>
    );
}
