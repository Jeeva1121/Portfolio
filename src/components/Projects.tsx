"use client";

import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "AI Infrastructure Platform",
        desc: "A high-concurrency platform for orchestrating LLM workloads. Built with Next.js, FastAPI, and Kubernetes.",
        tech: ["Next.js", "Python", "Docker", "Redis"],
        github: "#",
        live: "#",
        image: "/projects/ai-platform.png",
        color: "from-blue-600/20 to-violet-600/20"
    },
    {
        title: "Real-time Fintech Dashboard",
        desc: "Streaming financial data visualization with sub-50ms latency. Leveraging WebSockets and Go.",
        tech: ["React", "Go", "PostgreSQL", "Kafka"],
        github: "#",
        live: "#",
        image: "/projects/fintech.png",
        color: "from-emerald-600/20 to-teal-600/20"
    },
    {
        title: "Distributed RAG Engine",
        desc: "Vector-search based knowledge retrieval system using Pinecone and LangChain.",
        tech: ["TypeScript", "NestJS", "Pinecone", "OpenAI"],
        github: "#",
        live: "#",
        image: "/projects/rag-engine.png",
        color: "from-orange-600/20 to-amber-600/20"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 font-display text-slate-900 dark:text-white"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, idx) => (
                        <GlassCard
                            key={project.title}
                            delay={idx * 0.1}
                            className="relative flex flex-col rounded-4xl! shadow-xl hover:shadow-2xl bg-white/80 dark:bg-white/5"
                        >
                            <div className="relative h-56 w-full overflow-hidden rounded-3xl! mb-6">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
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
        </section>
    );
}
