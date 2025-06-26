import { useTheme } from '../hooks/useTheme';
import { Button } from './Button';
import { ThemeTransiction } from './ThemeTransition';

export function ThemeToggleButton() {
  const { theme, toogleTheme, triggerTransition, disable } = useTheme()

  return (
    <>
      <ThemeTransiction trigger={triggerTransition}/>
      <Button
      onClick={toogleTheme}
      variant='clear'
      className='fixed top-4 right-4 text-2xl z-50 border-none'
      title={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      disabled={disable}
    >
      {theme === 'light' ? '🌒' : '☀️'}
    </Button>
    </>
  )
}
