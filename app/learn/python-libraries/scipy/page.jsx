import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: "Scipy || Python Libraries",
  description: "How to use Scipy || Learn Scipy.",
};

export default function SciPy() {
  return (
    <div className="min-h-[90vh] overflow-y-auto mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 flex flex-row justify-center items-center gap-3">
        <div className='flex flex-row gap-1 items-center'>
          <SidebarTrigger />
          <p className='text-xl'>Menu</p>
        </div>
        <p>
          Scipy
        </p>
      </h1>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="w-full flex justify-between items-center p-3">
        <Link href={`/learn/python-libraries/numpy`}><Button>
          <ArrowLeft className='pr-1' /> Numpy
        </Button></Link>
        <Link href={`/learn/python-libraries/matplotlib`}><Button>
          Matplotlib <ArrowRight className='pl-1' />
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <div>
          <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            What is SciPy?
          </p>
          <p>
            - SciPy is a Python library used for scientific and technical
            computing. <br />
            - It builds on NumPy and provides many user-friendly and
            efficient numerical routines. <br />
            - SciPy includes modules for optimization, integration,
            interpolation, eigenvalue problems, algebraic equations, and
            more. <br />
            - It is open-source and widely used in data science, machine
            learning, and engineering.
          </p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            At First we downlode the library of Scipy
          </p>
          <CodeHighlighter lang="python">
            pip install scipy
          </CodeHighlighter>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            How to import SciPy?
          </p>
          <CodeHighlighter lang="python">
            import scipy
          </CodeHighlighter>
          <p>
            You can import SciPy directly, or use specific modules like{" "}
            <code>scipy.optimize</code>, <code>scipy.integrate</code>, etc.
          </p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            Example: Solving Algebraic Equations
          </p>
          <CodeHighlighter lang="python">
            {`from scipy.optimize import fsolve

def equation(x):
  return x**3 - 4*x + 2

solution = fsolve(equation, 0)
print("Solution to the equation is:", solution)`}
          </CodeHighlighter>
          <p className="font-semibold underline">Output:</p>
          <p>Solution to the equation is: [1.0]</p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            Integration using SciPy
          </p>
          <CodeHighlighter lang="python">
            {`from scipy.integrate import quad

def func(x):
  return x**2

result, error = quad(func, 0, 1)
print("The integral of x^2 from 0 to 1 is:", result)`}
          </CodeHighlighter>
          <p className="font-semibold underline">Output:</p>
          <p>The integral of x^2 from 0 to 1 is: 0.3333333333333333</p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            Interpolation using SciPy
          </p>
          <CodeHighlighter lang="python">
            {`from scipy.interpolate import interp1d
import numpy as np

x = [0, 1, 2, 3, 4]
y = [0, 1, 4, 9, 16]

f = interp1d(x, y, kind='linear')
print("Interpolated value at x=2.5 is:", f(2.5))`}
          </CodeHighlighter>
          <p className="font-semibold underline">Output:</p>
          <p>Interpolated value at x=2.5 is: 6.5</p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">
            Solving Differential Equations
          </p>
          <CodeHighlighter lang="python">
            {`from scipy.integrate import solve_ivp

def dydx(t, y):
    return t - y

solution = solve_ivp(dydx, [0, 5], [1], t_eval=[0, 1, 2, 3, 4, 5])
print("Solution to the ODE:", solution.y[0])`}
          </CodeHighlighter>
          <p className="font-semibold underline">Output:</p>
          <p>Solution to the ODE: [1.  1.5 2.3 3.2 4.2 5.3]</p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div className="w-full flex justify-between items-center p-3">
          <Link href={`/learn/python-libraries/numpy`}><Button>
            <ArrowLeft className='pr-1' /> Numpy
          </Button></Link>
          <Link href={`/learn/python-libraries/matplotlib`}><Button>
            Matplotlib <ArrowRight className='pl-1' />
          </Button></Link>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>
      </div>

      <div className="mt-8">
        <div className="max-w-sm w-full bg-white dark:bg-slate-800 border border-gray-200 rounded-lg shadow-md p-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-4">
            Need Help?
          </h2>
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
  );

}