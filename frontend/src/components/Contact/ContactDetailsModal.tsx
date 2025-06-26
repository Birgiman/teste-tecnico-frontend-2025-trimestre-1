import { PencilSimple, Trash, X } from 'phosphor-react'
import { Contact } from '../../types/Contact'
import { Button } from '../Button'

interface ContactDetailsModalProps {
  isOpen: boolean
  contact: Contact | null
  onClose: () => void
  onDelete: (contact: Contact) => void
  onEdit: (contact: Contact) => void
}

export function ContactDetailsModal({ isOpen, contact, onClose, onDelete, onEdit, }: ContactDetailsModalProps) {
  if (!isOpen || !contact) return null

  const { user, displayName, cep, address } = contact

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-10'>
      <div className='flex flex-col bg-base rounded-xl shadow-xl p-4 w-full max-w-6/12 h-full max-h-6/12'>
        <div className='flex justify-between items-center text-2xl font-semibold text-base-foreground px-2 rounded-t-xl uppercase underline underline-offset-3 bg-header'>
          <h2>Detalhes do contato</h2>
            <Button
              onClick={onClose}
              variant='clear'
              className='border-none'
            >
              <X
                className='text-base-foreground'
                size={24}
              />
            </Button>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className='text-[16px] text-base-foreground bg-internal rounded-b-xl h-full p-2 my-2'>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Usuário:</p>
              <p className='italic'>{user}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Apelido:</p>
              <p className='italic'>{displayName}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>CEP:</p>
              <p className='italic'>{cep}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Bairro:</p>
              <p className='italic'>{address.bairro}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Complemento:</p>
              <p className='italic'>{address.complemento?.trim() ? address.complemento : 'Não possui'}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>DDD:</p>
              <p className='italic'>{address.ddd}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Estado:</p>
              <p className='italic'>{address.estado}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Cidade:</p>
              <p className='italic'>{address.localidade}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Rua:</p>
              <p className='italic'>{address.logradouro}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Região:</p>
              <p className='italic'>{address.regiao}.</p>
            </div>
            <div className='flex space-x-1'>
              <p className='font-semibold'>Unidade Federativa:</p>
              <p className='italic'>{address.uf}.</p>
            </div>
          </div>
          <div className='flex justify-start items-center space-x-4'>
            <Button
              onClick={() => onDelete(contact)}
              variant='danger'
            >
              <Trash
                size={20}
              />
            </Button>
            <Button
              onClick={() => onEdit(contact)}
              variant='primary'
            >
              <PencilSimple
                size={20}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

}
