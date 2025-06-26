import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ListPlus } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { contactFormSchema, ContactFormSchema } from '../schemas/ContactFormSchema'
import { Button } from './Button'
import { InputField } from './InputFilds'

interface ContactFormProps {
  defaultValues?: ContactFormSchema
  isEditing: boolean
  onSubmit: (data: ContactFormSchema) => void
}

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
      className='flex items-center justify-center space-y-2 w-full h-screen p-4'
      noValidate
    >
      <div className='p-2 border rounded-lg border-base-foreground w-full min-w-80 max-w-9/12'>
        <div className='flex items-center justify-between py-2 text-zinc-800 bg-zinc-300 dark:text-zinc-50 dark:bg-zinc-600 px-2 rounded-t-lg'>
          <h2 className='uppercase text-2xl'>Novo contato</h2>
          <ListPlus size={28} />
        </div>
        <div className='space-y-4 p-2 rounded-b-lg bg-zinc-200 dark:bg-zinc-700/80'>
          <InputField
          label='Usuário'
          placeholder='Digitie o nome de usuário'
          registration={register('user')}
          error={errors.user}
        />
          <InputField
            label='Apelido'
            placeholder='Digitie um apelido'
            registration={register('displayName')}
            error={errors.displayName}
          />
          <InputField
            label='Usuário'
            placeholder='Digitie o CEP do endereço'
            registration={register('cep')}
            error={errors.cep}
          />
          <Button
            variant='primary'
            className='w-full flex items-center justify-center gap-2 uppercase'
          >
            {isEditing ? 'Salvar alterações' : 'Salvar contato'}
            <Check size={24} weight={'bold'}/>
          </Button>
        </div>
      </div>
    </form>
  )
}
