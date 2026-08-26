import { useState, useEffect, useRef } from 'react';
import type { Language } from '../../types';
import { PageHead } from '../components/PageHead';

interface PortfolioProps {
  language: Language;
}

type SectorKey = 'migracion' | 'discurso-odio' | 'patrimonio' | 'genero' | 'inclusion55' | 'edi' | 'empatia';

interface Project {
  id: string;
  title: string;
  sectorKey: SectorKey;
  color: string;
  link: string;
  logo: string;
}

const projects: Project[] = [
  { id: 'rassif', title: 'RASSIF', sectorKey: 'migracion', color: 'from-rose-900 to-rose-700', link: 'https://www.casaldelsinfants.org/es/rassif-escena/', logo: '/images/projects/logo-rassif.png' },
  { id: 'smash', title: 'SMASH', sectorKey: 'discurso-odio', color: 'from-violet-900 to-violet-700', link: 'https://www.smashproject.eu/', logo: '/images/projects/logo-smash.png' },
  { id: 'miretage', title: 'MIRETAGE', sectorKey: 'patrimonio', color: 'from-emerald-900 to-emerald-700', link: 'https://miretage.eu', logo: '/images/projects/logo-miretage.png' },
  { id: 'beyond-gender', title: 'BEYOND GENDER', sectorKey: 'genero', color: 'from-amber-900 to-amber-700', link: 'https://www.laxixateatre.org/es/beyondgender', logo: '/images/projects/logo-beyond-gender.png' },
  { id: 'reignite', title: 'REIGNITE', sectorKey: 'inclusion55', color: 'from-sky-900 to-sky-700', link: 'https://reignite-project.eu/', logo: '/images/projects/logo-reignite.png' },
  { id: 'edi-go', title: 'EDI GO', sectorKey: 'edi', color: 'from-teal-900 to-teal-700', link: 'https://edi-go.eu/', logo: '/images/projects/logo-edi-go.jpg' },
  { id: 'empatheatry', title: 'EMPATHEATRY', sectorKey: 'empatia', color: 'from-orange-900 to-orange-700', link: 'https://empatheatry.eu/', logo: '/images/projects/logo-empatheatry.png' },
];

const sectorLabels: Record<Language, Record<SectorKey, string>> = {
  es: { migracion: 'Migración', 'discurso-odio': 'Discurso de odio', patrimonio: 'Patrimonio', genero: 'Género', inclusion55: 'Inclusión 55+', edi: 'EDI', empatia: 'Empatía' },
  en: { migracion: 'Migration', 'discurso-odio': 'Hate speech', patrimonio: 'Heritage', genero: 'Gender', inclusion55: 'Inclusion 55+', edi: 'EDI', empatia: 'Empathy' },
  ca: { migracion: 'Migració', 'discurso-odio': "Discurs d'odi", patrimonio: 'Patrimoni', genero: 'Gènere', inclusion55: 'Inclusió 55+', edi: 'EDI', empatia: 'Empatia' },
};

