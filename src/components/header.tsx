'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { cn } from '@/lib/utils'
import { FaBookOpenReader } from "react-icons/fa6";

const Header = () => {
    const pathname =usePathname();
  return (
    <header className='my-10 flex justify-between gap-5 text-white'>
        <Link href="/" className='flex items-center gap-2'>
            <FaBookOpenReader size={25}/>
            Book Store
        </Link>
      <ul className='flex flex-row items-center gap-8'>
        <Link 
        href='/library'       
        className={cn(
        "text-base cursor-pointer capitalize", 
        pathname === "/library"? "text-light-200":"text-light-100"
      )}>Library</Link>
      </ul>
    </header>
  )
}

export default Header
