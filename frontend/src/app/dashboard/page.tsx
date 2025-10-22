import React from 'react'
import Header from '@/components/Header'
import { Filter } from 'lucide-react'
import CustomButton from '@/components/ui/CustomAddButton'
import Card from '@/components/Card'

const DashboardPage = () => {
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
        <CustomButton
        text='Novo Curso'/>
      </section>
      <section className='px-16 mt-4'>
        <Card
        title='Nome do curso'
        startDate='23/05/2025'
        endDate='31/12/2025'
        description='Este curso introdutório oferece uma base robusta na linguagem de programação Python, essencial para tecnologia e ciência de dados. Desenvolvido para iniciantes, o programa aborda desde a sintaxe fundamental, tipos de dados e estruturas de controle, até a criação de funções e manipulação básica de dados.'
        />
      </section>
    </div>
  )
}

export default DashboardPage