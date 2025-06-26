import React from 'react';
import { Contact } from '../../types/Contact';
import { Button } from '../Button';

interface ContactListProps {
  contacts: Contact[]
  onDetails: (contact: Contact) => void
}

export const ContactList: React.FC<ContactListProps> =({
  contacts,
  onDetails,
}) => {

  if (contacts.length === 0) {
    return (
      <div className='flex items-center justify-center text-base-foreground font-bold animate-bounce '>
        <p>Nenhum contato salvo. 😔</p>
      </div>
    )
  }

  return (
        <ul className='space-y-2 w-full overflow-y-auto max-h-[550px]'>
          {contacts.map((contact) => (
            <li key={contact.id} className='flex items-center justify-between border p-2 rounded-md space-y-4 rounded-b-lg bg-internal text-base-foreground shadow'>
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
