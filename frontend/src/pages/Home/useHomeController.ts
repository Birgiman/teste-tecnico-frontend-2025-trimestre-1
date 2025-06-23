import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { searchCEP } from '../../services/viacep';
import { Contact } from '../../types/Contact';
import { deleteContacts, saveContacts, searchContacts, updateContact } from '../../utils/storageContacts';

export function useHomeController() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [user, setUser] = useState<string>('');
  const [displayName, setDisplayName] = useState<string>('');
  const [cep, setCep] = useState<string>('');
  const [updateContactId, setUpdateContactId] = useState<string | null>(null);

  const [userFilter, setUserFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [ufFilter, setUfFilter] = useState('');
  const [displaynameFilter, setDisplaynameFilter] = useState('');

  const filteredUsers = useMemo(() => {
    return contacts.filter((contact) => {
      const matchUser = userFilter === '' || contact.user.toLocaleLowerCase().includes(userFilter.toLocaleLowerCase())
      const matchCity = cityFilter === '' || contact.address.localidade.toLocaleLowerCase().includes(cityFilter.toLocaleLowerCase())
      const matchUf = ufFilter === '' || contact.address.uf.toLocaleLowerCase().includes(ufFilter.toLocaleLowerCase())
      const matchDisplayname = displaynameFilter === '' || contact.displayName.toLocaleLowerCase().includes(displaynameFilter.toLocaleLowerCase())
      return matchUser && matchCity && matchUf && matchDisplayname;
    });
  }, [contacts, userFilter, cityFilter, ufFilter, displaynameFilter]);

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

  const handleDeleteContact = (id: string) => {
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

  return {
    user,
    displayName,
    cep,
    updateContactId,
    userFilter,
    cityFilter,
    ufFilter,
    displaynameFilter,
    filteredUsers,
    setUser,
    setDisplayName,
    setCep,
    setUserFilter,
    setCityFilter,
    setUfFilter,
    setDisplaynameFilter,
    handleSaveContact,
    handleDeleteContact,
    handleUpdateContact,
    handleSearchCEP
  }
}
