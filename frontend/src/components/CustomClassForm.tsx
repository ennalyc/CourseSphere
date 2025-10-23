import React, { useState } from 'react'
import { X } from 'lucide-react'
import CustomInputField from './ui/CustomInputField'
import CustomTag from './ui/CustomTag'

const CustomClassForm = () => {
    const [isOpened, setIsOpened] = useState(true)
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsOpened(false)
        setIsClicked(true)
    }
    
    const [classStatus, setClassStatus] = useState('')
    const [classSelected, setClasSelected] = useState(false)
    const handleSelection = (c: string) => {
        setClassStatus(c)
        setClasSelected(true)
    }

    const classStat = [
        {id: 1, status: 'Rascunho'},
        {id: 2, status: 'Publicado'},
        {id: 3, status: 'Arquivo'}
    ]
  return (
    isOpened && (
        <div onClick={() => setIsOpened(false)} className='fixed inset-0 bg-black/50 flex flex-col items-center justify-center gap-3'>
        <div onClick={(e) => e.stopPropagation()} className='bg-white h-7/11 w-lg rounded-xl border border-neutral-600 p-8'>
            <div className='relative mb-4'>
                <X size={16} className='text-neutral-500 absolute right-0' onClick={() => handleClick()}/>
            </div>
            <form className='flex flex-col' action="">
                <CustomInputField
                fieldTitle='Título'
                placeHolder='Digite um título'
                htmlField='title'
                style='w-full'
                inputType='text'
                />
                <div className='mt-3'>
                    <label className='font-semibold' htmlFor="status">Status</label>
                    <div className='flex flex-row gap-3 mt-2'>
                        {
                            classStat.map((clss) => (
                                <div key={clss.id} onClick={() =>  handleSelection(clss.status)}>
                                    <CustomTag
                                    tagName={clss.status}
                                    selected={classStatus === clss.status}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full flex flex-row gap-4 mt-3'>
                        <CustomInputField
                        fieldTitle='Data de Publicação'
                        placeHolder=''
                        htmlField='date'
                        style='full'
                        inputType='date'
                        />
                        <CustomInputField
                        fieldTitle='Vídeo URL'
                        placeHolder='Digite o URL do vídeo'
                        htmlField='url'
                        style='full'
                        inputType='text'
                        />
                    </div>
                </div>
                <button className='bg-black w-full h-12 rounded-md mt-6 text-white font-semibold' type='submit'>Cadastrar aula</button>

            </form>
        </div>
    </div>
    )
  )
}

export default CustomClassForm