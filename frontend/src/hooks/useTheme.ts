import { useEffect, useState } from 'react';
import { getSaveTheme, saveTheme } from '../utils/storageThemes';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return getSaveTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  const [triggerTransition, setTriggerTransition] = useState(false)
  const [disable, setDisable] = useState(false)

  const toogleTheme = () => {

    if (disable) return
    setDisable(true)
    setTriggerTransition(true)
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
    saveTheme(theme)

  }, [theme])

  useEffect(() => {
    if (!triggerTransition) return

    const timeout = setTimeout(() => {
      setTriggerTransition(false)
      setDisable(false)
    }, 1500)
    return () => clearTimeout(timeout)
  }, [triggerTransition])

  return { theme, toogleTheme, triggerTransition, disable }

}
