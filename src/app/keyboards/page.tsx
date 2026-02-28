import Image from 'next/image';

export default function Page() {
    const keyboards = [
        {
            title: "iteration 1",
            description: "My first keyboard design was a 38-key split ergonomic keyboard, powered by a XIAO RP2040 and featuring choc v1 switches. I designed the layout using Ergogen, a powerful tool for keyboard design. Since it is reversible with the same PCB used for both halves, the entire design fits within a 100x100 footprint, making it incredibly compact and efficient." ,
            color: "blue",
            mainImage: "/version1.gif",
            thumbnails: [
            ]
        },
        {
            title: "iteration 2",
            description: "I built my second custom keyboard, called vpad, which is a 50-key split and ortholinear mechanical keyboard. It features choc v1 switches, making it compact while maintaining great tactility. Both halves use the same board design and are connected through a ten-wire cable. Each side has a 5x5 key matrix, creating a balanced and ergonomic layout.",
            color: "green",
            mainImage: "/version2.gif",
            thumbnails: [
            ]
        },
        {
            title: "iteration 3",
            description: "My latest keyboard design is a custom ergonomic split keyboard powered by an nrf52840 microcontroller and featuring PG1316S switches. At under 8 millimeters thick, it is incredibly thin and highly portable, making it perfect for both desk work and travel. I incorporated wireless connectivity through Bluetooth, added USB-C charging capability, and a built-in battery system.",
            color: "sky",
            mainImage: "/version3.gif",
            thumbnails: [
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-stone-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-6xl font-bold mb-16">
                    mechanical keyboards - my journey
                </h1>

                <div className="space-y-32">
                    {keyboards.map((keyboard, index) => (
                        <section 
                            key={keyboard.title}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                        >
                            <div className='columns-7xl'>
                                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                    <div className="space-y-6">
                                        <h2 className={`text-3xl font-semibold text-${keyboard.color}-400`}>
                                            {keyboard.title}
                                        </h2>
                                        <p className="text-white leading-relaxed text-lg">
                                            {keyboard.description}
                                        </p>
                                    </div>
                                    
                                    <div className="grid grid-cols-3 gap-4">
                                        {keyboard.thumbnails.map((thumb, i) => (
                                            <div 
                                                key={i} 
                                                className="aspect-square bg-stone-700 rounded-lg overflow-hidden shadow-md"
                                            >
                                                <Image 
                                                    width={300}
                                                    height={300}
                                                    src={thumb}
                                                    alt={`${keyboard.title} thumbnail ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='columns-2xs'>
                                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex items-center justify-center`}>
                                    <div className="w-full max-w-md">
                                        <div className="aspect-video bg-stone-700 rounded-lg overflow-hidden shadow-lg">
                                            <Image 
                                                src={keyboard.mainImage}
                                                alt={`${keyboard.title} main image`}
                                                width={500}
                                                height={300}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}