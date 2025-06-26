import { ConfirmationModal } from '../../components/ConfirmationModal';
import { ContactDetailsModal } from '../../components/Contact/ContactDetailsModal';
import { ContactFilters } from '../../components/Contact/ContactFilters';
import { ContactForm } from '../../components/Contact/ContactForm';
import { ContactList } from '../../components/Contact/ContactList';
import { useHomeController } from './useHomeController';

export function Home() {

  const {
    contacts,
    filters,
    modal,
    details,
  } = useHomeController()

  return (
    <div className='flex justify-between items-center mx-4'>
      <div className='w-full p-4 border rounded-lg border-base-foreground min-h-[370px]'>
        <div className='flex justify-center items-center'>
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
        </div>
        <div className='relative py-4'>
          <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-base to-transparent pointer-events-none" />
          <ContactList
            contacts={contacts.filteredUsers}
            onDetails={details.handleViewDetails}
          />
          <div className="absolute bottom-0 left-0 w-full h-17 bg-gradient-to-t from-base to-transparent pointer-events-none" />

        </div>
      </div>
      <div className=' h-screen w-full'>
        <ContactForm
          isEditing={!!contacts.updateContactId}
          defaultValues={contacts.contactToEdit || undefined}
          onSubmit={contacts.handleSaveClick}
        />
      </div>
      <ContactDetailsModal
        isOpen={details.showDetailsModal}
        contact={details.selectedContactDetails}
        onClose={details.handleCloseDetails}
        onDelete={contacts.handleDeleteClick}
        onEdit={contacts.handleUpdateContact}
      />
       <ConfirmationModal
        isOpen={modal.isOpen}
        title={modal.title}
        message={modal.message}
        onConfirm={modal.confirm}
        onCancel={modal.closeModal}
      />
    </div>
  )
}
