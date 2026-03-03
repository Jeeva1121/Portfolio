"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { GraduationCap, Briefcase } from "lucide-react";
import ScrollIcon from "./ScrollIcon";
import { Icon } from "@iconify/react";

export default function About() {
    return (
        <section id="about" className="min-h-screen flex items-center py-24 bg-white dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-display"
                    >
                        About Me
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-16 font-sans border-l-4 border-blue-600 pl-6 italic">
                            Web and Software Developer with strong expertise in front-end development and Java. Experienced in building responsive, user-centric web applications using modern technologies. Driven by problem-solving, clean code practices, and continuous learning to deliver scalable and maintainable solutions.
                        </p>

                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold flex items-center gap-4 text-slate-900 dark:text-white">
                                <span className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800/30">
                                    <Icon icon="noto:graduation-cap" className="w-9 h-9" />
                                </span>
                                Education
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        school: "Jansons Institute of Technology",
                                        period: "2022 - 2026",
                                        degree: "B.E. (Hons) Computer Science and Engineering",
                                        status: "8.01 CGPA",
                                        highlights: "Academic Excellence in Core Subjects"
                                    },
                                    {
                                        school: "SSM Lakshmi Ammal Mat.Hr.Sec.School",
                                        period: "2021 - 2022",
                                        degree: "High School Education",
                                        status: "78 %",
                                        highlights: "Science Stream with Mathematics"
                                    }
                                ].map((edu, i) => (
                                    <div key={i} className="group/edu">
                                        <GlassCard className="p-6 md:p-8 border-white/10 group-hover/edu:border-blue-500/30 group-hover/edu:translate-x-1 transition-all duration-500" delay={0.1 * i}>
                                            <div className="flex flex-wrap items-start justify-between gap-4">
                                                <div>
                                                    <h4 className="text-xl font-extrabold text-slate-950 dark:text-white mb-1">
                                                        {edu.school}
                                                    </h4>
                                                    <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                                                        {edu.degree}
                                                    </p>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium italic">
                                                        {edu.highlights}
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2 border border-blue-200 dark:border-blue-800/50 shadow-xs">
                                                        {edu.period}
                                                    </span>
                                                    <br />
                                                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100/50 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                                                        {edu.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-10">
                        <h3 className="text-2xl font-bold flex items-center gap-4 text-slate-900 dark:text-white">
                            <span className="p-1.5 bg-violet-50 dark:bg-violet-900/20 rounded-xl shadow-sm border border-violet-100 dark:border-violet-800/30">
                                <Icon icon="noto:briefcase" className="w-9 h-9" />
                            </span>
                            Professional Journey
                        </h3>

                        <div className="space-y-6">
                            {[
                                {
                                    company: "smaaple info solutions",
                                    role: "Web Developer Intern",
                                    duration: "Feb 2024",
                                    sub: "1 Month Intensive Internship"
                                },
                                {
                                    company: "SUVID Solutions Private Limited",
                                    role: "Full Stack Web Developer Intern",
                                    duration: "Jun 2025 – Nov 2025",
                                    sub: "Full-cycle Development & API Integration"
                                }
                            ].map((exp, i) => (
                                <div key={i} className="group/exp">
                                    <GlassCard className="p-6 md:p-8 border-white/10 group-hover/exp:border-blue-500/30 group-hover/exp:translate-x-1 transition-all duration-500" delay={0.1 * i}>
                                        <div className="flex flex-wrap items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl font-extrabold text-slate-950 dark:text-white mb-1">
                                                    {exp.role}
                                                </h4>
                                                <p className="text-blue-600 dark:text-blue-400 font-bold text-lg mb-2 capitalize">
                                                    {exp.company}
                                                </p>
                                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium italic">
                                                    {exp.sub}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-block px-4 py-1.5 bg-violet-50 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-violet-200 dark:border-violet-800/50 shadow-xs">
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to next section */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
                <ScrollIcon href="#skills" label="Scroll to Skills" />
            </div>
        </section>
    );
}
