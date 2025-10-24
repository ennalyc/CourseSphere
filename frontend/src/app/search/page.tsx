import React, { useState } from 'react'
import Header from '@/components/Header'
import { Filter } from 'lucide-react'
import Card from '@/components/Card';

async function getCourses(term: string) {
    const res = await fetch(`http://localhost:3000/api/courses/course?q=${encodeURIComponent(term)}`, {
        cache: 'no-store' 
    });

    if (!res.ok) {
        throw new Error('Falha ao buscar dados');
    }
    
    const data = await res.json();
    return data;
}

async function SearchPage({ searchParams }: { searchParams: { q: string } }) {
    const resolvedSearchParams = await searchParams
    const query =  resolvedSearchParams.q || ''

    const courses = await getCourses(query)
    return (
        <div>
          <Header/>
          <section className='px-16'>
            <div className='flex flex-row gap-3 items-baseline justify-between'>
              <div className='flex flex-row items-center justify-center gap-3 overflow-hidden'>
                <h1 className='font-bold text-3xl'>Resultados da pesquisa por:</h1>
                <p className='text-2xl truncate'>{query}</p>
              </div>
              <div className='text-sm text-neutral-300 font-medium flex flex-row gap-1 justify-center items-center'>
                <Filter size={16}/>
                <span>Filtrar</span>
              </div>
          </div>
          </section>
          <section className='px-16'>
            {courses && courses.length > 0 ? (
                <ul className='flex flex-wrap gap-4 mt-4 items-center justify-start'>
                    {courses.map((course: any, index: number) => (
                        <li key={index}>
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
                <p className='text-neutral-400 text-xl mt-8 flex justify-center'>Nenhum curso encontrado.</p>
            )}
          </section>
        </div>
    )
}

export default SearchPage