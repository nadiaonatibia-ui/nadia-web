import { useState } from 'react';
import type { Language } from '../../types';

interface PortfolioProps { language: Language; }

interface Project {
  id: string;
  title: string;
  sector: 'Migración' | 'Discurso de odio' | 'Patrimonio' | 'Género' | 'Inclusión 55+' | 'EDI';
  tagClassName: string;
  bullets: string[];
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'rassif',
    title: 'RASSIF',
    sector: 'Migración',
    tagClassName: 'bg-rojo text-hueso',
    bullets: ['Identidad, migración y pertenencia', 'Narrativas personales como material artístico', 'Poder, otredad y representación'],
    description: 'Trabajamos con jóvenes migrantes, algunos menores de edad, otros recién mayores de edad, que habían atravesado condiciones extremas en su viaje hacia Europa. El proceso terminó en una obra de teatro fórum construida a partir de sus propias experiencias migratorias: barreras burocráticas, malentendidos institucionales, invisibilidad social. El público podía intervenir, meterse en la escena y probar respuestas alternativas en conjunto. En una presentación pública en la Universidad Blanquerna, estudiantes de edades similares se cruzaron con realidades muy distintas a las suyas. Lo que cambió fue el lugar: jóvenes que las instituciones suelen tratar como casos o expedientes subieron al escenario como autoras y autores de su propia historia.',
    link: 'https://www.casaldelsinfants.org/es/rassif-escena/',
  },
  {
    id: 'smash',
    title: 'SMASH',
    sector: 'Discurso de odio',
    tagClassName: 'bg-vino text-hueso',
    bullets: ['Alfabetización mediática, contra el discurso de odio', 'Teatro, redes sociales y participación juvenil', 'Pensamiento crítico bajo el marco DigiComp'],
    description: 'Proyecto europeo de dos años bajo el marco Erasmus+, contra el discurso de odio en redes. Un proceso de 20 sesiones combinando alfabetización digital y creación artística. Primero, analizamos la arquitectura de los ecosistemas online: amplificación algorítmica, escalada de comentarios, indignación performática. Después, pasamos a la producción: contramemes, narrativas alternativas, exploraciones teatrales de la hostilidad digital. La idea no era abandonar las redes ni moralizar sobre el comportamiento online, sino cultivar otra forma de habitarlas.',
    link: 'https://www.smashproject.eu/',
  },
  {
    id: 'miretage',
    title: 'MIRETAGE',
    sector: 'Patrimonio',
    tagClassName: 'bg-teal text-hueso',
    bullets: ['Patrimonio inmaterial y comunidades minoritarias', 'Laboratorios sensoriales y mapeo simbólico', 'Rutas participativas con comunidades religiosas'],
    description: 'Reunimos a miembros de tres comunidades religiosas, judía, protestante y musulmana, para explorar el patrimonio religioso inmaterial con metodologías participativas. Co-diseñamos tres rutas patrimoniales, pero lo más importante no fueron las rutas en sí, sino el intercambio de memoria y conocimiento ritual entre tradiciones. A través de objetos, sonidos, gestos e historias personales, los participantes compartieron prácticas que rara vez se discuten fuera de sus propias comunidades.',
    link: 'https://miretage.eu',
  },
  {
    id: 'beyond-gender',
    title: 'BEYOND GENDER',
    sector: 'Género',
    tagClassName: 'bg-lila text-ink',
    bullets: ['Género, migración y metodologías artísticas', 'Talleres participativos basados en arte', 'Perspectivas interculturales e interseccionales'],
    description: 'Un proceso que reunió a mujeres mayores y más jóvenes, primero en grupos generacionales separados y después en encuentro. Las tensiones fueron explícitas: algunas participantes mayores sostenían que los conflictos sociales actuales eran resultado de fallas en la crianza. Las más jóvenes reaccionaron a la defensiva. La metodología artística no suprimió esas fricciones, las sostuvo dentro de un marco creativo compartido. El objetivo no era la armonía, era la navegabilidad.',
    link: 'https://www.laxixateatre.org/es/beyondgender',
  },
  {
    id: 'reignite',
    title: 'REIGNITE',
    sector: 'Inclusión 55+',
    tagClassName: 'bg-vino text-hueso',
    bullets: ['Reactivación de propósito en adultos 55+', 'Combina psicología, teatro y aprendizaje', 'Testeado en comunidades reales de Europa'],
    description: 'Un proyecto europeo enfocado en reactivar el propósito y la motivación en personas adultas de 55 años o más, combinando psicología, teatro y aprendizaje. Testeado en comunidades reales de distintos países de Europa, dejó herramientas listas para ser replicadas por otras organizaciones.',
    link: 'https://reignite-project.eu/',
  },
  {
    id: 'edi-go',
    title: 'EDI GO',
    sector: 'EDI',
    tagClassName: 'bg-teal text-hueso',
    bullets: ['Fortalecimiento de prácticas EDI en organizaciones juveniles', 'Grupos focales con jóvenes y trabajadores juveniles', 'Toolbox, autoevaluación y Charter Mark'],
    description: 'Trabajamos para fortalecer las prácticas de equidad, diversidad e inclusión dentro de organizaciones juveniles. Hicimos grupos focales y entrevistas con jóvenes y trabajadores juveniles, y desarrollamos herramientas prácticas: una toolbox, un proceso de autoevaluación y un Charter Mark, además de materiales de formación para la implementación de EDI.',
    link: 'https://edi-go.eu/',
  },
];

