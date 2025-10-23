import React from 'react'

const CustomTag = ({tagName, selected}: {tagName: string, selected: boolean}) => {

  return (
    <div className={`border rounded-md border-neutral-500 text-neutral-500 font-medium px-2 py-1 ${selected ? 'text-white bg-neutral-500' : ''}`}>
        {tagName}
    </div>
  )
}

export default CustomTag