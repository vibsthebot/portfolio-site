import Link from "next/link";


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
          <li>I am a incoming 9th grader</li>
          <li>I love robotics and reading</li>
          <li><Link href="https://github.com/vibsthebot" className="text-sky-500 hover:underline">Github</Link></li>
        </ul>
      </div>
      
    </div>
  </main>
  )
}
