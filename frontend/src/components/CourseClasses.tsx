'use client'
import React, { useState } from 'react'
import CustomAddButton from './ui/CustomAddButton'
import SearchBar from './ui/SearchBar'
import CustomClassForm from './CustomClassForm' 
import ConfigButton from './ConfigButton'
import { Settings } from 'lucide-react'

const CourseClasses = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [configOpen, setConfigOpen] = useState(false)
  return (
    <div className='w-3/4'>
        <div className='flex flex-row justify-between mb-2 items-center'>
            <div className='flex flex-row items-center gap-2 text-neutral-600 font-semibold'>
                <span>Aulas</span>
                <div className='flex flex-row items-center gap-2'>
                  <Settings size={16} className='text-neutral-500' onClick={() => setConfigOpen(!configOpen)}/>
                  {
                    configOpen && (
                      <ConfigButton/>
                    )
                  }
                </div>
            </div>
            <div onClick={() => setIsClicked(!isClicked)}>
              <CustomAddButton
              text='Nova Aula'
              />
              {
                isClicked && (
                  <CustomClassForm/>
                )
              }
            </div>
        </div>
        <SearchBar/>
        <div className='mt-4'>
            <div className='bg-neutral-500 h-24 w-40 rounded-sm'/>
            <span className='mt-1'>Title</span>
        </div>
    </div>
  )
}

export default CourseClasses