"use client";

import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const skillCategories = [
    {
        title: "Frontend Engineering",
        skills: [
            { name: "React", icon: "logos:react" },
            { name: "Next.js", icon: "logos:nextjs-icon" },
            { name: "TypeScript", icon: "logos:typescript-icon" },
            { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
            { name: "Framer Motion", icon: "logos:framer" },
        ]
    },
    {
        title: "Backend & Systems",
        skills: [
            { name: "Node.js", icon: "logos:nodejs-icon" },
            { name: "Java", icon: "logos:java" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "MongoDB", icon: "logos:mongodb-icon" },
            { name: "Redis", icon: "logos:redis" },
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "AWS", icon: "logos:aws" },
            { name: "Vercel", icon: "logos:vercel-icon" },
            { name: "Linux", icon: "logos:linux-tux" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-[#FFFFFF] relative border-y-2 border-dashed border-slate-300">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.2] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }} />

            <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                
                <div className="mb-16 relative inline-block">
                    {/* Highlighter underline */}
                    <span className="absolute bottom-1 left-0 w-full h-4 bg-amber-200 -z-10 -rotate-1" />
                    <motion.h2 
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl font-black text-slate-900 font-poppins mb-2"
                    >
                        My Skills
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {skillCategories.map((category, idx) => {
                        const isEven = idx % 2 === 0;
                        const containerVariants: Variants = {
                            hidden: { opacity: 0, x: isEven ? -100 : 100 },
                            visible: {
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.6, delay: idx * 0.1, type: "spring", bounce: 0.2, staggerChildren: 0.1, delayChildren: 0.3 }
                            }
                        };
                        const itemVariants: Variants = {
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                        };

                        return (
                            <motion.div
                                key={category.title}
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="bg-white p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] border border-slate-300 relative"
                            >
                                {/* Tape */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-blue-100/50 backdrop-blur-xs border border-blue-200/50 shadow-sm rotate-3" />

                                <h3 className="text-xl font-black text-slate-900 font-poppins mb-6 pb-2 border-b-2 border-slate-100">
                                    {category.title}
                                </h3>
                                
                                <div className="flex flex-col gap-5">
                                    {category.skills.map((skill) => (
                                        <motion.div 
                                            key={skill.name} 
                                            variants={itemVariants}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                                                <Icon icon={skill.icon} className="w-full h-full" />
                                            </div>
                                            <span className="text-lg font-bold text-slate-700">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
