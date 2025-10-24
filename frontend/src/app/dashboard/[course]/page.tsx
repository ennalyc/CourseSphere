'use client'
import React, { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import { ChevronLeft, GraduationCap, Settings, Calendar, CalendarCheck, User } from 'lucide-react'
import Link from 'next/link'
import CourseClasses from '@/components/CourseClasses'
import ConfigButton from '@/components/ConfigButton'
import { any, string } from 'zod'

async function getCourse(c: string) {
    const res = await fetch(`http://localhost:3000/api/courses/${c}`, {
        cache: 'no-store' 
    });

    if (!res.ok) {
        throw new Error('Falha ao buscar dados');
    }
    
    const data = await res.json();
    return data;
}

export async function getUser(id: string) {
  try {
    const res = await fetch(`/api/users/${id}`);
    if (!res.ok) {
      console.error(`Erro ao buscar usuário ${id}:`, res.status);
      return null;
    }
    const user = await res.json();
    return user;
  } catch (err) {
    console.error("Erro na função getUser:", err);
    return null;
  }
}

const CoursePage = () => {
    const params = useParams()
    const course = params.course as string

    const [isCourseConfigOpen, setIsCourseConfigOpen] = useState(false)
    const [isInstructorsConfigOpen, setIsInstructorsConfigOpen] = useState(false)

    const [data, setData] = useState<any | null>(null) 
    const [loading, setLoading] = useState(true)

    const [instructors, setInstructors] = useState<any[]>([])
    useEffect(() => {
         const fetchData = async () => {
              setLoading(true)
              
              try {
                const coursesData = await getCourse(course);

                if (coursesData && coursesData[0]?.instructors) {
                    const instructorIds = coursesData[0].instructors
                    const instructorPromises = instructorIds.map((id: string) => getUser(id));
                    const fetchedInstructors = await Promise.all(instructorPromises);
                    const validInstructors = fetchedInstructors.filter((i): i is any => i != null);
                    const uniqueInstructors = validInstructors.filter((inst, index, self) => index === self.findIndex((t) => t.id === inst.id)
                    ) 
                    
                    setInstructors(uniqueInstructors);
                    console.log(fetchedInstructors)
                }

                 setData(coursesData)
                
              } catch (error) {
                console.error(error)
                setData(null) 
              } finally {
                setLoading(false); 
              }
          };
    
          if (course) {
            fetchData() 
          }
    
      }, [course]) 
      return (
    <div>
        <Header/>
        <div>
            {loading && (
                <p className='px-16 mt-4 text-center'>Carregando curso...</p>
            )}
            {
                !loading && data && (
                    <div>
                        <section className='px-16'>
                            <Link href={'/dashboard'} className='gap-2 flex flex-row text-neutral-400 text-sm items-center font-medium'>
                                <ChevronLeft size={16}/>
                                <GraduationCap size={16}/>
                                <span>Seus Cursos</span>
                            </Link>
                            <div>
                                <div className='flex flex-row items-baseline gap-2'>
                                    <h1 className='text-3xl font-bold mt-2 truncate'>{data[0].name}</h1>
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
                                    <span>{data[0].start_date}</span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center'>
                                        <CalendarCheck size={16}/>
                                        <span>{data[0].end_date}</span>
                                    </div>
                                </div>
                                <p className='text-md text-neutral-400 mt-1'>{data[0].description}</p>
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
                                    {
                                        instructors && (
                                            instructors.map((inst) => (
                                            <div key={inst.id} className='flex flex-row gap-4 text-neutral-400'>
                                                <User/>
                                                <span>{inst.name}</span>
                                            </div>
                                        ))

                                        )
                                    }
                                </div>
                            </div>
                            <CourseClasses/>
                        </section>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default CoursePage