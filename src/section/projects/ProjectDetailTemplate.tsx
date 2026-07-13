
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
    title: string;
    year: string;
    company: string;
    image: string;
    overview: string;
    features: string[];
    technologies: string[];
    liveLink?: string;
    githubLink?: string;
    gallery?: string[];
    userRoles?: {
        role: string;
        description: string;
        usersCount?: number;
        capabilities?: string[];
    }[];
}

export default function ProjectDetailTemplate({
    title,
    year,
    company,
    image,
    overview,
    features,
    technologies,
    liveLink,
    githubLink,
    gallery = [],
    userRoles = []
}: ProjectDetailProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigate = useNavigate();
    
    const allImages = [image, ...gallery];
    const currentImage = allImages[currentImageIndex];
    
    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
    };
    
    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
    };

    return (
        <section className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-950">
            <div className="container mx-auto px-4 md:px-8">
                {/* Back Button */}
                <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-[#EFBFD5] hover:text-[#9D61FD] transition mb-8 bg-none border-none cursor-pointer">
                    <ArrowUp className="w-4 h-4 rotate-[-90deg]" />
                    Back
                </button>

                {/* Header */}
                <div className="mb-12">
                    <div className="bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2 mb-4">
                        <span>{year}</span>
                        <span>|</span>
                        <span>{company}</span>
                    </div>
                    <h1 className="font-[calistoga] text-2xl md:text-3xl lg:text-5xl mb-6">{title}</h1>
                </div>

                <div className="mb-16 relative group">
                    <div className="rounded-3xl overflow-hidden border border-white/10">
                        <img src={currentImage} alt={`${title} - Image ${currentImageIndex + 1}`} className="w-full h-auto object-cover" />
                    </div>
                    
                    {allImages.length > 1 && (
                        <>
                            <button
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full transition duration-300 opacity-0 group-hover:opacity-100"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            
                            <div className="flex justify-center gap-2 mt-4">
                                {allImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition duration-300 ${
                                            index === currentImageIndex ? 'bg-[#EFBFD5] w-8' : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                            
                            <div className="text-center text-white/60 text-sm mt-2">
                                {currentImageIndex + 1} / {allImages.length}
                            </div>
                        </>
                    )}
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Overview */}
                        <div className="mb-12">
                            <h2 className="font-[calistoga] md:text-3xl text-xl mb-4">Overview</h2>
                            <p className="text-white/80 md:text-lg text-base leading-relaxed">{overview}</p>
                        </div>

                        {/* Features */}
                        <div className="mb-12">
                            <h2 className="font-[calistoga] md:text-3xl text-xl mb-6">Key Features</h2>
                            <ul className="space-y-3">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex gap-3 items-start">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] mt-2 flex-shrink-0" />
                                        <span className="text-white/80 md:text-base text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* System Users */}
                        {userRoles.length > 0 && (
                            <div className="mb-12">
                                <h2 className="font-[calistoga] md:text-3xl text-xl mb-6">System User Roles</h2>
                                <ul className="space-y-3">
                                    {userRoles.map((userRole) => (
                                        <li key={userRole.role} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                                            <div className="flex items-center justify-between gap-3">
                                                <span className="text-white/90 font-semibold">{userRole.role}</span>
                                                {userRole.usersCount !== undefined && (
                                                    <span className="text-white/60 text-sm">{userRole.usersCount} user(s)</span>
                                                )}
                                            </div>
                                            <p className="mt-2 text-white/75 text-sm">{userRole.description}</p>
                                            {userRole.capabilities && userRole.capabilities.length > 0 && (
                                                <ul className="mt-3 space-y-2">
                                                    {userRole.capabilities.map((capability) => (
                                                        <li key={capability} className="flex items-start gap-3 text-white/80 text-sm">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] flex-shrink-0" />
                                                            <span>{capability}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className='sticky top-10 self-start'>
                        {/* Tech Stack */}
                        <div className="bg-gray-800/50 border border-white/10 rounded-2xl p-6 mb-6 top-20">
                            <h3 className="font-[calistoga] text-xl mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="inline-flex items-center border border-white/15 px-3 py-1 rounded-full text-sm text-white/70 font-semibold hover:bg-white/10 hover:text-white transition duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-3">
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                                    <button className="mb-5 w-full bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 font-semibold py-3 rounded-xl hover:shadow-lg transition duration-300">
                                        Visit Live Project
                                    </button>
                                </a>
                            )}
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-3 rounded-xl transition duration-300">
                                        View on GitHub
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
