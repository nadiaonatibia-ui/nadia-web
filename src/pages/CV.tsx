import { useState } from 'react';
import type { Language } from '../../types';

interface CVProps { language: Language; }

interface TeachingRole {
  institution: string;
  location: string;
  url?: string;
  role: string;
  years: string;
  tasks: string[];
}

interface Experience {
  organization: string;
  location: string;
  url?: string;
  position: string;
  years: string;
  description: string;
  isTeaching?: boolean;
  teachingRoles?: TeachingRole[];
  responsibilities?: string[];
  impact: string[];
}

interface Education {
  institution: string;
  url?: string;
  degree: string;
  year?: string;
  years?: string;
}

interface LanguageItem {
  language: string;
  level: string;
}

interface ExpertiseCategory {
  category: string;
  items: string[];
}

interface CVData {
  eyebrow: string;
  title: string;
  sections: {
    experience: string;
    education: string;
    languages: string;
    skills: string;
    expertise: string;
    responsibilities: string;
    impact: string;
  };
  experiences: Experience[];
  education: Education[];
  languages: LanguageItem[];
  skills: string[];
  expertise: ExpertiseCategory[];
  download: string;
}

const cvData: Record<Language, CVData> = {
  es: {
    eyebrow: '(bitácora)',
    title: 'TRAYECTORIA',
    sections: {
      experience: 'Experiencia Profesional',
      education: 'Formación Académica',
      languages: 'Idiomas',
      skills: 'Herramientas',
      expertise: 'Áreas de Expertise',
      responsibilities: 'Responsabilidades:',
      impact: 'Impacto:',
    },
    experiences: [
      {
        organization: 'La Xixa Teatre',
        location: 'Barcelona, España',
        url: 'https://www.laxixateatre.org/',
        position: 'Senior Project Manager',
        years: '2024–2026',
        description: 'Gestión de proyectos culturales e innovación social financiados por la UE.',
        responsibilities: [
          'Coordinación de 5 proyectos simultáneos de cooperación europea (programas de inclusión, arte y mediación cultural)',
          'Liderazgo de consorcios de 4-8 organizaciones asociadas',
          'Planificación integral: objetivos, plazos, presupuesto, seguimiento de entregables',
          'Coordinación de equipos multidisciplinares (creativos, técnicos, partners externos)',
          'Gestión presupuestaria y control económico: validación de facturas, contratos y aprobaciones de proveedores internacionales',
          'Supervisión de logística de producción, coordinación de espacios y cumplimiento de cronogramas',
          'Gestión de múltiples iniciativas simultáneamente, garantizando entregas en plazo',
          'Elaboración de informes técnicos y financieros para financiadores europeos',
          'Coordinación de workshops, conferencias y eventos multi-stakeholder',
          'Facilitación de comunicación entre asociados, creativos y partes interesadas',
        ],
        impact: [
          'Fortalecimiento de redes de colaboración europea en cultura e inclusión',
          'Implementación de proyectos artísticos orientados a comunidad y educación',
          'Facilitación de programas para jóvenes, migrantes, educadores y grupos intergeneracionales',
        ],
      },
      {
        organization: 'Docencia — Múltiples Instituciones',
        location: 'Buenos Aires',
        position: 'Profesora / Coordinadora Pedagógica',
        years: '2015–2024',
        description: 'Docencia en artes teatrales, coordinación pedagógica y facilitación de procesos comunitarios.',
        isTeaching: true,
        teachingRoles: [
          {
            institution: 'Colegio San Tarcisio',
            location: 'Buenos Aires, Argentina',
            url: 'https://santarsicio.edu.ar/inicio.php',
            role: 'Profesora de Teatro',
            years: '2021–2024',
            tasks: [
              'Profesora de Teatro a cargo de alumnos de educación secundaria (1er, 2do y 4to año)',
              'Diseño e implementación de currícula teatral',
              'Evaluación y desarrollo de estrategias pedagógicas',
            ],
          },
          {
            institution: 'EMAD (Escuela Metropolitana de Arte Dramático)',
            location: 'CABA, Argentina',
            url: 'https://emad-caba.infd.edu.ar/sitio/',
            role: 'Profesora Adjunta de Profesorado de Teatro',
            years: '2021–2024',
            tasks: [
              'Tutoría y co-docencia de "Prácticas Docentes" (Cátedra Albareda)',
              'Acompañamiento a estudiantes del profesorado de teatro',
              'Facilitación de reflexión pedagógica y didáctica teatral',
            ],
          },
          {
            institution: 'Teatro Comunitario Los Pompapetriyasos',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Coordinadora Pedagógica',
            years: '2020–2022',
            tasks: [
              'Organización y coordinación del equipo docente (12 profesionales)',
              'Acompañamiento pedagógico y promoción de estrategias educativas',
              'Diagnóstico y evaluación de cada proyecto pedagógico',
            ],
          },
          {
            institution: 'Escuela N° 16 D.E 8',
            location: 'CABA, Argentina',
            role: 'Profesora de Teatro',
            years: '2018–2020',
            tasks: [
              'Profesora de Teatro a cargo de alumnos de primaria segundo ciclo (4to-7mo grado)',
              'Diseño y ejecución de currícula teatral para educación primaria',
            ],
          },
          {
            institution: 'Teatro Comunitario Los Pompapetriyasos',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Profesora de Teatro y Artes (niños y adolescentes)',
            years: '2015–2020',
            tasks: [
              'Profesora de Teatro y Plástica para niños (coordinación en pareja pedagógica)',
              'Profesora de Teatro y Música para adolescentes (coordinación con docente de música)',
              'Facilitación de procesos creativos en contexto comunitario',
            ],
          },
        ],
        impact: [
          'Formación de más de 300 estudiantes en artes teatrales',
          'Desarrollo de metodologías participativas y comunitarias',
          'Coordinación de equipos docentes multidisciplinares',
          'Diseño e implementación de programas educativos innovadores',
        ],
      },
      {
        organization: 'Los Pompapetriyasos',
        location: 'Buenos Aires, Argentina',
        url: 'https://pompapetriyasos.com.ar/',
        position: 'Productora, Gestora Cultural & Fundraiser',
        years: '2016–2023',
        description: 'Desarrollo y coordinación de producciones culturales independientes e iniciativas artísticas comunitarias internacionales.',
        responsibilities: [
          'Coordinación de producciones teatrales de gran escala (60+ intérpretes)',
          'Gestión de planificación, ensayos y equipos técnicos',
          'Supervisión de instalaciones artísticas inmersivas (escenografía, elementos audiovisuales)',
          'Coordinación de relaciones con artistas, proveedores y equipos técnicos',
          'Seguimiento presupuestario y asignación de recursos en fases de producción',
          'Gestión de 7+ proyectos anuales: programación, producción y ejecución operativa',
          'Coordinación de colaboraciones internacionales con artistas e instituciones culturales',
          'Desarrollo y producción de proyectos multidisciplinarios',
          'Facilitación de procesos artísticos participativos en contextos socioculturales diversos',
          'Soporte en recaudación de fondos públicos y privados',
        ],
        impact: [
          'Gestión de portafolio artístico con alcance internacional (Argentina-Portugal-Europa)',
          'Expansión de programación cultural comunitaria',
          'Fortalecimiento de colaboración entre barrios y contextos',
          'Ampliación de redes artísticas internacionales',
        ],
      },
      {
        organization: 'Festival Latitude 40°',
        location: 'Argentina-Portugal',
        position: 'Productora',
        years: '2021–2023',
        description: 'Producción y coordinación de programación cultural en festival multidisciplinario internacional.',
        responsibilities: [
          'Coordinación de programación artística y logística del festival',
          'Colaboración con artistas, performers y partners culturales',
          'Organización logística de eventos culturales y performances',
          'Soporte en engagement de audiencia y ejecución de eventos',
          'Coordinación de artistas, proveedores y stakeholders institucionales',
          'Gestión de logística operativa y programación en múltiples espacios',
          'Facilitación de comunicación entre dirección artística y equipos técnicos',
        ],
        impact: [
          'Ampliación de cooperación artística internacional',
          'Fortalecimiento de redes artísticas entre países',
        ],
      },
      {
        organization: 'Infolibros (YouTube)',
        url: 'https://infolibros.org/',
        location: 'Uruguay-LATAM',
        position: 'Creative Project Manager',
        years: '2021–2023',
        description: 'Coordinación de iniciativas culturales y educativas de contenido digital conectadas a promoción de lectura.',
        responsibilities: [
          'Coordinación integral de producción de contenido digital',
          'Gestión de cronogramas, prioridades y entregables',
          'Colaboración con escritores, artistas de voz, editores de video y diseñadores',
          'Gestión de ciclos de revisión de contenido y cronogramas de producción',
          'Optimización del flujo de trabajo mediante integración de herramientas creativas con IA',
          'Coordinación de programas culturales y actividades literarias',
          'Colaboración con organizaciones culturales y partners educativos',
          'Soporte en desarrollo de proyectos e iniciativas de fundraising',
          'Organización de eventos públicos relacionados a lectura y literatura',
        ],
        impact: [
          'Escalado de producción de contenido educativo',
          'Crecimiento orgánico del 123%',
        ],
      },
      {
        organization: 'FETI — Festival Efímero de Teatro Independiente',
        location: 'Buenos Aires, Argentina',
        url: 'https://www.instagram.com/fetiteatro/',
        position: 'Productora y Curadora',
        years: '2013–2017',
        description: 'Producción y curaduría de un festival internacional de teatro independiente, a lo largo de tres ediciones.',
        responsibilities: [
          'Producción, gestión e interacción de los distintos equipos y elencos participantes.',
          'Curaduría y selección final de las obras participantes en cada edición.',
        ],
        impact: [
          'Más de 150 propuestas recibidas por convocatoria abierta, con una programación de alrededor de 25 obras seleccionadas por edición.',
          'Más de 15.000 personas de público a lo largo de 3 ediciones.',
        ],
      },
    ],
    education: [
      { institution: 'CLACSO / UNA', url: 'https://www.clacso.org.ar/', degree: 'Diplomatura Superior en Mediación Cultural, Comunidad, Artes y Tecnologías', year: '2021' },
      { institution: 'FLACSO', url: 'https://www.flacso.org.ar/', degree: 'Posgrado en Gestión Cultural y Comunicación', years: '2019–2020' },
      { institution: 'EDA Escuela de Dirección de Arte', url: 'https://www.direcciondearte.com.ar/', degree: 'Curso de dirección de arte dictado por Paula Taratuto', year: '2020' },
      { institution: 'CODERHOUSE', url: 'https://www.coderhouse.com/', degree: 'Certificado en Copywriting', year: '2023' },
      { institution: 'COSATYC Andamio 90', url: 'https://andamio90.org/', degree: 'Profesorado en Artes con orientación Teatro', years: '2010–2014' },
      { institution: 'FCE — Universidad de Buenos Aires', url: 'https://www.uba.ar/', degree: 'Organización de Eventos', year: '2014' },
      { institution: 'FCE — Universidad de Buenos Aires', url: 'https://www.uba.ar/', degree: 'Ceremonial y Protocolo', year: '2014' },
    ],
    languages: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Avanzado (FCE)' },
      { language: 'Catalán', level: 'Intermedio en progreso' },
    ],
    skills: [
      'Trello', 'Asana', 'Monday.com', 'Tablero Kanban', 'Slack',
      'Canva', 'Doodly', 'Filmora', 'Capcut',
      'Google Workspace', 'Microsoft Office',
    ],
    expertise: [
      {
        category: 'Gestión de Programas y Proyectos',
        items: [
          'Coordinación de programas financiados por marcos europeos (Erasmus+, Creative Europe, CERV)',
          'Gestión de consorcios multi-partner internacionales',
          'Monitoreo, informes y seguimiento presupuestario',
          'Documentación de proyectos y cumplimiento normativo',
          'Seguimiento de KPIs y entregables',
        ],
      },
      {
        category: 'Producción Cultural y Liderazgo Creativo',
        items: [
          'Producción cultural y artística (teatro, eventos, contenido digital)',
          'Gestión de proyectos creativos multidisciplinares',
          'Dirección creativa y flujos de producción',
          'Coordinación de equipos creativos y técnicos',
        ],
      },
      {
        category: 'Comunidad y Práctica Participativa',
        items: [
          'Mediación artística en contextos educativos y comunitarios',
          'Diseño y facilitación de procesos artísticos participativos',
          'Metodologías arts-based y educación artística transformadora',
          'Teatro del Oprimido y Teatro Fórum',
          'Iniciativas culturales de base comunitaria',
          'Perspectiva feminista aplicada a programas de género, migración e inclusión',
          'Cultura y participación democrática',
          'Diálogo intercultural e intergeneracional',
        ],
      },
      {
        category: 'Estratégico y Operativo',
        items: [
          'Planificación operativa y presupuestaria',
          'Gestión de proveedores y equipos internacionales multidisciplinares',
          'Fundraising y diversificación de fuentes de financiación',
          'Relación con partes interesadas institucionales',
        ],
      },
    ],
    download: 'Descargar CV (PDF)',
  },

  en: {
    eyebrow: '(logbook)',
    title: 'TRAJECTORY',
    sections: {
      experience: 'Professional Experience',
      education: 'Education',
      languages: 'Languages',
      skills: 'Skills (Tools)',
      expertise: 'Areas of Expertise',
      responsibilities: 'Responsibilities:',
      impact: 'Impact:',
    },
    experiences: [
      {
        organization: 'La Xixa Teatre',
        location: 'Barcelona, Spain',
        url: 'https://www.laxixateatre.org/',
        position: 'Senior Project Manager',
        years: '2024–2026',
        description: 'Management of EU-funded cultural projects and social innovation.',
        responsibilities: [
          'Coordination of 5 simultaneous European cooperation projects (inclusion, art and cultural mediation programmes)',
          'Leadership of consortia of 4-8 partner organisations',
          'Comprehensive planning: objectives, timelines, budgets, deliverable tracking',
          'Coordination of multidisciplinary teams (creatives, technicians, external partners)',
          'Budget management and financial oversight: invoice validation, contracts and international supplier approvals',
          'Production logistics supervision, venue coordination and schedule compliance',
          'Management of multiple initiatives simultaneously, ensuring on-time delivery',
          'Preparation of technical and financial reports for European funders',
          'Coordination of workshops, conferences and multi-stakeholder events',
          'Communication facilitation between partners, creatives and stakeholders',
        ],
        impact: [
          'Strengthening of European collaboration networks in culture and inclusion',
          'Implementation of community- and education-oriented artistic projects',
          'Facilitation of programmes for young people, migrants, educators and intergenerational groups',
        ],
      },
      {
        organization: 'Teaching — Multiple Institutions',
        location: 'Buenos Aires',
        position: 'Professor / Pedagogical Coordinator',
        years: '2015–2024',
        description: 'Theatre arts teaching, pedagogical coordination and facilitation of community processes.',
        isTeaching: true,
        teachingRoles: [
          {
            institution: 'Colegio San Tarcisio',
            location: 'Buenos Aires, Argentina',
            url: 'https://santarsicio.edu.ar/inicio.php',
            role: 'Theatre Faculty',
            years: '2021–2024',
            tasks: [
              'Theatre teacher for secondary school students (1st, 2nd and 4th year)',
              'Design and implementation of theatre curriculum',
              'Assessment and development of pedagogical strategies',
            ],
          },
          {
            institution: 'EMAD (Metropolitan School of Dramatic Art)',
            location: 'Buenos Aires, Argentina',
            url: 'https://emad-caba.infd.edu.ar/sitio/',
            role: 'Associate Faculty, Theatre Teacher Training',
            years: '2021–2024',
            tasks: [
              'Tutoring and co-teaching of "Teaching Practicum" (Albareda Chair)',
              'Mentoring of theatre teacher trainees',
              'Facilitation of pedagogical reflection and theatre didactics',
            ],
          },
          {
            institution: 'Los Pompapetriyasos Community Theatre',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Pedagogical Coordinator',
            years: '2020–2022',
            tasks: [
              'Organisation and coordination of the teaching team (12 professionals)',
              'Pedagogical support and promotion of educational strategies',
              'Diagnosis and assessment of each pedagogical project',
            ],
          },
          {
            institution: 'School No. 16, District 8',
            location: 'Buenos Aires, Argentina',
            role: 'Theatre Faculty',
            years: '2018–2020',
            tasks: [
              'Theatre teacher for primary school upper cycle (4th-7th grade)',
              'Design and delivery of theatre curriculum for primary education',
            ],
          },
          {
            institution: 'Los Pompapetriyasos Community Theatre',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Theatre and Arts Faculty (children and teenagers)',
            years: '2015–2020',
            tasks: [
              'Theatre and Visual Arts teacher for children (co-teaching partnership)',
              'Theatre and Music teacher for teenagers (co-teaching with music faculty)',
              'Facilitation of creative processes in community settings',
            ],
          },
        ],
        impact: [
          'Training of over 300 students in theatre arts',
          'Development of participatory and community-based methodologies',
          'Coordination of multidisciplinary teaching teams',
          'Design and implementation of innovative educational programmes',
        ],
      },
      {
        organization: 'Los Pompapetriyasos',
        location: 'Buenos Aires, Argentina',
        url: 'https://pompapetriyasos.com.ar/',
        position: 'Producer, Cultural Manager & Fundraiser',
        years: '2016–2023',
        description: 'Development and coordination of independent cultural productions and international community-based artistic initiatives.',
        responsibilities: [
          'Coordination of large-scale theatre productions (60+ performers)',
          'Management of scheduling, rehearsals and technical teams',
          'Supervision of immersive artistic installations (set design, audiovisual elements)',
          'Coordination of relationships with artists, suppliers and technical teams',
          'Budget tracking and resource allocation across production phases',
          'Management of 7+ annual projects: programming, production and operational delivery',
          'Coordination of international collaborations with artists and cultural institutions',
          'Development and production of multidisciplinary projects',
          'Facilitation of participatory artistic processes in diverse sociocultural settings',
          'Support in public and private fundraising',
        ],
        impact: [
          'Management of artistic portfolio with international reach (Argentina-Portugal-Europe)',
          'Expansion of community cultural programming',
          'Strengthening of cross-neighbourhood and cross-border collaboration',
          'Expansion of international artistic networks',
        ],
      },
      {
        organization: 'Festival Latitude 40°',
        location: 'Argentina-Portugal',
        position: 'Producer',
        years: '2021–2023',
        description: 'Production and coordination of cultural programming in an international multidisciplinary festival.',
        responsibilities: [
          'Coordination of artistic programming and festival logistics',
          'Collaboration with artists, performers and cultural partners',
          'Logistical organisation of cultural events and performances',
          'Support in audience engagement and event delivery',
          'Coordination of artists, suppliers and institutional stakeholders',
          'Management of operational logistics and multi-venue programming',
          'Communication facilitation between artistic direction and technical teams',
        ],
        impact: [
          'Expansion of international artistic cooperation',
          'Strengthening of artistic networks between countries',
        ],
      },
      {
        organization: 'Infolibros (YouTube)',
        location: 'Uruguay-LATAM',
        position: 'Creative Project Manager',
        years: '2021–2023',
        description: 'Coordination of cultural and educational digital content initiatives linked to reading promotion.',
        responsibilities: [
          'End-to-end coordination of digital content production',
          'Management of schedules, priorities and deliverables',
          'Collaboration with writers, voice artists, video editors and designers',
          'Management of content review cycles and production timelines',
          'Workflow optimisation through integration of AI-powered creative tools',
          'Coordination of cultural programmes and literary activities',
          'Collaboration with cultural organisations and educational partners',
          'Support in project development and fundraising initiatives',
          'Organisation of public events related to reading and literature',
        ],
        impact: [
          'Scaling of educational content production',
          'Organic growth of 123%',
          'Positioning as one of the largest educational channels in Spanish',
        ],
      },
    ],
    education: [
      { institution: 'CLACSO / UNA', url: 'https://www.clacso.org.ar/', degree: 'Advanced Diploma in Cultural Mediation, Community, Arts and Technologies', year: '2021' },
      { institution: 'FLACSO', url: 'https://www.flacso.org.ar/', degree: 'Postgraduate in Cultural Management and Communication', years: '2019–2020' },
      { institution: 'EDA School of Art Direction', url: 'https://www.direcciondearte.com.ar/', degree: 'Art Direction Course taught by Paula Taratuto', year: '2020' },
      { institution: 'CODERHOUSE', url: 'https://www.coderhouse.com/', degree: 'Certificate in Copywriting', year: '2023' },
      { institution: 'COSATYC Andamio 90', url: 'https://andamio90.org/', degree: 'Professorship in Arts with Theater Orientation', years: '2010–2014' },
      { institution: 'FCE — University of Buenos Aires', url: 'https://www.uba.ar/', degree: 'Event Organization', year: '2014' },
      { institution: 'FCE — University of Buenos Aires', url: 'https://www.uba.ar/', degree: 'Ceremonial and Protocol', year: '2014' },
    ],
    languages: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Advanced' },
      { language: 'Catalan', level: 'Intermediate (in progress)' },
    ],
    skills: [
      'Trello', 'Asana', 'Monday.com', 'Tablero Kanban', 'Slack',
      'Canva', 'Doodly', 'Filmora', 'Capcut',
      'Google Workspace', 'Microsoft Office',
    ],
    expertise: [
      {
        category: 'Gestión de Programas y Proyectos',
        items: [
          'Coordination of EU-grant-funded programmes',
          'Multi-partner and multi-stakeholder consortium management',
          'Monitoring, reporting and budget follow-up',
          'Project documentation and compliance support',
          'KPI and delivery tracking',
        ],
      },
      {
        category: 'Producción Cultural y Liderazgo Creativo',
        items: [
          'Cultural and artistic production (theatre, events, digital content)',
          'Multidisciplinary creative project management',
          'Production workflow and creative direction',
          'Creative and technical team coordination',
        ],
      },
      {
        category: 'Comunidad y Práctica Participativa',
        items: [
          'Artistic mediation in educational and community settings',
          'Design and facilitation of participatory artistic processes',
          'Cultura y participación democrática',
          'Diálogo intercultural e intergeneracional',
          'Iniciativas culturales de base comunitaria',
        ],
      },
      {
        category: 'Estratégico y Operativo',
        items: [
          'Operational and budget planning',
          'Supplier and multidisciplinary team management',
          'Fundraising and funding strategy development',
          'Institutional collaboration and stakeholder management',
          'International team coordination',
        ],
      },
    ],
    download: 'Download CV (PDF)',
  },

  ca: {
    eyebrow: '(quadern de bitàcola)',
    title: 'TRAJECTÒRIA',
    sections: {
      experience: 'Experiència Professional',
      education: 'Formació Acadèmica',
      languages: 'Idiomes',
      skills: 'Skills (Eines)',
      expertise: "Àrees d'Expertise",
      responsibilities: 'Responsabilitats:',
      impact: 'Impacte:',
    },
    experiences: [
      {
        organization: 'La Xixa Teatre',
        location: 'Barcelona, Espanya',
        url: 'https://www.laxixateatre.org/',
        position: 'Senior Project Manager',
        years: '2024–2026',
        description: "Gestió de projectes culturals i innovació social finançats per la UE.",
        responsibilities: [
          "Coordinació de 5 projectes simultanis de cooperació europea (programes d'inclusió, art i mediació cultural)",
          'Lideratge de consorcis de 4-8 organitzacions associades',
          "Planificació integral: objectius, terminis, pressupost, seguiment d'entregables",
          'Coordinació d\'equips multidisciplinars (creatius, tècnics, partners externs)',
          "Gestió pressupostària i control econòmic: validació de factures, contractes i aprovacions de proveïdors internacionals",
          "Supervisió de logística de producció, coordinació d'espais i compliment de cronogrames",
          'Gestió de múltiples iniciatives simultàniament, garantint entregues en termini',
          'Elaboració d\'informes tècnics i financers per a finançadors europeus',
          "Coordinació de workshops, conferències i esdeveniments multi-stakeholder",
          'Facilitació de comunicació entre associats, creatius i parts interessades',
        ],
        impact: [
          "Enfortiment de xarxes de col·laboració europea en cultura i inclusió",
          "Implementació de projectes artístics orientats a comunitat i educació",
          'Facilitació de programes per a joves, migrants, educadors i grups intergeneracionals',
        ],
      },
      {
        organization: 'Docència — Múltiples Institucions',
        location: 'Buenos Aires & Barcelona',
        position: 'Professora / Coordinadora Pedagògica',
        years: '2015–2024',
        description: "Docència en arts teatrals, coordinació pedagògica i facilitació de processos comunitaris.",
        isTeaching: true,
        teachingRoles: [
          {
            institution: 'Col·legi San Tarcisio',
            location: 'Buenos Aires, Argentina',
            role: 'Professora de Teatre',
            years: '2021–2024',
            tasks: [
              "Professora de Teatre a càrrec d'alumnes d'educació secundària (1er, 2on i 4rt any)",
              'Disseny i implementació de currícula teatral',
              "Avaluació i desenvolupament d'estratègies pedagògiques",
            ],
          },
          {
            institution: "EMAD (Escola Metropolitana d'Art Dramàtic)",
            location: 'Buenos Aires, Argentina',
            url: 'https://emad-caba.infd.edu.ar/sitio/',
            role: 'Professora Adjunta de Professorat de Teatre',
            years: '2021–2024',
            tasks: [
              'Tutoria i co-docència de "Pràctiques Docents" (Càtedra Albareda)',
              'Acompanyament a estudiants del professorat de teatre',
              'Facilitació de reflexió pedagògica i didàctica teatral',
            ],
          },
          {
            institution: 'Teatre Comunitari Los Pompapetriyasos',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Coordinadora Pedagògica',
            years: '2020–2022',
            tasks: [
              "Organització i coordinació de l'equip docent (12 professionals)",
              "Acompanyament pedagògic i promoció d'estratègies educatives",
              'Diagnòstic i avaluació de cada projecte pedagògic',
            ],
          },
          {
            institution: 'Escola N° 16 D.E 8',
            location: 'Buenos Aires, Argentina',
            role: 'Professora de Teatre',
            years: '2018–2020',
            tasks: [
              "Professora de Teatre a càrrec d'alumnes de primària segon cicle (4rt-7è grau)",
              "Disseny i execució de currícula teatral per a educació primària",
            ],
          },
          {
            institution: 'Teatre Comunitari Los Pompapetriyasos',
            location: 'Buenos Aires, Argentina',
            url: 'https://pompapetriyasos.com.ar/',
            role: 'Professora de Teatre i Arts (infants i adolescents)',
            years: '2015–2020',
            tasks: [
              'Professora de Teatre i Plàstica per a infants (coordinació en parella pedagògica)',
              'Professora de Teatre i Música per a adolescents (coordinació amb docent de música)',
              'Facilitació de processos creatius en context comunitari',
            ],
          },
        ],
        impact: [
          'Formació de més de 300 estudiants en arts teatrals',
          'Desenvolupament de metodologies participatives i comunitàries',
          "Coordinació d'equips docents multidisciplinars",
          "Disseny i implementació de programes educatius innovadors",
        ],
      },
      {
        organization: 'Los Pompapetriyasos',
        location: 'Buenos Aires, Argentina',
        url: 'https://pompapetriyasos.com.ar/',
        position: 'Productora, Gestora Cultural & Fundraiser',
        years: '2016–2023',
        description: "Desenvolupament i coordinació de produccions culturals independents i iniciatives artístiques comunitàries internacionals.",
        responsibilities: [
          'Coordinació de produccions teatrals de gran escala (60+ intèrprets)',
          "Gestió de planificació, assajos i equips tècnics",
          "Supervisió d'instal·lacions artístiques immersives (escenografia, elements audiovisuals)",
          "Coordinació de relacions amb artistes, proveïdors i equips tècnics",
          "Seguiment pressupostari i assignació de recursos en fases de producció",
          'Gestió de 7+ projectes anuals: programació, producció i execució operativa',
          "Coordinació de col·laboracions internacionals amb artistes i institucions culturals",
          'Desenvolupament i producció de projectes multidisciplinaris',
          'Facilitació de processos artístics participatius en contextos socioculturals diversos',
          'Suport en captació de fons públics i privats',
        ],
        impact: [
          "Gestió de portafoli artístic amb abast internacional (Argentina-Portugal-Europa)",
          'Expansió de programació cultural comunitària',
          "Enfortiment de col·laboració entre barris i contextos",
          "Ampliació de xarxes artístiques internacionals",
        ],
      },
      {
        organization: 'Festival Latitude 40°',
        location: 'Argentina-Portugal',
        position: 'Productora',
        years: '2021–2023',
        description: "Producció i coordinació de programació cultural en festival multidisciplinari internacional.",
        responsibilities: [
          'Coordinació de programació artística i logística del festival',
          'Col·laboració amb artistes, performers i partners culturals',
          "Organització logística d'esdeveniments culturals i performances",
          "Suport en engagement d'audiència i execució d'esdeveniments",
          "Coordinació d'artistes, proveïdors i stakeholders institucionals",
          "Gestió de logística operativa i programació en múltiples espais",
          "Facilitació de comunicació entre direcció artística i equips tècnics",
        ],
        impact: [
          "Ampliació de cooperació artística internacional",
          "Enfortiment de xarxes artístiques entre països",
        ],
      },
      {
        organization: 'Infolibros (YouTube)',
        location: 'Uruguai-LATAM',
        position: 'Creative Project Manager',
        years: '2021–2023',
        description: "Coordinació d'iniciatives culturals i educatives de contingut digital connectades a promoció de lectura.",
        responsibilities: [
          'Coordinació integral de producció de contingut digital',
          "Gestió de cronogrames, prioritats i entregables",
          "Col·laboració amb escriptors, artistes de veu, editors de vídeo i dissenyadors",
          "Gestió de cicles de revisió de contingut i cronogrames de producció",
          "Optimització del flux de treball mitjançant integració d'eines creatives amb IA",
          'Coordinació de programes culturals i activitats literàries',
          "Col·laboració amb organitzacions culturals i partners educatius",
          "Suport en desenvolupament de projectes i iniciatives de fundraising",
          "Organització d'events públics relacionats a lectura i literatura",
        ],
        impact: [
          'Escalat de producció de contingut educatiu',
          'Creixement orgànic del 123%',
          'Posicionament com un dels majors canals educatius en castellà',
        ],
      },
    ],
    education: [
      { institution: 'CLACSO / UNA', url: 'https://www.clacso.org.ar/', degree: 'Diplomatura Superior en Mediació Cultural, Comunitat, Arts i Tecnologies', year: '2021' },
      { institution: 'FLACSO', url: 'https://www.flacso.org.ar/', degree: 'Postgrau en Gestió Cultural i Comunicació', years: '2019–2020' },
      { institution: "EDA Escola de Direcció d'Art", degree: "Curs de direcció d'art impartit per Paula Taratuto", year: '2020' },
      { institution: 'CODERHOUSE', degree: 'Certificat en Copywriting', year: '2023' },
      { institution: 'COSATYC Andamio 90', url: 'https://andamio90.org/', degree: "Professorat d'Arts amb orientació Teatre", years: '2010–2014' },
      { institution: 'FCE — Universitat de Buenos Aires', url: 'https://www.uba.ar/', degree: "Organització d'Events", year: '2014' },
      { institution: 'FCE — Universitat de Buenos Aires', url: 'https://www.uba.ar/', degree: 'Cerimonial i Protocol', year: '2014' },
    ],
    languages: [
      { language: 'Castellà', level: 'Natiu' },
      { language: 'Anglès', level: 'Avançat' },
      { language: 'Català', level: 'Intermedi (en progrés)' },
    ],
    skills: [
      'Trello', 'Asana', 'Monday.com', 'Tablero Kanban', 'Slack',
      'Canva', 'Doodly', 'Filmora', 'Capcut',
      'Google Workspace', 'Microsoft Office',
    ],
    expertise: [
      {
        category: 'Gestión de Programas y Proyectos',
        items: [
          'Coordinació de programes finançats per subvencions europees',
          'Gestió de consorcis multi-partner i multi-stakeholder',
          'Monitoratge, reporting i seguiment pressupostari',
          'Documentació de projectes i suport de compliment',
          "Seguiment de KPIs i entregues",
        ],
      },
      {
        category: 'Producción Cultural y Liderazgo Creativo',
        items: [
          'Producció cultural i artística (teatre, esdeveniments, contingut digital)',
          'Gestió de projectes creatius multidisciplinars',
          'Flux de producció i direcció creativa',
          "Coordinació d'equips creatius i tècnics",
        ],
      },
      {
        category: 'Comunidad y Práctica Participativa',
        items: [
          'Mediació artística en contextos educatius i comunitaris',
          "Disseny i facilitació de processos artístics participatius",
          'Cultura i participació democràtica',
          'Diàleg intercultural i intergeneracional',
          'Iniciatives culturals de base comunitària',
        ],
      },
      {
        category: 'Estratégico y Operativo',
        items: [
          'Planificació operativa i pressupostària',
          "Gestió de proveïdors i equips multidisciplinars",
          "Fundraising i desenvolupament d'estratègies de finançament",
          "Col·laboració institucional i gestió d'stakeholders",
          "Coordinació d'equips internacionals",
        ],
      },
    ],
    download: 'Descarregar CV (PDF)',
  },
};

