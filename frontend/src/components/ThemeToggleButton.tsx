import { useTheme } from '../hooks/useTheme';

export function ThemeToggleButton() {
  const { theme, toogleTheme } = useTheme()

  return (
    <button
      onClick={toogleTheme}
      className='fixed top-4 right-4 p-2 bg-cyan-500 text-white rounded-full shadow hover:bg-cyan-700/80 transition z-50'
      title={`Mudar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
