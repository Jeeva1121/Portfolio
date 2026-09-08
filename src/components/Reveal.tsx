"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number; // in seconds, e.g. 0.1
    yOffset?: number; // pixels, default 36px
    xOffset?: number; // pixels, default 50px
    direction?: "up" | "down" | "left" | "right";
    scale?: boolean; // slight scale-up effect
}

export default function Reveal({
    children,
    className = "",
    delay = 0,
    yOffset = 36,
    xOffset = 50,
    direction = "up",
    scale = true
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animComplete, setAnimComplete] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const media = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReducedMotion(media.matches);
            const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
            media.addEventListener("change", listener);
            return () => media.removeEventListener("change", listener);
        }
    }, []);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
            setIsVisible(true);
            setAnimComplete(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // Detach immediately - zero ongoing scroll overhead!
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        const totalDuration = (delay + 0.75) * 1000;
        const timer = setTimeout(() => setAnimComplete(true), totalDuration);
        return () => clearTimeout(timer);
    }, [isVisible, delay]);

    let initialTransform = "none";
    let visibleTransform = "none";

    if (!reducedMotion) {
        if (direction === "left") {
            const x = -Math.abs(xOffset);
            initialTransform = scale ? `translate3d(${x}px, 0, 0) scale(0.96)` : `translate3d(${x}px, 0, 0)`;
            visibleTransform = "translate3d(0, 0, 0) scale(1)";
        } else if (direction === "right") {
            const x = Math.abs(xOffset);
            initialTransform = scale ? `translate3d(${x}px, 0, 0) scale(0.96)` : `translate3d(${x}px, 0, 0)`;
            visibleTransform = "translate3d(0, 0, 0) scale(1)";
        } else if (direction === "down") {
            initialTransform = scale ? `translate3d(0, -${yOffset}px, 0) scale(0.96)` : `translate3d(0, -${yOffset}px, 0)`;
            visibleTransform = "translate3d(0, 0, 0) scale(1)";
        } else {
            // "up" (default)
            initialTransform = scale ? `translate3d(0, ${yOffset}px, 0) scale(0.96)` : `translate3d(0, ${yOffset}px, 0)`;
            visibleTransform = "translate3d(0, 0, 0) scale(1)";
        }
    }

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: animComplete ? "none" : (isVisible ? visibleTransform : initialTransform),
                transition: animComplete
                    ? "none"
                    : reducedMotion
                    ? "opacity 0.2s ease"
                    : `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                willChange: animComplete ? "auto" : "opacity, transform"
            }}
        >
            {children}
        </div>
    );
}
