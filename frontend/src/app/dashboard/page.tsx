'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import { Filter } from 'lucide-react'
import CustomAddButton from '@/components/ui/CustomAddButton'
import Card from '@/components/Card'
import Link from 'next/link'
import CustomCourseForm from '@/components/CustomCourseForm'

async function getCourses() {
    const res = await fetch(`http://localhost:3000/api/courses`, {
        cache: 'no-store' 
    });

    if (!res.ok) {
        throw new Error('Falha ao buscar dados');
    }
    
    const data = await res.json();
    return data;
}

const DashboardPage = () => {
  const [isOpened, setIsOpened] = useState(false)
  
  const [data, setData] = useState<any[]>([]) 
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     const fetchData = async () => {
          setLoading(true)
          
          try {
            const coursesData = await getCourses()
            setData(coursesData)
          } catch (error) {
            console.error(error)
            setData([]) 
          } finally {
            setLoading(false); 
          }
      };

      fetchData() 

  }, []) 
  

  return (
    <div className='flex flex-col'>
      <Header/>
      <section className='flex flex-row justify-between px-16'>
        <div className='flex flex-row gap-3 items-baseline'>
          <h1 className='font-bold text-3xl'>Seus cursos</h1>
          <div className='text-sm text-neutral-300 font-medium flex flex-row gap-1 justify-center items-center'>
            <Filter size={16}/>
            <span>Filtrar</span>
          </div>
        </div>
        <div onClick={() => setIsOpened(!isOpened)}>
          <CustomAddButton
          text='Novo Curso'
          />
        {isOpened && (
          <CustomCourseForm
          />
        )}
      </div>
      </section>
      <section className='px-16 mt-4'>
        {data && data.length > 0 ? (
                <ul className='flex flex-wrap gap-4 mt-4 items-center justify-start'>
                    {data.map((course: any) => (
                        <li key={course.id}>
                          <Card
                          title={course.name}
                          startDate={course.start_date}
                          endDate={course.end_date}
                          description={course.description}
                          />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-neutral-400 text-xl mt-8 flex justify-center'>Nenhum curso disponível.</p>
            )}
      </section>
    </div>
  )
}

export default DashboardPage