const projectContent: Record<string, Record<Language, { bullets: string[]; description: string }>> = {
  rassif: {
    es: {
      bullets: ['Identidad, migración y pertenencia', 'Narrativas personales como material artístico', 'Poder, otredad y representación'],
      description: 'Rassif a Escena es la línea de teatro social del proyecto RASSIF, liderado por Casal dels Infants junto a una red de organizaciones en Catalunya y Marruecos que trabajan por la protección de los derechos de niños, niñas y jóvenes migrados solos entre ambos países. A través del teatro fórum, jóvenes vinculados a procesos migratorios reflexionan sobre sus historias de vida, se empoderan y construyen un discurso transformador capaz de cambiar la mirada del público. Un espacio de expresión, encuentro y sensibilización. El resultado es una pieza que invita a la reflexión colectiva sobre una realidad que atraviesa la sociedad de manera transversal, presentada en distintos espacios culturales y universitarios, donde el público es invitado a intervenir en escena.',
    },
    en: {
      bullets: ['Identity, migration and belonging', 'Personal narratives as artistic material', 'Power, otherness and representation'],
      description: 'Rassif a Escena is the social theatre strand of the RASSIF project, led by Casal dels Infants alongside a network of organizations in Catalonia and Morocco working to protect the rights of unaccompanied migrant children and young people traveling between both countries. Through forum theatre, young people linked to migratory processes reflect on their life stories, become empowered, and build transformative discourse capable of changing the audience\'s perspective. A space for expression, encounter and awareness-raising. The result is a piece that invites collective reflection on a reality that permeates society transversely, presented in various cultural and university spaces, where the audience is invited to intervene on stage.',
    },
    ca: {
      bullets: ['Identitat, migració i pertinença', 'Narratives personals com a material artístic', 'Poder, alteritat i representació'],
      description: "Rassif a Escena és la línia de teatre social del projecte RASSIF, liderat per Casal dels Infants juntament amb una xarxa d'organitzacions a Catalunya i Marroc que treballen per la protecció dels drets de nenes, nens i joves migrats sols entre ambdós països. A través del teatre fòrum, joves vinculats a processos migratoris reflexionen sobre les seves històries de vida, s'empoderin i construeixin un discurs transformador capaç de canviar la mirada del públic. Un espai d'expressió, encontre i sensibilització. El resultat és una peça que convida a la reflexió col·lectiva sobre una realitat que travessa la societat de manera transversal, presentada en diversos espais culturals i universitaris, on el públic és convidat a intervenir a l'escena.",
    },
  },
  smash: {
    es: {
      bullets: ['Alfabetización mediática, contra el discurso de odio', 'Teatro, redes sociales y participación juvenil', 'Pensamiento crítico bajo el marco DigiComp'],
      description: 'Proyecto europeo de dos años bajo el marco Erasmus+, contra el discurso de odio en redes. SMASH —Teatro Periodístico contra el Discurso de Odio en Línea— busca empoderar a jóvenes y a quienes trabajan con ellos para reconocer, analizar y contrarrestar el discurso de odio en internet desde un enfoque creativo, participativo y artístico, combinando teatro, competencias digitales y reflexión ética. El proyecto reúne a un consorcio de seis organizaciones de España, Francia, Italia y Lituania —con experiencia en teatro del oprimido, ética digital, trabajo juvenil, inclusión social y educación mediática— que construyeron juntas un método compartido entre el teatro y la comunicación online, testeado y validado localmente por cada socio a través de talleres y laboratorios creativos.',
    },
    en: {
      bullets: ['Media literacy against hate speech', 'Theatre, social media and youth participation', 'Critical thinking under the DigiComp framework'],
      description: 'A two-year European project under the Erasmus+ framework, against hate speech online. SMASH—Journalistic Theatre Against Online Hate Speech—seeks to empower young people and those who work with them to recognize, analyze and counter hate speech online through a creative, participatory and artistic approach, combining theatre, digital skills and ethical reflection. The project brings together a consortium of six organizations from Spain, France, Italy and Lithuania—with experience in theatre of the oppressed, digital ethics, youth work, social inclusion and media literacy—who jointly built a shared method between theatre and online communication, tested and validated locally by each partner through workshops and creative labs.',
    },
    ca: {
      bullets: ["Alfabetització mediàtica, contra el discurs d'odi", 'Teatre, xarxes socials i participació juvenil', 'Pensament crític sota el marc DigiComp'],
      description: "Projecte europeu de dos anys sota el marc Erasmus+, contra el discurs d'odi a les xarxes. SMASH —Teatre Periodístic contra el Discurs d'Odi en Línia— busca empoderar joves i qui treballa amb ells per reconèixer, analitzar i contrarrestar el discurs d'odi a internet des d'un enfocament creatiu, participatiu i artístic, combinant teatre, competències digitals i reflexió ètica. El projecte reuneix un consorcio de sis organitzacions d'Espanya, França, Itàlia i Lituània —amb experiència en teatre de l'oprimit, ètica digital, treball juvenil, inclusió social i educació mediàtica— que van construir conjuntament un mètode compartit entre el teatre i la comunicació online, testat i validat localment per cada soci a través de tallers i laboratoris creatius.",
    },
  },
  miretage: {
    es: {
      bullets: ['Patrimonio inmaterial y comunidades minoritarias', 'Laboratorios sensoriales y mapeo simbólico', 'Rutas participativas con comunidades religiosas'],
      description: 'MIRETAGE es una asociación estratégica Erasmus+ de tres años, con 8 organizaciones de Bélgica, España y los Países Bajos, en la que comunidades religiosas minoritarias —judía, protestante y musulmana, entre otras— comparten y visibilizan un patrimonio históricamente dejado afuera de los relatos nacionales. A través de Heritage Labs en los tres países, representantes de estas comunidades se encuentran con museos, universidades, ayuntamientos y centros culturales para compartir memoria y conocimiento ritual, y co-crear junto a ellos itinerarios patrimoniales —los Heritage Trails— que conectan su patrimonio con el espacio social y geográfico que las rodea. El foco no está en el itinerario en sí, sino en el proceso de crearlo: storytelling, juegos, herramientas de diálogo y mapas digitales, documentados después en manuales para que otras instituciones puedan replicarlo.',
    },
    en: {
      bullets: ['Intangible heritage and minority communities', 'Sensory labs and symbolic mapping', 'Participatory routes with religious communities'],
      description: "MIRETAGE is a three-year Erasmus+ strategic partnership with 8 organizations from Belgium, Spain and the Netherlands, in which minority religious communities—Jewish, Protestant, Muslim, among others—share and make visible a heritage historically left out of national narratives. Through Heritage Labs in the three countries, representatives of these communities meet with museums, universities, city councils and cultural centers to share memory and ritual knowledge, and co-create with them heritage itineraries—the Heritage Trails—that connect their heritage to the social and geographic space around them. The focus is not on the itinerary itself, but on the process of creating it: storytelling, games, dialogue tools and digital maps, later documented in manuals so that other institutions can replicate it.",
    },
    ca: {
      bullets: ['Patrimoni immaterial i comunitats minoritàries', 'Laboratoris sensorials i mapatge simbòlic', 'Rutes participatives amb comunitats religioses'],
      description: "MIRETAGE és una associació estratègica Erasmus+ de tres anys, amb 8 organitzacions de Bèlgica, Espanya i els Països Baixos, en la qual comunitats religioses minoritàries —jueva, protestant, musulmana, entre altres— comparteixen i visibilitzen un patrimoni històricament deixat fora dels relats nacionals. A través de Heritage Labs als tres països, representants d'aquestes comunitats es troben amb museus, universitats, ajuntaments i centres culturals per compartir memòria i coneixement ritual, i co-crear amb ells itineraris patrimonials —els Heritage Trails— que connecten el seu patrimoni amb l'espai social i geogràfic que les rodeja. L'enfocament no està en l'itinerari en si, sinó en el procés de crear-lo: storytelling, jocs, eines de diàleg i mapes digitals, documentats després en manuals perquè altres institucions puguin replicar-lo.",
    },
  },
  'beyond-gender': {
    es: {
      bullets: ['Diálogo intergeneracional sobre género y vida afectivo-sexual', 'Deconstrucción de estereotipos de género, edad y contexto', 'Mediación artística y pedagogía intercultural'],
      description: 'Beyond Gender promueve un diálogo activo entre generaciones sobre la vida afectiva y sexual, las identidades de género y las orientaciones sexuales. Durante tres años y medio, cinco asociaciones de Francia, España y Países Bajos desarrollan materiales pedagógicos para deconstruir estereotipos de género, edad y contexto social y cultural, con actividades inspiradas en la educación popular, la pedagogía intercultural y la mediación artística. El proyecto está dirigido a todas las edades —no hay edad para explorar la vida afectiva y sexual— y también a profesionales de la educación y la formación, a quienes busca dar herramientas para abordar estos temas con sus propios públicos.',
    },
    en: {
      bullets: ['Intergenerational dialogue on gender and affective-sexual life', 'Deconstruction of gender, age and context stereotypes', 'Artistic mediation and intercultural pedagogy'],
      description: "Beyond Gender promotes active dialogue between generations about affective and sexual life, gender identities and sexual orientations. Over three and a half years, five associations from France, Spain and the Netherlands develop pedagogical materials to deconstruct stereotypes of gender, age and social and cultural context, through activities inspired by popular education, intercultural pedagogy and artistic mediation. The project is aimed at all ages—there is no age to explore affective and sexual life—and also at education and training professionals, to whom it seeks to provide tools to address these issues with their own audiences.",
    },
    ca: {
      bullets: ['Diàleg intergeneracional sobre gènere i vida afectiu-sexual', 'Deconstrucció d\'estereotips de gènere, edat i context', 'Mediació artística i pedagogia intercultural'],
      description: "Beyond Gender promouen un diàleg actiu entre generacions sobre la vida afectiva i sexual, les identitats de gènere i les orientacions sexuals. Durant tres anys i mig, cinc associacions de França, Espanya i els Països Baixos desenvolupen materials pedagògics per deconstruir estereotips de gènere, edat i context social i cultural, amb activitats inspirades en l'educació popular, la pedagogia intercultural i la mediació artística. El projecte està dirigit a totes les edats —no hi ha edat per explorar la vida afectiva i sexual— i també a professionals de l'educació i la formació, a qui busca donar eines per abordar aquests temes amb els seus propis públics.",
    },
  },
  reignite: {
    es: {
      bullets: ['Reactivación de propósito en adultos 55+', 'Combina psicología, teatro y aprendizaje', 'Testeado en comunidades reales de cinco países europeos'],
      description: 'Reignite Your Purpose es un proyecto europeo Erasmus+ en el que personas mayores de 55 años redescubren su motivación, fortalecen su confianza y encuentran alegría en la conexión creativa y social, combinando psicología, teatro y aprendizaje. Reúne a organizaciones de Polonia, Países Bajos, Bulgaria, España y Francia para promover el envejecimiento activo, el bienestar y el aprendizaje permanente. A medida que envejecemos, las rutinas cambian y el rol en el mundo se transforma — pero eso no significa dejar de crecer, aprender o conectar con los demás. El proyecto busca crear oportunidades reales para que las personas mayores se reconecten consigo mismas, con otros y con sus comunidades.',
    },
    en: {
      bullets: ['Reactivating purpose in adults 55+', 'Combines psychology, theatre and learning', 'Tested in real communities across five European countries'],
      description: 'Reignite Your Purpose is a European Erasmus+ project in which people over 55 years old rediscover their motivation, strengthen their confidence and find joy in creative and social connection, combining psychology, theatre and learning. It brings together organizations from Poland, the Netherlands, Bulgaria, Spain and France to promote active aging, well-being and lifelong learning. As we age, routines change and our role in the world transforms—but that doesn\'t mean we stop growing, learning or connecting with others. The project seeks to create real opportunities for older people to reconnect with themselves, with others and with their communities.',
    },
    ca: {
      bullets: ['Reactivació de propòsit en adults 55+', 'Combina psicologia, teatre i aprenentatge', 'Testat en comunitats reals de cinc països europeus'],
      description: "Reignite Your Purpose és un projecte europeu Erasmus+ en el qual persones majors de 55 anys redescubreixen la seva motivació, enforteixen la seva confiança i troben alegria en la connexió creativa i social, combinant psicologia, teatre i aprenentatge. Reuneix organitzacions de Polònia, els Països Baixos, Bulgària, Espanya i França per promoure l'envelliment actiu, el benestar i l'aprenentatge permanent. A mesura que envelleïm, les rutines canvien i el nostre rol en el món es transforma — però això no significa deixar de créixer, aprendre o connectar amb els altres. El projecte busca crear oportunitats reals perquè les persones grans es reconnectin amb elles mateixes, amb altres i amb les seves comunitats.",
    },
  },
  'edi-go': {
    es: {
      bullets: ['Fortalecimiento de prácticas EDI en organizaciones juveniles', 'Revisión organizacional integral y cambio sistémico interno', 'Grupos focales y materiales para implementar EDI'],
      description: 'EDI Go nace de la necesidad de las organizaciones de trabajo juvenil de revisar y mejorar continuamente sus prácticas de equidad, diversidad e inclusión en el día a día. Reúne a organizaciones de España, Croacia, Grecia e Italia en un enfoque integral para que cada una revise sus propias prácticas EDI en todos los niveles, impulsando un cambio sistemático interno. A partir de grupos focales y entrevistas con jóvenes y profesionales del trabajo juvenil, se construyeron materiales para implementar EDI de manera sostenida.',
    },
    en: {
      bullets: ['Strengthening EDI practices in youth organisations', 'Comprehensive organizational review and internal systemic change', 'Focus groups and materials for implementing EDI'],
      description: 'EDI Go is born from the need of youth work organizations to continuously review and improve their equity, diversity and inclusion practices in day-to-day work. It brings together organizations from Spain, Croatia, Greece and Italy in a comprehensive approach so that each one reviews its own EDI practices at all levels, driving internal systemic change. Based on focus groups and interviews with young people and youth work professionals, materials were built to implement EDI in a sustained manner.',
    },
    ca: {
      bullets: ['Enfortiment de pràctiques EDI en organitzacions juvenils', 'Revisió organitzacional integral i canvi sistèmic intern', 'Grups focals i materials per implementar EDI'],
      description: "EDI Go neix de la necessitat de les organitzacions de treball juvenil de revisar i millorar contínuament les seves pràctiques d'equitat, diversitat i inclusió en el dia a dia. Reuneix organitzacions d'Espanya, Croàcia, Grècia i Itàlia en un enfocament integral perquè cadascuna revisi les seves pròpies pràctiques EDI en tots els nivells, impulsant un canvi sistèmic intern. A partir de grups focals i entrevistes amb joves i professionals del treball juvenil, es van construir materials per implementar EDI de manera sostinguda.",
    },
  },
  empatheatry: {
    es: {
      bullets: ['Teatro inclusivo para jóvenes con menos oportunidades', 'Formación para profesionales facilitadoras de teatro y trabajo juvenil', 'Desarrollo de metodologías de teatro inclusivo mediante cooperación interdisciplinar'],
      description: 'Empatheatry es un proyecto de dos años cofinanciado por Erasmus+, con socios de Eslovenia, España, Bélgica e Irlanda, que explora cómo el teatro puede fomentar la empatía, la inclusión y el empoderamiento en jóvenes con menos oportunidades. El proyecto trabaja con dos grupos: por un lado, forma a profesionales facilitadoras del teatro y el trabajo juvenil en metodologías de teatro inclusivo; por otro, involucra directamente a jóvenes en contextos de vulnerabilidad, repartidos entre las organizaciones socias para alcanzar la mayor diversidad posible. A través de talleres de teatro inclusivo, movilidad internacional e investigación cualitativa y cuantitativa, co-crea guías interdisciplinares y recomendaciones de política pública a escala nacional y europea.',
    },
    en: {
      bullets: ['Inclusive theatre for young people with fewer opportunities', 'Training for theatre facilitation and youth work professionals', 'Development of inclusive theatre methodologies through interdisciplinary cooperation'],
      description: 'Empatheatry is a two-year project co-funded by Erasmus+, with partners from Slovenia, Spain, Belgium and Ireland, that explores how theatre can foster empathy, inclusion and empowerment in young people with fewer opportunities. The project works with two groups: on one hand, it trains theatre facilitation and youth work professionals in inclusive theatre methodologies; on the other, it directly involves young people in situations of vulnerability, distributed among the partner organizations to achieve the greatest possible diversity. Through inclusive theatre workshops, international mobility and qualitative and quantitative research, it co-creates interdisciplinary guides and public policy recommendations at national and European scale.',
    },
    ca: {
      bullets: ['Teatre inclusiu per a joves amb menys oportunitats', 'Formació per a professionals facilitadores del teatre i treball juvenil', 'Desenvolupament de metodologies de teatre inclusiu mitjançant cooperació interdisciplinar'],
      description: "Empatheatry és un projecte de dos anys cofinançat per Erasmus+, amb socis d'Eslovènia, Espanya, Bèlgica i Irlanda, que explora com el teatre pot fomentar l'empatia, la inclusió i l'empoderament en joves amb menys oportunitats. El projecte treballa amb dos grups: per un costat, forma profesionals facilitadores del teatre i el treball juvenil en metodologies de teatre inclusiu; per altre, involucra directament joves en contextos de vulnerabilitat, repartits entre les organitzacions sòcies per aconseguir la màxima diversitat possible. A través de tallers de teatre inclusiu, mobilitat internacional i investigació qualitativa i quantitativa, co-crea guies interdisciplinars i recomanacions de política pública a escala nacional i europea.",
    },
  },
};

