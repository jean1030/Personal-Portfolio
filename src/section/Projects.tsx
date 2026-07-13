import React from 'react';
import { Link } from 'react-router-dom';
import SpeakSmart from '../assets/SpeakSmart.png';
import TriVoca from '../assets/TriVoca.png';
import CRM from '../assets/CRM.png';
import Quiztopia from '../assets/Quiztopia.png';

const projectsInfo = [
    {
        title: "Customer Relationship Management System",
        description: "A web-based system designed to manage customer data, streamline interactions, and support efficient business operations.",
        image: CRM,
        technology: ["React", "Tailwind CSS", "TypeScript", "Supabase", "Vite", "Shadcn UI"],
        year: "February - March 2026",
        company: "HSI",
        link: "/projects/crm"
    },
    {
        title: "TriVoca Entry Level: Language Proficiency Exam Simulator",
        description: "A mobile learning app that helps users prepare for JLPT-N5, HSK-1, and TOPIK-I through interactive exam simulations and speech practice features.",
        image: TriVoca,
        technology: ["React Native", "Tailwind CSS", "TypeScript", "Firebase", "Expo", "node.js"],
        year: "August - November 2025",
        company: "Capstone",
        link: "/projects/trivoca"
    },
    {
        title: "Quiztopia",
        description: "A web-based application that enables users to explore and test their knowledge of countries through interactive quiz modes such as flag identification, landmark recognition, and 4 Pics 1 Word, offering an engaging and educational experience.",
        image: Quiztopia,
        technology: ["Python (Django)", "HTML", "Tailwind CSS", "SQLite", "JavaScript"],
        year: "October - November 2025",
        company: "School Project",
        link: "/projects/quiztopia"
    },
    /*{
        title: "Speak Smart Academy Learning Management System",
        description: "An interactive platform for managing online courses and assignments, with features that support both students and instructors.",
        image: SpeakSmart,
        technology: ["HTML", "Tailwind CSS", "JavaScript", "PHP", "MySQL"],
        year: "June - July 2025",
        company: "School Project",
        link: "/projects/speak-smart"
    }*/
];

export default function Projects() {
    return (
        <section id='projects' className="scroll-mt-28 pb-1 lg:pt-26 pt-20">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] text-center bg-clip-text text-transparent">Real-world Applications</p>
                </div>

                <h2 className="font-[calistoga] text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
                <p className="text-center text-white/60 mt-4 md:text-lg mx-3 md:mx-0">A few projects highlighting my work and technical skills.</p>

                <div className="flex flex-col gap-14 mt-10 md:mt-20">
                    {projectsInfo.map((project, index) => (
                        <div key={project.title} className="bg-gray-800 lg:mx-1 mx-5 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none lg:sticky lg:top-[calc(64px+var(--offset))]" style={{ ['--offset' as any]: `${index * 20}px` }}>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="text-md bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                                        <span>{project.year} </span>
                                        <span>|</span>
                                        <span>{project.company}</span>
                                    </div>

                                    <h3 className="font-[calistoga] text-xl sm:text-2xl md:text-4xl md:mt-5 mt-2">{project.title}</h3>
                                    <hr className="border-t-2 border-white/5 my-4 md:my-5"/>
                                    <p className="text-white/80 mb-5 sm:text-base text-sm">{project.description}</p>

                                    <ul>
                                        {project.technology.map(tech => (
                                            <li key={tech} className="my-2 inline-flex items-center gap-2 border border-white/15 px-3 py-1 rounded-full text-sm text-white/70 mr-2 font-semibold hover:bg-white/10 hover:text-white transition duration-300">{tech}</li>
                                        ))}
                                    </ul>

                                    <Link to={project.link}>
                                        <button className="hover:bg-white/25 hover:text-white transition duration-300 mt-4 bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">View Project Details</button>
                                    </Link>
                                </div>

                                <div className="relative">
                                    <img className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} width={400} height={200} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
