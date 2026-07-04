"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon } from "@iconify/react";

const projects = [
    {
        title: "Hack@JIT 1.0",
        category: "Full Stack Platform",
        desc: "A comprehensive platform for hosting hackathons, complete with team registration, admin dashboard, and real-time leaderboards.",
        tech: ["React", "Node.js", "Firebase", "Tailwind"],
        links: { github: "https://github.com/Jeeva1121/Hackathon---Hack-JIT-1.0", live: "https://hackathon-hack-jit-1-0.vercel.app/" },
        image: "/projects/hackjit.png",
    },
    {
        title: "WebCraft",
        category: "GPU Web Application",
        desc: "A highly-interactive 3D web application utilizing WebGL and custom shaders to deliver stunning visual effects.",
        tech: ["Next.js 14", "Framer Motion", "OGL", "GLSL"],
        links: { github: "https://github.com/Jeeva1121/Requirement-Page", live: "https://requirement-page.vercel.app/" },
        image: "/projects/webcraft.png",
    },
    {
        title: "Lumina AI",
        category: "Stateless System",
        desc: "An intelligent, context-aware assistant leveraging vector embeddings for high-speed retrieval and generation.",
        tech: ["Next.js", "React 19", "Pinecone"],
        links: { github: "https://github.com/Jeeva1121/Rag-App", live: "https://rag-app-mu.vercel.app/" },
        image: "/projects/lumina-ai.png",
    }
];

import { useState } from "react";

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section id="projects" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-6"
                    >
                        <Icon icon="lucide:folder-code" className="w-4 h-4" /> Portfolio
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins"
                    >
                        Selected Work
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-slate-500 text-lg max-w-2xl mx-auto"
                    >
                        A collection of my recent projects, showcasing my expertise in building scalable, modern, and user-centric web applications.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid">
                    {projects.map((project, idx) => {
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden transition-all duration-300 relative hover:scale-[1.02] hover:shadow-[0_30px_60px_rgb(0,0,0,0.15)] z-10 hover:z-20 md:group-hover/grid:not-[&:hover]:scale-95 md:group-hover/grid:not-[&:hover]:opacity-50"
                            >
                            {/* Top Image Section */}
                            <div className="w-full aspect-video relative overflow-hidden bg-slate-100">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>

                            {/* Content Section */}
                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-bold tracking-wider text-green-600 bg-green-50 px-3 py-1.5 rounded-full uppercase border border-green-100">
                                        {project.category}
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors font-poppins">
                                    {project.title}
                                </h3>
                                
                                <p className="text-slate-600 mb-8 text-sm leading-relaxed grow">
                                    {project.desc}
                                </p>
                                
                                <div className="mt-auto space-y-6">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors flex items-center gap-2 text-sm font-semibold">
                                            <Icon icon="mdi:github" className="w-5 h-5" /> Code
                                        </a>
                                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-colors flex items-center gap-1.5 text-sm font-bold group/link">
                                            Live Demo <Icon icon="lucide:arrow-up-right" className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
}
