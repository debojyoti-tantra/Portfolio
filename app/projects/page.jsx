import React from 'react';
import Link from 'next/link';

const projects = [
   {
      name: 'Imagify',
      desc: 'Imagify - Your Personal Cloud for Images 🚀 Imagify is a modern cloud-based image storage platform where you can upload, store, and share your images seamlessly. Built using the MERN stack, it offers a smooth and secure experience for managing your pictures online. Authencation using Clerk.',
      link: 'https://imagify-debojyoti.onrender.com',
      gitlink: 'https://github.com/debojyoti-tantra/Imagify-Image-Cloud-Storage'
   },
   {
      name: 'Instagram Clone',
      desc: '📸 InstaDebo – Instagram Clone (MERN Stack) InstaDebo is a full-featured Instagram clone built with the MERN stack (MongoDB, Express, React, Node.js). It allows users to upload photos, like, comment, follow/unfollow, update profiles, chat with each other and explore posts—all in a seamless social media experience.',
      link: 'https://instadebo.onrender.com',
      gitlink: 'https://github.com/debojyoti-tantra/Instagram-Clone'
   },
   {
      name: 'Chat-Application',
      desc: 'This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) with Socket.IO for seamless communication between users. The app allows multiple users to chat in real time. I impliment daisyui, bcryptjs, cookie-parser, jsonwebtoken in this project.',
      link: 'https://chat-application-p97k.onrender.com',
      gitlink: 'https://github.com/debojyoti-tantra/Chat-Application'
   },
   {
      name: 'Chat-Bot',
      desc: 'This is a gemimi integrated chat Bot. If i question anything it gives answer. I built this site by vite-react.',
      link: 'https://chat-bot-three-brown.vercel.app/',
      gitlink: 'https://github.com/debojyoti-tantra/Chat-Bot'
   },
   {
      name: 'iTask',
      desc: 'This is a Todo List App. Add your Todo and do it on time.',
      link: 'https://i-task-xi.vercel.app/',
      gitlink: 'https://github.com/debojyoti-tantra/iTask'
   },
   {
      name: 'ListenWithDebo',
      desc: 'This is a music website. Enjoy this site',
      link: 'https://debojyoti-tantra.github.io/ListenWithDebo/',
      gitlink: 'https://github.com/debojyoti-tantra/ListenWithDebo'
   },
   {
      name: 'Find-The-Type-of-The-Curve',
      desc: 'This is a curve finder website. This website solves many problems in Maths',
      link: 'https://debojyoti-tantra.github.io/Find-The-Type-of-the-Curve/',
      gitlink: 'https://github.com/debojyoti-tantra/Find-The-Type-of-the-Curve'
   },
   {
      name: 'All-in-one-Python',
      desc: 'This is a Github Repo made by me here everything about Python i given.',
      link: '',
      gitlink: 'https://github.com/debojyoti-tantra/All-in-one-Python'
   },
   {
      name: 'Tantra-Restaurant',
      desc: 'This is a Restrudent app made my me. Only frontend.',
      link: 'https://debojyoti-tantra.github.io/Tantra-Restaurant/',
      gitlink: 'https://github.com/debojyoti-tantra/Tantra-Restaurant'
   },
   {
      name: 'UltraEdit Clone',
      desc: 'This is the clone of UltraEdit website',
      link: 'https://debojyoti-tantra.github.io/UltraEdit/',
      gitlink: 'https://github.com/debojyoti-tantra/UltraEdit'
   },
]

export default function  Projects()  {
   return (<>
      <p className="text-2xl underline flex justify-center items-center font-bold pt-3">All Projects</p>
      <div className="min-h-screen grid grid-cols-1 sm:grid-cols-3 pb-3">
         {projects.map((project, index) => (
            <div key={index} className="flex flex-col justify-between items-center border border-black dark:border-white m-3 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-lg dark:shadow-slate-950">
               <p className="sm:text-2xl font-semibold underline text-purple-600 dark:text-purple-400">{project.name}</p>
               <p>{project.desc}</p>
               <div className="flex flex-row gap-3">
                  {
                     project.link!=='' && <Link href={project.link} className="sm:text-xl py-1 px-3 w-fit bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500">Live Link</Link>
                  }
                  <Link href={project.gitlink} className="sm:text-xl py-1 px-3 w-fit bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-500">Github Repo</Link>
               </div>
            </div>
         ))}
      </div>
   </>);
};