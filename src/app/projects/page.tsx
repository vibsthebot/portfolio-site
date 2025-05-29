import ProjectCard from "@/components/ProjectCard";

export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-stone-900 to-stone-800 text-white">
            <div className="p-10">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold mb-8">
                        projects:
                    </h1>
                    
                    <div className="space-y-8 pt-8">
                        <ProjectCard
                            title="Launching Away - 2025"
                            description="a pixel art animation about a young child who wants to make a rocket and fails. he perseveres and eventually succeeds against all odds. made using aseprite and premiere pro!"
                            imageSrc="/launching-away.png"
                            imageAlt="Launching Away"
                            youtubeLink="https://youtu.be/7-xLa_Zi9vM"
                            githubLink="https://github.com/vibsthebot/launching-away"
                        />
                        <ProjectCard
                            title="pixl - in progress"
                            description="a corexy 3d printer with a magnetic toolchanger and a 150mmx150mmx150mm build volume."
                            imageSrc="/pixl.png"
                            imageAlt="pixl"
                            githubLink="https://github.com/vibsthebot/pixl"
                            onshapeLink="https://cad.onshape.com/documents/945b02db4ce5a515a72d49d5/w/b0e211907b1de2504f67e79e/e/11b897444e72272c1ac01137"
                        />
                        <ProjectCard
                            title="Minion - in progress"
                            description="designed to be the swiss army knife of electronics. it is powered by an esp32-s3 and includes a 128x128 pixel display, an accelerometer, 3 buttons, a rotary encoder, a 3.5mm audio jack, a rechargable battery, and a usb hub (usb c input, usb a and microsd output)."
                            imageSrc="/minion.png"
                            imageAlt="Minion"
                            githubLink="https://github.com/vibsthebot/minion"
                            onshapeLink="https://cad.onshape.com/documents/3528835cd7c24f4fa682b200/w/cef528dd0bdfad9cc29e4192/e/ba726118fc6deb21c1d0aa06?renderMode=0&uiState=682c08fa2c81b53453d329c1"
                        />
                        <ProjectCard
                            title="XKCDwakaDo - 2024"
                            description="a chrome extension that replaces your new tab page with the latest XKCD comic. it also has a built in to-do list, along with a wakatime integration for daily coding time."
                            imageSrc="/xkcdwakado.png"
                            imageAlt="XKCDwakaDo"
                            chromeStoreLink="https://chromewebstore.google.com/detail/kkpmedeigfdpclmkanfhbmcaaakkmkcc?utm_source=item-share-cb"
                            githubLink="https://github.com/vibsthebot/xkcdwakado"
                        />
                        <ProjectCard
                            title="Escape Room - 2024"
                            description="a challenging space-themed cryptography escape room. each room has a unique puzzle incorporating a variety of ciphers, codes, and hidden clues to help you escape!"
                            imageSrc="/escape-room.png"
                            imageAlt="Escape Room"
                            demoLink="https://escape-room.vibsthebot.xyz"
                            githubLink="https://github.com/vibsthebot/escape-room"
                        />
                        <ProjectCard
                            title="Mirror Wars - 2024"
                            description="a 2d platformer game made using pygame. the player controls a character that has to defeat a shadow version of themselves using a unique mirror mechanism. this project was made for Counterspell Silicon Valley, a 16 hr game jam, and it won the judges choice award!"
                            imageSrc="/mirror-wars.png"
                            imageAlt="Mirror Wars"
                            githubLink="https://github.com/vibsthebot/mirror-wars"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}