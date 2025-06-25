import clsx from 'clsx';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const baseStyle = 'px-4 py-2 rounded-2xl text-white font-medium transition-colors duration-200';

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 dark:bg-gray-600 dark:hover:bg-gray-500',
    danger: 'bg-red-500 hover:bg-red-600 dark:bg-gray-700 dark:hover:bg-gray-600',
    secundary: 'bg-gray-500 hover:bg-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600',
    clear: 'rounded-full hover:bg-gray-700/80 dark:hover:bg-white',
  };

  return (
    <button
      className={clsx(baseStyle, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  )

}
