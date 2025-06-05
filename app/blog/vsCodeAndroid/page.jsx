import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CodeHighliter from '@/components/CodeHighliter'
import VsCodeAndroidComments from '@/components/VsCodeAndroidComments';

export const metadata = {
   title: "Install VS Code",
   description: "How to download VS Code in any android system",
};

const vsCodeAndroid = () => {
   return (
      <div className="w-[90vw] mx-auto p-4 pb-7 min-h-screen flex flex-col gap-5">
         <div className="mx-auto flex gap-3 justify-center items-center flex-col">
            <h1 className="text-xl sm:text-2xl font-bold underline">Install VS Code in Android</h1>
            <p>VS Code is one type of Code Editor. It's supports many language like HTML, CSS, JS, Python, JAVA, C, C++ etc. It's not avilable for android divices. But after some configrations we can downlode the visualstudio code editor in android divices. Read this blog and you will undersatnd how can we do this.</p>
            <div className="flex justify-self-start items-center gap-2">
               <Image src="/171080341.png" width={20} height={20} className="border border-black dark:border-gray-300 rounded-full bg-white" alt="logo img" />
               <div className="font-semibold text-base">Debojyoti Tantra</div>
               <div className="text-gray-500 dark:text-gray-300 text-sm">December 15,2024</div>
            </div>
         </div>

         <div className="flex flex-col gap-3">
            <div className="step-1">
               <h2 className="text-xl font-bold underline">Step 1 - Install Termux</h2>
               <p>Termux is a powerful terminal emulator and Linux environment app for Android devices. It combines a robust command-line interface (CLI) with a lightweight package manager, enabling users to install and use Linux software directly on their Android phones or tablets.</p>
               <a className="text-blue-700 dark:text-blue-300 flex items-center" href="https://f-droid.org/en/packages/com.termux/">--&gt;<p className="underline">Click here to Downlode Termux</p>&lt;--</a>
            </div>

            <div className="step-2">
               <h2 className="text-xl font-bold underline">Step 2 - Install Ubuntu using Termux</h2>
               <p>Enter the following command on Termux to update the package repository</p>

               <CodeHighliter>
                  pkg update
               </CodeHighliter>
               <CodeHighliter>
                  pkg upgrade
               </CodeHighliter>
               <p>Now let's install proot-distro using the following command:</p>
               <CodeHighliter>
                  pkg install proot-distro
               </CodeHighliter>
               <p>Now fire this command and Ubuntu will start to install on your Android phone</p>
               <CodeHighliter>
                  proot-distro install ubuntu
               </CodeHighliter>

               <p>Now, start Ubuntu by firing the following command:</p>
               <CodeHighliter>
                  proot-distro login ubuntu
               </CodeHighliter>

               <p>You will now see a root@ubuntu prompt in the terminal(Termux)</p>
            </div>

            <div className="step-3">
               <h2 className="text-xl font-bold underline">Step 3 - Downloading code server</h2>
               <p>Now update and upgrade the root repository by following commands</p>
               <CodeHighliter>
                  apt update
               </CodeHighliter>
               <CodeHighliter>
                  apt upgrade
               </CodeHighliter>

               <p>Now install wget using the following command:</p>
               <CodeHighliter>
                  apt install wget
               </CodeHighliter>
               <p>We will now download the latest release of the code server from Github using the following command:</p>
               <CodeHighliter>
                  wget https://github.com/coder/code-server/releases/download/v4.16.1/code-server-4.16.1-linux-arm64.tar.gz
               </CodeHighliter>

               <p>Extract the tarball using the following command:</p>
               <CodeHighliter>
                  tar -xvf ./code-server-4.16.1-linux-arm64.tar.gz
               </CodeHighliter>

               <p>Enter the /bin folder of your code-server installation on Ubuntu (running on your phone)</p>
               <CodeHighliter>
                  cd code-server-4.16.1-linux-arm64
               </CodeHighliter>
               <CodeHighliter>
                  cd bin
               </CodeHighliter>
            </div>

            <div className="step-4">
               <h2 className="text-xl font-bold underline">Step 4 - Set up a password and start using VS Code</h2>
               <p>Setup a password for your VS Code instance using the following command:</p>
               <CodeHighliter>
                  export PASSWORD="password"
               </CodeHighliter>
               <p>Launch the code  server using the following command:</p>
               <CodeHighliter>
                  ./code-server
               </CodeHighliter>
               <p>Now go to <a className="text-blue-700 dark:text-blue-300" href="http://localhost:8080/">localhost:8080</a> and use VS Code.</p>
            </div>

            <div>
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


            <VsCodeAndroidComments />

         </div>
      </div>
   )
}

export default vsCodeAndroid