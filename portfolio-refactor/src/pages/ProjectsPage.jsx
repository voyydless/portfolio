import { useState } from 'react'
import DropdownToggle from '../components/DropdownToggle'
import TranslatedHtml from '../components/TranslatedHtml'
import { useLanguage } from '../context/LanguageContext'
import '../styles/projects.css'

function KingslayerProject() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  return (
    <div className={`project ${open ? 'open' : ''}`}>
      <div className="project_main">
        <div className="project_description">
          <h2>{t('project_title_kinglayer')}</h2>
          <TranslatedHtml
            as="p"
            id="project_description_kingslayer01"
            transKey="project_description_kingslayer01"
          />
          <TranslatedHtml
            as="p"
            id="project_description_kingslayer02"
            transKey="project_description_kingslayer02"
          />
        </div>

        <div className="project_tech_dropdown backend_tech_dropdown" style={{ marginTop: '24px' }}>
          <DropdownToggle onClick={() => setOpen((value) => !value)} />
          <div className="dropdown_content">
            <button type="button">
              <img src="/assets/icons8-java-50.png" alt="" />
              Java
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

function ProjectTemplate({
  image,
  titleKey,
  descriptionKeys,
  techStack,
  children,
}) {
  const [open, setOpen] = useState(false)
  
  // Pop-up state
  const [isModalOpen, setIsModalOpen] = useState(false) 

  return (
    <div className={`project ${open ? 'open' : ''}`}>
      <div className="project_main">
        
        {/* onClick to open modal */}
        <div className="project_image" onClick={() => setIsModalOpen(true)}>
          <img src={image} alt="" />
        </div>

        <div className="project_description">
          <TranslatedHtml as="h2" transKey={titleKey} id={titleKey} />
          {descriptionKeys.map((key) => (
            <TranslatedHtml as="p" key={key} id={key} transKey={key} />
          ))}

          <div className="project_tech_dropdown">
            <DropdownToggle onClick={() => setOpen((value) => !value)} />
          </div>
        </div>
      </div>

      <div className="dropdown_content">
        {techStack.map(({ icon, label }) => (
          <button key={label} type="button">
            <img src={icon} alt="" />
            {label}
          </button>
        ))}
      </div>

      <hr />

      {children}

      {isModalOpen && (
        <div className="image_modal_overlay" onClick={() => setIsModalOpen(false)}>
          <img 
            src={image} 
            alt="Enlarged project preview" 
            className="image_modal_content" 
            
            /* Doensn't allow modal to close if you click the image itself */
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </div>
  )
}

// Stack arrays
const octansStack = [
  { icon: '/assets/icons8-java-50.png', label: 'Java' },
  { icon: '/assets/icons8-react-40.png', label: 'React 18' },
  { icon: '/assets/icons8-typescript-48.png', label: 'TypeScript' },
]

const guidoStack = [
  { icon: '/assets/icons8-javascript-48.png', label: 'JavaScript' },
  { icon: '/assets/icons8-html5-48.png', label: 'HTML5' },
  { icon: '/assets/icons8-css3-48.png', label: 'CSS3' },
]

const caixinhaStack = [
  { icon: '/assets/icons8-react-40.png', label: 'React' },
  { icon: '/assets/figma.png', label: 'Figma' },
  { icon: '/assets/icons8-python-50.png', label: 'Python' },
]

const cafearyStack = [
  { icon: '/assets/figma.png', label: 'Figma' },
]

export default function ProjectsPage() {
  return (
    <section className="projects">
      
      {/* === Full-Stack Projects === */}
      <section className="fullstack_projects">
        <TranslatedHtml as="h1" id="fullstack_title" transKey="fullstack_title" />

        <ProjectTemplate
          image="/assets/preview-caixinha.png"
          titleKey="project_title_caixinha"
          descriptionKeys={[
            'project_description_caixinha01',
            'project_description_caixinha02',
          ]}
          techStack={caixinhaStack}
        />

        <ProjectTemplate
          image="/assets/preview-octans.png"
          titleKey="project_title_octans"
          descriptionKeys={[
            'project_description_octans01',
            'project_description_octans02',
          ]}
          techStack={octansStack}
        />
      </section>

      {/* === Front-End Projects === */}
      <section className="fontend_projects">
        <TranslatedHtml as="h1" id="frontend_title" transKey="frontend_title" />

        <ProjectTemplate
          image="/assets/preview-guido.png"
          titleKey="project_title_guido"
          descriptionKeys={[
            'project_description_guido01',
            'project_description_guido02',
          ]}
          techStack={guidoStack}
        />

        <ProjectTemplate
          image="/assets/preview-cafeary.png"
          titleKey="project_title_cafeary"
          descriptionKeys={[
            'project_description_cafeary01',
            'project_description_cafeary02',
          ]}
          techStack={cafearyStack}
        />
      </section>

      {/* === Back-End Projects === */}
      <section className="backend_projects">
        <TranslatedHtml as="h1" id="backend_title" transKey="backend_title" />
        <KingslayerProject />
      </section>
      
    </section>
  )
}