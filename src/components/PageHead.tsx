import { Helmet } from 'react-helmet-async'
import type { Language } from '../../types'
import { metadata } from '../data/metadata'

interface PageHeadProps {
  page: keyof typeof metadata
  language: Language
}

export const PageHead = ({ page, language }: PageHeadProps) => {
  const meta = metadata[page]?.[language]

  if (!meta) return null

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {meta.ogImage && <meta property="og:image" content={meta.ogImage} />}
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
