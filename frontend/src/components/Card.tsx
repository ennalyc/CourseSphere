import React from 'react'
import { Calendar, CalendarCheck } from 'lucide-react'

const Card = ({title, startDate, endDate, description}: {title: string, startDate: string, endDate: string, description: string}) => {
  return (
    <article className='h-48 w-72 border border-neutral-400 rounded-md'>
        <h3 className='px-4 h-10 w-full mt-3 text-lg font-semibold border-b border-neutral-400'>{title}</h3>
        <div className='mt-4 px-4 justify-between flex flex-row text-xs text-neutral-400'>
            <div className='flex flex-row gap-2'>
                <Calendar size={16}/>
                <span>{startDate}</span>
            </div>
            <div className='flex flex-row gap-2'>
                <CalendarCheck size={16}/>
                <span>{endDate}</span>
            </div>
        </div>
        <p className='px-4 mt-2 text-balance line-clamp-5 text-xs text-neutral-400'>{description}</p>
    </article>
  )
}

export default Card