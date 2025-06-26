import { useTheme } from '../hooks/useTheme';
import { Button } from './Button';

export function ThemeToggleButton() {
  const { theme, toogleTheme } = useTheme()

  return (
    <Button
      onClick={toogleTheme}
      variant='clear'
      className='fixed top-4 right-4 text-2xl z-50 border-none'
      title={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? '🌒' : '☀️'}
    </Button>
  )
}
