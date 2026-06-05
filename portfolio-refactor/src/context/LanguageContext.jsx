import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import translations from '../i18n/translations'

const LanguageContext = createContext(null)

function readLocaleFromHash() {
  return window.location.hash === '#eng' ? 'eng' : 'ptbr'
}

function readInitialLocale() {
  const stored = localStorage.getItem('language')
  if (stored === 'eng' || stored === 'ptbr') {
    return stored
  }
  return 'eng'
}

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(readInitialLocale)

  const setLocale = useCallback((newLocale) => {
    setLocaleState(newLocale)
    localStorage.setItem('language', newLocale)
    window.location.hash = newLocale
  }, [])

  const t = useCallback((key) => translations[locale][key] ?? '', [locale])

  useEffect(() => {
    const hash = window.location.hash
    if (hash !== '#eng' && hash !== '#ptbr') {
      window.location.hash = localStorage.getItem('language') || 'ptbr'
    }
  }, [])

  useEffect(() => {
    const onHashChange = () => {
      const fromHash = readLocaleFromHash()
      setLocaleState(fromHash)
      localStorage.setItem('language', fromHash)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
