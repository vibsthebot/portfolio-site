import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'


export default function Page() {
  return (
  
  <main className="h-screen-min bg-stone-800 text-white">
    <div className="p-10 h-screen flex items-center">
      <div>
        <p className="text-xl">
          hi, i am
        </p>
        <p>
          <strong className="text-5xl bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 align-text-bottom text-transparent bg-clip-text">Vibhu Siddha</strong>
        </p>
        <ul className="align-text-bottom">
          <li>saratoga high school class of '28</li>
          <li>i love <Link href="/robotics" className="underline">robotics</Link>, 3d printing, and CAD</li>
          <li>i have a passion for programming, reading, and pixel art</li>
          <li>i play the french horn and have been learning south indian carnatic music</li>
          <li>i am a boy scout, working towards the rank of eagle</li>
          <li>here are some of my <Link href="/projects" className="underline">projects</Link></li>
          <li className="flex items-center pt-2">
            <div className="flex items-center relative group">
              <Link href="https://github.com/vibsthebot"  target="_blank">
                <Image src="/github-mark-white.png"
                width={25}
                height={25}
                alt="Github logo">
                </Image>
              </Link>
              <Link href="https://github.com/vibsthebot"  target="_blank">
              </Link>
            </div>
            
          </li>
        </ul>
      </div>
      
    </div>
  </main>
  )
}
