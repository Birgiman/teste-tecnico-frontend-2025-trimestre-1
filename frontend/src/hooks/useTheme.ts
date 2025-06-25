import { useEffect, useState } from 'react';
import { getSaveTheme, saveTheme } from '../utils/storageThemes';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return getSaveTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const toogleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
    saveTheme(theme)

  }, [theme])

  return { theme, toogleTheme }

}
