'use client'
import React, { useState } from 'react'
import { Edit, Trash } from 'lucide-react'

const ConfigButton = () => {
    const [isSelected, setIsSelected] = useState('')
    const [isOpened, setIsOpened] = useState(true)
    return (
    <div className={`${isOpened ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} transition-transform duration-500 ease-in-out flex flex-row gap-2`}>
        <div onClick={() => setIsSelected('editar')} className={`${isSelected === 'excluir' ? 'bg-neutral-500 text-white hover:bg-neutral-600 hover:text-white' : ''} flex flex-row gap-2 text-neutral-500 text-sm h-6 w-20 justify-center items-center rounded-md border border-neutral-500 hover:bg-neutral-200 hover:text-neutral-600`}>
            <Edit size={13}/>
            <span>Editar</span>
        </div>
        <div onClick={() => setIsSelected('excluir')} className={`${isSelected === 'excluir' ? 'bg-neutral-500 text-white hover:bg-neutral-600 hover:text-white' : ''} flex flex-row gap-2 text-neutral-500 text-sm h-6 w-20 justify-center items-center rounded-md border border-neutral-500 hover:bg-neutral-200 hover:text-neutral-600`}>
            <Trash size={13}/>
            <span>Excluir</span>
        </div>
    </div>
  )
}

export default ConfigButton