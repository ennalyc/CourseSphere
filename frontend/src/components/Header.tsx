import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import SearchBar from './ui/SearchBar'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='h-24 w-full gap-32 flex flex-row items-center justify-between px-16 bg-linear-to-b from-neutral-300 to-white'>
        <Link href='/dashboard'>
          <Image src={Logo} alt='logo' className='h-8 w-32 object-contain'/>
        </Link>
        <SearchBar/>
    </div>
  )
}

export default Header