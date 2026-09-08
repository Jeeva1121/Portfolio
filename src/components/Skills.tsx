"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Reveal from "./Reveal";

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
            { name: "Spring Boot", icon: "logos:spring-icon" },
            { name: "PostgreSQL", icon: "logos:postgresql" },
            { name: "MySQL", icon: "logos:mysql-icon" },
            { name: "MongoDB", icon: "logos:mongodb-icon" },
        ]
    },
    {
        title: "Gen AI & Python",
        skills: [
            { name: "Python", icon: "logos:python" },
            { name: "Gen AI / LLMs", icon: "custom", customImage: "/genai-icon.png" },
            { name: "LangChain", icon: "simple-icons:langchain" },
            { name: "Claude Code", icon: "simple-icons:anthropic" },
            { name: "Antigravity", icon: "logos:google-icon" },
        ]
    },
    {
        title: "Tools & Testing",
        skills: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "Docker", icon: "logos:docker-icon" },
            { name: "AWS", icon: "logos:aws" },
            { name: "Vercel", icon: "logos:vercel-icon" },
            { name: "Linux", icon: "logos:linux-tux" },
            { name: "Jest", icon: "logos:jest" },
            { name: "Selenium", icon: "logos:selenium" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pt-14 sm:pt-20 pb-20 sm:pb-24 bg-[#FFFFFF] relative border-y-2 border-dashed border-slate-300 scroll-mt-0" style={{ contain: "layout style" }}>
            {/* Subtle Grid Texture */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[16px_16px]" />

            <div className="container mx-auto px-6 lg:px-10 relative z-10 max-w-[1440px]">
                
                <Reveal className="mb-8 sm:mb-12 lg:mb-16 relative inline-block" direction="left">
                    <span className="absolute bottom-1 left-0 w-full h-4 bg-amber-200 -z-10 -rotate-1" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-poppins mb-2">
                        My Skills
                    </h2>
                </Reveal>

                {/* Animated cards with cascading entrance and interactive hover */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {skillCategories.map((category, idx) => (
                        <Reveal
                            key={category.title}
                            direction={idx < 2 ? "left" : "right"}
                            delay={(idx % 2) * 0.1}
                            className="h-full"
                        >
                            <div className="bg-white p-4.5 sm:p-6 lg:p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-slate-200/90 relative h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.09)] hover:border-slate-300 transition-all duration-300 ease-out group cursor-default">
                                {/* Decorative Tape with micro-rotation on hover */}
                                <div className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-5 sm:h-6 bg-blue-100/90 border border-blue-200 shadow-xs rotate-2 pointer-events-none group-hover:rotate-0 group-hover:scale-105 transition-transform duration-300 ease-out" />

                                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-poppins mb-3.5 sm:mb-5 pb-2.5 sm:pb-3 border-b-2 border-slate-100 flex items-center justify-between">
                                    <span>{category.title}</span>
                                    <span className="text-xs font-semibold text-slate-400 bg-slate-50 px-2.5 py-0.5 rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors duration-200">
                                        {category.skills.length}
                                    </span>
                                </h3>
                                
                                <div className="flex flex-col gap-1.5 sm:gap-2.5 grow">
                                    {category.skills.map((skill) => (
                                        <div 
                                            key={skill.name} 
                                            className="flex items-center gap-3 sm:gap-4 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl hover:bg-slate-50/90 transition-all duration-200 group/item"
                                        >
                                            <div className="w-6.5 h-6.5 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 transition-transform duration-200 ease-out group-hover/item:scale-120 group-hover/item:-translate-y-0.5">
                                                {'customImage' in skill && skill.customImage ? (
                                                    <Image 
                                                        src={skill.customImage} 
                                                        alt={skill.name} 
                                                        width={32} 
                                                        height={32} 
                                                        className="w-full h-full object-contain rounded-md" 
                                                    />
                                                ) : (
                                                    <Icon icon={skill.icon} className="w-full h-full" />
                                                )}
                                            </div>
                                            <span className="text-sm sm:text-base font-bold text-slate-700 group-hover/item:text-blue-600 transition-colors duration-200">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

            </div>
        </section>
    );
}
