import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError
  registration: UseFormRegisterReturn
}

export function InputField({ label, error, registration, ...props }: InputFieldProps) {
  return (
    <div className='space-y-1'>
      {label && (
        <label className='block text-sm font-medium text-base-foreground'>
          {label}
        </label>
      )}
      <input
        {...registration}
        {...props}
        className={clsx(
          'w-full px-4 py-2 border rounded-lg bg-base',
          'text-base-foreground placeholder:text-placeholder',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors',
          {
            'border-border': !error, 'border-danger': error,
          }
        )}
      />
      {error && (
        <p className='text-danger text-sm font-medium'>
          {error.message}
        </p>
      )}
    </div>
  )
}
