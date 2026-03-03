"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Icon } from "@iconify/react";
import ScrollIcon from "./ScrollIcon";

const skillCategories = [
    {
        title: "Languages & Frameworks",
        icon: <img src="/skills/frontend.png" alt="Languages & Frameworks" className="w-8 h-8 object-contain" />,
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
        icon: <img src="/skills/library.svg" alt="Libraries" className="w-8 h-8 object-contain" />,
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
        icon: <img src="/skills/database.png" alt="Database" className="w-8 h-8 object-contain" />,
        skills: [
            "logos:mongodb-icon",
            "logos:mysql-icon",
            "logos:prisma",
        ],
    },
    {
        title: "Tools & Platforms",
        icon: <Icon icon="noto:hammer-and-wrench" width="32" height="32" />,
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
        icon: <Icon icon="noto:light-bulb" width="32" height="32" />,
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
        title: "AI & Cloud",
        icon: <img src="/skills/cloud.png" alt="AI & Cloud" className="w-8 h-8 object-contain" />,
        skills: [
            "logos:aws",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="min-h-screen flex items-center py-24 bg-slate-50/50 dark:bg-black relative">
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
                        <GlassCard key={cat.title} delay={idx * 0.08} className="flex flex-col h-full bg-white/80 dark:bg-white/5 shadow-2xl">
                            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 mb-5 flex items-center justify-center border border-slate-200 dark:border-white/10 shadow-sm">
                                {cat.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-5 text-slate-900 dark:text-white">{cat.title}</h3>

                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill, i) => (
                                    <div
                                        key={skill}
                                        className="skill-pill p-3 glass rounded-2xl border-white/20 shadow-md cursor-pointer flex flex-col items-center gap-1.5"
                                    >
                                        <Icon icon={skill} width="32" height="32" />
                                        {cat.labels && cat.labels[i] && (
                                            <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 whitespace-nowrap" style={{ fontFamily: 'var(--font-poppins)' }}>
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
