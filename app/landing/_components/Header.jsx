'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import colors from '../../lab/colors';


function Header() {
  
  return (
    <div className='flex py-2 px-4 items-center justify-between bg-white shadow-md border-b-4 border-b-neutral-300'>
        <Image src="/logo1.svg" width={60} height={60} alt="logo" />
        <ul className='flex gap-6' style={{color:colors.primary}}>
            <li className='hover:text-violet-500 hover:font-bold transition-all cursor-pointer'>Home</li>
            <li className='hover:text-violet-500 hover:font-bold transition-all cursor-pointer'>Features</li>
            <li className='hover:text-violet-500 hover:font-bold transition-all cursor-pointer'>About us</li>
        </ul>
            <Link href="/sign-in">
            <button className="w-full px-4 py-2 rounded-md text-sm  cursor-pointer" 
            style={{backgroundColor:colors.secondary,color:colors.text.muted}}>
              Sign In
            </button>
          </Link>

    </div>
  )
}

export default Header