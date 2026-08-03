import { useState } from 'react';
import type { Language } from '../../types';

interface PortfolioProps { language: Language; }

type SectorKey = 'migracion' | 'discurso-odio' | 'patrimonio' | 'genero' | 'inclusion55' | 'edi' | 'empatia';

interface Project {
  id: string;
  title: string;
  sectorKey: SectorKey;
  tagClassName: string;
  link: string;
}

const projects: Project[] = [
  { id: 'rassif', title: 'RASSIF', sectorKey: 'migracion', tagClassName: 'bg-rojo text-hueso', link: 'https://www.casaldelsinfants.org/es/rassif-escena/' },
  { id: 'smash', title: 'SMASH', sectorKey: 'discurso-odio', tagClassName: 'bg-vino text-hueso', link: 'https://www.smashproject.eu/' },
  { id: 'miretage', title: 'MIRETAGE', sectorKey: 'patrimonio', tagClassName: 'bg-teal text-hueso', link: 'https://miretage.eu' },
  { id: 'beyond-gender', title: 'BEYOND GENDER', sectorKey: 'genero', tagClassName: 'bg-lila text-ink', link: 'https://www.laxixateatre.org/es/beyondgender' },
  { id: 'reignite', title: 'REIGNITE', sectorKey: 'inclusion55', tagClassName: 'bg-vino text-hueso', link: 'https://reignite-project.eu/' },
  { id: 'edi-go', title: 'EDI GO', sectorKey: 'edi', tagClassName: 'bg-teal text-hueso', link: 'https://edi-go.eu/' },
  { id: 'empatheatry', title: 'EMPATHEATRY', sectorKey: 'empatia', tagClassName: 'bg-rojo text-hueso', link: 'https://empatheatry.eu/' },
];

const sectorKeys: SectorKey[] = ['migracion', 'discurso-odio', 'patrimonio', 'genero', 'inclusion55', 'edi', 'empatia'];

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
      bullets: ['Reactivació de propòsit en adults 55+', 'Combina psicologia, teatre i aprenentatge', 'Testat en comunitats reals d\'Europa'],
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
      description: 'Un proyecto de dos años, cofinanciado por el programa Erasmus+ de la Unión Europea, que reunió a socios de Eslovenia, España, Bélgica e Irlanda para explorar cómo el teatro puede fomentar la empatía, la inclusión y el empoderamiento en jóvenes con menos oportunidades. El foco estuvo puesto en mejorar el acceso al teatro para jóvenes en situación de desventaja, fortalecer a educadores y profesionales del teatro, y desarrollar metodologías de taller inclusivas mediante colaboración interdisciplinaria. El proyecto dejó recomendaciones de política pública para hacer el teatro y las artes más accesibles y empoderadores para jóvenes con menos oportunidades.',
    },
    en: {
      bullets: ['Inclusive theatre for young people with fewer opportunities', 'Empowering facilitators and theatre professionals', 'Interdisciplinary workshop methodologies, co-funded by Erasmus+'],
      description: 'A two-year project, co-funded by the Erasmus+ programme of the European Union, that brought together partners from Slovenia, Spain, Belgium and Ireland to explore how theatre can foster empathy, inclusion and empowerment among young people with fewer opportunities. The focus was on improving access to theatre for disadvantaged youth, empowering educators and theatre professionals, and developing inclusive workshop methodologies through interdisciplinary collaboration. The project produced policy recommendations to make theatre and the arts more accessible and empowering for young people with fewer opportunities.',
    },
    ca: {
      bullets: ['Teatre inclusiu per a joves amb menys oportunitats', 'Empoderament de facilitadors i professionals del teatre', 'Metodologies de taller interdisciplinàries, cofinançat per Erasmus+'],
      description: "Un projecte de dos anys, cofinançat pel programa Erasmus+ de la Unió Europea, que va reunir socis d'Eslovènia, Espanya, Bèlgica i Irlanda per explorar com el teatre pot fomentar l'empatia, la inclusió i l'empoderament en joves amb menys oportunitats. El focus va ser millorar l'accés al teatre per a joves en situació de desavantatge, enfortir educadors i professionals del teatre, i desenvolupar metodologies de taller inclusives mitjançant col·laboració interdisciplinària. El projecte va deixar recomanacions de política pública per fer el teatre i les arts més accessibles i empoderadores per a joves amb menys oportunitats.",
    },
  },
};

const uiLabels = {
  es: { eyebrow: '(repertorio)', title: 'PROYECTOS DESTACADOS', filters: 'Filtrar por sector', all: 'Todos', details: 'Ver detalles →', visit: 'Visitar sitio del proyecto →' },
  en: { eyebrow: '(repertoire)', title: 'FEATURED PROJECTS', filters: 'Filter by sector', all: 'All', details: 'View details →', visit: 'Visit project site →' },
  ca: { eyebrow: '(repertori)', title: 'PROJECTES DESTACATS', filters: 'Filtrar per sector', all: 'Tots', details: 'Veure detalls →', visit: 'Visitar lloc del projecte →' },
};

export const Portfolio = ({ language }: PortfolioProps) => {
  const [selectedFilter, setSelectedFilter] = useState<SectorKey | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const labels = uiLabels[language];
  const filtered = selectedFilter ? projects.filter((p) => p.sectorKey === selectedFilter) : projects;
  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null;

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{labels.eyebrow}</p>
          <h1 className="text-5xl mb-4 text-vino">{labels.title}</h1>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-ink normal-case tracking-normal">{labels.filters}</h3>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setSelectedFilter(null)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === null ? 'bg-ink text-hueso' : 'bg-white/60 text-ink hover:bg-white'}`}>{labels.all}</button>
              {sectorKeys.map((key) => (
                <button key={key} onClick={() => setSelectedFilter(key)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === key ? 'bg-ink text-hueso' : 'bg-white/60 text-ink hover:bg-white'}`}>{sectorLabels[language][key]}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => {
              const pc = projectContent[project.id][language];
              return (
                <div key={project.id} className="bg-crudo-alt rounded-lg p-6 flex flex-col">
                  <span className={`inline-block self-start px-3 py-1 rounded text-sm font-medium mb-4 ${project.tagClassName}`}>{sectorLabels[language][project.sectorKey]}</span>
                  <h3 className="text-2xl mb-4 text-rosa">{project.title}</h3>
                  <ul className="text-hueso/90 mb-6 space-y-2 flex-grow list-disc list-inside">
                    {pc.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <button onClick={() => setSelectedProjectId(project.id)} className="text-hueso font-medium hover:text-rosa text-left">{labels.details}</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProjectId(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProjectId(null)} className="absolute top-4 right-6 text-hueso text-2xl hover:text-rosa">×</button>
            <span className={`inline-block px-3 py-1 rounded text-sm font-medium mb-4 ${selectedProject.tagClassName}`}>{sectorLabels[language][selectedProject.sectorKey]}</span>
            <h2 className="text-3xl mb-6 text-rosa">{selectedProject.title}</h2>
            <p className="leading-relaxed mb-8 text-hueso/90">{projectContent[selectedProject.id][language].description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-hueso font-medium hover:text-rosa">{labels.visit}</a>
          </div>
        </div>
      )}
    </main>
  );
};
