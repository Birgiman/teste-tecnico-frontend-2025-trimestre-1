import React from 'react'

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
    <div>
      <h1 className='text-xl font-bold mb-4'>Lista de contatos:</h1>
        <div className='mb-6 space-y-2'>
          <input
            className='border p-2 mb-2 block w-full'
            placeholder='Filtrar por usuário'
            value={userFilter}
            onChange={(e) => setUserFilter(e.target.value)}
          />
          <input
            className='border p-2 mb-2 block w-full'
            placeholder='Filtrar por cidade'
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
          />
          <input
            className='border p-2 mb-2 block w-full'
            placeholder='Filtrar por Estado'
            value={ufFilter}
            onChange={(e) => setUfFilter(e.target.value)}
          />
          <input
            className='border p-2 mb-2 block w-full'
            placeholder='Filtrar por apelido'
            value={displaynameFilter}
            onChange={(e) => setDisplaynameFilter(e.target.value)}
          />
        </div>
    </div>
  )
}
