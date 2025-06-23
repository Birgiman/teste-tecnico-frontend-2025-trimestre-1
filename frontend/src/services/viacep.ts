import axios from 'axios';
import { ViaCepResponse } from '../types/ViaCepResponse';

export async function searchCEP(cep: string): Promise<ViaCepResponse> {
    const clearCEP = cep.replace(/\D/g, '');
    if (clearCEP.length !== 8) throw new Error('CEP inválido');

    const { data } = await axios.get<ViaCepResponse>(
      `https://viacep.com.br/ws/${clearCEP}/json/`
    );

    if ((data as any).erro) throw new Error('CEP não encontrado');

    return data;
}
