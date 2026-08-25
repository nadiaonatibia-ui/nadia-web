import type { Language } from '../../types'

export interface PageMetadata {
  title: string
  description: string
  ogImage?: string
}

export const metadata: Record<string, Record<Language, PageMetadata>> = {
  home: {
    es: {
      title: 'Nadia Oñatibia | Gestión Cultural, Facilitación y Producción',
      description: 'Gestora cultural, facilitadora de procesos participativos y productora con experiencia en cooperación europea (Erasmus+, Creative Europe). Barcelona.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Nadia Oñatibia | Cultural Management, Facilitation & Production',
      description: 'Cultural manager, facilitator of participatory processes and producer with experience in European cooperation (Erasmus+, Creative Europe). Barcelona.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Nadia Oñatibia | Gestió Cultural, Facilitació i Producció',
      description: 'Gestora cultural, facilitadora de processos participatius i productora amb experiència en cooperació europea (Erasmus+, Creative Europe). Barcelona.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  portfolio: {
    es: {
      title: 'Portafolio | Proyectos Culturales Europeos',
      description: 'Proyectos de gestión cultural, inclusión social y mediación artística financiados por la UE. RASSIF, SMASH, MIRETAGE, y más.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Portfolio | European Cultural Projects',
      description: 'Cultural management, social inclusion and artistic mediation projects funded by the EU. RASSIF, SMASH, MIRETAGE, and more.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Portafoli | Projectes Culturals Europeus',
      description: 'Projectes de gestió cultural, inclusió social i mediació artística financiats per la UE. RASSIF, SMASH, MIRETAGE, i més.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  blog: {
    es: {
      title: 'Notas de Campo | Reflexiones sobre Cultura',
      description: 'Notas de campo y reflexiones sobre cultura como infraestructura democrática, mediación participativa y gestión cultural en Europa.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Field Notes | Reflections on Culture',
      description: 'Field notes and reflections on culture as democratic infrastructure, participatory mediation and cultural management in Europe.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Notes de Camp | Reflexions sobre Cultura',
      description: 'Notes de camp i reflexions sobre cultura com a infraestructura democràtica, mediació participativa i gestió cultural a Europa.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  cv: {
    es: {
      title: 'CV | Nadia Oñatibia — Trayectoria Profesional',
      description: 'Experiencia en gestión de proyectos europeos, mediación cultural, facilitación participativa. Formación: FLACSO, CLACSO. Idiomas: 5. Herramientas: Figma, Notion, IA.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'CV | Nadia Oñatibia — Professional Background',
      description: 'Experience in European project management, cultural mediation, participatory facilitation. Education: FLACSO, CLACSO. Languages: 5. Tools: Figma, Notion, AI.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'CV | Nadia Oñatibia — Trajectòria Professional',
      description: 'Experiència en gestió de projectes europeus, mediació cultural, facilitació participativa. Formació: FLACSO, CLACSO. Idiomes: 5. Eines: Figma, Notion, IA.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  contact: {
    es: {
      title: 'Contacto | Nadia Oñatibia',
      description: 'Disponible para proyectos de gestión cultural, facilitación de procesos participativos y producción de eventos en Barcelona o remoto.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Contact | Nadia Oñatibia',
      description: 'Available for cultural management projects, facilitation of participatory processes and event production in Barcelona or remotely.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Contacte | Nadia Oñatibia',
      description: 'Disponible per a projectes de gestió cultural, facilitació de processos participatius i producció d\'esdeveniments a Barcelona o en remot.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  privacy: {
    es: {
      title: 'Política de Privacidad | Nadia Oñatibia',
      description: 'Política de privacidad y protección de datos personales.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Privacy Policy | Nadia Oñatibia',
      description: 'Privacy policy and personal data protection.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Política de Privacitat | Nadia Oñatibia',
      description: 'Política de privacitat i protecció de dades personals.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  cookies: {
    es: {
      title: 'Política de Cookies | Nadia Oñatibia',
      description: 'Política de cookies y tecnologías de rastreo.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Cookie Policy | Nadia Oñatibia',
      description: 'Cookie policy and tracking technologies.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Política de Galetes | Nadia Oñatibia',
      description: 'Política de galetes i tecnologies de rastreig.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
  legal: {
    es: {
      title: 'Aviso Legal | Nadia Oñatibia',
      description: 'Aviso legal e información de titularidad del sitio.',
      ogImage: '/images/hero-headshot.jpg',
    },
    en: {
      title: 'Legal Notice | Nadia Oñatibia',
      description: 'Legal notice and website ownership information.',
      ogImage: '/images/hero-headshot.jpg',
    },
    ca: {
      title: 'Avís Legal | Nadia Oñatibia',
      description: 'Avís legal i informació de titularitat del lloc web.',
      ogImage: '/images/hero-headshot.jpg',
    },
  },
}
