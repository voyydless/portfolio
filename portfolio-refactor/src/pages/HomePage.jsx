import TranslatedHtml from '../components/TranslatedHtml'
import '../styles/index.css'

export default function HomePage() {
  return (
    <section className="intro">
      <div className="intro_text">
        <TranslatedHtml as="h1" id="catchline" transKey="catchline" />
        <TranslatedHtml as="p" id="welcome" transKey="welcome" />

        <div className="intro_links">
          <TranslatedHtml as="h2" id="socials" transKey="socials" />
          <a href="https://github.com/voyydless" target="_blank" rel="noreferrer">
            <img src="/assets/github.png" alt="" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sami-ford"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/linkedin.png" alt="" />
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/voyydless/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/assets/instagram.png" alt="" />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
