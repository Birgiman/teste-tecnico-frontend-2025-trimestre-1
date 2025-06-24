import { Contact } from '../types/Contact'

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
          <button className='bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-600 uppercase' onClick={() => onDelete(contact)}>
                Deletar contato
              </button>
              <button className='bg-yellow-400 text-white px-4 py-2 rounded-2xl hover:bg-yellow-600' onClick={() => onEdit(contact)}>
                Editar
              </button>
          <button
            onClick={onClose}
            className='px-4 py-2 text-gray-500 rounded-full'
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )

}
