import { ContactFilters } from '../../components/ContactFilters';
import { ContactForm } from '../../components/ContactForm';
import { ContactList } from '../../components/ContactList';
import { TestNewUserHardcodeButton } from '../../debug/TestCepButton';
import { useHomeController } from './useHomeController';

export function Home() {

  const {
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
  } = useHomeController()

  return (
    <div className='flex justify-center items-center h-screen space-x-28'>
      <div>
        <ContactFilters
          userFilter={userFilter}
          cityFilter={cityFilter}
          ufFilter={ufFilter}
          displaynameFilter={displaynameFilter}
          setUserFilter={setUserFilter}
          setCityFilter={setCityFilter}
          setUfFilter={setUfFilter}
          setDisplaynameFilter={setDisplaynameFilter}
        />

        <ContactList
          contacts={filteredUsers}
          onDelete={handleDeleteContact}
          onEdit={handleUpdateContact}
        />
      </div>

      <div>
        <ContactForm
          user={user}
          displayName={displayName}
          cep={cep}
          isEditing={!!updateContactId}
          onChangeUser={setUser}
          onChangeDisplayName={setDisplayName}
          onChangeCep={setCep}
          onSubmit={handleSaveContact}
        />
      </div>

      < TestNewUserHardcodeButton
        onSearch={handleSearchCEP}
      />
    </div>
  )
}
