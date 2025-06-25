import { Button } from './Button'

interface ConfirmationModalProps {
  isOpen: boolean
  title: string
  message: string
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmationModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-20'>
      <div className='bg-white rounded-xl shadow-xl p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{message}</p>
        <div className='flex justify-between space-x-2'>
          <Button
            onClick={onCancel}
            variant='secundary'
          >
            Cancelar
          </Button>
          <Button
            onClick={onConfirm}
            variant='danger'
          >
            Confirmar
          </Button>
        </div>
      </div>
    </div>
  )

}
