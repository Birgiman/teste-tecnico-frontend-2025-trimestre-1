import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { searchCEP } from '../../services/viacep';
import { Contact } from '../../types/Contact';
import { saveContacts } from '../../utils/storageContacts';

export function Home() {
  const handleSearchCEP = async (): Promise<void> => {
    try {
      const data = await searchCEP('01001000') // CEP da Praça da Sé, exemplo sugerido na documentação do ViaCEP
      console.log('Resultado da busca do CEP:', data);
      toast.success('Endereço encontrado!');

      const newContact: Contact = {
        id: uuidv4(),
        user: 'Teste',
        displayName: 'Teste de displayName',
        cep: data.cep,
        address: data
      }

      saveContacts(newContact);
      toast.success(`Contato ${newContact.user} salvo com sucesso!`)

    } catch (error: any) {
        if (error instanceof Error) {
          toast.error(`Erro: ${error.message}`);
        } else {
          toast.error('Erro desconhecido.');
        }
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='bg-blue-400 text-white px-4 py-2 rounded-2xl hover:bg-blue-500' onClick={handleSearchCEP}>
        Buscar endereço da Praça da Sé
      </button>
    </div>
  )
}