export const CV = ({ language }: CVProps) => {
  const d = cvData[language];
  const [expandedExp, setExpandedExp] = useState<number[]>([]); // All collapsed by default

  const getExpColor = (organization: string, position?: string): string => {
    // Check position first (more specific)
    if (position?.includes('Manager')) return 'var(--teal)'; // PM
    if (position?.includes('Productora') || position?.includes('Curadora')) return 'var(--coral)'; // Productora
    if (position?.includes('Coordinadora Pedagógica') || position?.includes('Docencia')) return 'var(--rosa)'; // Facilitadora
    if (position?.includes('Profesora') || position?.includes('Profesor')) return 'var(--rosa)'; // Facilitadora

    // Check organization (less specific)
    if (organization.includes('Xixa')) return 'var(--teal)'; // PM
    if (organization.includes('Docencia')) return 'var(--rosa)'; // Facilitadora
    if (organization.includes('Escuela')) return 'var(--rosa)'; // Facilitadora
    if (organization.includes('Festival')) return 'var(--coral)'; // Productora
    if (organization.includes('FETI')) return 'var(--coral)'; // Productora
    if (organization.includes('Pompapetriyasos')) return 'var(--rosa)'; // Default for teaching roles

    return 'var(--vino)';
  };

  const toggleExp = (idx: number) => {
    setExpandedExp((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <main className="min-h-screen bg-crudo">
      {/* Header */}
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <p className="eyebrow-mono mb-4">{d.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{d.title}</h1>
          <p className="text-coral text-lg">Nadia Oñatibia</p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-wide max-w-4xl mx-auto">

          {/* Navigation Index + Download Link */}
          <div className="flex justify-between items-center flex-wrap gap-4 mb-12">
            <nav className="flex flex-wrap gap-2 font-mono text-sm text-gray-warm">
              <a href="#experiencia" className="hover:text-vino transition-colors">Experiencia</a>
              <span>·</span>
              <a href="#formacion" className="hover:text-vino transition-colors">Formación</a>
              <span>·</span>
              <a href="#idiomas" className="hover:text-vino transition-colors">Idiomas</a>
              <span>·</span>
              <a href="#herramientas" className="hover:text-vino transition-colors">Herramientas</a>
              <span>·</span>
              <a href="#expertise" className="hover:text-vino transition-colors">Áreas de Expertise</a>
            </nav>
            <a href="/documents/CV_Nadia_Onatibia.pdf" className="font-mono text-sm text-rojo no-underline whitespace-nowrap hover:text-vino hover:underline transition-colors" style={{ letterSpacing: '0.02em' }}>
              {d.download}
            </a>
          </div>

          {/* Experience */}
          <section className="mb-16" id="experiencia">
            <h2 className="text-3xl font-bold mb-8 text-ink border-b-2 border-vino pb-4">
              {d.sections.experience}
            </h2>

            <div className="space-y-6">
              {d.experiences.map((exp, idx) => {
                const expColor = getExpColor(exp.organization, exp.position);
                const isExpanded = expandedExp.includes(idx);

                return (
                  <div
                    key={idx}
                    className="border-l-4 transition-colors"
                    style={{ borderLeftColor: expColor }}
                  >
                    <button
                      onClick={() => toggleExp(idx)}
                      className="w-full flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 py-4 pl-6 text-left hover:opacity-80 transition-opacity"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-ink">
                          {exp.url ? (
                            <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-vino underline">
                              {exp.organization}
                            </a>
                          ) : exp.organization}
                        </h3>
                        <p className="text-base font-medium mt-1" style={{ color: expColor }}>
                          {exp.position}
                        </p>
                        <p className="text-sm text-gray-warm mt-1">{exp.location}</p>
                      </div>
                      <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                        <span className="text-sm font-semibold text-gray-warm whitespace-nowrap">{exp.years}</span>
                        <span
                          className={`text-lg text-gray-warm transition-transform inline-block ${isExpanded ? 'rotate-45' : ''}`}
                        >
                          +
                        </span>
                      </div>
                    </button>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateRows: isExpanded ? '1fr' : '0px',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-out',
                        opacity: isExpanded ? 1 : 0,
                        visibility: isExpanded ? 'visible' : 'hidden',
                        pointerEvents: isExpanded ? 'auto' : 'none',
                      } as React.CSSProperties}
                    >
                      <div className="pl-6 pb-4 space-y-4">
                        <div>
                          <p className="text-gray-warm">{exp.description}</p>
                        </div>

                        {exp.isTeaching && exp.teachingRoles ? (
                          <div className="space-y-3">
                            {exp.teachingRoles.map((role, roleIdx) => (
                              <div key={roleIdx} className="bg-white rounded-lg border border-ink/5 p-4">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                                  <div>
                                    <p className="font-semibold text-ink text-sm">
                                      {role.url ? (
                                        <a href={role.url} target="_blank" rel="noopener noreferrer" className="text-vino hover:text-vino-2 underline">
                                          {role.institution}
                                        </a>
                                      ) : role.institution}
                                    </p>
                                    <p className="text-xs text-gray-warm">{role.location}</p>
                                  </div>
                                  <span className="text-xs font-semibold text-gray-warm whitespace-nowrap">{role.years}</span>
                                </div>
                                <p className="text-sm font-medium text-ink mb-2" style={{ color: expColor }}>
                                  {role.role}
                                </p>
                                <ul className="list-disc pl-5 space-y-1">
                                  {role.tasks.map((task, taskIdx) => (
                                    <li key={taskIdx} className="text-sm text-gray-warm">{task}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : exp.responsibilities ? (
                          <div>
                            <p className="font-semibold text-ink text-sm mb-2">{d.sections.responsibilities}</p>
                            <ul className="list-disc pl-5 space-y-1">
                              {exp.responsibilities.map((resp, respIdx) => (
                                <li key={respIdx} className="text-sm text-gray-warm">{resp}</li>
                              ))}
                            </ul>
                          </div>
                        ) : null}

                        <div className="rounded-lg border p-4" style={{ backgroundColor: `color-mix(in srgb, ${expColor} 5%, white)`, borderColor: `color-mix(in srgb, ${expColor} 20%, white)` }}>
                          <p className="font-semibold text-ink text-sm mb-2">{d.sections.impact}</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.impact.map((imp, impIdx) => (
                              <li key={impIdx} className="text-sm text-gray-warm">{imp}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16" id="formacion">
            <h2 className="text-3xl font-bold mb-8 text-ink border-b-2 border-vino pb-4">
              {d.sections.education}
            </h2>
            <div className="space-y-4">
              {d.education.map((edu, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-ink/5 p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <p className="font-bold text-ink">
                      {edu.url ? (
                        <a href={edu.url} target="_blank" rel="noopener noreferrer" className="text-vino hover:text-vino-2 underline">{edu.institution}</a>
                      ) : edu.institution}
                    </p>
                    <p className="text-gray-warm mt-1">{edu.degree}</p>
                  </div>
                  <span className="text-sm font-semibold text-coral whitespace-nowrap">{edu.year || edu.years}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mb-16" id="idiomas">
            <h2 className="text-3xl font-bold mb-8 text-ink border-b-2 border-vino pb-4">
              {d.sections.languages}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {d.languages.map((lang, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-ink/5 p-6 text-center">
                  <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-2">{lang.language}</h3>
                  <p className="text-gray-warm">{lang.level}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16" id="herramientas">
            <h2 className="text-3xl font-bold mb-8 text-ink border-b-2 border-vino pb-4">
              {d.sections.skills}
            </h2>
            <div className="flex flex-wrap gap-3">
              {d.skills.map((skill, idx) => (
                <span key={idx} className="bg-vino/10 text-vino px-4 py-2 rounded-full text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Expertise */}
          <section className="mb-16" id="expertise">
            <h2 className="text-3xl font-bold mb-8 text-ink border-b-2 border-vino pb-4">
              {d.sections.expertise}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {d.expertise.map((cat, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-ink text-lg mb-3">{cat.category}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-gray-warm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Download */}
          <div className="text-center">
            <a href="/documents/CV_Nadia_Onatibia.pdf" target="_blank" rel="noopener noreferrer" className="btn bg-vino text-white hover:bg-vino-2 font-medium">
              {d.download}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
