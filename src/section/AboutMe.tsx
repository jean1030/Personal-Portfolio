import profile from '../assets/me.png';
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
import { TechIcon } from '../components/TechIcon';
import { ToolBoxItems } from '../components/ToolBoxItems';
import Lanyard from "../assets/lanyard/lanyard";

const tools = [
    { name: 'VS Code', iconType: vscode },
    { name: 'CSS', iconType: css },
    { name: 'Figma', iconType: figma},
    { name: 'Firebase', iconType: firebase},
    { name: 'GitHub', iconType: github},
    { name: 'HTML', iconType: html},
    { name: 'JavaScript', iconType: javascript},
    { name: 'PHP', iconType: php},
    { name: 'Python', iconType: python},
    { name: 'React', iconType: react},
    { name: 'React Native', iconType: react},
    { name: 'Shadcn UI', iconType: shadcn},
    { name: 'Supabase', iconType: supabase},
    { name: 'Tailwind CSS', iconType: tailwind}
];

export default function AboutMe() {
  return (
        <div id='about' className='scroll-mt-28'>
        <div className='container mx-auto'>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">About Me</p>
            </div>

            <h2 className="font-[calistoga] text-3xl md:text-5xl text-center mt-6">A Glimpse of Who I Am</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto">Learn more about who I am and my passion for building meaningful digital experiences.</p>

            <div className="mt-10 bg-gray-800 px-8 py-6 md:px-10 md:py-8 lg:px-20 lg:py-10 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left: Text content */}
                    <div className="flex flex-col justify-center">
                        <p className="text-white/80 mt-4 leading-relaxed">
                            Hello! I am Jennifer, a web and mobile app developer who enjoys turning ideas into functional and meaningful digital experiences. I love building responsive interfaces and reliable backend systems that people can actually use.
                        </p>
                        <p className="text-white/80 mt-4 leading-relaxed">
                            With a strong foundation in both front-end and back-end development, I enjoy bringing concepts to life from planning and coding to seeing everything come together. I am also passionate about exploring new tools and technologies to continuously improve and stay up to date with modern development practices.
                        </p>
                    </div>

                    <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={10.5}/>
                    </div>

                </div>
            </div>

            <div className="mt-10 bg-gray-800 rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:z-10 overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none h-[320px]">
                
                <div className='px-10 pt-10'>
                    <div className='flex gap-4 items-center mb-6 px-6'>
                        <SparkleIcon className='size-10' fill='#6DE4B5'/>
                        <h3 className="font-[calistoga] text-2xl md:text-3xl">Toolbox</h3>
                    </div>
                    
                    <p className='ml-20'>Here are the technologies and tools I use to build responsive and scalable applications.</p>
                </div>

                <div className='-pl-1'>
                    <ToolBoxItems items={tools} className='mt-6' itemsWrapperClassName='animate-move-left [animation-duration:40s]'/>
                    <ToolBoxItems items={tools} className='mt-6' itemsWrapperClassName='animate-move-right [animation-duration:40s]'/>
                </div>
            </div>

        </div>
    </div>
  )
}
