interface YouTubeEmbedProps {
    videoId: string;
    title: string;
}

export default function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
    return (
        <div className="max-w-2xl mx-auto w-full aspect-video bg-stone-700 rounded-lg overflow-hidden shadow-lg">
            <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}