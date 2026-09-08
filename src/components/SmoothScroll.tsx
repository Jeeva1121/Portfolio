"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href || !href.startsWith("#")) return;

            // Allow default for empty hash or external
            if (href === "#") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: prefersReducedMotion ? "auto" : "smooth"
                });

                // Update URL without jump
                if (window.history.pushState) {
                    window.history.pushState(null, "", href);
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return null;
}
