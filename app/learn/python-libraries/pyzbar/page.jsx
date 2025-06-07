import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import Image from 'next/image'

export const metadata = {
  title: "QR Code Decoder || Python Libraries",
  description: "Learn how to Decode QR Codes using Python with pyzbar and pillow.",
}

export default function Pyzbar() {
   return (
         <div className="min-h-[90vh] overflow-y-scroll mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
              <div className='flex flex-row gap-1 items-center'>
                <SidebarTrigger />
                <p className='text-xl'>Menu</p>
              </div>
              <p>
                QR Code Decoder
              </p>
            </h1>
            <div>
               <div>
                  <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Decode QR-Code using Python</p>
                  <p>- We decode QR-Code very easily.<br />
                     - We need two packeges to decode the QR.</p>
               </div>

               <div className="w-full border dark:border-white border-purple-700 my-5"></div>

               <div>
                  <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">We need two packeges, let's install at first</p>

                  <CodeHighlighter lang="python">
{`pip install pyzbar`}
                  </CodeHighlighter>
                  <p>also install</p>
                  <CodeHighlighter lang="python">
{`pip install pillow`}
                  </CodeHighlighter>
                  <p>we use <b>pyzbar</b> for decode QR-Code and <b>pillow</b> to allow opening images</p>
               </div>

               <div className="w-full border dark:border-white border-purple-700 my-5"></div>

               <div>
                  <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">At first we make a simple QR</p>
                  <p>Insia directory let we have a QR-Code png <b>myqr.png</b></p>
                  <div className="flex justify-center items-center flex-col">
                     <Image src="/Pylib/myqr.png" width={75} height={75} className="w-[75%] sm:w-[25%] m-1" alt="QR-Code" />
                     <p className="underline text-violet-700 dark:text-violet-400 font-semibold">myqr.png</p>
                  </div>
                  <p>In this directory we make a python code and decode the QR-Code.</p>
                  <CodeHighlighter lang="python">
{`from pyzbar.pyzbar import decode
from PIL import Image

decoded = decode(Image.open("myqr.png"))
print(decoded[0].data.decode("ascii"))`}
                  </CodeHighlighter>
                  <p>After running this code we get the data from this a QR png</p>
                  <div>Data is: <Link className="underline text-blue-600 dark:text-blue-400" href="/">https://debojyotitantra.vercel.app</Link></div>
                  <p>We successfully decode the QRCode</p>
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

            <div className="w-full border dark:border-white border-purple-700 my-5"></div>

            <PythonLibrariesComments />
         </div>
   );
}