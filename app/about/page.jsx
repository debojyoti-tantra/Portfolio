import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "About: DebojyotiTantra",
  description: "About page of https://debojyoti.space",
};

export default function About() {
   return (
      <div className="w-[90vw] mx-auto p-4 min-h-screen flex flex-col gap-5">
         <div className="mx-auto flex gap-3 justify-center items-center flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold underline">About Me</h1>
            <p className="text-lg text-gray-900 dark:text-gray-100 max-w-2xl text-center">
               Welcome to my personal website! My name is Debojyoti Tantra, and I am a passionate web developer and a student of BSc Physics. I enjoy building dynamic, interactive web applications and constantly strive to learn and grow in this field.
            </p>
         </div>

         <div className="flex flex-col gap-3">
            <section className="about-section">
               <h2 className="text-2xl font-bold underline">Who I Am</h2>
               <p className="text-gray-900 dark:text-gray-100">
                  I am currently pursuing my BSc in Physics, which helps me cultivate analytical thinking and problem-solving skills. Alongside my academic journey, I dedicate my time to mastering web development and exploring new technologies. My portfolio showcases a combination of technical expertise and creative problem-solving.
               </p>
            </section>

            <section className="skills-section mt-5">
               <h2 className="text-2xl font-bold underline">Skills & Tools</h2>
               <ul className="list-disc list-inside text-gray-900 dark:text-gray-100">
                  <li>Frontend Development: HTML, CSS, JavaScript, React.js, Next.js</li>
                  <li>Styling Frameworks: Tailwind CSS</li>
                  <li>Backend Development: Express.js, MongoDB</li>
                  <li>Version Control: Git & GitHub</li>
                  <li>Other Tools: Termux, VS Code</li>
                  <li>Languages: Python, JavaScript, Java</li>
               </ul>
            </section>

            <section className="goals-section mt-5">
               <h2 className="text-2xl font-bold underline">My Goals</h2>
               <p className="text-gray-900 dark:text-gray-100">
                  My ultimate goal is to become a full-stack developer and contribute to impactful projects. I aim to bridge my physics knowledge with programming skills to create innovative solutions that blend science and technology.
               </p>
            </section>

            <section className="contact-section mt-5 mb-5">
               <h2 className="text-2xl font-bold underline">Get in Touch</h2>
               <p className="text-gray-900 dark:text-gray-100">
                  Feel free to reach out if you'd like to collaborate on a project, ask questions, or just say hello!
               </p>
                    
               <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <Link href="/contact">
                     <button className="w-32 mt-4 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 font-medium">
                        Contact Me
                     </button>
                  </Link>
               </div>
            </section>
         </div>
      </div>
   );
}