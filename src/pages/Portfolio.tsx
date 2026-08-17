import { useState, useEffect, useRef } from 'react';
import type { Language } from '../../types';

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
      description: 'Trabajamos con jóvenes migrantes, algunos menores de edad, otros recién mayores de edad, que habían atravesado condiciones extremas en su viaje hacia Europa. El proceso terminó en una obra de teatro fórum construida a partir de sus propias experiencias migratorias: barreras burocráticas, malentendidos institucionales, invisibilidad social. El público podía intervenir, meterse en la escena y probar respuestas alternativas en conjunto. En una presentación pública en la Universidad Blanquerna, estudiantes de edades similares se cruzaron con realidades muy distintas a las suyas. Lo que cambió fue el lugar: jóvenes que las instituciones suelen tratar como casos o expedientes subieron al escenario como autoras y autores de su propia historia.',
    },
    en: {
      bullets: ['Identity, migration and belonging', 'Personal narratives as artistic material', 'Power, otherness and representation'],
      description: 'We worked with young migrants, some still minors, others recently turned eighteen, who had gone through extreme conditions on their journey to Europe. The process led to a forum-theatre piece built from their own migration experiences: bureaucratic barriers, institutional misunderstanding, social invisibility. The audience could intervene, step into the scene, and test alternative responses together. At a public performance at Universitat Blanquerna, students of similar ages encountered realities very different from their own. What changed was the position: young people institutions usually treat as cases or files stood on stage as the authors of their own story.',
    },
    ca: {
      bullets: ['Identitat, migració i pertinença', 'Narratives personals com a material artístic', 'Poder, alteritat i representació'],
      description: "Vam treballar amb joves migrants, alguns encara menors d'edat, d'altres just majors d'edat, que havien travessat condicions extremes en el seu viatge cap a Europa. El procés va acabar en una obra de teatre fòrum construïda a partir de les seves pròpies experiències migratòries: barreres burocràtiques, malentesos institucionals, invisibilitat social. El públic podia intervenir, ficar-se a l'escena i provar respostes alternatives conjuntament. En una presentació pública a la Universitat Blanquerna, estudiants d'edats similars es van trobar amb realitats molt diferents de les seves. El que va canviar va ser el lloc: joves que les institucions solen tractar com a casos o expedients van pujar a l'escenari com a autores i autors de la seva pròpia història.",
    },
  },
  smash: {
    es: {
      bullets: ['Alfabetización mediática, contra el discurso de odio', 'Teatro, redes sociales y participación juvenil', 'Pensamiento crítico bajo el marco DigiComp'],
      description: 'Proyecto europeo de dos años bajo el marco Erasmus+, contra el discurso de odio en redes. Un proceso de 20 sesiones combinando alfabetización digital y creación artística. Primero, analizamos la arquitectura de los ecosistemas online: amplificación algorítmica, escalada de comentarios, indignación performática. Después, pasamos a la producción: contramemes, narrativas alternativas, exploraciones teatrales de la hostilidad digital. La idea no era abandonar las redes ni moralizar sobre el comportamiento online, sino cultivar otra forma de habitarlas.',
    },
    en: {
      bullets: ['Media literacy against hate speech', 'Theatre, social media and youth participation', 'Critical thinking under the DigiComp framework'],
      description: 'A two-year European project under the Erasmus+ framework, against hate speech online. A 20-session process combining digital literacy and artistic creation. First, we analysed the architecture of online ecosystems: algorithmic amplification, comment-thread escalation, performative outrage. Then we moved to production: counter-memes, alternative narratives, theatrical explorations of digital hostility. The idea was never to abandon social media or moralise about online behaviour, but to cultivate another way of inhabiting it.',
    },
    ca: {
      bullets: ["Alfabetització mediàtica, contra el discurs d'odi", 'Teatre, xarxes socials i participació juvenil', 'Pensament crític sota el marc DigiComp'],
      description: "Projecte europeu de dos anys sota el marc Erasmus+, contra el discurs d'odi a les xarxes. Un procés de 20 sessions que combinava alfabetització digital i creació artística. Primer, vam analitzar l'arquitectura dels ecosistemes online: amplificació algorítmica, escalada de comentaris, indignació performativa. Després, vam passar a la producció: contramemes, narratives alternatives, exploracions teatrals de l'hostilitat digital. La idea no era abandonar les xarxes ni moralitzar sobre el comportament online, sinó cultivar una altra manera d'habitar-les.",
    },
  },
  miretage: {
    es: {
      bullets: ['Patrimonio inmaterial y comunidades minoritarias', 'Laboratorios sensoriales y mapeo simbólico', 'Rutas participativas con comunidades religiosas'],
      description: 'Reunimos a miembros de tres comunidades religiosas, judía, protestante y musulmana, para explorar el patrimonio religioso inmaterial con metodologías participativas. Co-diseñamos tres rutas patrimoniales, pero lo más importante no fueron las rutas en sí, sino el intercambio de memoria y conocimiento ritual entre tradiciones. A través de objetos, sonidos, gestos e historias personales, los participantes compartieron prácticas que rara vez se discuten fuera de sus propias comunidades.',
    },
    en: {
      bullets: ['Intangible heritage and minority communities', 'Sensory labs and symbolic mapping', 'Participatory routes with religious communities'],
      description: "We brought together members of three religious communities, Jewish, Protestant and Muslim, to explore intangible religious heritage through participatory methods. We co-designed three heritage routes, but the most important part wasn't the routes themselves: it was the exchange of memory and ritual knowledge across traditions. Through objects, sounds, gestures and personal stories, participants shared practices that are rarely discussed outside their own communities.",
    },
    ca: {
      bullets: ['Patrimoni immaterial i comunitats minoritàries', 'Laboratoris sensorials i mapatge simbòlic', 'Rutes participatives amb comunitats religioses'],
      description: "Vam reunir membres de tres comunitats religioses, jueva, protestant i musulmana, per explorar el patrimoni religiós immaterial amb metodologies participatives. Vam co-dissenyar tres rutes patrimonials, però el més important no van ser les rutes en si, sinó l'intercanvi de memòria i coneixement ritual entre tradicions. A través d'objectes, sons, gestos i històries personals, les participants van compartir pràctiques que rarament es discuteixen fora de les seves pròpies comunitats.",
    },
  },
  'beyond-gender': {
    es: {
      bullets: ['Género, migración y metodologías artísticas', 'Talleres participativos basados en arte', 'Perspectivas interculturales e interseccionales'],
      description: 'Un proceso que reunió a mujeres mayores y más jóvenes, primero en grupos generacionales separados y después en encuentro. Las tensiones fueron explícitas: algunas participantes mayores sostenían que los conflictos sociales actuales eran resultado de fallas en la crianza. Las más jóvenes reaccionaron a la defensiva. La metodología artística no suprimió esas fricciones, las sostuvo dentro de un marco creativo compartido. El objetivo no era la armonía, era la navegabilidad.',
    },
    en: {
      bullets: ['Gender, migration and artistic methodologies', 'Participatory arts-based workshops', 'Intercultural and intersectional perspectives'],
      description: "A process that brought together older and younger women, first in separate generational groups and then in joint encounter. The tensions were explicit: some older participants held that today's social conflicts stem from failures in upbringing. The younger ones reacted defensively. The artistic methodology didn't suppress those frictions, it held them within a shared creative frame. The goal wasn't harmony, it was navigability.",
    },
    ca: {
      bullets: ['Gènere, migració i metodologies artístiques', 'Tallers participatius basats en art', 'Perspectives interculturals i interseccionals'],
      description: "Un procés que va reunir dones grans i joves, primer en grups generacionals separats i després en trobada conjunta. Les tensions van ser explícites: algunes participants grans sostenien que els conflictes socials actuals eren resultat de fallades en la criança. Les més joves van reaccionar a la defensiva. La metodologia artística no va suprimir aquestes friccions, les va sostenir dins d'un marc creatiu compartit. L'objectiu no era l'harmonia, era la navegabilitat.",
    },
  },
  reignite: {
    es: {
      bullets: ['Reactivación de propósito en adultos 55+', 'Combina psicología, teatro y aprendizaje', 'Testeado en comunidades reales de Europa'],
      description: 'Un proyecto europeo enfocado en reactivar el propósito y la motivación en personas adultas de 55 años o más, combinando psicología, teatro y aprendizaje. Testeado en comunidades reales de distintos países de Europa, dejó herramientas listas para ser replicadas por otras organizaciones.',
    },
    en: {
      bullets: ['Reigniting purpose in adults 55+', 'Combines psychology, theatre and learning', 'Tested in real communities across Europe'],
      description: 'A European project focused on reigniting purpose and motivation in adults aged 55 and over, combining psychology, theatre and learning. Tested in real communities across different European countries, it left behind tools ready to be replicated by other organisations.',
    },
    ca: {
      bullets: ['Reactivació de propòsit en adults 55+', 'Combina psicologia, teatre i aprenentatge', "Testat en comunitats reals d'Europa"],
      description: "Un projecte europeu centrat a reactivar el propòsit i la motivació en persones adultes de 55 anys o més, combinant psicologia, teatre i aprenentatge. Testat en comunitats reals de diferents països d'Europa, va deixar eines llestes perquè altres organitzacions les repliquin.",
    },
  },
  'edi-go': {
    es: {
      bullets: ['Fortalecimiento de prácticas EDI en organizaciones juveniles', 'Grupos focales con jóvenes y trabajadores juveniles', 'Toolbox, autoevaluación y Charter Mark'],
      description: 'Trabajamos para fortalecer las prácticas de equidad, diversidad e inclusión dentro de organizaciones juveniles. Hicimos grupos focales y entrevistas con jóvenes y trabajadores juveniles, y desarrollamos herramientas prácticas: una toolbox, un proceso de autoevaluación y un Charter Mark, además de materiales de formación para la implementación de EDI.',
    },
    en: {
      bullets: ['Strengthening EDI practices in youth organisations', 'Focus groups with young people and youth workers', 'Toolbox, self-assessment and Charter Mark'],
      description: 'We worked to strengthen equity, diversity and inclusion practices within youth organisations. We ran focus groups and interviews with young people and youth workers, and developed practical tools: a toolbox, a self-assessment process and a Charter Mark, plus training materials for implementing EDI.',
    },
    ca: {
      bullets: ['Enfortiment de pràctiques EDI en organitzacions juvenils', 'Grups focals amb joves i treballadors juvenils', 'Toolbox, autoavaluació i Charter Mark'],
      description: "Vam treballar per enfortir les pràctiques d'equitat, diversitat i inclusió dins d'organitzacions juvenils. Vam fer grups focals i entrevistes amb joves i treballadors juvenils, i vam desenvolupar eines pràctiques: una toolbox, un procés d'autoavaluació i un Charter Mark, a més de materials de formació per a la implementació d'EDI.",
    },
  },
  empatheatry: {
    es: {
      bullets: ['Teatro inclusivo para jóvenes con menos oportunidades', 'Empoderamiento de facilitadores y profesionales de teatro', 'Metodologías de taller interdisciplinarias, cofinanciado por Erasmus+'],
      description: 'Un proyecto de dos años, cofinanciado por el programa Erasmus+ de la Unión Europea, que reunió a socios de Eslovenia, España, Bélgica e Irlanda para explorar cómo el teatro puede fomentar la empatía, la inclusión y el empoderamiento en jóvenes con menos oportunidades.',
    },
    en: {
      bullets: ['Inclusive theatre for young people with fewer opportunities', 'Empowering facilitators and theatre professionals', 'Interdisciplinary workshop methodologies, co-funded by Erasmus+'],
      description: 'A two-year project, co-funded by the Erasmus+ programme of the European Union, that brought together partners from Slovenia, Spain, Belgium and Ireland to explore how theatre can foster empathy, inclusion and empowerment among young people with fewer opportunities.',
    },
    ca: {
      bullets: ['Teatre inclusiu per a joves amb menys oportunitats', 'Empoderament de facilitadors i professionals del teatre', 'Metodologies de taller interdisciplinàries, cofinançat per Erasmus+'],
      description: "Un projecte de dos anys, cofinançat pel programa Erasmus+ de la Unió Europea, que va reunir socis d'Eslovènia, Espanya, Bèlgica i Irlanda per explorar com el teatre pot fomentar l'empatia, la inclusió i l'empoderament en joves amb menys oportunitats.",
    },
  },
};