const sectors = ['Migración', 'Discurso de odio', 'Patrimonio', 'Género', 'Inclusión 55+', 'EDI'];

export const Portfolio = ({ language }: PortfolioProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filtered = selectedFilter ? projects.filter((p) => p.sector === selectedFilter) : projects;

  const labels = {
    es: { filters: 'Filtrar por sector', all: 'Todos', details: 'Ver detalles →', visit: 'Visitar sitio del proyecto →' },
    en: { filters: 'Filter by sector', all: 'All', details: 'View details →', visit: 'Visit project site →' },
    ca: { filters: 'Filtrar per sector', all: 'Tots', details: 'Veure detalls →', visit: 'Visitar lloc del projecte →' },
  }[language];

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">(repertorio)</p>
          <h1 className="text-5xl mb-4 text-vino">PROYECTOS DESTACADOS</h1>
        </div>
      </section>
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-4 text-ink normal-case tracking-normal">{labels.filters}</h3>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => setSelectedFilter(null)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === null ? 'bg-ink text-hueso' : 'bg-white/60 text-ink hover:bg-white'}`}>{labels.all}</button>
              {sectors.map((sector) => (
                <button key={sector} onClick={() => setSelectedFilter(sector)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === sector ? 'bg-ink text-hueso' : 'bg-white/60 text-ink hover:bg-white'}`}>{sector}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="bg-crudo-alt rounded-lg p-6 flex flex-col">
                <span className={`inline-block self-start px-3 py-1 rounded text-sm font-medium mb-4 ${project.tagClassName}`}>{project.sector}</span>
                <h3 className="text-2xl mb-4 text-rosa">{project.title}</h3>
                <ul className="text-hueso/90 mb-6 space-y-2 flex-grow list-disc list-inside">
                  {project.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <button onClick={() => setSelectedProject(project)} className="text-hueso font-medium hover:text-rosa text-left">{labels.details}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-6 text-hueso text-2xl hover:text-rosa">×</button>
            <span className={`inline-block px-3 py-1 rounded text-sm font-medium mb-4 ${selectedProject.tagClassName}`}>{selectedProject.sector}</span>
            <h2 className="text-3xl mb-6 text-rosa">{selectedProject.title}</h2>
            <p className="leading-relaxed mb-8 text-hueso/90">{selectedProject.description}</p>
            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="text-hueso font-medium hover:text-rosa">{labels.visit}</a>
          </div>
        </div>
      )}
    </main>
  );
};
