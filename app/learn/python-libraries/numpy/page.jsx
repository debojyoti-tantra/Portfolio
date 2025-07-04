import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
   title: "Numpy || Python Libraries",
   description: "How to use Numpy || Learn Numpy.",
};

const Numpy = () => {
   return (
      <div className="min-h-[90vh] overflow-y-scroll mx-auto p-6">
         <h1 className="text-3xl font-bold mb-4 flex flex-row justify-center items-center gap-3">
            <div className='flex flex-row gap-1 items-center'>
               <SidebarTrigger />
               <p className='text-xl'>Menu</p>
            </div>
            <p>
               Numpy
            </p>
         </h1>

         <div className="w-full border dark:border-white border-purple-700 my-5"></div>

         <div className="w-full flex justify-between items-center p-3">
            <Link href={`/learn/python-libraries/`}><Button>
               <ArrowLeft className='pr-1' /> Introduction
            </Button></Link>
            <Link href={`/learn/python-libraries/scipy`}><Button>
               Scipy <ArrowRight className='pl-1' />
            </Button></Link>
         </div>

         <div className="w-full border dark:border-white border-purple-700 my-5"></div>

         <div>
            <div>
               <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">What is NumPy?</p>
               <p>- NumPy is a Python library used for working with arrays.<br />
                  - It also has functions for working in domain of linear algebra, fourier transform, and matrices.<br />
                  - NumPy was created in 2005 by Travis Oliphant. It is an open source project and you can use it freely.<br />
                  - NumPy stands for Numerical Python.</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">At First we downlode the library of Numpy</p>
               <CodeHighlighter lang="python">
                  pip install numpy
               </CodeHighlighter>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">How to import NumPy?</p>
               <CodeHighlighter lang="python">
                  import numpy as np
               </CodeHighlighter>
               <p>That's how we can import numpy and we givw the short from of numpy ,i.e, np</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">How to convert a List to an Array using NumPy?</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np
a = [1,2,3,4,5]
arr = np.array(a)
print(arr)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>[1 2 3 4 5]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Finding Sum, Mean, Varience, Max or Min element of Array using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np
a = [1,2,3,4,5]
arr = np.array(a)

summCodeHighlighter)
print("The sum of the given numbers in the arrays are:", summ)

avg = np.mean(arr)
print("The average of the given numbers in the arrays are:", avg)

varience = np.var(arr)
print("The varience of the given numbers in the arrays are:", varience)

maxx = np.max(arr)
print("The maximum number present in the list is:", maxx)

minn = np.min(arr)
print("The minumum number present in the list is:", minn)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The sum of the given numbers in the arrays are: 15<br />
                  The average of the given numbers in the arrays are: 3.0<br />
                  The varience of the given numbers in the arrays are: 2.0<br />
                  The maximum number present in the list is: 5<br />
                  The minumum number present in the list is: 1</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Finding Dimension and Shape of Array using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np
a = [1,2,3,4,5]
arr = np.array(a)

dimdim = np.ndim(arr) # to find the dimensioCodeHighlightery
print("The dimension of the array is:", dim)

shape = np.shape(arr) # to find the shape of the array
print("The shape of the array is:", shape)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The dimension of the array is: 1<br />
                  The shape of the array is: (5,)</p>
               <p className="text-red-700 dark:text-red-300">shape (5,) means 5 element and 1 dimentional</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Change the shape of the array (e.g: Array to Matrix) of Array using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np
a = np.array([1,2,3,4,5,6,7,8,9]) # in one line make the array
a = a.reshape(3,3) # change the shape of the array
print("The matrix from by the array is:", a)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The matrix from by the array is:
                  [[1 2 3]<br />
                  [4 5 6]<br />
                  [7 8 9]]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Finding Dimension, Shape, Trace, Transpose of Matrix using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np
a = np.array([1,2,3,4,5,6,7,8,9])

dim = np.ndim(a)
print("The dimension of the matCodeHighlighter)

shape = np.shape(a)
print("The shape of the matrix is:", shape)

trace = np.trace(a)
print("The trace of the matrix is:", trace)

transpose = np.transpose(a)
print("The transpose of the matrix is:", transpose)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The dimension of the matrix is: 2<br />
                  The shape of the matrix is: (3, 3)<br />
                  The trace of the matrix is: 15<br />
                  The transpose of the matrix is:
                  [[1 4 7]<br />
                  [2 5 8]<br />
                  [3 6 9]]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Dot and Cross Product of two Vectors using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np

A = np.array([1,2,3])
B = np.aCodeHighlighter

print("First vector is:", A)
print("Second vector is:", B)

sc_product = np.dot(A,B) # dot product of two matrix
print("The dot product of these the two vectors is:", sc_product)

vec_product = np.cross(A,B) # cross product of two matrix
print("The cross product of these the two vectors are:", vec_product)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>First vector is: [1 2 3]<br />
                  Second vector is: [7 8 9]<br />
                  The dot product of these the two vectors is: 50<br />
                  The cross product of these the two vectors are: [-6 12 -6]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Multiplication of two Matrices using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np

arr1 = np.array([1,2,3,4,5,6,7,8,9])
m1 = arr1.reshape(3,3)
print("The first maCodeHighlighter)

arr2 = np.array([9,8,7,6,5,4,3,2,1])
m2 = arr2.reshape(3,3)
print("The second matrix is:", m2)

m1m2 = np.dot(m1,m2)
print("The multiplication of these two matrix is:", m1m2)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The first matrix is:
                  [[1 2 3]<br />
                  [4 5 6]<br />
                  [7 8 9]]<br />
                  The second matrix is:
                  [[9 8 7]<br />
                  [6 5 4]<br />
                  [3 2 1]]<br />
                  The multiplication of these two matrix is:
                  [[ 30 24 18]<br />
                  [ 84 69 54]<br />
                  [138 114 90]]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Inverse & Determinant of Matrix using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np

arr = [1,2,-1,2,1,4,3,3,4]
arr = np.array(arr)
M = arCodeHighlighter)
print("The Matrix is:", M)
invM = np.linalg.inv(M)
print("The Inverse of the matrix is:", invM)
detM = round(np.linalg.det(M))
print("The Determinant of the Matrix is:", detM)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The Matrix is:
                  [[ 1 2 -1]<br />
                  [ 2 1 4]<br />
                  [ 3 3 4]]<br />
                  The Inverse of the matrix is:
                  [[ 2.66666667 3.66666667 -3. ]<br />
                  [-1.33333333 -2.33333333 2. ]<br />
                  [-1. -1. 1. ]]<br />
                  The Determinant of the Matrix is:
                  -3</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div>
               <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Solution of three equation with three variables by matrix multiplication
                  method using NumPy</p>
               <CodeHighlighter lang="python">
                  {`import numpy as np

# three equations are (solve for x, y and z)
# x + 2y - z = 1
# 2CodeHighlighter2
# 3x + 3y + 4z = 1

A = np.array([1,2,-1,2,1,4,3,3,4])
B = np.array([1,2,1])

X = np.linalg.solve(A,B)
print("The solution of the equation is: ", X)`}
               </CodeHighlighter>
               <p className="font-semibold underline">Output:</p>
               <p>The solution of the equation is:
                  [[ 7.]<br />
                  [-4.]<br />
                  [-2.]]</p>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <div className="w-full flex justify-between items-center p-3">
               <Link href={`/learn/python-libraries/`}><Button>
                  <ArrowLeft className='pr-1' /> Introduction
               </Button></Link>
               <Link href={`/learn/python-libraries/scipy`}><Button>
                  Scipy <ArrowRight className='pl-1' />
               </Button></Link>
            </div>

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

         </div>

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

export default Numpy