import React from 'react'
import { Button } from '../components/Button'

interface TestNewUserHardcodeButtonProps {
  onSearch: () => void
}

export const TestNewUserHardcodeButton: React.FC<TestNewUserHardcodeButtonProps> = ({ onSearch}) => {
  return (
    <Button
      onClick={onSearch}
      variant='primary'
    >
      Buscar endereço da Praça da Sé
    </Button>
  )
}
