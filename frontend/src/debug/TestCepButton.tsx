import React from 'react'

interface TestNewUserHardcodeButtonProps {
  onSearch: () => void
}

export const TestNewUserHardcodeButton: React.FC<TestNewUserHardcodeButtonProps> = ({ onSearch}) => {
  return (
    <button className='bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-600' onClick={onSearch}>
          Buscar endereço da Praça da Sé
    </button>
  )
}
