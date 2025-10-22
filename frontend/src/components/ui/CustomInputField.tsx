import React from 'react'

function CustomInputField({fieldTitle, placeHolder, htmlField, style, inputType}: {fieldTitle: string, placeHolder: string, htmlField: string, style: string, inputType: string}) {
  return (
    <div className='flex flex-col gap-2'>
        <label htmlFor={htmlField} className='font-semibold text-black'>{fieldTitle}</label>
        <input id={htmlField} type={inputType} placeholder={placeHolder} className={`${style} h-12 pl-3 bg-neutral-200 border border-neutral-300 rounded-md text-neutral-400`}/>
    </div>
  )
}

export default CustomInputField