import { PencilSimple, Trash, X } from 'phosphor-react'
import { Contact } from '../types/Contact'
import { Button } from './Button'

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
      <div className='bg-white rounded-xl shadow-xl p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-2'>Detalhes do contato</h2>
        <div className='text-sm bg-gray-200 p-3 rounded-xl overflow-auto max-h-96'>
          <p><strong>Usuário:</strong>{user}</p>
          <p><strong>Apelido:</strong>{displayName}</p>
          <p><strong>CEP:</strong>{cep}</p>
          <p><strong>Bairro:</strong>{address.bairro}</p>
          <p><strong>Complemento:</strong>{address.complemento?.trim() ? address.complemento : 'Não possui'}</p>
          <p><strong>DDD:</strong>{address.ddd}</p>
          <p><strong>Estado:</strong>{address.estado}</p>
          <p><strong>Cidade:</strong>{address.localidade}</p>
          <p><strong>Rua:</strong>{address.logradouro}</p>
          <p><strong>Região:</strong>{address.regiao}</p>
          <p><strong>Estado:</strong>{address.uf}</p>
        </div>
        <div className='flex justify-end space-x-2'>
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
          <Button
            onClick={onClose}
            variant='secundary'
          >
            <X
              size={20}
            />
          </Button>
        </div>
      </div>
    </div>
  )

}
