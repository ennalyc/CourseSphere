'use client'
import React, { useState } from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    return (
    <div className='flex flex-row gap-2'>
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Digite o nome do curso' className='bg-neutral-200 w-2xl h-8 text-xs text-neutral-400 border border-neutral-300 rounded-md pl-3'/>
        <button className='h-8 w-8 bg-black text-white flex justify-center items-center rounded-md'>
            <Search/>
        </button>
    </div>
  )
}

export default SearchBar