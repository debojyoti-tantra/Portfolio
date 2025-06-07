import React from 'react';
import Link from 'next/link'

export const metadata = {
    title: "Not Found",
    description: "Please return to Home.",
};

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col">
      <h1 className="text-xl">404 - Page Not Found</h1>
      <p className="text-2xl">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-800 dark:text-blue-400 underline" >
        Go back to Home
      </Link>
    </div>
  );
}