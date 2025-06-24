import { ContactFilters } from '../../components/ContactFilters';
import { ContactForm } from '../../components/ContactForm';
import { ContactList } from '../../components/ContactList';
import { TestNewUserHardcodeButton } from '../../debug/TestCepButton';
import { useHomeController } from './useHomeController';

export function Home() {

  const {
    contacts,
    filters,
    handleSearchCEP
  } = useHomeController()

  return (
    <div className='flex justify-center items-center h-screen space-x-28'>
      <div>
        <ContactFilters
          userFilter={filters.userFilter}
          cityFilter={filters.cityFilter}
          ufFilter={filters.ufFilter}
          displaynameFilter={filters.displaynameFilter}
          setUserFilter={filters.setUserFilter}
          setCityFilter={filters.setCityFilter}
          setUfFilter={filters.setUfFilter}
          setDisplaynameFilter={filters.setDisplaynameFilter}
        />

        <ContactList
          contacts={contacts.filteredUsers}
          onDelete={contacts.handleDeleteContact}
          onEdit={contacts.handleUpdateContact}
        />
      </div>

      <div>
        <ContactForm
          isEditing={!!contacts.updateContactId}
          defaultValues={contacts.contactToEdit || undefined}
          onSubmit={contacts.handleSaveContact}
        />
      </div>

      < TestNewUserHardcodeButton
        onSearch={handleSearchCEP}
      />
    </div>
  )
}
