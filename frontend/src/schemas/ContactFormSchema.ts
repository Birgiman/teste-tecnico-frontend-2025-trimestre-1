import { z } from 'zod';
import { messages } from '../validations/messages';
import { regex } from '../validations/regex';

export const contactFormSchema = z.object({
  user:
    z.string()
    .min(2, 'Usuário deve conter no mínimo 2 letras')
    .max(32, 'Usuário deve conter no máximo 2 letras')
    .regex(regex.lettersOnly, messages.lettersOnly),

  displayName:
    z.string()
    .min(2, 'Apelido deve conter no mínimo 2 caracteres')
    .max(40, 'Usuário deve conter no máximo 40 letras')
    .regex(regex.displayName, messages.displayName),

  cep:
    z.string()
    .regex(regex.cep, messages.cepInvalid)
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
