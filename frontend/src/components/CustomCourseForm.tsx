'use client'
import React, { useState } from 'react'
import CustomInputField from './ui/CustomInputField'
import { X } from 'lucide-react'
import { courseForm } from '@/lib/constants/formTypes'

const CustomCourseForm = () => {
  const [isOpened, setIsOpened] = useState(true)
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsOpened(false)
    setIsClicked(true)
  }
  const dateStartField = courseForm.find(c => c.id === 3)
  const dateEndField = courseForm.find(c => c.id === 4)
    return (
    <div>
      {
        isOpened && (
          <div onClick={() => setIsOpened(false)} className='fixed inset-0 bg-black/50 flex flex-col items-center justify-center gap-3'>
            <div onClick={(e) => e.stopPropagation()} className='bg-white h-8/12 w-lg rounded-xl border border-neutral-600 p-8'>
              <div className='relative mb-4'>
                <X size={16} className='text-neutral-500 absolute right-0' onClick={() => handleClick()}/>
              </div>
              <form className='w-full flex flex-col'>
                <div className='flex flex-col gap-2'>
                  {
                    courseForm.map((field) => (
                      <div key={field.id}>
                            {
                            field.id != 3 && field.id != 4  && (

                              <CustomInputField
                              fieldTitle={field.fieldTitle}
                              placeHolder={field.placeHolder}
                              htmlField={field.fieldTitle}
                              inputType={field.inputType}
                              style='w-full'
                              />
                              
                            )
                          }                       
                      </div>
                      
                    ))
                  }
                </div>
              {dateStartField && dateEndField && (
                  <div className='flex flex-row w-fill gap-3'>
                    <CustomInputField
                      fieldTitle={dateStartField.fieldTitle}
                      placeHolder={dateStartField.placeHolder}
                      htmlField={dateStartField.fieldTitle}
                      inputType={dateStartField.inputType}
                      style='w-full'
                      />
                    <CustomInputField
                      fieldTitle={dateEndField.fieldTitle}
                      placeHolder={dateEndField.placeHolder}
                      htmlField={dateEndField.fieldTitle}
                      inputType={dateEndField.inputType}
                      style='w-full'
                      />
                  </div>
                )}
                <button className='bg-black w-full h-12 rounded-md mt-4 text-white font-semibold' type='submit'>Cadastrar curso</button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CustomCourseForm