"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
import ScrollIcon from "./ScrollIcon";
import Image from "next/image";

interface Cert {
    name: string;
    issuer: string;
    logo?: string;
    imagePath?: string;
    customLogo?: React.ReactNode;
    pdfUrl: string;
}

const certs: Cert[] = [
    {
        name: "Frontend Web Developer",
        issuer: "Udemy",
        logo: "logos:udemy-icon",
        pdfUrl: "https://drive.google.com/file/d/1gyNR0LGL2TZK0lkLkopBg9WaId51SfEs/view"
    },
    {
        name: "OCI AI Foundations",
        issuer: "Oracle University",
        customLogo: (
            <svg viewBox="0 0 24 24" className="w-14 h-14" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ea1b22" d="M10.4 12.46h1.55l-.82-1.32-1.5 2.39h-.69l1.83-2.87c.08-.12.21-.19.36-.19s.28.07.35.18l1.84 2.81h-.69l-.32-.53h-1.57l-.34-.53Zm7.12.53v-2.49h-.58v2.73c0 .08.03.15.08.21.06.05.13.08.22.08h2.65l.34-.53h-2.71ZM7.89 12.55c.57 0 1.02-.46 1.02-1.02s-.46-1.02-1.02-1.02H5.34v3h.58v-2.49h1.93c.27 0 .49.22.49.49s-.22.49-.49.49l-1.64 0 1.74 1.51h.85l-1.17-.98h.27Zm-6.13.98c-.83 0-1.51-.68-1.51-1.51s.68-1.51 1.51-1.51h1.76c.83 0 1.51.68 1.51 1.51s-.68 1.51-1.51 1.51H1.76Zm1.72-.53c.54 0 .98-.44.98-.98s-.44-.98-.98-.98H1.8c-.54 0-.98.44-.98.98s.44.98.98.98h1.68ZM14.53 13.53c-.83 0-1.51-.68-1.51-1.51s.68-1.51 1.51-1.51h2.09l-.34.53h-1.71c-.54 0-.98.44-.98.98s.44.98.98.98h2.1l-.34.53h-1.79Zm7.12-.53c-.45 0-.83-.3-.94-.71h2.49l.34-.53h-2.83c.12-.41.5-.71.94-.71h1.71l.35-.53h-2.06c-.84 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51h1.79l.34-.53h-2.1Z" />
            </svg>
        ),
        pdfUrl: "https://drive.google.com/file/d/1PgP82LdPdiNFr3V8UF0ns2KnGRRMa5Zz/view"
    },
    {
        name: "Java Programming",
        issuer: "Infosys Springboard",
        imagePath: "/certifications/infosys-logo.png",
        pdfUrl: "https://drive.google.com/file/d/1oQTJBOxSu6jdFxMmsdVQLiyLfK6dlbs_/view"
    },
    {
        name: "Software Engineering",
        issuer: "Accenture",
        customLogo: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <path d="m0.66 16.95 13.242-4.926L0.66 6.852V0l22.68 9.132v5.682L0.66 24Z" fill="#c907f1" />
            </svg>
        ),
        pdfUrl: "https://drive.google.com/file/d/1LE1fwcNyFXeC6E4RsSw_8jtiBRMS2rG0/view"
    },
    {
        name: "Java Full Stack",
        issuer: "Wipro",
        imagePath: "/certifications/wipro-brand.png",
        pdfUrl: "https://drive.google.com/file/d/1i10fIVx8Gn90hzNTY00IqIXx0Z60RgVB/view"
    },
    {
        name: "AI Agents Intensive",
        issuer: "Google & Kaggle",
        logo: "logos:google-icon",
        pdfUrl: "https://drive.google.com/file/d/1CsUkx3g3xD_gJAl0Unsd_OUfGnguo80n/view"
    },
];

export default function Certifications() {

    return (
        <section id="certifications" className="min-h-screen py-16 md:py-24 bg-slate-50/50 dark:bg-black relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-emerald-500/5 dark:bg-emerald-500/2 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-[120px] animate-pulse" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white tracking-tight"
                    >
                        Professional Certifications
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <div className="relative group/marquee pause-on-hover py-4 md:py-10">
                    <div
                        className="animate-marquee flex gap-6 md:gap-8 whitespace-nowrap will-change-transform scrollbar-hide"
                        style={{ "--duration": "25s", touchAction: 'pan-y' } as any}
                    >
                        {[...certs, ...certs, ...certs].map((cert, idx) => (
                            <div
                                key={idx}
                                className="inline-flex flex-col items-center glass-card p-6 md:p-8 min-w-[260px] md:min-w-[320px] shadow-2xl bg-white/80 dark:bg-white/5 border border-white/20 transition-all duration-500 hover:scale-[1.03]"
                            >
                                <div className="w-[72px] h-[72px] flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110">
                                    {cert.imagePath ? (
                                        <div className="relative w-full h-full p-4 bg-white/50 dark:bg-white rounded-full shadow-sm border-[0.5px] border-slate-100 dark:border-white/20">
                                            <Image
                                                src={cert.imagePath}
                                                alt={cert.issuer}
                                                fill
                                                className="object-contain p-4"
                                            />
                                        </div>
                                    ) : cert.customLogo ? (
                                        <div className="p-2 w-full h-full flex items-center justify-center bg-white/50 dark:bg-white rounded-full backdrop-blur-sm shadow-sm border-[0.5px] border-slate-100 dark:border-white/20">
                                            {cert.customLogo}
                                        </div>
                                    ) : (
                                        <div className="p-2 w-full h-full flex items-center justify-center bg-white/50 dark:bg-white rounded-full backdrop-blur-sm shadow-sm border-[0.5px] border-slate-100 dark:border-white/20">
                                            <Icon icon={cert.logo!} width="36" height="36" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold mb-1 text-slate-900 dark:text-white text-center whitespace-normal leading-snug h-14 flex items-center justify-center font-sans tracking-tight">
                                    {cert.name}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-5 text-center text-sm font-sans">
                                    {cert.issuer}
                                </p>
                                <a
                                    href={cert.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2.5 glass rounded-xl text-sm font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-all shadow-lg border border-white/20 group/btn"
                                >
                                    <span>View Certificate</span>
                                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Icon to Contact */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIcon href="#contact" label="Scroll to Contact" />
            </div>
        </section >
    );
}
