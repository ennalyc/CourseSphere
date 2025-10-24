import React from 'react'
import { Plus } from 'lucide-react'

function CustomAddButton({text}: {text: string}) {

    return (
    <button className='bg-black w-40 h-8 flex flex-row justify-center items-center text-white font-semibold gap-2 rounded-md'>
        <Plus size={18}/>
        {text}
    </button>
  )
}

export default CustomAddButton