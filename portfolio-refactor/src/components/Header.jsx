import { NavLink, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

function navLinkClass({ isActive }) {
  return isActive ? 'selected' : undefined
}

export default function Header() {
  const { pathname } = useLocation()
  const { t } = useLanguage()
  const isHome = pathname === '/'

  return (
    <header>
      <nav>
        {!isHome && (
          <NavLink to="/" end>
            Home
          </NavLink>
        )}
        <NavLink to="/projects" id="projects" className={navLinkClass}>
          {t('projects')}
        </NavLink>
        <NavLink to="/about" id="aboutme" className={navLinkClass}>
          {t('aboutme')}
        </NavLink>
      </nav>
    </header>
  )
}
