import { Funnel } from 'phosphor-react'
import React from 'react'
import { InputField } from './InputFilds'

interface ContactFilterProps {
  userFilter: string
  cityFilter: string
  ufFilter: string
  displaynameFilter: string
  setUserFilter: (value: string) => void
  setCityFilter: (value: string) => void
  setUfFilter: (value: string) => void
  setDisplaynameFilter: (value: string) => void
}

export const ContactFilters: React.FC<ContactFilterProps> = ({
  userFilter,
  cityFilter,
  ufFilter,
  displaynameFilter,
  setUserFilter,
  setCityFilter,
  setUfFilter,
  setDisplaynameFilter,
}) => {
  return (
    <div className='space-y-2 w-full min-w-80 max-w-7/12'>
      <div className='flex items-center justify-between py-2 text-zinc-800 bg-zinc-300 dark:text-zinc-50 dark:bg-zinc-600 px-2 rounded-t-lg'>
          <h2 className='uppercase text-2xl'>Filtrar contatos</h2>
          <Funnel size={28} />
        </div>
        <div className='mb-6 space-y-2'>
          <InputField
            placeholder='Filtrar por usuário'
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
          <InputField
            placeholder='Filtrar por apelido'
            value={displaynameFilter}
            onChange={(e) => setDisplaynameFilter(e.target.value)}
          />
          <InputField
            placeholder='Filtrar por cidade'
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <InputField
            placeholder='Filtrar por estado (UF)'
            value={ufFilter}
            onChange={(e) => setUfFilter(e.target.value)}
          />
        </div>
    </div>
  )
}
