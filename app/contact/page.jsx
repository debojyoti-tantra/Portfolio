'use client'
import React, { useState } from 'react'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

const page = () => {
   const [contact, setContact] = useState('')
   const { user, isLoaded, isSignedIn } = useUser()

   const handleContactSubmit = () => {

   }

   if (!isLoaded || !isSignedIn) {
      return <div className="min-h-screen p-5">
         <div className="max-w-md mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-xl dark:shadow-slate-950 overflow-hidden md:max-w-2xl">
            <div className="md:flex">
               <div className="p-8 flex justify-center items-center flex-col">

                  <h2 className="text-xl sm:text-2xl underline font-bold text-gray-900 dark:text-gray-100">Sign Up to Contact with me</h2>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 text-base">
                     First, sign up to create an account. Once you're signed up, you will gain access to this contact page and other exclusive content.
                  </p>

                  <SignedOut className="flex justify-center items-center gap-3">
                     <SignInButton className="w-32 mt-4 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 font-medium">
                        Sign In
                     </SignInButton>
                     <SignUpButton className="w-32 mt-4 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-800 font-medium">
                        Sign Up
                     </SignUpButton>
                  </SignedOut>
                  <SignedIn>
                     <UserButton />
                  </SignedIn>
               </div>
            </div>
         </div>
      </div>
   }

   return (
      <div className="min-h-screen container mx-auto px-4 py-6">
         <h1 className="text-3xl font-bold text-center mb-4 underline">Contact Us</h1>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

               <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                     <p className="block mb-1 text-gray-900 dark:text-gray-100">Your Name: {user?.fullName}</p>
                  </div>
                  <div>
                     <p className="block mb-1 text-gray-900 dark:text-gray-100">Your Email: {user?.primaryEmailAddress.emailAddress}</p>
                  </div>
                  <div>
                     <label className="block mb-1 text-gray-700 dark:text-gray-300">Message</label>
                     <textarea
                        name="message"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        rows="5"
                        placeholder="Write your message"
                        required
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                     Send Message
                  </button>
               </form>

            </div>

            {/* Contact Information */}
            <div className="p-6 space-y-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold">Our Information</h2>
               <div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-medium">Email</h3>
                  <p className="text-gray-800 dark:text-gray-200">debojyotitantra9182@gmail.com</p>
               </div>
               <div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-medium">Social Media</h3>
                  <div className="flex gap-5">
                     <a href="https://www.instagram.com/debojyoti_tantra/" className="dark:invert">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={27} height={27} color={"#000000"} fill={"none"}>
                           <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                           <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
                           <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </a>
                     <a href="https://github.com/debojyoti-tantra/" className="dark:invert">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={27} height={27} color={"#000000"} fill={"none"}>
                           <path d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </a>
                  </div>
               </div>
               <div>
                  <h3 className="text-gray-900 dark:text-gray-100 font-medium">Address</h3>
                  <p className="text-gray-800 dark:text-gray-200">
                     Jalpaiguri or Siliguri, India
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default page