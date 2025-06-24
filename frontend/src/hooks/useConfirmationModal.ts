import { useCallback, useState } from 'react'

type OnConfirmFn = () => void

export function useConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [title, setTitle] = useState('')
  const [onConfirm, setOnConfirm] = useState<OnConfirmFn>(() => () => {})

  const openModal = useCallback(
    (opts: { title: string; message: string; onConfirm: OnConfirmFn }) => {
      setTitle(opts.title)
      setMessage(opts.message)
      setOnConfirm(() => opts.onConfirm)
      setIsOpen(true)
    }, []
  )

  const closeModal = () => {
    setIsOpen(false)
  }

  const confirm = () => {
    onConfirm()
    closeModal()
  }

  return {
    isOpen,
    message,
    title,
    openModal,
    closeModal,
    confirm,
  }

}
