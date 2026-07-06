"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { useRef, useState, useEffect } from "react";

const certs = [
    {
        name: "OCI AI Foundations",
        issuer: "Oracle University",
        link: "https://drive.google.com/file/d/1PgP82LdPdiNFr3V8UF0ns2KnGRRMa5Zz/view",
        icon: "logos:oracle"
    },
    {
        name: "AI Agents Intensive",
        issuer: "Google & Kaggle",
        link: "https://drive.google.com/file/d/1CsUkx3g3xD_gJAl0Unsd_OUfGnguo80n/view",
        icon: "logos:google-icon"
    },
    {
        name: "Java Programming",
        issuer: "Infosys Springboard",
        link: "https://drive.google.com/file/d/1oQTJBOxSu6jdFxMmsdVQLiyLfK6dlbs_/view",
        icon: "https://cdn.brandfetch.io/id2jVuQy_9/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1676271043735"
    },
    {
        name: "Software Engineering",
        issuer: "Accenture",
        link: "https://drive.google.com/file/d/1LE1fwcNyFXeC6E4RsSw_8jtiBRMS2rG0/view",
        icon: "simple-icons:accenture"
    },
    {
        name: "Frontend Web Developer",
        issuer: "Udemy",
        link: "https://drive.google.com/file/d/1gyNR0LGL2TZK0lkLkopBg9WaId51SfEs/view",
        icon: "logos:udemy-icon"
    },
    {
        name: "TalentNext Program",
        issuer: "Wipro",
        link: "https://drive.google.com/file/d/1i10fIVx8Gn90hzNTY00IqIXx0Z60RgVB/view",
        icon: "simple-icons:wipro"
    },
    {
        name: "AWS Cloud Essentials",
        issuer: "Amazon Web Services",
        link: "#",
        icon: "logos:aws"
    },
    {
        name: "Extended Reality Technology",
        issuer: "NPTEL",
        link: "https://drive.google.com/file/d/1xHLKNcSgfT55pkin0NfTvaXHnsGQY0TV/view",
        icon: "https://cdn.brandfetch.io/id_7zyHL2W/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1781744208280"
    },
];

export default function Certifications() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const checkScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (maxScroll > 0) {
            setProgress(el.scrollLeft / maxScroll);
        } else {
            setProgress(0);
        }
    };

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        checkScroll();
        // Set a small timeout to allow layout to settle before initial check
        setTimeout(checkScroll, 100);
        el.addEventListener("scroll", checkScroll, { passive: true });
        window.addEventListener("resize", checkScroll);
        return () => {
            el.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scrollToDot = (idx: number) => {
        const el = scrollRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const targetScroll = (idx / (certs.length - 1)) * maxScroll;
        el.scrollTo({ left: targetScroll, behavior: "smooth" });
    };

    return (
        <section className="py-32 bg-[#635BFF] relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white border border-white/30 font-semibold text-sm mb-6"
                    >
                        <Icon icon="lucide:award" className="w-4 h-4" /> Achievements
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins"
                    >
                        Professional Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-16 h-1 bg-[#D3F85A] rounded-full mx-auto"
                    />
                </div>

                {/* Carousel Container */}
                <div className="relative">

                    {/* Removed fade overlays as requested */}

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-6 pt-2 px-2 scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {certs.map((cert, idx) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="shrink-0"
                            >
                                <div className="bg-white rounded-[2.5rem] w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] border border-slate-900/20 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-all duration-300 group hover:-translate-y-1">
                                    
                                    {/* Logo */}
                                    <div className="w-16 h-16 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                        {cert.icon.startsWith('http') ? (
                                            <img src={cert.icon} alt={cert.issuer} className="w-10 h-10 object-contain mix-blend-multiply" />
                                        ) : (
                                            <Icon icon={cert.icon} className="w-8 h-8 text-slate-700" />
                                        )}
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-lg font-bold text-slate-900 font-poppins mb-2 leading-snug">
                                        {cert.name}
                                    </h3>

                                    {/* Issuer */}
                                    <p className="text-sm text-slate-500 font-medium mb-6">
                                        {cert.issuer}
                                    </p>

                                    {/* View Certificate Button */}
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-500 text-blue-600 font-semibold text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 group-hover:border-blue-600"
                                    >
                                        View Certificate
                                        <Icon icon="lucide:external-link" className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sliding Indicator (Dots) */}
                    <div className="flex justify-center items-center gap-3 mt-10">
                        {certs.map((_, idx) => {
                            // Calculate which dot is currently active based on progress
                            const activeIdx = Math.round(progress * (certs.length - 1));
                            const isActive = activeIdx === idx;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => scrollToDot(idx)}
                                    aria-label={`Go to slide ${idx + 1}`}
                                    className={`h-2.5 rounded-full transition-all duration-300 ${
                                        isActive 
                                            ? "w-8 bg-[#D3F85A]" 
                                            : "w-2.5 bg-white/30 hover:bg-white/50"
                                    }`}
                                />
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
