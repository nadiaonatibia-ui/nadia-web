import type { Language } from '../../types';

interface CVProps { language: Language; }

const actos = [
  {
    acto: 'ACTO I · 2013–2017',
    title: 'FETI — FESTIVAL EFÍMERO DE TEATRO INDEPENDIENTE',
    role: 'Productora y Curadora · Buenos Aires, Argentina',
    body: 'A cargo de la producción, gestión e interacción de los distintos equipos y elencos participantes. Encargada de la selección final de las obras participantes en cada edición.',
  },
  {
    acto: 'ACTO II · 2016–2023',
    title: 'LOS POMPAPETRIYASOS',
    role: 'Producer, Cultural Manager & Fundraiser · Buenos Aires, Argentina',
    body: 'Desarrollo y coordinación de producciones culturales independientes e iniciativas artísticas comunitarias en distintos contextos internacionales.',
  },
  {
    acto: 'ACTO III · 2018–2024',
    title: 'DOCENCIA EN ARTES ESCÉNICAS',
    role: 'Formación docente y educación teatral · Buenos Aires, Argentina',
    body: 'Seis años y medio de docencia en artes escénicas. EMAD, acompañando a futuras y futuros docentes de teatro en sus prácticas pedagógicas. IES "Juan B. Justo" y Colegio San Tarcisio, procesos teatrales con adolescencias en secundaria. Escuela N.º 16, Distrito Escolar 8, experiencias teatrales con infancias de 5.º a 7.º grado.',
    link: { label: 'EMAD', href: 'https://emad.buenosaires.gob.ar' },
  },
  {
    acto: 'ACTO IV · 2021–2023',
    title: 'FESTIVAL LATITUDE 40°',
    role: 'Producer · Argentina · Portugal',
    body: 'Producción y coordinación de programación cultural dentro de un festival internacional multidisciplinario.',
  },
  {
    acto: 'ACTO V · 2021–2023',
    title: 'INFOLIBROS',
    role: 'Creative Project Manager · Uruguay · LATAM',
    body: 'Coordinación de iniciativas de contenido cultural y educativo vinculadas a la lectura y la literatura.',
  },
  {
    acto: 'ACTO VI · 2024–2026',
    title: 'LA XIXA TEATRE',
    role: 'Senior Project Manager · Barcelona, España',
    body: 'Gestión de producción cultural internacional y proyectos multi-formato bajo marcos europeos, fortaleciendo redes de colaboración con socios de toda Europa.',
  },
];

const formacion = [
  { title: 'Diplomatura Superior en Mediación Cultural — CLACSO / UNA', year: '2021' },
  { title: 'Postgrado en Gestión Cultural y Comunicación — FLACSO', year: '2020' },
  { title: 'Profesorado de Artes, orientación Teatro — COSATYC', year: '2014' },
  { title: 'Certificado en Copywriting — CODERHOUSE', year: '2023' },
  { title: 'Curso de Dirección de Arte, dictado por Paula Taratuto — EDA · Escuela de Dirección de Arte', year: '2020' },
];

const idiomas = [
  { label: 'ESPAÑOL', level: 'Nativo' },
  { label: 'INGLÉS', level: 'Avanzado' },
  { label: 'CATALÁN', level: 'A2, en progreso' },
];

export const CV = ({ language }: CVProps) => {
  const labels = {
    es: { download: 'Descargar CV (PDF)', downloadComing: 'próximamente' },
    en: { download: 'Download CV (PDF)', downloadComing: 'coming soon' },
    ca: { download: 'Descarregar CV (PDF)', downloadComing: 'pròximament' },
  }[language];

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">(bitácora)</p>
          <h1 className="text-5xl mb-4 text-vino">TRAYECTORIA</h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="timeline">
            {actos.map((a) => (
              <div key={a.acto} className="timeline-item">
                <p className="eyebrow-mono mb-1">{a.acto}</p>
                <h3 className="text-xl mb-1 text-vino">{a.title}</h3>
                <p className="font-medium text-ink/80 mb-2">{a.role}</p>
                <p className="text-ink leading-relaxed">
                  {a.body}
                  {a.link && (
                    <> (<a href={a.link.href} target="_blank" rel="noopener noreferrer" className="text-vino underline hover:text-vino-2">{a.link.label}</a>)</>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">(programa de mano)</p>
          <h2 className="text-4xl mb-8 text-vino">FORMACIÓN</h2>
          <ul className="space-y-4">
            {formacion.map((f) => (
              <li key={f.title} className="flex justify-between gap-4 border-b border-ink/10 pb-4">
                <span className="text-ink">{f.title}</span>
                <span className="text-rojo font-mono font-medium whitespace-nowrap">{f.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {idiomas.map((idioma) => (
              <div key={idioma.label} className="bg-crudo-alt rounded-lg p-6 text-center">
                <h3 className="text-lg mb-2 text-rosa">{idioma.label}</h3>
                <p className="text-hueso/90">{idioma.level}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/documents/CV_Nadia_Onatibia.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{labels.download}</a>
          </div>
        </div>
      </section>
    </main>
  );
};
