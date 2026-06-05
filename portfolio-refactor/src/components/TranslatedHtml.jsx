import { useLanguage } from '../context/LanguageContext'

export default function TranslatedHtml({
  as: Tag = 'span',
  transKey,
  id,
  className,
}) {
  const { t } = useLanguage()

  return (
    <Tag
      id={id}
      className={className}
      dangerouslySetInnerHTML={{ __html: t(transKey) }}
    />
  )
}
