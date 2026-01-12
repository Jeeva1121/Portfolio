"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";
import { Icon } from "@iconify/react";

const certs = [
    { name: "AWS Solutions Architect", issuer: "Amazon Web Services", logo: "logos:aws" },
    { name: "Meta Front-End Developer", issuer: "Meta", logo: "logos:meta-icon" },
    { name: "Google Cloud Engineer", issuer: "Google Cloud", logo: "logos:google-cloud" },
    { name: "Kubernetes Administrator", issuer: "CNCF", logo: "logos:kubernetes" },
    { name: "Redis Certified Developer", issuer: "Redis Labs", logo: "logos:redis" },
];

export default function Certifications() {
    return (
        <section className="py-24 bg-slate-50/50 dark:bg-black overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Certifications
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-violet-600 rounded-full" />
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="flex gap-8 whitespace-nowrap"
                    >
                        {[...certs, ...certs].map((cert, idx) => (
                            <div
                                key={idx}
                                className="inline-flex flex-col items-center glass-card p-8 min-w-[320px] shadow-2xl bg-slate-50/80 dark:bg-white/5"
                            >
                                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-6 shadow-inner border-white/20">
                                    <Icon icon={cert.logo} width="40" height="40" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{cert.name}</h3>
                                <p className="text-slate-600 dark:text-slate-300 font-medium">{cert.issuer}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
