import { GithubIcon, LinkedinIcon, TwitchIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-200 dark:bg-slate-950 border-t border-gray-500'>
      <div className='grid grid-cols-2 p-4'>
        <div className='flex flex-col justify-start gap-2'>
          <p className='mx-auto text-lg'>Socials</p>
          <Link href={`https://github.com/debojyoti-tantra`} className='flex justify-center items-center gap-2 underline text-sm hover:text-blue-500'>Github <GithubIcon /></Link>
          <Link href={`https://www.linkedin.com/in/debojyoti-tantra-369528343`} className='flex justify-center items-center gap-2 underline text-sm hover:text-blue-500'>Linkedin <LinkedinIcon /></Link>
          <Link href={`https://x.com/debojyotitantra`} className='flex justify-center items-center gap-2 underline text-sm hover:text-blue-500'>Twitter <TwitchIcon /></Link>
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <p className='mx-auto text-lg'>About the page</p>
        </div>
      </div>

    </div>
  )
}

export default Footer