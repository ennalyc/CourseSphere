'use client'
import React, { useState } from 'react'
import { Settings } from 'lucide-react'
import CustomAddButton from './ui/CustomAddButton'
import SearchBar from './ui/SearchBar'
import CustomClassForm from './CustomClassForm' 
const CourseClasses = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className='w-3/4'>
        <div className='flex flex-row justify-between mb-2 items-center'>
            <div className='flex flex-row gap-2 text-neutral-600 font-semibold'>
                <Settings/>
                <span>Aulas</span>
            </div>
            <div onClick={() => setIsClicked(!isClicked)}>
              <CustomAddButton
              text='Nova Aula'
              />
            </div>
        </div>
        {
          isClicked && (
            <CustomClassForm/>
          )
        }
        <SearchBar/>
        <div className='mt-4'>
            <div className='bg-neutral-500 h-24 w-40 rounded-sm'/>
            <span className='mt-1'>Title</span>
        </div>
    </div>
  )
}

export default CourseClasses