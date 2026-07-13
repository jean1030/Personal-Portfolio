import { useState } from 'react';
import SparkleIcon from '../assets/sparkleIcon';
import vscode from '../assets/techStack/vscode';
import css from '../assets/techStack/css';
import figma from '../assets/techStack/figma';
import firebase from '../assets/techStack/firebase';
import github from '../assets/techStack/github';
import html from '../assets/techStack/html';
import javascript from '../assets/techStack/javascript';
import php from '../assets/techStack/php';
import python from '../assets/techStack/python';
import react from '../assets/techStack/react';
import shadcn from '../assets/techStack/shadcn';
import supabase from '../assets/techStack/supabase';
import tailwind from '../assets/techStack/tailwind';
import { ToolBoxItems } from '../components/ToolBoxItems';
import profile from '../assets/profile.png';
import Experience from '../components/experience';

const tools = [
    { name: 'HTML', iconType: html},
    { name: 'CSS', iconType: css },
    { name: 'JavaScript', iconType: javascript},
    { name: 'PHP', iconType: php},
    { name: 'Python', iconType: python},
    { name: 'React', iconType: react},
    { name: 'React Native', iconType: react},
    { name: 'Tailwind CSS', iconType: tailwind},
    { name: 'Shadcn UI', iconType: shadcn},
    { name: 'Supabase', iconType: supabase},
    { name: 'Firebase', iconType: firebase},
    { name: 'Figma', iconType: figma},
    { name: 'VS Code', iconType: vscode },
    { name: 'GitHub', iconType: github},
];

const tabs = [
    { id: 'toolbox', label: 'Toolbox' },
    /*{ id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },*/
] as const;

const educationItems = [
    {
        title: 'Academic projects',
        description: 'Built school projects that explore quizzes, learning systems, and interactive user flows.',
    },
    {
        title: 'Modern web stack',
        description: 'Practiced with React, Tailwind CSS, Firebase, Supabase, and related UI tooling.',
    },
    {
        title: 'Self-directed learning',
        description: 'Regularly studies new development tools, design systems, and application patterns.',
    },
];

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]['id']>('toolbox');

  return (
    <div id='about' className='scroll-mt-28 mt-10'>
        <div className='container mx-auto'>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] text-center bg-clip-text text-transparent">About Me</p>
            </div>

            <h2 className="font-[calistoga] text-3xl md:text-5xl text-center mt-6 mx-3 md:mx-0">A Glimpse of Who I Am</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg mx-3 md:mx-0">Learn more about who I am and my passion for building meaningful digital experiences.</p>

            <div className="my-10 lg:mx-1 mx-5 bg-gray-800 px-8 py-6 md:px-10 md:py-8 lg:px-20 lg:py-10 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
                <div className="md:grid md:grid-cols-2 lg:gap-4 items-center">
                    <div className="flex flex-col justify-center">
                        <div className="flex gap-4 items-center mb-6">
                            <h2 className="flex items-center gap-4 text-3xl md:text-5xl leading-none text-[#EFBFD5]" style={{ fontFamily: "'Pacifico', cursive" }}>Meet Jennifer</h2>
                        </div>

                        <p className="text-white/80 mt-4 leading-relaxed text-left md:text-justify">
                                Hello! I'm Jennifer, a web and mobile application developer with experience in full-stack development and application support. I enjoy building responsive, reliable applications, troubleshooting technical issues, and continuously learning new technologies to create better digital experiences.
                        </p>
                    </div>


                    <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <img src={profile} alt="Jennifer Tiongson" className='w-64 h-58 md:w-72 md:h-80 shadow-lg max-w-full' />
                    </div>
                </div>
            </div>

            <div className="mt-10 lg:mx-1 mx-5 bg-gray-800 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none min-h-[320px]">
                <div className='bg-black bg-opacity-20'>
                    <div className='flex flex-col gap-0 sm:gap-5 md:flex-row md:items-center md:justify-between'>
                        <div className='flex items-center'>
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type='button'
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-2 py-2 sm:px-6 sm:py-4 text-sm font-semibold transition duration-300 ${
                                        activeTab === tab.id
                                            ? 'bg-gray-800 text-[#EFBFD5] text-lg md:text-xl '
                                            : 'text-white/70 hover:bg-white/10 hover:text-white '
                                    }`}
                                >
                                    <div className='flex items-center gap-0 sm:gap-2'>
                                        <SparkleIcon className='size-5 sm:size-10' fill={` ${
                                            activeTab === tab.id
                                                ? '#EFBFD5'
                                                : 'white'}`}/>
                                        <h3 className="font-[calistoga]">{tab.label}</h3>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='relative z-20 px-6 pb-8 pt-6 md:px-10 md:pb-10'>
                    {activeTab === 'toolbox' && (
                        <div className='-pl-1'>
                            
                            <p className='mt-1 sm:mt-5 ml-0 md:ml-20 text-sm md:text-base text-white/80'>
                                Here are the technologies and tools I use to build responsive and scalable applications.
                            </p>

                            <ToolBoxItems items={tools} className='mt-5 sm:mt-10'/>
                        </div>
                    )}

                    {/*{activeTab === 'experience' && (
                        <div> 
                            <p>Timeline (Education & Experience)</p>
                            <Experience />
                        </div>
                    )}

                    {activeTab === 'education' && (
                        <div className='grid gap-4 md:grid-cols-3'>
                            <p>Certs</p>
                        </div>
                    )}*/}
                </div>
            </div>

        </div>
    </div>
  )
}
