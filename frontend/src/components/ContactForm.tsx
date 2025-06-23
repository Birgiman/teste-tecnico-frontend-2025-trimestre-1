import React from 'react'

interface ContactFormProps {
  user: string
  displayName: string
  cep: string
  isEditing: boolean
  onChangeUser: (value: string) => void
  onChangeDisplayName: (value: string) => void
  onChangeCep: (value: string) => void
  onSubmit: () => void
}

export const ContactForm: React.FC<ContactFormProps> = ({
  user,
  displayName,
  cep,
  isEditing,
  onChangeUser,
  onChangeDisplayName,
  onChangeCep,
  onSubmit,
}) => {
  return (
    <div>
      <h2 className='text-lg font-semibold mb-2'>
        {isEditing ? 'Editar Contato' : 'Novo Contato'}
      </h2>
      <input
          className='border p-2 mb-2 block w-full'
          placeholder='Usuário'
          value={user}
          onChange={(e) => onChangeUser(e.target.value)}
        />
        <input
          className='border p-2 mb-2 block w-full'
          placeholder='Apelido'
          value={displayName}
          onChange={(e) => onChangeDisplayName(e.target.value)}
        />
        <input
          className='border p-2 mb-2 block w-full'
          placeholder='CEP'
          value={cep}
          onChange={(e) => onChangeCep(e.target.value)}
        />

        <button className='bg-green-400 text-white px-4 py-2 rounded-2xl hover:bg-green-600' onClick={onSubmit}>
          {isEditing ? 'Salvar alterações' : 'Salvar contato'}
        </button>
    </div>
  )
}
