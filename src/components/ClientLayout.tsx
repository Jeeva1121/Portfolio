"use client";

import { useEffect, useRef } from "react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<any>(null);

    useEffect(() => {
        const initLenis = async () => {
            const Lenis = (await import("lenis")).default;

            const lenis = new Lenis({
                duration: 1.2,
                easing: (t) => (t === 1 ? 1 : 1 - (2 ** (-10 * t))),
                orientation: "vertical",
                gestureOrientation: "vertical",
                smoothWheel: true,
                wheelMultiplier: 1,
                infinite: false,
            });

            lenisRef.current = lenis;

            const raf = (time: number) => {
                if (lenisRef.current) {
                    lenisRef.current.raf(time);
                    requestAnimationFrame(raf);
                }
            };

            requestAnimationFrame(raf);

            const handleLinkClick = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const link = target.closest("a");

                if (link && link.hash && link.origin === window.location.origin) {
                    const section = document.querySelector(link.hash) as HTMLElement | null;
                    if (section) {
                        e.preventDefault();
                        lenis.scrollTo(section, {
                            offset: 0,
                            duration: 1.5,
                        });
                    }
                }
            };

            document.addEventListener("click", handleLinkClick);

            return () => {
                lenis.destroy();
                lenisRef.current = null;
                document.removeEventListener("click", handleLinkClick);
            };
        };

        initLenis();
    }, []);

    return <>{children}</>;
}
