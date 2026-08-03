import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '../../types';

interface HomeProps { language: Language; }

const manifiestoParagraphs = [
  'Creo en los proyectos que abren espacios para que más personas puedan reconocerse como productoras de sentido y de cultura, con voz propia para contar su historia, cuestionar lo dado y disputar un lugar en la conversación pública. Ese pasaje necesita relato, pero también producción: alguien que transforme una intuición en un proyecto, una conversación en una alianza, una idea en un presupuesto, un cronograma, un equipo y, finalmente, una experiencia compartida.',
  'En los últimos años trabajé en contextos atravesados por la migración, la fractura generacional, el discurso de odio en redes y la fragmentación religiosa. En todos aprendí lo mismo: la democracia no se debilita porque exista el conflicto. Se debilita cuando dejamos de crear espacios capaces de sostenerlo, de escucharlo y de transformarlo en acción colectiva.',
  'Ahí es donde encuentro mi lugar. Me apasiona producir las condiciones para que las cosas sucedan. Diseñar proyectos, coordinar equipos, conseguir recursos, articular alianzas, acompañar procesos creativos y hacer que una visión llegue a existir sin perder su sentido en el camino.',
  'Porque entendí que producir no es solo organizar. Es crear las condiciones para que una idea encuentre las personas, los recursos, el tiempo y la estructura necesarios para convertirse en algo que deje una huella.',
  'Gestionar un proyecto cultural y subirme a un escenario nunca fueron dos oficios distintos. Son dos maneras de participar de la misma práctica: construir las condiciones para que algo significativo ocurra.',
];

const registros = [
  {
    number: '01',
    title: 'PROJECT MANAGER',
    body: 'Planificación y coordinación de proyectos multi-partner bajo marcos europeos: Erasmus+, Creative Europe, CERV. Con conocimiento directo también de la escena cultural latinoamericana, desde mi trayectoria en Argentina. Gestión de presupuesto, reporting a financiadores públicos y privados, cumplimiento y documentación. Coordinación de equipos internacionales, alineando timelines y entregables entre países y continentes.',
  },
  {
    number: '02',
    title: 'FACILITADORA — ARTS-BASED',
    body: 'Actriz y profesora de arte. Diseño y facilitación de procesos participativos con teatro comunitario, teatro del oprimido y teatro fórum. Formación a jóvenes, educadores y trabajadores comunitarios. De la sesión íntima de taller al proceso de varias semanas con grupos en contextos de vulnerabilidad.',
  },
  {
    number: '03',
    title: 'PRODUCTORA',
    body: 'Logística y coordinación multi-sede de programación cultural. Producción de contenido en distintos formatos: presencial, digital, editorial. De un taller de una tarde a un festival internacional o un congreso con múltiples stakeholders.',
  },
];

const chips = [
  { label: 'COOPERACIÓN', className: 'bg-rojo text-hueso' },
  { label: 'FACILITACIÓN', className: 'bg-hueso text-ink' },
  { label: 'GESTIÓN', className: 'bg-vino text-hueso' },
  { label: 'PRODUCCIÓN', className: 'bg-teal text-hueso' },
];

export const Home = ({ language }: HomeProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const cta = {
    es: { portfolio: 'Ver Portfolio', contact: 'Contactar' },
    en: { portfolio: 'View Portfolio', contact: 'Get in Touch' },
    ca: { portfolio: 'Veure Portafoli', contact: 'Contactar' },
  }[language];

  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-crudo pt-12">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow-mono mb-4">(se abre el telón)</p>
            <h1 className="text-5xl md:text-7xl leading-none mb-6 text-vino">NADIA<br />OÑATIBIA</h1>
            <p className="text-lg mb-8 max-w-xl text-ink">Gestión cultural, facilitación de metodologías arts-based y producción de eventos. Desde la oficina y desde el escenario.</p>
            <div className="flex gap-3 flex-wrap">
              {chips.map((chip) => (
                <span key={chip.label} className={`px-4 py-2 rounded-full text-sm font-medium ${chip.className}`}>{chip.label}</span>
              ))}
            </div>
          </div>
          <div className="gingham-rosa rounded-lg p-10 md:p-16 flex items-center justify-center relative min-h-[320px]">
            <div className="polaroid -rotate-3 w-48 md:w-64">
              <div className="polaroid-photo w-full aspect-[3/4]">foto</div>
            </div>
            <div className="polaroid rotate-6 w-24 md:w-32 absolute -bottom-4 -right-2 md:right-4">
              <div className="polaroid-photo w-full aspect-square">foto</div>
            </div>
            <div className="polaroid -rotate-12 w-20 md:w-28 absolute top-2 left-0 md:-left-6">
              <div className="polaroid-photo w-full aspect-square">foto</div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">(monólogo)</p>
          <h2 className="text-4xl mb-10 text-vino">LO QUE CREO</h2>
          <p className="text-2xl md:text-3xl font-anton normal-case tracking-normal leading-snug text-vino mb-8">
            Trabajo con la convicción de que la cultura no es solo un sector: es infraestructura democrática.
          </p>
          <div className="space-y-6">
            {manifiestoParagraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TRES REGISTROS */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">(cambio de escena)</p>
          <h2 className="text-4xl mb-10 text-vino">TRES REGISTROS, UN MISMO OFICIO</h2>
          <div className="space-y-4">
            {registros.map((r, i) => {
              const isOpen = openAccordion === i;
              return (
                <div key={r.number} className="accordion-item">
                  <button className="accordion-header" onClick={() => setOpenAccordion(isOpen ? null : i)}>
                    <span className="text-hueso">
                      <span className="text-rojo font-anton mr-3">{r.number}</span>
                      <span className="font-anton uppercase tracking-wide">{r.title}</span>
                    </span>
                    <span className={`accordion-toggle ${isOpen ? 'open' : ''}`}>+</span>
                  </button>
                  <div className={`accordion-body ${isOpen ? 'open' : ''}`}>
                    <p className="text-hueso/90 leading-relaxed">{r.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-vino text-center">
        <div className="container-wide flex gap-4 flex-wrap justify-center">
          <Link to="/portfolio" className="btn bg-hueso text-ink hover:bg-rosa">{cta.portfolio}</Link>
          <Link to="/contact" className="btn bg-rojo text-hueso hover:bg-vino-2">{cta.contact}</Link>
        </div>
      </section>
    </main>
  );
};
