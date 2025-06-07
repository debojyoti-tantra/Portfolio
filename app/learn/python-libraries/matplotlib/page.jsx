import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'

export const metadata = {
    title: "Matplotlib || Python Libraries",
    description: "How to use Matplotlib || Learn Matplotlib.",
};

export default function Matplotlib() {
  return (
    <div className="min-h-[90vh] overflow-y-scroll mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 flex flex-row justify-center items-center gap-3">
        <div className='flex flex-row gap-1 items-center'>
          <SidebarTrigger />
          <p className='text-xl'>Menu</p>
        </div>
        <p>Matplotlib</p>
      </h1>

      <div>
        <div>
          <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">What is Matplotlib?</p>
          <p>
            - Matplotlib is a Python plotting library used for creating static, animated, and interactive visualizations.<br />
            - It can be used for plotting graphs such as line plots, bar charts, histograms, and more.<br />
            - Matplotlib was created by John D. Hunter in 2003 and has become a core plotting library in Python.<br />
            - Matplotlib works well with NumPy and Pandas data structures.
          </p>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

         <div>
             <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">At First we downlode the library of Matplotlib</p>
             <CodeHighlighter lang="python">
                pip install matplotlib
             </CodeHighlighter>
          </div>

          <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Matplotlib Basic Example</p>

          <CodeHighlighter lang="python">
            {`import matplotlib.pyplot as plt

# Create data
x = [1, 2, 3, 4, 5]
y = [1, 4, 9, 16, 25]

# Create a figure
plt.figure(figsize=(10, 6))

# Plot the data
plt.plot(x, y, label='y = x^2')

# Set title, labels, and limits
plt.title('Basic Plot')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.xlim(0, 6)
plt.ylim(0, 30)

# Add ticks
plt.xticks([1, 2, 3, 4, 5])
plt.yticks([0, 5, 10, 15, 20, 25])

# Add grid, legend, and show the plot
plt.grid(True)
plt.legend()
plt.show()`}
          </CodeHighlighter>

          <p>This code demonstrates how to use various `matplotlib` functions:</p>
          <ul>
            <li><b>plt.figure(figsize=(10, 6))</b> - Initializes a new figure with a custom size (width: 10, height: 6).</li>
            <li><b>plt.plot(x, y, label='y = x^2')</b> - Plots the line for the data and adds a label for the legend.</li>
            <li><b>plt.title('Basic Plot')</b> - Sets the title of the plot.</li>
            <li><b>plt.xlabel('X-axis')</b> and <b>plt.ylabel('Y-axis')</b> - Sets labels for the X and Y axes respectively.</li>
            <li><b>plt.xlim(0, 6)</b> and <b>plt.ylim(0, 30)</b> - Defines the limits for the X and Y axes.</li>
            <li><b>plt.xticks([1, 2, 3, 4, 5])</b> and <b>plt.yticks([0, 5, 10, 15, 20, 25])</b> - Specifies the tick positions for the X and Y axes.</li>
            <li><b>plt.grid(True)</b> - Displays the grid on the plot.</li>
            <li><b>plt.legend()</b> - Adds a legend to the plot.</li>
            <li><b>plt.show()</b> - Displays the plot in a window.</li>
          </ul>
        </div>

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>

        <div>
          <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Conclusion</p>
          <p>Matplotlib is a very versatile plotting library that can be used for a variety of visualizations. It is essential for data visualization in Python and can be customized to meet specific needs, including adding titles, labels, legends, and modifying axes and grid properties.</p>
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

        <div className="w-full border dark:border-white border-purple-700 my-5"></div>
      </div>
      <PythonLibrariesComments />
    </div>
  );
}