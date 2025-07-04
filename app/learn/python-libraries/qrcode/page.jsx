import React from 'react'
import CodeHighlighter from '@/components/CodeHighliter'
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'
import PythonLibrariesComments from '@/components/PythonLibrariesComments'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata = {
  title: "QR Code Generator || Python Libraries",
  description: "Learn how to generate QR Codes using Python with qrcode and pillow.",
}

const QRCodePage = () => {
  return (
    <div className="min-h-[90vh] overflow-y-scroll mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 flex flex-col sm:flex-row justify-center items-center gap-3">
        <div className='flex flex-row gap-1 items-center'>
          <SidebarTrigger />
          <p className='text-xl'>Menu</p>
        </div>
        <p>
          QR Code Generator
        </p>
      </h1>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="w-full flex justify-between items-center p-3">
        <Link href={`/learn/python-libraries/matplotlib`}><Button>
          <ArrowLeft className='pr-1' /> Matplotlib
        </Button></Link>
        <Link href={`/learn/python-libraries/pyzbar`}><Button>
          pyzbar <ArrowRight className='pl-1' />
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-2xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Make QR-Code using Python</p>
        <p>- We make QR-Code very easily.<br />
          - We need two packages to make it.
        </p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">We need two packages, let's install at first</p>
        <CodeHighlighter lang="python">pip install qrcode</CodeHighlighter>
        <p>also install</p>
        <CodeHighlighter lang="python">pip install pillow</CodeHighlighter>
        <p>We use <b>qrcode</b> for making QR-Code and <b>pillow</b> to allow image generation.</p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">At first we make a simple QR</p>
        <p>Inside a directory, write and run this code:</p>
        <CodeHighlighter lang="python">
          {`import qrcode

myqr = qrcode.make("https://debojyotitantra.vercel.app")  # making a QR
myqr.save("myqr.png")  # save the QR`}
        </CodeHighlighter>
        <p>After running this code, a <b>myqr.png</b> file will be created containing the QR code.</p>
        <div className="flex justify-center items-center flex-col">
          <Image src="/Pylib/myqr.png" width={75} height={75} className="w-[75%] sm:w-[25%] m-1" alt="QR-Code" />
          <p className="underline text-violet-700 dark:text-violet-400 font-semibold">myqr.png</p>
        </div>
        <p>Scan this QR code to visit: <Link className="underline text-blue-600 dark:text-blue-400" href="/">https://debojyotitantra.vercel.app</Link></p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div>
        <p className="text-xl text-purple-700 dark:text-purple-400 mb-2 font-semibold">Make QR adding custom parameters</p>
        <CodeHighlighter lang="python">
          {`import qrcode

# Create an instance of the QRCode class
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=8,
    border=3,
)

# Add the data to the QR code
qr.add_data("https://debojyotitantra.vercel.app")
qr.make(fit=True)

# Create and save the image
img = qr.make_image(fill='black', back_color='white')
img.save("myqr.png")`}
        </CodeHighlighter>
        <p>That's how we can create a QRCode with custom parameters.</p>
        <p>Feel free to experiment with the parameters to change the size, error correction, and design.</p>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="w-full flex justify-between items-center p-3">
        <Link href={`/learn/python-libraries/matplotlib`}><Button>
          <ArrowLeft className='pr-1' /> Matplotlib
        </Button></Link>
        <Link href={`/learn/python-libraries/pyzbar`}><Button>
          pyzbar <ArrowRight className='pl-1' />
        </Button></Link>
      </div>

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <div className="max-w-sm w-full bg-white dark:bg-slate-800 border border-gray-200 rounded-lg shadow-md p-6 text-center mx-auto mt-8">
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

      <div className="w-full border dark:border-white border-purple-700 my-5"></div>

      <PythonLibrariesComments />
    </div>
  )
}

export default QRCodePage
