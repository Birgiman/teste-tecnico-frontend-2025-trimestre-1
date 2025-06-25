export type ButtonVariant = 'primary' | 'danger' | 'secundary' | 'clear';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: React.ReactNode;
}
