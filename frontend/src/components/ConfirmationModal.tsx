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
    <div className='fixed inset-0 flex items-center justify-center bg-black/50 z-10'>
      <div className='bg-white rounded-xl shadow-xl p-6 w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-700 mb-4'>{message}</p>
        <div className='flex justify-end space-x-2'>
          <button
            onClick={onCancel}
            className='px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400'
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 bg-red-300 rounded-full hover:bg-red-400'
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )

}
