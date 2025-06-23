import { toast } from 'react-toastify';
import { searchCEP } from '../../services/viacep';

export function Home() {
  const handleSearchCEP = async (): Promise<void> => {
    try {
      const datas = await searchCEP('01001000') // CEP da Praça da Sé, exemplo sugerido na documentação do ViaCEP
      console.log('Resultado da busca do CEP:', datas);
      toast.success('Endereço encontrado!');
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
