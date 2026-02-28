import YouTubeEmbed from '@/components/YouTubeEmbed';
import Image from 'next/image';
export default function Page() {
    const projects = [
        {
            title: "FRC 649 - software co-lead and scouting lead",
            period: "august 2024 - present",
            description: "Led a 3 member team in developing the game piece acquisition and scoring algorithms. Developed inverse kinematic and forward kinematics algorithms to simplify game piece transfers and scoring. Used AdvantageScope, a robotics simulator, to visualize mechanical movements and test algorithms.",
            color: "blue",
            mainImage: "/649-image.jpg",
            videoId: "oWWKCARoiZY",
            thumbnails: [
            ]
        },
        {
            title: "FTC 25667 - mentor",
            period: "august 2024 - present",
            description: "Mentored a new community FTC team, and taught them CAD using Onshape and Java. This team won their first competition and qualified for the Northern California Regional Championship.",
            color: "sky",
            mainImage: "/25667-image.jpg",
            videoId:"6goPyu5dt7c",
            thumbnails: [
            ]
        },
        {
            title: "RMS FTC president, team lead for 20373 & 20367",
            period: "august 2021 - may 2024",
            description: "Led and mentored a FTC club of eight teams comprising of 50+ students. My team in the club qualified for the Northern California Regional Championship all three years. As a team, we were the finalist at the Northern California Regional Championship and won a total of 11 awards.",
            color: "green",
            mainImage: "/rms-image.jpg",
            videoId:"6cSUz6qKY4c",
            thumbnails: [
                "/rms-thumb1.jpg",
                "/rms-thumb2.jpg",
                "/rms-thumb3.jpg"
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-stone-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-6xl font-bold  mb-16">
                    my robotics journey
                </h1>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <section 
                            key={project.title}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            <div className='columns-7xl '>
                                <div className={`space-y-8 text-sky-400 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="space-y-6">
                                        <h2 className={`text-3xl font-semibold text-${project.color}-400`}>
                                            {project.title} 
                                        </h2>
                                        <h4 className="text-lg text-white">{project.period}</h4>
                                        <p className="text-white leading-relaxed text-xl">
                                            {project.description}
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4">
                                        {project.thumbnails.map((thumb, i) => (
                                            <div 
                                                key={i} 
                                                className="aspect-square bg-stone-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                            >
                                                <Image 
                                                    width={300}
                                                    height={300}
                                                    src={thumb}
                                                    alt={`${project.title} thumbnail ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='columns-2xs'>
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                                    {project.videoId ? (
                                        <div className="w-[70%] max-w-2xl">
                                            <YouTubeEmbed 
                                                videoId={project.videoId} 
                                                title={project.title}
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-video bg-stone-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                            <Image 
                                                src={project.mainImage}
                                                alt={`${project.title} main image`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}