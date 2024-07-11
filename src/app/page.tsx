import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'


export default function Page() {
  return (
  <main className="h-screen-min bg-stone-800 text-white">
    <div className="p-10 h-screen flex items-center">
      <div>
        <p className="text-xl">
          hi, my name is
        </p>
        <p>
          <strong className="text-5xl hover:bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 align-text-bottom hover:text-transparent hover:bg-clip-text">Vibhu Siddha</strong>
        </p>
        <ul className="align-text-bottom">
          <li>i am a incoming 9th grader</li>
          <li>i love robotics and reading</li>
          <li>i have a passion for coding</li>
          <li>i play the french horn</li>
          <li>i am in scouting</li>
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
                <p className="opacity-0 text-[0.01px] group-hover:opacity-100 group-hover:pl-2 group-hover:text-base bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 align-text-bottom text-transparent bg-clip-text">vibsthebot </p>
              </Link>
            </div>
            
            <div className="flex items-center relative group px-2">
              <Link href="mailto:vibhusiddha@gmail.com">
                <Image src="/email-logo.png" width={25}
                  height={25}
                  alt="Email logo" className="">              
                </Image>
              </Link>
              <Link href="mailto:vibhusiddha@gmail.com">
                <p className="opacity-0 text-[0.01px] group-hover:opacity-100 group-hover:pl-2 group-hover:text-base bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 align-text-bottom text-transparent bg-clip-text">vibhusiddha@gmail.com </p>
              </Link>
            </div>
            <div className="flex items-center relative group">
              <Image src="/discord-mark-white.png" width={25}
                height={25}
                alt="Discord logo" className="">              
              </Image>
              <p className="pacity-0 text-[0.01px] group-hover:opacity-100 group-hover:pl-2 group-hover:text-base bg-gradient-to-r from-blue-500 via-green-500 to-sky-500 align-text-bottom text-transparent bg-clip-text">realvibs </p>
            </div>
            
          </li>
        </ul>
      </div>
      
    </div>
  </main>
  )
}
