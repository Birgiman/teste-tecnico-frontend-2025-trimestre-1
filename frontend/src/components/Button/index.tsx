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
    primary: 'bg-primary hover:bg-primary-hover',
    danger: 'bg-danger hover:bg-danger-danger',
    secundary: 'bg-secondary hover:bg-secondary-hover',
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
