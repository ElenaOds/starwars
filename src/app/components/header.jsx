'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) => {
    return pathname === href;
  };

    return (
      <header>
      <Link 
      href="/"
      className={clsx("text-blue-500", isActive("/") && "text-orange-500")}
      >
        Home
      </Link>

      <Link
      href="/heroes"
      className={clsx("text-blue-500", isActive("/heroes") && "text-orange-500")}
       >
        Heroes
      </Link>
      </header>
    );
  }