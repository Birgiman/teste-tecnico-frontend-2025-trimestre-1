const THEME_KEY = 'theme'

export function saveTheme(theme: 'light' | 'dark') {
  localStorage.setItem(THEME_KEY, theme)
}

export function getSaveTheme(): 'light' | 'dark' | null {
  const theme = localStorage.getItem(THEME_KEY)
  if (theme === 'dark' || theme === 'light') return theme
  return null
}
