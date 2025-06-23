import { ViaCepResponse } from './ViaCepResponse';

export type Contact = {
  id: string;
  user: string;
  displayName: string;
  cep: string;
  address: ViaCepResponse
}
