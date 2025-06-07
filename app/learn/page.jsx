import React from "react";
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
    title: "Learn: DebojyotiTantra",
    description: "Learn page of Debojyoti Tantra's portfolio website. Discover my skills, projects, and journey in web development and programming.",
};

const cards = [
   {
      pic: "/learn/python.png",
      title: "Python Libraries",
      description: "Explore the top Python libraries like NumPy, SciPy, Pandas, Matplotlib, and more for data analysis, visualization, and machine learning.",
      link: "/learn/python-libraries",
   },
];

export default function Learn() {
   return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-4">
         <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white underline">
               Learn Programming & Development
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
               {cards.map((card, index) => (
                  <div
                     key={index}
                     className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col justify-between"
                  >
                     
                     <div className="flex justify-center iitems-center m-2">
                        <Image width={150} height={150} src={card.pic} alt={card.title} />
                     </div>
                     
                     <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {card.title}
                     </h2>
                     <p className="text-gray-600 dark:text-gray-300 mb-2">{card.description}</p>
                     <Link 
                        href={card.link} 
                        className="text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 px-4 py-2 rounded-lg text-center block font-medium"
                     >
                        Explore
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}