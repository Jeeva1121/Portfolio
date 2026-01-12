"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-10 h-10 rounded-full bg-blue-50/80 dark:bg-white/5 text-blue-500/80 dark:text-blue-400/80 border border-blue-100 dark:border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-blue-100 dark:hover:bg-white/10 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 shadow-none!"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-5 h-5 stroke-[2.5px]" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
