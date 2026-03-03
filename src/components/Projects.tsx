"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { ExternalLink, Github, Code2 } from "lucide-react";
import ScrollIcon from "./ScrollIcon";
import Image from "next/image";
import { Icon } from "@iconify/react";

const projects = [
    {
        title: "Hack@JIT 1.0",
        desc: "A full-stack hackathon management platform built for a real 24-hour college event — featuring team registration, UPI payments, admin dashboard with live stats, and automated email notifications.",
        tech: ["React", "Node.js", "Firebase", "Nodemailer"],
        github: "https://github.com/hackjit01-hue/hackathon-hack-jit",
        live: "https://hackathon-hack-jit-1-0.vercel.app/",
        image: "/projects/hackjit.png",
        imageClass: "",
        color: "from-blue-600/20 to-violet-600/20"
    },
    {
        title: "WebCraft",
        desc: "A high-performance luxury agency landing page with a GPU-accelerated animation pipeline and 3D interactive galleries. Optimized for 60fps across all devices.",
        tech: ["Next.js 14", "Tailwind", "Framer Motion", "OGL"],
        github: "https://github.com/Jeeva1121/Requirement-Page",
        live: "https://requirement-page.vercel.app/",
        image: "/projects/webcraft.png",
        imageClass: "",
        color: "from-emerald-600/20 to-teal-600/20"
    },
    {
        title: "Lumina AI",
        desc: "A stateless RAG system using JIT context injection — documents are parsed on-the-fly and streamed to Groq's Llama 3 70B via SSE, with zero vector database overhead.",
        tech: ["Next.js", "React 19", "Groq", "Vercel"],
        github: "https://github.com/Jeeva1121/Portfolio",
        live: "https://rag-app-mu.vercel.app/",
        image: "/projects/lumina-ai.png",
        imageClass: "brightness-110 scale-90 object-contain",
        color: "from-orange-600/20 to-amber-600/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen flex items-center py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {projects.map((project, idx) => (
                        <GlassCard
                            key={project.title}
                            delay={idx * 0.1}
                            className="relative flex flex-col rounded-4xl! shadow-xl hover:shadow-2xl bg-white/80 dark:bg-white/5"
                        >
                            <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-3xl! mb-6 shadow-inner">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={idx === 0}
                                    className={`object-cover transition-transform duration-700 group-hover:scale-115 ${project.imageClass}`}
                                />
                            </div>

                            <div className="px-2 grow flex flex-col">
                                <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-xs font-semibold px-3 py-1 glass rounded-full border-white/10 uppercase tracking-wider">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pb-4">
                                    <a href={project.github} className="glass-button p-2! rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-500">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.live} className="glass-button p-2! rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-500">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </motion.div>
            </div>

            {/* Scroll to next section */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <ScrollIcon href="#certifications" label="Scroll to Certifications" />
            </div>
        </section>
    );
}
