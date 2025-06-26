import clsx from 'clsx';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  className,
  ...props
}) => {
  const baseStyle = 'px-4 py-2 rounded-2xl text-white font-medium border transition-colors duration-200';

  const variants = {
    primary: 'bg-primary hover:bg-primary-hover',
    danger: 'bg-danger hover:bg-danger-hover',
    secundary: 'bg-secondary hover:bg-secondary-hover',
    clear: 'rounded-full transform transition-transform duration-200 hover:scale-135 ease-in-out',
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
