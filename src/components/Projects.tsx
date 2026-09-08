"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "./Reveal";

const projects = [
    {
        num: "01",
        tabLabel: "+ PROJECT 01",
        title: "Hack@JIT 1.0",
        date: "MAR 2026",
        category: "Full Stack Platform",
        desc: "A comprehensive platform for hosting college hackathons, featuring automated team registration, real-time leaderboard tracking, and an intuitive administrative portal.",
        tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
        links: {
            github: "https://github.com/Jeeva1121/Hackathon---Hack-JIT-1.0",
            live: "https://hackathon-hack-jit-1-0.vercel.app/"
        },
        image: "/projects/hackjit.png",
        theme: {
            folderBg: "bg-[#18181B]",
            folderBorder: "border-slate-800/80",
            tabActiveBg: "bg-[#2563EB]",
            tabActiveText: "text-white",
            tabInactiveBg: "bg-[#27272A]",
            tabInactiveText: "text-slate-400",
            textColor: "text-white",
            mutedTextColor: "text-slate-300",
            accentColor: "text-[#3B82F6]",
            linkBorder: "border-white/40 hover:border-white",
            badgeBg: "bg-white/10 text-white border-white/10",
            tapeBorder: "border-white/60 bg-white/40"
        }
    },
    {
        num: "02",
        tabLabel: "+ PROJECT 02",
        title: "WebCraft 3D",
        date: "JAN 2026",
        category: "GPU & Interactive WebGL",
        desc: "A high-performance interactive 3D web experience built with custom GLSL shaders, procedural particle systems, and buttery-smooth physics simulations.",
        tech: ["Next.js 14", "Framer Motion", "OGL", "GLSL Shaders"],
        links: {
            github: "https://github.com/Jeeva1121/Requirement-Page",
            live: "https://requirement-page.vercel.app/"
        },
        image: "/projects/webcraft.png",
        theme: {
            folderBg: "bg-[#FFB92E]",
            folderBorder: "border-amber-400/80",
            tabActiveBg: "bg-slate-950",
            tabActiveText: "text-white",
            tabInactiveBg: "bg-amber-400/50",
            tabInactiveText: "text-slate-900",
            textColor: "text-slate-950",
            mutedTextColor: "text-slate-900/90",
            accentColor: "text-slate-950",
            linkBorder: "border-slate-950/40 hover:border-slate-950",
            badgeBg: "bg-slate-950/10 text-slate-950 border-slate-950/15",
            tapeBorder: "border-white/80 bg-white/60"
        }
    },
    {
        num: "03",
        tabLabel: "+ PROJECT 03",
        title: "Lumina AI",
        date: "NOV 2025",
        category: "Stateless RAG System",
        desc: "An intelligent, context-aware AI search and assistant platform leveraging high-speed vector embeddings, Pinecone indexing, and streaming LLM responses.",
        tech: ["Next.js", "React 19", "Pinecone", "Tailwind CSS"],
        links: {
            github: "https://github.com/Jeeva1121/Rag-App",
            live: "https://rag-app-mu.vercel.app/"
        },
        image: "/projects/lumina-ai.png",
        theme: {
            folderBg: "bg-[#0F766E]",
            folderBorder: "border-teal-600/80",
            tabActiveBg: "bg-[#14B8A6]",
            tabActiveText: "text-white",
            tabInactiveBg: "bg-teal-800",
            tabInactiveText: "text-teal-200",
            textColor: "text-white",
            mutedTextColor: "text-teal-50",
            accentColor: "text-[#5EEAD4]",
            linkBorder: "border-white/40 hover:border-white",
            badgeBg: "bg-white/10 text-white border-white/10",
            tapeBorder: "border-white/60 bg-white/40"
        }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="pt-12 sm:pt-16 pb-24 sm:pb-32 bg-[#F8FAFC] relative overflow-hidden scroll-mt-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="mb-16 sm:mb-20 text-center sm:text-left">
                    <Reveal delay={0}>
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-800 font-bold text-xs uppercase tracking-wider mb-5 shadow-xs font-poppins">
                            <Icon icon="lucide:folder-open" className="w-4 h-4 text-slate-900" />
                            <span>Featured Work</span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.06}>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 font-poppins tracking-tight leading-tight">
                            Selected Projects
                        </h2>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mt-4 font-normal font-poppins leading-relaxed">
                            A curated collection of full-stack platforms, 3D web experiments, and AI systems engineered with clean design and robust performance.
                        </p>
                    </Reveal>
                </div>

                {/* Stacked File Folder Dossier Cards */}
                <div className="space-y-8 sm:space-y-16 lg:space-y-20">
                    {projects.map((proj, idx) => {
                        const { theme } = proj;

                        return (
                            <Reveal key={proj.title} delay={idx * 0.1}>
                                <div className="relative group">
                                    
                                    {/* Top Folder Tab Bar with Angled Chamfer Cut */}
                                    <div className="flex items-end pl-2 sm:pl-4 -mb-px relative z-20">
                                        
                                        {/* Active Project Tab */}
                                        <div
                                            className={`${theme.tabActiveBg} ${theme.tabActiveText} px-4 sm:px-8 py-1.5 sm:py-3 font-mono text-[11px] sm:text-sm font-bold tracking-wider rounded-tl-lg sm:rounded-tl-xl transition-transform duration-200 select-none shadow-xs`}
                                            style={{
                                                clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)"
                                            }}
                                        >
                                            {proj.tabLabel}
                                        </div>

                                        {/* Adjacent Tab Index Indicator */}
                                        <div
                                            className={`${theme.folderBg} opacity-80 ${theme.textColor} px-5 sm:px-7 py-2 font-mono text-[11px] sm:text-xs font-semibold tracking-wider rounded-tl-lg -ml-2 select-none hidden sm:block`}
                                            style={{
                                                clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)"
                                            }}
                                        >
                                            {proj.category}
                                        </div>
                                    </div>

                                    {/* Main Folder Dossier Body - Optimized for fluid scrolling */}
                                    <div
                                        className={`${theme.folderBg} ${theme.folderBorder} border rounded-2xl sm:rounded-[2rem] rounded-tl-none p-4 sm:p-8 lg:p-12 shadow-md sm:shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)] relative overflow-hidden transition-all duration-300 font-poppins transform-gpu`}
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.15fr] gap-4 sm:gap-10 lg:gap-12 items-center">
                                            
                                            {/* Left Column: Project Details */}
                                            <div className="flex flex-col justify-between h-full">
                                                <div>
                                                    {/* Date & Category Tag */}
                                                    <div className="flex items-center gap-2 mb-1.5 sm:mb-3">
                                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-current opacity-80" />
                                                        <span className={`text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider ${theme.textColor} opacity-80`}>
                                                             {proj.date}
                                                        </span>
                                                        <span className={`${theme.textColor} opacity-40`}>/</span>
                                                        <span className={`text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider ${theme.textColor} opacity-80`}>
                                                            {proj.category}
                                                        </span>
                                                    </div>

                                                    {/* Project Title */}
                                                    <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-black ${theme.textColor} tracking-tight leading-none mb-2 sm:mb-4`}>
                                                        {proj.title}
                                                    </h3>

                                                    {/* Description */}
                                                    <p className={`text-xs sm:text-base ${theme.mutedTextColor} leading-relaxed font-normal mb-3.5 sm:mb-6`}>
                                                        {proj.desc}
                                                    </p>

                                                    {/* Tech Stack Chips */}
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-8">
                                                        {proj.tech.map((t) => (
                                                             <span
                                                                key={t}
                                                                className={`px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold ${theme.badgeBg} border`}
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Action Links */}
                                                <div className="flex items-center gap-5 sm:gap-6 pt-3 sm:pt-4 border-t border-current/15">
                                                    <a
                                                        href={proj.links.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.textColor} border-b-2 ${theme.linkBorder} pb-1 transition-all duration-200 group/link`}
                                                    >
                                                        <span>View Project</span>
                                                        <Icon icon="lucide:arrow-up-right" className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                                    </a>

                                                    <a
                                                        href={proj.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider ${theme.textColor} opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-current pb-1 transition-all duration-200`}
                                                    >
                                                        <Icon icon="mdi:github" className="w-4 h-4" />
                                                        <span>Source Code</span>
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Right Column: Taped Photograph / Mockup Preview */}
                                            <div className="relative pt-1 sm:pt-3">
                                                
                                                {/* Left Scotch Tape Strip */}
                                                <div
                                                    className={`absolute -top-1 left-6 sm:left-12 w-10 sm:w-16 h-4 sm:h-6 ${theme.tapeBorder} shadow-2xs -rotate-6 z-30 pointer-events-none rounded-[1px]`}
                                                    style={{ transform: "rotate(-6deg)" }}
                                                />

                                                {/* Right Scotch Tape Strip */}
                                                <div
                                                    className={`absolute -top-1 right-6 sm:right-12 w-10 sm:w-16 h-4 sm:h-6 ${theme.tapeBorder} shadow-2xs rotate-6 z-30 pointer-events-none rounded-[1px]`}
                                                    style={{ transform: "rotate(6deg)" }}
                                                />

                                                {/* Framed Photo Mockup Container */}
                                                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black/20 border sm:border-2 border-white/20 shadow-md sm:shadow-xl group-hover:scale-[1.01] transition-transform duration-500">
                                                    <div className="aspect-16/9 sm:aspect-16/10 max-h-[195px] sm:max-h-none relative w-full overflow-hidden">
                                                        <Image
                                                            src={proj.image}
                                                            alt={proj.title}
                                                            fill
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                                                            quality={75}
                                                            loading="lazy"
                                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                                        />
                                                    </div>

                                                    {/* Subtle Inner Glass Vignette */}
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
