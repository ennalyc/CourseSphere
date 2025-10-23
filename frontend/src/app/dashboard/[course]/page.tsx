'use client'
import React, { useState } from 'react'
import Header from '@/components/Header'
import { ChevronLeft, GraduationCap, Settings, Calendar, CalendarCheck, User } from 'lucide-react'
import Link from 'next/link'
import CourseClasses from '@/components/CourseClasses'
import ConfigButton from '@/components/ConfigButton'

const CoursePage = ({title}: {title: string}) => {
    const [isCourseConfigOpen, setIsCourseConfigOpen] = useState(false)
    const [isInstructorsConfigOpen, setIsInstructorsConfigOpen] = useState(false)

  return (
    <div>
        <Header/>
        <section className='px-16'>
            <Link href={'/dashboard'} className='gap-2 flex flex-row text-neutral-400 text-sm items-center font-medium'>
                <ChevronLeft size={16}/>
                <GraduationCap size={16}/>
                <span>Seus Cursos</span>
            </Link>
            <div>
                <div className='flex flex-row items-baseline gap-2'>
                    <h1 className='text-3xl font-bold mt-2 truncate'>Titulo do curso</h1>
                    <div className='flex flex-row gap-2 items-center'>
                        <Settings size={16} className='text-neutral-500' onClick={() => setIsCourseConfigOpen(!isCourseConfigOpen)}/>
                        {
                            isCourseConfigOpen && (
                            <ConfigButton/>
                            )
                        }
                    </div>
                </div>
                <div className='flex flex-row text-neutral-400 gap-4 mt-1'>
                    <div className='flex flex-row gap-2  items-center'>
                    <Calendar size={16}/>
                    <span>22/05/2025</span>
                    </div>
                    <div className='flex flex-row gap-2 items-center'>
                        <CalendarCheck size={16}/>
                        <span>07/12/2025</span>
                    </div>
                </div>
                <p className='text-md text-neutral-400 mt-1'>Este curso introdutório oferece uma base robusta na linguagem de programação Python, essencial para tecnologia e ciência de dados. Desenvolvido para iniciantes, o programa aborda desde a sintaxe fundamental, tipos de dados e estruturas de controle, até a criação de funções e manipulação básica de dados. Ao final, o aluno estará apto a escrever scripts funcionais e terá a competência necessária para avançar em tópicos especializados, como desenvolvimento web, automação ou análise de dados.</p>
            </div>
        </section>
        <section className='px-16 flex flex-row mt-8 gap-2 justify-between'>
            <div>
                <div className='flex flex-row gap-2 text-neutral-600 font-semibold items-center'>
                    <span>Instrutores</span>
                    <div className='flex flex-row gap-2 items-center'>
                        <Settings size={16} className='text-neutral-500' onClick={() => setIsInstructorsConfigOpen(!isInstructorsConfigOpen)}/>
                        {
                           isInstructorsConfigOpen && (
                            <ConfigButton/>
                            )
                        }
                    </div>
                </div>
                <div className='border border-neutral-400 rounded-md w-56 min-h-16 mt-3 p-4'>
                    <div className='flex flex-row gap-3 text-neutral-400'>
                        <User/>
                        <span>Francisco Cisco</span>
                    </div>
                </div>
            </div>
            <CourseClasses/>
        </section>
    </div>
  )
}

export default CoursePage