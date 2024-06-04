'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
    <div className="h-screen pt-10 md:pb-10 lg:pb-44 px-10 flex flex-col">
        <h2 className="text-white mb-5 self-center">Ups...Requested page not found</h2>
        <Link href="/" className="text-blue-500 self-center underline underline-offset-1 hover:text-amber-400">
        Back to Home page
      </Link>
    </div>
    );
  }
  