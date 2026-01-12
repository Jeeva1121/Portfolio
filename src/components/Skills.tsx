"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { Icon } from "@iconify/react";

import { Layout, Server, Database, Cloud } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Layout className="w-6 h-6 text-white" />,
        skills: ["logos:react", "logos:nextjs-icon", "logos:typescript-icon", "logos:tailwindcss-icon", "logos:redux", "logos:framer"],
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Backend",
        icon: <Server className="w-6 h-6 text-white" />,
        skills: ["logos:nodejs-icon", "logos:nestjs", "logos:graphql", "logos:python", "logos:fastapi"],
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "Database",
        icon: <Database className="w-6 h-6 text-white" />,
        skills: ["logos:postgresql", "logos:prisma", "logos:mongodb-icon", "logos:redis", "logos:pinecone-icon"],
        color: "from-violet-500 to-purple-500"
    },
    {
        title: "Cloud/DevOps",
        icon: <Cloud className="w-6 h-6 text-white" />,
        skills: ["logos:aws", "logos:docker-icon", "logos:kubernetes", "logos:github-actions", "logos:vercel-icon"],
        color: "from-orange-500 to-amber-500"
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-50/50 dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Technical Expertise
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {skillCategories.map((cat, idx) => (
                        <GlassCard key={cat.title} delay={idx * 0.1} className="flex flex-col h-full bg-white/80 dark:bg-white/5 shadow-2xl">
                            <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${cat.color} mb-6 flex items-center justify-center shadow-lg border-white/20`}>
                                {cat.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{cat.title}</h3>

                            <div className="flex flex-wrap gap-4 mt-auto">
                                {cat.skills.map((skill) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="p-3 glass rounded-2xl border-white/20 shadow-md cursor-pointer"
                                    >
                                        <Icon icon={skill} width="32" height="32" />
                                    </motion.div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
