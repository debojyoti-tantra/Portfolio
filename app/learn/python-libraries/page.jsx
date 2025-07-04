'use client'
import React from 'react'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const PythonLibraries = () => {
  return (
    <div className="min-h-[90vh] mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
        <div className='flex flex-row gap-1 items-center'>
          <SidebarTrigger />
          <p className='text-xl'>Menu</p>
        </div>
        <p>
          Introduction to Python Libraries
        </p>
      </h1>

      <div className="w-full border dark:border-white border-purple-700 opacity-50 my-5"></div>

      <div className="w-full flex justify-end items-center p-3">
        <Link href={`/learn/python-libraries/numpy`}><Button>
          Numpy <ArrowRight className='pl-1' />
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <p className="text-lg leading-7 mb-6">
        Python libraries are pre-written collections of functions and methods that help developers perform a wide variety of tasks efficiently. From data analysis to web development, Python libraries cover almost every domain of programming.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Use Python Libraries?</h2>
      <ul className="list-disc ml-8 mb-6 space-y-2">
        <li>Save time by reusing pre-written code.</li>
        <li>Handle complex operations like machine learning and data visualization ssly.</li>
        <li>Access community-driven tools with regular updates and support.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Popular Python Libraries</h2>
      <p className="text-lg leading-7 mb-4">
        Here are some widely-used Python libraries:
      </p>
      <ul className="list-disc ml-8 space-y-2">
        <li>
          <strong>NumPy:</strong> Perfect for numerical computations and handling multi-dimensional arrays.
        </li>
        <li>
          <strong>Pandas:</strong> Excellent for data analysis and manipulation.
        </li>
        <li>
          <strong>Matplotlib:</strong> A must-have for creating visualizations and plots.
        </li>
        <li>
          <strong>Scikit-learn:</strong> Popular for machine learning tasks.
        </li>
        <li>
          <strong>Django:</strong> A robust framework for building web applications.
        </li>
      </ul>

      <p className="text-lg mt-6">
        Dive into these libraries to unlock the full potential of Python! Explore further in the sections below.
      </p>

      <div className="w-full border dark:border-white border-purple-700 opacity-50 my-5"></div>

      <div className="w-full flex justify-end items-center p-3">
        <Link href={`/learn/python-libraries/numpy`}><Button>
          Numpy <ArrowRight className='pl-1' />
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="mt-8">
        <div className="max-w-sm w-full bg-white dark:bg-slate-800 border border-gray-200 rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-4">Need Help?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If any problem occurs, feel free to contact me for assistance.
          </p>
          <Link href="/contact">
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
      <PythonLibrariesComments />
    </div>
  )
}

export default PythonLibraries