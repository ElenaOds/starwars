'use client'

import Link from 'next/link';
import Image from "next/image";
import { usePathname } from "next/navigation";

import clsx from 'clsx';

export default function Header({}) {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

    return (
      <header className="flex items-center justify-between py-3 px-10 border-b-2 border-amber-400">
    <Link 
      href="/">
     <Image
        src='/icons/logo.svg'
        alt="logo"
        width={60}
        height={60}
        priority={true}
      /> 
      </Link>
      <div className="flex items-center gap-5">
      <Link 
      href="/"
      className={clsx("hover:underline underline-offset-1",
      isActive("/") ? "text-amber-400" : "text-blue-500")}
      >
    Home
      </Link>
    
      <Link
      href="/heroes"
      className={clsx("hover:underline underline-offset-1",
      isActive("/heroes") ? "text-amber-400" : "text-blue-500")}
       >
        Heroes
      </Link>
      </div>
      </header>
    );
  }