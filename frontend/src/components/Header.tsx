import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/logo.png'
import SearchBar from './ui/SearchBar'

const Header = () => {
  return (
    <div className='h-24 w-full gap-32 flex flex-row items-center justify-between px-16 bg-linear-to-b from-neutral-300 to-white'>
        <Image src={Logo} alt='logo' className='h-6 w-32 object-contain'/>
        <SearchBar/>
    </div>
  )
}

export default Header