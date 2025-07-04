import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: "Barcode Generator || Python Libraries",
  description: "Generate Barcodes easily using python-barcode library in Python.",
}

const BarcodePage = () => {
  return (
    <div className="min-h-[90vh] overflow-y-scroll mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
        <div className='flex flex-row gap-1 items-center'>
          <SidebarTrigger />
          <p className='text-xl'>Menu</p>
        </div>
        <p>Barcode Generator</p>
      </h1>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="w-full flex justify-start items-center p-3">
        <Link href={`/learn/python-libraries/pyzbar`}><Button>
          <ArrowLeft className='pr-1' /> pyzbar
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Make Barcode using Python</p>
        <p>- We can generate barcodes very easily using the <code>python-barcode</code> library.</p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Install the Required Package</p>
        <CodeHighlighter lang="python">pip install python-barcode</CodeHighlighter>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Using <code>ean13</code> Class</p>
        <p>This creates a barcode in SVG format. Write and run this code inside a directory:</p>
        <CodeHighlighter lang="python">
          {`import barcode

bar = barcode.get_barcode_class("ean13")
Bar = bar("1234567890128")
Bar.save("make-barcode")`}
        </CodeHighlighter>
        <p>After running, it will generate a <b>make-barcode.svg</b> file.</p>
        <div className="flex justify-center items-center flex-col">
          <Image src="/Pylib/make-barcode.svg" width={75} height={75} className="w-[90%] sm:w-[50%] m-1" alt="Bar-Code" />
          <p className="underline text-violet-700 dark:text-violet-400 font-semibold">make-barcode.svg</p>
        </div>
        <p>Scan this to get the encoded data.</p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Using <code>code39</code> Class</p>
        <p>This creates a barcode in PNG format. Run this code inside a directory:</p>
        <CodeHighlighter lang="python">
          {`import barcode
from barcode.writer import ImageWriter

bar = barcode.get_barcode_class("code39")
Bar = bar("1234567890128", writer=ImageWriter())
Bar.save("make-barcodes")`}
        </CodeHighlighter>
        <p>After running, it will generate a <b>make-barcodes.png</b> file.</p>
        <div className="flex justify-center items-center flex-col">
          <Image src="/Pylib/make-barcodes.png" width={75} height={75} className="w-[90%] sm:w-[50%] m-1" alt="Bar-Code" />
          <p className="underline text-violet-700 dark:text-violet-400 font-semibold">make-barcodes.png</p>
        </div>
        <p>Scan this to get the encoded data.</p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="w-full flex justify-start items-center p-3">
        <Link href={`/learn/python-libraries/pyzbar`}><Button>
          <ArrowLeft className='pr-1' /> pyzbar
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

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <PythonLibrariesComments />
    </div>
  )
}

export default BarcodePage
