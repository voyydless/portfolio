import { useEffect, useState } from 'react'

const ICON_SUN = '/assets/icons8-sun-30.png'
const ICON_MOON = '/assets/icons8-moon-30.png'

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('theme') !== 'light',
  )

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      id="theme-switch"
      type="button"
      onClick={() => setIsDark((dark) => !dark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <img
        id="image_toggle"
        src={isDark ? ICON_MOON : ICON_SUN}
        alt=""
      />
    </button>
  )
}
