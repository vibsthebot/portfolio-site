import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    chromeStoreLink?: string;
    githubLink: string;
    youtubeLink?: string;
    demoLink?: string;
    onshapeLink?: string;
}

export default function ProjectCard({
    title,
    description,
    imageSrc,
    imageAlt,
    chromeStoreLink,
    githubLink,
    youtubeLink,
    demoLink,
    onshapeLink
}: ProjectCardProps) {
    return (
        <div className="group bg-gradient-to-br from-stone-900/80 via-stone-900/40 to-stone-800/60 
            backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]
            border border-stone-800/50 hover:border-stone-700/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-green-500/20 hover:to-sky-500/20 transition-1000">
            <div className="space-y-6">
                <div className="flex items-start gap-6">
                    <Image 
                        src={imageSrc}
                        width={120}
                        height={120}
                        alt={imageAlt}
                        className="rounded-lg ring-1 ring-white/10"
                    />
                    <div className="space-y-3">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 bg-clip-text text-transparent">
                            {title}
                        </h3>
                        <p className="text-m">
                            {description}
                        </p>
                        <div className="flex gap-4 text-sm align-bottom">
                            {chromeStoreLink && (
                                <Link 
                                    href={chromeStoreLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 
                                    text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-blue-600/30 
                                    transition-all duration-200"
                                >
                                    <Image src="/chrome-web-store.png"
                                        width={25}
                                        height={25}
                                        alt="Chrome Web Store logo" />
                                </Link>
                            )}
                            {onshapeLink && (
                                <Link 
                                    href={onshapeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 
                                    text-blue-400 rounded-lg hover:from-blue-500/30 hover:to-blue-600/30 
                                    transition-all duration-200"
                                >
                                    <Image src="/onshape-icon.png"
                                        width={25}
                                        height={25}
                                        alt="Onshape logo" />
                                </Link>
                            )}
                            {youtubeLink && (
                                <Link 
                                    href={youtubeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gradient-to-r from-red-500/20 to-red-600/20 
                                    text-red-400 rounded-lg hover:from-red-500/30 hover:to-red-600/30 
                                    transition-all duration-200"
                                >
                                    <Image src="/youtube-icon.webp"
                                        width={25}
                                        height={25}
                                        alt="YouTube logo" />
                                </Link>
                            )}
                            {demoLink && (
                                <Link 
                                    href={demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-gradient-to-r from-green-500/20 to-green-600/20 
                                    text-green-400 rounded-lg hover:from-green-500/30 hover:to-green-600/30 
                                    transition-all duration-200"
                                >
                                    <Image src="/demo-icon.png"
                                        width={25}
                                        height={25}
                                        alt="Live demo icon" />
                                </Link>
                            )}
                            <Link 
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gradient-to-r from-stone-800/50 to-stone-700/50 
                                text-gray-300 rounded-lg hover:from-stone-700/50 hover:to-stone-600/50 
                                transition-all duration-200"
                            >
                                <Image src="/github-mark-white.png"
                                    width={25}
                                    height={25}
                                    alt="Github logo" />
                            </Link>
                        </div>

                    </div>
                </div>
                
                
            </div>
        </div>
    );
}