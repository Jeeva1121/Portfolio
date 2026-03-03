"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Icon } from "@iconify/react";
import ScrollIcon from "./ScrollIcon";

const skillCategories = [
    {
        title: "Languages & Frameworks",
        icon: <img src="/skills/frontend.png" alt="Languages & Frameworks" className="w-7 h-7 object-contain" />,
        skills: [
            "logos:java",
            "logos:javascript",
            "logos:react",
            "logos:nextjs-icon",
            "logos:nodejs-icon",
            "skill-icons:expressjs-dark",
            "logos:html-5",
            "logos:css-3",
        ],
    },
    {
        title: "Libraries",
        icon: <img src="/skills/library.svg" alt="Libraries" className="w-7 h-7 object-contain" />,
        skills: [
            "logos:react-query-icon",
            "logos:tailwindcss-icon",
            "logos:bootstrap",
            "logos:material-ui",
            "simple-icons:langchain",
        ],
    },
    {
        title: "Database",
        icon: <img src="/skills/database.png" alt="Database" className="w-7 h-7 object-contain" />,
        skills: [
            "logos:mongodb-icon",
            "logos:mysql-icon",
            "logos:prisma",
        ],
    },
    {
        title: "Tools & Platforms",
        icon: <Icon icon="noto:hammer-and-wrench" width="28" height="28" />,
        skills: [
            "logos:git-icon",
            "logos:github-icon",
            "logos:visual-studio-code",
            "logos:postman-icon",
            "logos:vercel-icon",
            "logos:chrome",
        ],
    },
    {
        title: "Concepts",
        icon: <Icon icon="noto:light-bulb" width="28" height="28" />,
        skills: [
            "noto:globe-with-meridians",
            "noto:locked-with-key",
            "noto:package",
        ],
        labels: [
            "RESTful APIs",
            "JWT Auth",
            "OOP",
        ],
    },
    {
        title: "Cloud",
        icon: <img src="/skills/cloud.png" alt="Cloud" className="w-7 h-7 object-contain" />,
        skills: [
            "logos:aws",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center py-24 bg-[#f0f9ff]/50 dark:bg-black relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/2 rounded-full blur-[140px] animate-pulse" />
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Technical Expertise
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {skillCategories.map((cat, idx) => (
                        <GlassCard key={cat.title} delay={idx * 0.08} className="flex flex-col h-full bg-white/95 dark:bg-white/8 shadow-2xl border-white/40 dark:border-white/10 p-6 md:p-8">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 mb-5 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-sm">
                                {cat.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-5 text-slate-900 dark:text-white">{cat.title}</h3>

                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {cat.skills.map((skill, i) => (
                                    <div
                                        key={skill}
                                        className="skill-pill p-2 md:p-3 glass rounded-2xl border-white/20 shadow-md cursor-pointer flex flex-col items-center gap-1.5"
                                    >
                                        <Icon icon={skill} width="24" height="24" className="md:w-8 md:h-8" />
                                        {cat.labels && cat.labels[i] && (
                                            <span className="text-[11px] md:text-xs font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap" style={{ fontFamily: 'var(--font-poppins)' }}>
                                                {cat.labels[i]}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>

            {/* Scroll to next section */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIcon href="#projects" label="Scroll to Projects" />
            </div>
        </section>
    );
}
