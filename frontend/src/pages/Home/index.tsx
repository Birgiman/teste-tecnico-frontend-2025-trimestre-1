import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { searchCEP } from '../../services/viacep';
import { Contact } from '../../types/Contact';
import { deleteContacts, saveContacts, searchContacts } from '../../utils/storageContacts';

export function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    setContacts(searchContacts());
  }, []);


  const handleSearchCEP = async (): Promise<void> => {
    try {
      const address = await searchCEP('01001000') // CEP da Praça da Sé, exemplo sugerido na documentação do ViaCEP
      console.log('Resultado da busca do CEP:', address);
      toast.success('Endereço encontrado!');

      const newContact: Contact = {
        id: uuidv4(),
        user: 'Teste',
        displayName: 'Teste de displayName',
        cep: address.cep,
        address: address
      }

      saveContacts(newContact);
      setContacts(searchContacts());
      toast.success(`Contato ${newContact.user} salvo com sucesso!`)

    } catch (error: any) {
        if (error instanceof Error) {
          toast.error(`Erro: ${error.message}`);
        } else {
          toast.error('Erro desconhecido.');
        }
    }
  }

  const handleDelete = (id: string) => {
    deleteContacts(id);
    setContacts(searchContacts());
    console.log(contacts);
    toast.success(`Contato deletado com sucesso!`)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='text-xl font-bold mb-4'>Contatos Salvos</h1>

      {contacts.length === 0 && <p>Nenhum contato salvo.</p>}

      <ul className='space-y-2'>
        {contacts.map((contact) => (
          <li key={contact.id} className='border p-2 rounded-md shadow'>
            <p><strong>Contato:</strong> {contact.user}</p>
            <p><strong>Nome:</strong> {contact.displayName}</p>
            <p><strong>CEP:</strong> {contact.cep}</p>
            <p><strong>Cidade:</strong> {contact.address.localidade} - {contact.address.uf}</p>
            <button className='bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-500 uppercase' onClick={() => handleDelete(contact.id)}>
              Deletar contato
            </button>
          </li>
        ))}
      </ul>


      <button className='bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-500' onClick={handleSearchCEP}>
        Buscar endereço da Praça da Sé
      </button>
    </div>
  )
}
