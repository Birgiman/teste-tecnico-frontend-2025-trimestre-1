import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { searchCEP } from '../../services/viacep';
import { Contact } from '../../types/Contact';
import { deleteContacts, saveContacts, searchContacts, updateContact } from '../../utils/storageContacts';

export function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [user, setUser] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [updateContactId, setUpdateContactId] = useState<string | null>(null);

  const handleSaveContact = async () => {
    try {
      const address = await searchCEP(cep);

      if (updateContactId) {
        const updatedContact: Contact = {
          id: updateContactId,
          user,
          displayName,
          cep,
          address,
        }
        updateContact(updatedContact);
        setContacts(searchContacts());
        setUser('');
        setDisplayName('');
        setCep('');
        toast.success(`Contato ${updatedContact.displayName} foi atualizado com sucesso!`)
      } else {
          const newContact: Contact = {
          id: uuidv4(),
          user,
          displayName,
          cep,
          address,
        };
        saveContacts(newContact);
        setContacts(searchContacts());
        setUser('');
        setDisplayName('');
        setCep('');
        toast.success(`Contato ${displayName} salvo com sucesso!`);
      }

    } catch (error) {
      toast.error('Erro ao buscar CEP')
    }
  }

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
    const contactName = (contacts.map((contact) => (
      contact.user
    )));
    toast.success(`Contato ${contactName} deletado com sucesso!`)
  }

  const handleUpdateContact = (contact: Contact) => {
    setUser(contact.user);
    setDisplayName(contact.displayName);
    setCep(contact.cep);
    setUpdateContactId(contact.id);
  }

  useEffect(() => {
    setContacts(searchContacts());
  }, []);


  return (
    <div className='flex justify-center items-center h-screen space-x-28'>
      <div>
        <h1 className='text-xl font-bold mb-4'>Lista de contatos:</h1>

        {contacts.length === 0 && <p>Nenhum contato salvo. 😔</p>}

        <ul className='space-y-2'>
          {contacts.map((contact) => (
            <li key={contact.id} className='border p-2 rounded-md shadow'>
              <p><strong>Contato:</strong> {contact.user}</p>
              <p><strong>Nome:</strong> {contact.displayName}</p>
              <p><strong>CEP:</strong> {contact.cep}</p>
              <p><strong>Cidade:</strong> {contact.address.localidade} - {contact.address.uf}</p>
              <button className='bg-red-400 text-white px-4 py-2 rounded-2xl hover:bg-red-600 uppercase' onClick={() => handleDelete(contact.id)}>
                Deletar contato
              </button>
              <button className='bg-yellow-400 text-white px-4 py-2 rounded-2xl hover:bg-yellow-600' onClick={() => handleUpdateContact(contact)}>
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1 className='text-lg font-semibold mb-2'>Novo contato</h1>
        <input
          className='border p-2 mb-2 block w-full'
          placeholder='Usuário'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className='border p-2 mb-2 block w-full'
          placeholder='Apelido'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          className='border p-2 mb-2 block w-full'
          placeholder='CEP'
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <button className='bg-green-400 text-white px-4 py-2 rounded-2xl hover:bg-green-600' onClick={handleSaveContact}>
          {updateContactId ? 'Salvar alterações' : 'Salvar contato'}
        </button>
      </div>

      <div>
        <button className='bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-600' onClick={handleSearchCEP}>
          Buscar endereço da Praça da Sé
        </button>
      </div>
    </div>
  )
}
