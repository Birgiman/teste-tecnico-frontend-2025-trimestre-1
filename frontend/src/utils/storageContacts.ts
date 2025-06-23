import { Contact } from '../types/Contact';

const STORAGE_KEY = 'contacts';

export function saveContacts(newContact: Contact): void {
  const contacts = searchContacts();
  contacts.push(newContact);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}

export function searchContacts(): Contact[] {
  const datas = localStorage.getItem(STORAGE_KEY);
  return datas ? JSON.parse(datas) : [];
}

export function deleteContacts(id: string): void {
  const contacts = searchContacts();
  const updatedContacts = contacts.filter(contact => contact.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedContacts));
}

export function updateContact(updatedContact: Contact): void {
  const contacts = searchContacts();
  const result = contacts.map(contact => contact.id === updatedContact.id ? updatedContact : contact);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result))
}