const uiLabels = {
  es: { eyebrow: '(REPERTORIO)', title: 'Proyectos destacados', filters: 'Filtrar por sector', all: 'Todos', details: 'Ver detalles', visit: 'Visitar sitio del proyecto →', close: 'Cerrar', partners: 'Con el apoyo de:' },
  en: { eyebrow: '(REPERTOIRE)', title: 'Featured projects', filters: 'Filter by sector', all: 'All', details: 'View details', visit: 'Visit project site →', close: 'Close', partners: 'With support from:' },
  ca: { eyebrow: '(REPERTORI)', title: 'Projectes destacats', filters: 'Filtrar per sector', all: 'Tots', details: 'Veure detalls', visit: 'Visitar lloc del projecte →', close: 'Tancar', partners: 'Amb el suport de:' },
};

const partnerLogos: Record<string, string[]> = {
  rassif: ['ajuntament-barcelona.jpg', 'casal-dels-infants.png', 'eu-co-funded.jpg', 'la-xixa.png'],
  smash: ['centro-sviluppo-creativo-danilo-dolci.png', 'eu-co-funded.jpg', 'la-xixa.png', 'panevezio-teatras.png', 'respectzone.png', 'the-critical.png', 'xamfra.png'],
  miretage: ['eu-co-funded.jpg', 'frh.png', 'ku-leuven-y-kadoc-COMBINADO.png', 'la-xixa.png', 'moslim-archief.png', 'mozaika.png', 'storytelling-centre.png', 'uab.png', 'university-of-groningen.png'],
  'beyond-gender': ['acathi.png', 'ajuntament-barcelona.jpg', 'brulantes.png', 'diputacio-barcelona.png', 'elan-interculturel.png', 'eu-co-funded.jpg', 'generalitat-departament-igualtat.jpg', 'la-xixa.png'],
  reignite: ['bicc-sandanski.png', 'elan-interculturel.png', 'eseniors.png', 'eu-co-funded.jpg', 'fundacja-zdrowia-i-rozwoju-czlowieka.jpg', 'inova-aspire.png', 'la-xixa.png'],
  'edi-go': ['adice.png', 'centro-sviluppo-creativo-danilo-dolci.png', 'eu-co-funded.jpg', 'forum-for-freedom-in-education.png', 'humananova.png', 'kmop.png', 'la-xixa.png'],
  empatheatry: ['drustvo-impro.png', 'eu-co-funded.jpg', 'la-xixa.png', 're-dial.png', 'step-institute.png', 'toekomst-atelier-de-lavenir.png'],
};

