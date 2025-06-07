import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-10 px-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About This Site</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Built with <span className="text-purple-400 font-medium">Next.js</span> and <span className="text-purple-400 font-medium">Tailwind CSS</span>, this site is my portfolio website. Designed and developed by Debojyoti Tantra.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
          <ul className="space-y-2">
            <li>
              <Link href="https://github.com/debojyoti-tantra" className="flex items-center gap-2 hover:text-purple-400 transition">
                <GithubIcon size={20} />
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/debojyoti-tantra-369528343" className="flex items-center gap-2 hover:text-purple-400 transition">
                <LinkedinIcon size={20} />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://x.com/debojyotitantra" className="flex items-center gap-2 hover:text-purple-400 transition underline">
                <TwitterIcon size={20} />
                Twitter
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/projects" className="hover:text-purple-400 transition underline">Projects</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-purple-400 transition underline">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-purple-400 transition underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Debojyoti Tantra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
