import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { setLocale } = useLanguage()

  return (
    <footer>
      <div className="footer-wrapper">
        <p>developed by voyydless</p>

        <div className="language-toggles">
          <a
            id="language-toggle-eng"
            href="#eng"
            onClick={(event) => {
              event.preventDefault()
              setLocale('eng')
            }}
          >
            ENG
          </a>
          <a
            href="#ptbr"
            onClick={(event) => {
              event.preventDefault()
              setLocale('ptbr')
            }}
          >
            PT-BR
          </a>
        </div>
      </div>
    </footer>
  )
}
