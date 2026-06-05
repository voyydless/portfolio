import { useState } from 'react'
import DropdownToggle from '../components/DropdownToggle'
import TranslatedHtml from '../components/TranslatedHtml'
import '../styles/about.css'

const NORMAL_IMAGE = '/assets/imagem_rato.png'
const HOVER_IMAGE = '/assets/imagem_rato_hover.png'

export default function AboutPage() {
  const [open, setOpen] = useState(false)
  const [imageSrc, setImageSrc] = useState(NORMAL_IMAGE)

  return (
    <section className={`about ${open ? 'open' : ''}`}>
      <div className="about_text">
        <TranslatedHtml as="h1" id="about_h1" transKey="about_h1" />
        <TranslatedHtml as="p" id="about_text" transKey="about_text" />

        {/* === Experience Section === */}
        <div className="about_experience">
          <TranslatedHtml as="h2" id="about_experience" transKey="about_experience" />
          <ul>
            <li>
              <TranslatedHtml as="h3" id="experience_jd" transKey="experience_jd" />
              <TranslatedHtml as="p" id="experience_jd_role" transKey="experience_jd_role" />
              <TranslatedHtml as="p" id="experience_jd_date" transKey="experience_jd_date" className="date" />
              
              <ul>
                <li><TranslatedHtml as="p" id="experience_jd_desc01" transKey="experience_jd_desc01" /></li>
                <li><TranslatedHtml as="p" id="experience_jd_desc02" transKey="experience_jd_desc02" /></li>
                <li><TranslatedHtml as="p" id="experience_jd_desc03" transKey="experience_jd_desc03" /></li>
              </ul>

            </li>
          </ul>
        </div>

        {/* === Education Section === */}
        <div className="about_education">
          <TranslatedHtml
            as="h2"
            id="about_education"
            transKey="about_education"
          />
          <ul>
            <li>
              <TranslatedHtml as="h3" id="education_uni" transKey="education_uni" />
              <TranslatedHtml
                as="p"
                id="education_uni_course"
                transKey="education_uni_course"
              />
              <p id="education_uni_info" className="date" />
              <TranslatedHtml
                as="p"
                id="education_course_date"
                transKey="education_course_date"
                className="date"
              />
            </li>
            <li>
              <TranslatedHtml as="h3" id="education_gc" transKey="education_gc" />
              <TranslatedHtml
                as="p"
                id="education_gc_description"
                transKey="education_gc_description"
              />
              <TranslatedHtml
                as="p"
                id="education_gc_date"
                transKey="education_gc_date"
                className="date"
              />
            </li>
            <li>
              <TranslatedHtml
                as="h3"
                id="education_alura"
                transKey="education_alura"
              />
              <TranslatedHtml
                as="p"
                id="education_alura_description"
                transKey="education_alura_description"
              />
              <TranslatedHtml
                as="p"
                id="education_alura_date"
                transKey="education_alura_date"
                className="date"
              />
            </li>
          </ul>
        </div>
      </div>

      <div className="about_extra">
        <div className="about_image">
          <img
            id="about_image_normal"
            src={imageSrc}
            alt=""
            onMouseDown={() => setImageSrc(HOVER_IMAGE)}
            onMouseUp={() => setImageSrc(NORMAL_IMAGE)}
            onMouseLeave={() => setImageSrc(NORMAL_IMAGE)}
          />
        </div>

        <div className="about_tech_dropdown">
          <DropdownToggle onClick={() => setOpen((value) => !value)} />
        </div>

        <div className="dropdown_content">
          <div className="dropdown_group">
            <button type="button">
              <img src="/assets/icons8-java-50.png" alt="" />
              Java
            </button>
            <button type="button">
              <img src="/assets/icons8-python-50.png" alt="" />
              Python
            </button>
          </div>

          <div className="dropdown_group">
            <button type="button">
              <img src="/assets/icons8-typescript-48.png" alt="" />
              TypeScript
            </button>
            <button type="button">
              <img src="/assets/icons8-javascript-48.png" alt="" />
              JavaScript
            </button>
          </div>

          <div className="dropdown_group">
            <button type="button">
              <img src="/assets/icons8-css3-48.png" alt="" />
              CSS3
            </button>
            <button type="button">
              <img src="/assets/icons8-html5-48.png" alt="" />
              HTML5
            </button>
          </div>

          <div className="dropdown_group">
            <button type="button">
              <img src="/assets/icons8-react-40.png" alt="" />
              React
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}