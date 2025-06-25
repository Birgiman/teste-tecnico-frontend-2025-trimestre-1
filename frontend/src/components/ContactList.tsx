import React from 'react';
import { Contact } from '../types/Contact';
import { Button } from './Button';

interface ContactListProps {
  contacts: Contact[]
  onDetails: (contact: Contact) => void
}

export const ContactList: React.FC<ContactListProps> =({
  contacts,
  onDetails,
}) => {

  if (contacts.length === 0) {
    return <p>Nenhum contato salvo. 😔</p>
  }

  return (
        <ul className='space-y-2'>
          {contacts.map((contact) => (
            <li key={contact.id} className='border p-2 rounded-md shadow'>
              <div>
                <p><strong>Contato:</strong> {contact.user}</p>
                <p><strong>Nome:</strong> {contact.displayName}</p>
                <p><strong>CEP:</strong> {contact.cep}</p>
                <p><strong>Cidade:</strong> {contact.address.localidade} - {contact.address.uf}</p>
              </div>
              <div className='flex items-center justify-center'>
                <Button
                  onClick={() => onDetails(contact)}
                  variant='secundary'
                >
                  Detalhes
                </Button>
              </div>
            </li>
          ))}
        </ul>
  )
}
