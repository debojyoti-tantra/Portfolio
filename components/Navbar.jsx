'use client'
import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { UserButton, useUser, useClerk, SignedOut, SignedIn } from '@clerk/nextjs'
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from './ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { ArrowBigDownIcon } from 'lucide-react';

const Navbar = () => {
  const { openSignIn, openSignUp } = useClerk()
  const { isLoaded, isSignedIn, user } = useUser()
  const pathname = usePathname()
  const router = useRouter()

  const pages = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Learn", path: "/learn" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-200 shadow-md dark:bg-slate-800 flex justify-between items-center py-2 px-4">

      <div className='flex justify-center items-center flex-col sm:flex-row'>
        <Link href={'/'} className="text-base sm:text-xl font-semibold text-purple-700 dark:text-purple-300">
          &lt;/&gt; Debojyoti Tantra
        </Link>

        {/* Navigation links for Small Screens */}
        <div className='sm:hidden'>
          <DropdownMenu>
            <DropdownMenuTrigger className="underline">
              {
                pathname.split("/")[1] === "" ? (
                  <div className='flex justify-center items-center gap-1'>
                    HOME <ArrowBigDownIcon />
                  </div>
                ) : (
                  <div className='flex justify-center items-center gap-1'>
                    {pathname.split("/")[1].toUpperCase()} <ArrowBigDownIcon />
                  </div>
                )
              }
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                {
                  pages.map(({ name, path }) => (
                    <Link href={path} className='' key={path}>
                      <DropdownMenuItem>
                        {name}
                      </DropdownMenuItem>
                    </Link>
                  ))
                }
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Navigation Links for larger screens */}
      <ul className="hidden sm:flex items-center gap-6 pr-4 font-semibold">
        {pages.map(({ name, path }) => (
          <li key={path}>
            <Link
              href={path}
              className={`hover:underline ${pathname === path
                ? "underline text-purple-700 dark:text-purple-300"
                : ""
                }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex justify-center items-center gap-2'>
        <ThemeToggle />
        {
          isLoaded ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : (
            <Skeleton className="rounded-full h-8 w-8" />
          )
        }
        <SignedOut>
          <div className="flex justify-center items-center gap-2 flex-col sm:flex-row">
            <Button className='px-2' onClick={openSignIn}>Sign In</Button>
            <Button className='px-2' onClick={openSignUp}>Sign Up</Button>
          </div>
        </SignedOut>
      </div>
    </nav>
  )
}

export default Navbar