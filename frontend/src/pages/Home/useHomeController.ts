import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { useConfirmationModal } from '../../hooks/useConfirmationModal';
import { ContactFormSchema } from '../../schemas/ContactFormSchema';
import { searchCEP } from '../../services/viacep';
import { Contact } from '../../types/Contact';
import { normalize } from '../../utils/normalize';
import { deleteContacts, saveContacts, searchContacts, updateContact } from '../../utils/storageContacts';

export function useHomeController() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [updateContactId, setUpdateContactId] = useState<string | null>(null);
  const [contactToEdit, setContactToEdit] = useState<ContactFormSchema | null>(null);

  const [selectedContactDetails, setSelectedContactDetails] = useState<Contact | null>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  const [userFilter, setUserFilter] = useState('');
  const [cityFilter, setCityFilter] = useState('');
  const [ufFilter, setUfFilter] = useState('');
  const [displaynameFilter, setDisplaynameFilter] = useState('');

  const filteredUsers = useMemo(() => {
    return contacts.filter((contact) => {
      const matchUser = userFilter === '' || normalize(contact.user).includes(userFilter)
      const matchCity = cityFilter === '' || normalize(contact.address.localidade).includes(cityFilter)
      const matchUf = ufFilter === '' || normalize(contact.address.uf).includes(ufFilter)
      const matchDisplayname = displaynameFilter === '' || normalize(contact.displayName).includes(displaynameFilter)
      return matchUser && matchCity && matchUf && matchDisplayname;
    });
  }, [contacts, userFilter, cityFilter, ufFilter, displaynameFilter]);

  const modal = useConfirmationModal()

  const handleSaveClick = async (formData: ContactFormSchema) => {
    if (updateContactId) {
      modal.openModal({
      title: 'Confirmar alterações',
      message: `Deseja realmente salvar as alterações?`,
      onConfirm: () => confirmUpdateContact(formData)
    })
    } else {
      confirmSaveContact(formData);
    }
  }

  const confirmUpdateContact = async (formData: ContactFormSchema) => {
    try {
      const address = await searchCEP(formData.cep);

      const updatedContact: Contact = {
        id: updateContactId!,
        user: formData.user,
        displayName: formData.displayName,
        cep: formData.cep,
        address,
      }
      updateContact(updatedContact);
      setContacts(searchContacts());
      setUpdateContactId(null);
      setContactToEdit(null);
      toast.success(`Contato ${updatedContact.displayName} foi atualizado com sucesso!`)

    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(`Erro: ${error.message}`);
      } else {
        toast.error('Erro desconhecido.');
      }
    }
  }

  const confirmSaveContact = async (formData: ContactFormSchema) => {
    try {
      const address = await searchCEP(formData.cep);

      const newContact: Contact = {
        id: uuidv4(),
        user: formData.user,
        displayName: formData.displayName,
        cep: formData.cep,
        address,
      };
      saveContacts(newContact);
      setContacts(searchContacts());
      toast.success(`Contato ${formData.displayName} salvo com sucesso!`)

    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(`Erro: ${error.message}`);
      } else {
        toast.error('Erro desconhecido.');
      }
    }
  }

  const handleDeleteClick = (contact: Contact) => {
    modal.openModal({
      title: 'Confirmar exclusão',
      message: `Deseja realmente excluir o contato ${contact.displayName}?`,
      onConfirm: () => {
        handleDeleteContact(contact.id)
      }
    })
  }

  const handleDeleteContact = (id: string) => {
    deleteContacts(id);
    setShowDetailsModal(false)
    setContacts(searchContacts());
    const contactDisplayName = (contacts.map((contact) => (
      contact.displayName
    )));
    toast.success(`Contato ${contactDisplayName} deletado com sucesso!`)
  }

  const handleUpdateContact = (contact: Contact) => {
    setUpdateContactId(contact.id)
    setShowDetailsModal(false)
    setContactToEdit({
      user: contact.user,
      displayName: contact.displayName,
      cep: contact.cep,
    })
  }

  function handleViewDetails(contact: Contact) {
    setSelectedContactDetails(contact)
    setShowDetailsModal(true)
    setUpdateContactId(null)
    setContactToEdit(null)
  }

  function handleCloseDetails() {
    setShowDetailsModal(false)
    setSelectedContactDetails(null)
  }


  useEffect(() => {
    setContacts(searchContacts());
  }, []);

  return {
    contacts: {
      filteredUsers,
      updateContactId,
      contactToEdit,
      handleSaveClick,
      handleUpdateContact,
      handleDeleteClick,
    },
    filters: {
      userFilter,
      cityFilter,
      ufFilter,
      displaynameFilter,
      setUserFilter,
      setCityFilter,
      setUfFilter,
      setDisplaynameFilter,
    },
    modal,
    details: {
      selectedContactDetails,
      showDetailsModal,
      handleViewDetails,
      handleCloseDetails,
    }
  }
}
