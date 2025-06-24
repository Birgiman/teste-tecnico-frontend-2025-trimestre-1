import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { contactFormSchema, ContactFormSchema } from '../schemas/ContactFormSchema'

// export type ContactFormSchema = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  defaultValues?: ContactFormSchema
  isEditing: boolean
  onSubmit: (data: ContactFormSchema) => void
}

// export const contactFormSchema = z.object({
//   user: z.string().min(2, 'Usuário precisa ter no mínimo 2 caracteres'),
//   displayName: z.string().min(2, 'Apelido precisa ter no mínimo 2 caracteres'),
//   cep: z.string().regex(/^[0-9]{8}$/, 'CEP deve conter exatamente 8 dígitos numéricos'),
// })


export function ContactForm({
  defaultValues,
  isEditing,
  onSubmit,
}: ContactFormProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  useEffect(() => {
    reset(defaultValues ?? {
      user: '',
      displayName: '',
      cep: '',
    })
  }, [defaultValues, reset])

  const submitHandler = (data: ContactFormSchema) => {
    onSubmit(data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className='space-y-2 max-w-xs w-full'
      noValidate
    >
      <div>
        <div>
          <input
            {...register('user')}
            className='border p-2 mb-2 block w-full'
            placeholder='Usuário'
          />
          {errors.user && (
            <p className='text-red-500 text-sm'>{errors.user.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('displayName')}
            className='border p-2 mb-2 block w-full'
            placeholder='Apelido'
          />
          {errors.displayName && (
            <p className='text-red-500 text-sm'>{errors.displayName.message}</p>
          )}
        </div>
        <div>
          <input
            {...register('cep')}
            className='border p-2 mb-2 block w-full'
            placeholder='CEP'
          />
          {errors.cep && (
            <p className='text-red-500 text-sm'>{errors.cep.message}</p>
          )}
        </div>

        <button className='bg-green-400 text-white px-4 py-2 rounded-2xl hover:bg-green-600'>
          {isEditing ? 'Salvar alterações' : 'Salvar contato'}
        </button>
      </div>
    </form>
  )
}
