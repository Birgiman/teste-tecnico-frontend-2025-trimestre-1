import { ConfirmationModal } from '../../components/ConfirmationModal';
import { ContactDetailsModal } from '../../components/ContactDetailsModal';
import { ContactFilters } from '../../components/ContactFilters';
import { ContactForm } from '../../components/ContactForm';
import { ContactList } from '../../components/ContactList';
import { useHomeController } from './useHomeController';

export function Home() {

  const {
    contacts,
    filters,
    handleSearchCEP,
    modal,
    details,
  } = useHomeController()

  return (
    <div className='flex justify-center items-center h-screen space-x-28'>

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
          onDetails={details.handleViewDetails}
        />



        <ContactForm
          isEditing={!!contacts.updateContactId}
          defaultValues={contacts.contactToEdit || undefined}
          onSubmit={contacts.handleSaveClick}
        />


      <ConfirmationModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onConfirm={modal.confirm}
        onCancel={modal.closeModal}
      />

      <ContactDetailsModal
        isOpen={details.showDetailsModal}
        contact={details.selectedContactDetails}
        onClose={details.handleCloseDetails}
        onDelete={contacts.handleDeleteClick}
        onEdit={contacts.handleUpdateContact}
      />

      {/* < TestNewUserHardcodeButton
        onSearch={handleSearchCEP}
      /> */}
    </div>
  )
}