const getPartnerAltText = (filename: string): string => {
  const nameMap: Record<string, string> = {
    'ajuntament-barcelona.jpg': 'Ajuntament de Barcelona',
    'casal-dels-infants.png': 'Casal dels Infants',
    'eu-co-funded.jpg': 'Co-funded by the European Union',
    'la-xixa.png': 'La Xixa',
    'centro-sviluppo-creativo-danilo-dolci.png': 'Centro Sviluppo Creativo Danilo Dolci',
    'panevezio-teatras.png': 'Panevėžio teatras',
    'respectzone.png': 'RespectZone',
    'the-critical.png': 'The Critical',
    'xamfra.png': 'Xamfrà',
    'frh.png': 'FRH',
    'ku-leuven-y-kadoc-COMBINADO.png': 'KU Leuven / KADOC',
    'moslim-archief.png': 'Moslim Archief',
    'mozaika.png': 'Mozaika',
    'storytelling-centre.png': 'Storytelling Centre',
    'uab.png': 'UAB',
    'university-of-groningen.png': 'University of Groningen',
    'acathi.png': 'ACATHI',
    'brulantes.png': 'Brulantes',
    'diputacio-barcelona.png': 'Diputació Barcelona',
    'elan-interculturel.png': 'Élan Interculturel',
    'generalitat-departament-igualtat.jpg': 'Generalitat de Catalunya - Departament d\'Igualtat',
    'bicc-sandanski.png': 'BICC Sandanski',
    'eseniors.png': 'eSeniors',
    'fundacja-zdrowia-i-rozwoju-czlowieka.jpg': 'Fundacja Zdrowia i Rozwoju Człowieka',
    'inova-aspire.png': 'Inova Aspire',
    'adice.png': 'ADICE',
    'forum-for-freedom-in-education.png': 'Forum for Freedom in Education',
    'humananova.png': 'Humananova',
    'kmop.png': 'KMOP',
    'drustvo-impro.png': 'Društvo Impro',
    're-dial.png': 'Re-Dial',
    'step-institute.png': 'STEP Institute',
    'toekomst-atelier-de-lavenir.png': 'Toekomst / Atelier de l\'Avenir',
  };
  return nameMap[filename] || filename;
};

