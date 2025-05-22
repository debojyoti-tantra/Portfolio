import React from "react";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Blog: DebojyotiTantra",
  description: "Blog of Debojyoti Tantra's portfolio website. Discover my skills, projects, and journey in web development and programming.",
};

const blogs = [
   {
      title: "Install VS Code in Android",
      date: "December 15,2024",
      desc: "VS Code is one type of Code Editor. It's supports many language like HTML, CSS, JS, Python, JAVA, C, C++ etc. It's not avilable for android divices. But after some configrations we can downlode the visualstudio code editor in android divices. Read this blog and you will undersatnd how can we do this...",
      linkHref:  "/blog/vsCodeAndroid"
   },
]

export default function Blog() {
   
   return (<>
      {blogs.map((blog, index) => (
      <div className="min-h-screen p-8" key={index}>
         <div className="border-0 rounded-xl mx-auto w-[85vw] gap-4 p-4 bg-white dark:bg-slate-800 text-black dark:text-white shadow-xl dark:shadow-black">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-10">
               <div className="text-xl sm:text-2xl font-bold underline flex justify-center items-center">{blog.title}</div>
               <div className="flex justify-center items-center gap-2">
                  <Image src="/171080341.png" width={20} height={20} className="border border-black dark:border-gray-300 rounded-full bg-white" alt="logo img" />
                  <div className="font-semibold text-base">Debojyoti Tantra</div>
                  <div className="text-gray-500 dark:text-gray-300 text-sm">{blog.date}</div>
               </div>
            </div>
               <div className="text-sm p-2 sm:px-7 sm:py-3">
                  {blog.desc}
               </div>
               <Link href={blog.linkHref} className="w-32 block mx-auto"><button type="button" className="w-32 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Read More
               </button></Link>
         </div>
      </div>
      ))}
   </>);
};