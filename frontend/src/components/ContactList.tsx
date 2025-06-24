import React from 'react';
import { Contact } from '../types/Contact';

interface ContactListProps {
  contacts: Contact[]
  onDelete: (contact: Contact) => void
  onEdit: (contact: Contact) => void
}

export const ContactList: React.FC<ContactListProps> =({
  contacts,
  onDelete,
  onEdit,
}) => {

  if (contacts.length === 0) {
    return <p>Nenhum contato salvo. 😔</p>
  }

  return (
        <ul className='space-y-2'>
          {contacts.map((contact) => (
            <li key={contact.id} className='border p-2 rounded-md shadow'>
              <p><strong>Contato:</strong> {contact.user}</p>
              <p><strong>Nome:</strong> {contact.displayName}</p>
              <p><strong>CEP:</strong> {contact.cep}</p>
              <p><strong>Cidade:</strong> {contact.address.localidade} - {contact.address.uf}</p>
              <button className='bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-600 uppercase' onClick={() => onDelete(contact)}>
                Deletar contato
              </button>
              <button className='bg-yellow-400 text-white px-4 py-2 rounded-2xl hover:bg-yellow-600' onClick={() => onEdit(contact)}>
                Editar
              </button>
            </li>
          ))}
        </ul>
  )
}
