'use client'
import Image from "next/image";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {

  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['HTML &amp; CSS', 'Javascript', 'Python', 'Java', 'nodeJS', 'npm', 'expressJS', 'MongoDB', 'Mongoose', 'React &amp; Vite', 'nextJS'],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen">

      <div className="flex flex-col-reverse sm:flex-row justify-around items-center p-3 pt-5">
        <div className="text-3xl sm:text-4xl sm:w-[40vw] flex flex-col gap-2 px-5">
          <div className="flex justify-center items-center flex-col">Welcome to <p className="text-purple-600 dark:text-purple-300 font-semibold">debojyoti.space</p></div>
          <div className="text-lg">I am a Full-Stack Web Developer and a programmer.</div>
          <div className="text-xl">Technologies: <span ref={el} className="font-semibold text-violet-600 dark:text-violet-300" /></div>
          <div className="text-base">You can Learn all the Technologies from my Learn Page. You can contact me through contact page.</div>
          <div className="flex gap-3 justify-center items-center sm:justify-normal">
            <Link href="/learn" className="text-xl py-1 px-3 w-fit bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500">Learn</Link>
            <Link href="/contact" className="text-xl py-1 px-3 w-fit bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500">Contact</Link>
            <Link href="/blog" className="text-xl py-1 px-3 w-fit bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500">Blog</Link>
          </div>
        </div>

        <div>
          <Image src="/171080341.png" height={100} width={100} className="w-40 sm:w-80 border-2 shadow-xl shadow-gray-300 dark:shadow-slate-950 border-black dark:border-white rounded-full bg-slate-200 dark:bg-slate-800 mb-4" alt="Debojyoti Tantra" />
        </div>
      </div>

      <div className="w-[85vw] border dark:border-white border-purple-700 my-5 flex mx-auto"></div>

      <div className="flex flex-col items-center gap-2 px-5">
        <p className="text-3xl font-bold underline">Projects</p>
        <p className="">I create various types of projects like Todo List App, Ai Chat App, Music Website, Restaurant Site, Clones of many sites</p>
        <p className="">I use verious technologies like:</p>
        <ul className="list-decimal grid grid-cols-3 gap-x-7 sm:flex sm:gap-8 sm:flex-row">
          <li>HTML, CSS</li>
          <li>JS</li>
          <li>nodeJS</li>
          <li>React</li>
          <li>Vite</li>
          <li>nextJS</li>
        </ul>
        <Link href="/projects" className="text-xl my-1 py-1 px-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500 flex justify-center items-center h-8 w-fit">View Projects</Link>
      </div>

      <div className="w-[85vw] border dark:border-white border-purple-700 my-5 flex mx-auto"></div>

      {/* <div className="flex flex-col items-center gap-2 px-5 pb-5">
        <p className="text-3xl font-bold underline">Socials</p>

        <div className="flex justify-center items-center gap-3 sm:gap-5 flex-col sm:flex-row">
          <div className="flex justify-center items-center gap-3">
            <p className="sm:text-xl w-20 sm:w-fit">Github: </p>
            <Link href="https://github.com/debojyoti-tantra" className="sm:text-xl py-1 px-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500 flex justify-center items-center h-8 w-fit">Click Here</Link>
          </div>

          <div className="flex justify-center items-center gap-3">
            <p className="sm:text-xl w-20 sm:w-fit">Linkedin: </p>
            <Link href="https://www.linkedin.com/in/debojyoti-tantra-369528343" className="sm:text-xl py-1 px-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500 flex justify-center items-center h-8 w-fit">Click Here</Link>
          </div>

          <div className="flex justify-center items-center gap-3">
            <p className="sm:text-xl w-20 sm:w-fit">Twitter: </p>
            <Link href="https://x.com/debojyotitantra" className="sm:text-xl py-1 px-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500 flex justify-center items-center h-8 w-fit">Click Here</Link>
          </div>
        </div>
      </div> */}

    </div>
  );
}