export const Portfolio = ({ language }: PortfolioProps) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [carouselInView, setCarouselInView] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const labels = uiLabels[language];
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCarouselInView(true);
      return;
    }

    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCarouselInView(true);
          observer.unobserve(carousel);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!track || !prevBtn || !nextBtn) return;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    let momentumFrame: number | null = null;

    const smoothScrollTo = (targetLeft: number, duration = 500) => {
      track.style.scrollSnapType = 'none';
      const startLeft = track.scrollLeft;
      const distance = targetLeft - startLeft;
      const startTime = performance.now();

      if (momentumFrame) cancelAnimationFrame(momentumFrame);

      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        track.scrollLeft = startLeft + distance * easeOutCubic(progress);
        if (progress < 1) {
          momentumFrame = requestAnimationFrame(step);
        } else {
          track.style.scrollSnapType = 'x proximity';
        }
      };
      momentumFrame = requestAnimationFrame(step);
    };

    const scrollByCard = (dir: number) => {
      const card = track.querySelector('.project-card') as HTMLElement;
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width + 24;
      smoothScrollTo(track.scrollLeft + dir * cardWidth, 500);
    };

    const updateButtonStates = () => {
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    };

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
    track.addEventListener('scroll', updateButtonStates);

    let isDown = false, startX = 0, scrollLeftStart = 0, dragDistance = 0;
    let velocity = 0, lastX = 0, lastTime = 0;

    const applyMomentum = () => {
      let v = velocity * 16;
      const step = () => {
        if (Math.abs(v) < 0.5) return;
        track.scrollLeft -= v;
        v *= 0.95;
        momentumFrame = requestAnimationFrame(step);
      };
      momentumFrame = requestAnimationFrame(step);
    };

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeftStart = track.scrollLeft;
      dragDistance = 0;
      lastX = e.pageX;
      lastTime = performance.now();
      velocity = 0;
      if (momentumFrame) cancelAnimationFrame(momentumFrame);
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      dragDistance = Math.abs(dx);
      if (dragDistance > 5) {
        e.preventDefault();
        track.scrollLeft = scrollLeftStart - dx;
      }
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) velocity = (e.pageX - lastX) / dt;
      lastX = e.pageX;
      lastTime = now;
    };

    const handleMouseUp = () => {
      isDown = false;
      applyMomentum();
    };

    const handleMouseLeave = () => {
      if (isDown) {
        isDown = false;
        applyMomentum();
      }
    };

    track.addEventListener('mouseleave', handleMouseLeave);
    track.addEventListener('mouseup', handleMouseUp);
    track.addEventListener('mousemove', handleMouseMove);

    updateButtonStates();

    return () => {
      prevBtn.removeEventListener('click', () => scrollByCard(-1));
      nextBtn.removeEventListener('click', () => scrollByCard(1));
      track.removeEventListener('scroll', updateButtonStates);
      track.removeEventListener('mouseleave', handleMouseLeave);
      track.removeEventListener('mouseup', handleMouseUp);
      track.removeEventListener('mousemove', handleMouseMove);
      if (momentumFrame) cancelAnimationFrame(momentumFrame);
    };
  }, []);


  return (
    <>
      <PageHead page="portfolio" language={language} />
      <main className="min-h-screen pt-8 bg-crudo">
      <section className="pt-8 pb-4 md:pt-12 md:pb-6">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{labels.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">{labels.title}</h1>
        </div>
      </section>

      <section className="pb-12 md:pb-16">
        <div className="container-wide">
          {/* Carousel */}
          <div ref={carouselRef} className={`carousel-wrapper ${carouselInView ? 'in-view' : ''}`}>
            <button
              ref={prevBtnRef}
              className="carousel-arrow carousel-arrow--prev"
              aria-label={language === 'es' ? 'Proyecto anterior' : language === 'en' ? 'Previous project' : 'Projecte anterior'}
              disabled
            >
              ‹
            </button>

            <div ref={trackRef} className="carousel-track">
              {projects.map((project) => {
                const pc = projectContent[project.id][language];
                return (
                  <div
                    key={project.id}
                    data-sector={project.sectorKey}
                    className="project-card group cursor-pointer rounded-xl overflow-hidden bg-white border border-ink/5 transition-all duration-300 flex-shrink-0"
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                  {/* Project logo as full cover */}
                  <div className="h-48 relative overflow-hidden bg-white">
                    <img
                      src={project.logo}
                      alt={`${project.title} logo`}
                      className="w-full h-full object-contain p-4"
                    />
                    <span className={`tag-sector tag-sector--${project.sectorKey} absolute bottom-4 right-4 inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-ink/80 text-white backdrop-blur-sm transition-colors duration-300`}>
                      {sectorLabels[language][project.sectorKey]}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <ul className="space-y-1.5 mb-4">
                      {pc.bullets.map((b) => (
                        <li key={b} className="text-sm text-gray-warm flex gap-2">
                          <span className="text-rojo mt-0.5">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="text-sm font-medium text-ink group-hover:text-vino transition-colors">
                      {labels.details} →
                    </span>
                  </div>
                </div>
              );
            })}
            </div>

            <button
              ref={nextBtnRef}
              className="carousel-arrow carousel-arrow--next"
              aria-label={language === 'es' ? 'Proyecto siguiente' : language === 'en' ? 'Next project' : 'Projecte següent'}
              disabled
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProjectId(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProjectId(null)}>
              ✕
            </button>
            {/* Modal header with full logo */}
            <div className="h-48 bg-white flex items-center justify-center rounded-t-2xl relative overflow-hidden border-b border-ink/5">
              <img
                src={selectedProject.logo}
                alt={`${selectedProject.title} logo`}
                className="max-h-32 max-w-[70%] object-contain"
              />
              <span className="absolute bottom-3 left-6 inline-block px-3 py-1 rounded-full text-xs font-medium bg-ink/80 text-white">
                {sectorLabels[language][selectedProject.sectorKey]}
              </span>
            </div>
            {/* Modal body */}
            <div className="p-8">
              <div className="space-y-1.5 mb-6">
                {projectContent[selectedProject.id][language].bullets.map((b) => (
                  <p key={b} className="text-sm text-gray-warm flex gap-2">
                    <span className="text-rojo">·</span>
                    {b}
                  </p>
                ))}
              </div>
              <p className="text-base leading-relaxed text-ink/80 mb-8">
                {projectContent[selectedProject.id][language].description}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-vino text-white hover:bg-vino-2 font-medium"
              >
                {labels.visit}
              </a>

              {/* Partner logos section */}
              <div className="mt-8 pt-6 border-t border-ink/5">
                <p className="font-mono text-xs uppercase tracking-widest text-gray-warm mb-4">
                  {labels.partners}
                </p>
                <div className="flex flex-wrap items-center gap-6">
                  {partnerLogos[selectedProject.id]?.map((logo) => (
                    <div key={logo} className="h-10 max-w-[110px] flex items-center justify-center">
                      <img
                        src={`/images/partners/${selectedProject.id}/${logo}`}
                        alt={getPartnerAltText(logo)}
                        className="h-full w-full object-contain opacity-100 transition-opacity duration-200 hover:opacity-85"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </main>
    </>
  );
};
