'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
    <div>
        <h2>Requsted page not found</h2>
        <Link href="/" className="text-blue-500">
        Back to Home page
      </Link>
    </div>
    );
  }
  