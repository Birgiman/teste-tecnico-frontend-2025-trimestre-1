import { ConfirmationModal } from '../../components/ConfirmationModal';
import { ContactFilters } from '../../components/ContactFilters';
import { ContactForm } from '../../components/ContactForm';
import { ContactList } from '../../components/ContactList';
import { TestNewUserHardcodeButton } from '../../debug/TestCepButton';
import { useHomeController } from './useHomeController';

export function Home() {

  const {
    contacts,
    filters,
    handleSearchCEP,
    modal,
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
          onDelete={contacts.handleDeleteClick}
          onEdit={contacts.handleUpdateContact}
        />
      </div>

      <div>
        <ContactForm
          isEditing={!!contacts.updateContactId}
          defaultValues={contacts.contactToEdit || undefined}
          onSubmit={contacts.handleSaveClick}
        />
      </div>

      <ConfirmationModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onConfirm={modal.confirm}
        onCancel={modal.closeModal}
      />

      < TestNewUserHardcodeButton
        onSearch={handleSearchCEP}
      />
    </div>
  )
}