const uiLabels = {
  es: { eyebrow: 'REPERTORIO', title: 'Proyectos destacados', filters: 'Filtrar por sector', all: 'Todos', details: 'Ver detalles', visit: 'Visitar sitio del proyecto →', close: 'Cerrar' },
  en: { eyebrow: 'REPERTOIRE', title: 'Featured projects', filters: 'Filter by sector', all: 'All', details: 'View details', visit: 'Visit project site →', close: 'Close' },
  ca: { eyebrow: 'REPERTORI', title: 'Projectes destacats', filters: 'Filtrar per sector', all: 'Tots', details: 'Veure detalls', visit: 'Visitar lloc del projecte →', close: 'Tancar' },
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

    const scrollByCard = (dir: number) => {
      const card = track.querySelector('.project-card') as HTMLElement;
      if (!card) return;
      const cardWidth = card.getBoundingClientRect().width + 24;
      track.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
    };

    const updateButtonStates = () => {
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 4;
    };

    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
    track.addEventListener('scroll', updateButtonStates);

    let isDown = false, startX = 0, scrollLeftStart = 0, dragDistance = 0;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX;
      scrollLeftStart = track.scrollLeft;
      dragDistance = 0;
    });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      dragDistance = Math.abs(dx);
      if (dragDistance > 5) {
        e.preventDefault();
        track.scrollLeft = scrollLeftStart - dx;
      }
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    track.addEventListener('mouseleave', handleMouseUp);
    track.addEventListener('mouseup', handleMouseUp);
    track.addEventListener('mousemove', handleMouseMove);

    updateButtonStates();

    return () => {
      prevBtn.removeEventListener('click', () => scrollByCard(-1));
      nextBtn.removeEventListener('click', () => scrollByCard(1));
      track.removeEventListener('scroll', updateButtonStates);
      track.removeEventListener('mouseleave', handleMouseUp);
      track.removeEventListener('mouseup', handleMouseUp);
      track.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  return (
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
                    <span className={`tag-sector tag-sector--${project.sectorKey} absolute bottom-3 left-3 inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-ink/80 text-white backdrop-blur-sm transition-colors duration-300`}>
                      {sectorLabels[language][project.sectorKey]}
                    </span>
                  </div>
                  {/* Body */}
                  <div className="p-5">
                    <ul className="space-y-1.5 mb-4">
                      {pc.bullets.map((b) => (
                        <li key={b} className="text-sm text-gray-warm flex gap-2">
                          <span className="text-coral mt-0.5">·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <span className="text-sm font-medium text-vino group-hover:text-coral transition-colors">
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
                    <span className="text-coral">·</span>
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
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
