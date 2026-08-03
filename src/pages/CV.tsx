import type { Language } from '../../types';

interface CVProps { language: Language; }

const content = {
  es: {
    trayectoriaEyebrow: '(bitácora)',
    trayectoriaTitle: 'TRAYECTORIA',
    actos: [
      { acto: 'ACTO I · 2013–2017', title: 'FETI — FESTIVAL EFÍMERO DE TEATRO INDEPENDIENTE', role: 'Productora y Curadora · Buenos Aires, Argentina', body: 'A cargo de la producción, gestión e interacción de los distintos equipos y elencos participantes. Encargada de la selección final de las obras participantes en cada edición.' },
      { acto: 'ACTO II · 2016–2023', title: 'LOS POMPAPETRIYASOS', role: 'Producer, Cultural Manager & Fundraiser · Buenos Aires, Argentina', body: 'Desarrollo y coordinación de producciones culturales independientes e iniciativas artísticas comunitarias en distintos contextos internacionales.' },
      { acto: 'ACTO III · 2018–2024', title: 'DOCENCIA EN ARTES ESCÉNICAS', role: 'Formación docente y educación teatral · Buenos Aires, Argentina', body: 'Seis años y medio de docencia en artes escénicas. EMAD, acompañando a futuras y futuros docentes de teatro en sus prácticas pedagógicas. IES "Juan B. Justo" y Colegio San Tarcisio, procesos teatrales con adolescencias en secundaria. Escuela N.º 16, Distrito Escolar 8, experiencias teatrales con infancias de 5.º a 7.º grado.', link: { label: 'EMAD', href: 'https://emad.buenosaires.gob.ar' } },
      { acto: 'ACTO IV · 2021–2023', title: 'FESTIVAL LATITUDE 40°', role: 'Producer · Argentina · Portugal', body: 'Producción y coordinación de programación cultural dentro de un festival internacional multidisciplinario.' },
      { acto: 'ACTO V · 2021–2023', title: 'INFOLIBROS', role: 'Creative Project Manager · Uruguay · LATAM', body: 'Coordinación de iniciativas de contenido cultural y educativo vinculadas a la lectura y la literatura.' },
      { acto: 'ACTO VI · 2024–2026', title: 'LA XIXA TEATRE', role: 'Senior Project Manager · Barcelona, España', body: 'Gestión de producción cultural internacional y proyectos multi-formato bajo marcos europeos, fortaleciendo redes de colaboración con socios de toda Europa.' },
    ],
    formacionEyebrow: '(programa de mano)',
    formacionTitle: 'FORMACIÓN',
    formacion: [
      { title: 'Diplomatura Superior en Mediación Cultural — CLACSO / UNA', year: '2021' },
      { title: 'Postgrado en Gestión Cultural y Comunicación — FLACSO', year: '2020' },
      { title: 'Profesorado de Artes, orientación Teatro — COSATYC', year: '2014' },
      { title: 'Certificado en Copywriting — Coderhouse', year: '2023' },
      { title: 'Curso de Dirección de Arte, dictado por Paula Taratuto — EDA · Escuela de Dirección de Arte', year: '2020' },
    ],
    idiomasTitle: 'IDIOMAS',
    idiomas: [
      { label: 'ESPAÑOL', level: 'Nativo' },
      { label: 'INGLÉS', level: 'Avanzado' },
      { label: 'CATALÁN', level: 'A2, en progreso' },
    ],
    download: 'Descargar CV (PDF)',
  },
  en: {
    trayectoriaEyebrow: '(logbook)',
    trayectoriaTitle: 'TRAJECTORY',
    actos: [
      { acto: 'ACT I · 2013–2017', title: 'FETI — FESTIVAL EFÍMERO DE TEATRO INDEPENDIENTE', role: 'Producer and Curator · Buenos Aires, Argentina', body: 'In charge of production, management and coordination between the different participating teams and casts. Responsible for the final selection of participating plays each edition.' },
      { acto: 'ACT II · 2016–2023', title: 'LOS POMPAPETRIYASOS', role: 'Producer, Cultural Manager & Fundraiser · Buenos Aires, Argentina', body: 'Development and coordination of independent cultural productions and community-based artistic initiatives across different international contexts.' },
      { acto: 'ACT III · 2018–2024', title: 'PERFORMING ARTS TEACHING', role: 'Theatre teaching and education · Buenos Aires, Argentina', body: 'Six and a half years teaching performing arts. At EMAD, supporting future theatre teachers in their pedagogical practice. At IES "Juan B. Justo" and Colegio San Tarcisio, theatre processes with teenagers in secondary school. At School No. 16, School District 8, theatre experiences with children from 5th to 7th grade.', link: { label: 'EMAD', href: 'https://emad.buenosaires.gob.ar' } },
      { acto: 'ACT IV · 2021–2023', title: 'FESTIVAL LATITUDE 40°', role: 'Producer · Argentina · Portugal', body: 'Production and coordination of cultural programming within a multidisciplinary international festival.' },
      { acto: 'ACT V · 2021–2023', title: 'INFOLIBROS', role: 'Creative Project Manager · Uruguay · LATAM', body: 'Coordination of cultural and educational content initiatives related to reading and literature.' },
      { acto: 'ACT VI · 2024–2026', title: 'LA XIXA TEATRE', role: 'Senior Project Manager · Barcelona, Spain', body: 'Management of international cultural production and multi-format projects under European frameworks, strengthening collaboration networks with partners across Europe.' },
    ],
    formacionEyebrow: '(playbill)',
    formacionTitle: 'EDUCATION',
    formacion: [
      { title: 'Advanced Diploma in Cultural Mediation — CLACSO / UNA', year: '2021' },
      { title: 'Postgraduate Certificate in Cultural Management and Communication — FLACSO', year: '2020' },
      { title: 'Teaching Certification in Arts, Theatre — COSATYC', year: '2014' },
      { title: 'Copywriting Certificate — Coderhouse', year: '2023' },
      { title: 'Art Direction Course, taught by Paula Taratuto — EDA', year: '2020' },
    ],
    idiomasTitle: 'LANGUAGES',
    idiomas: [
      { label: 'SPANISH', level: 'Native' },
      { label: 'ENGLISH', level: 'Advanced' },
      { label: 'CATALAN', level: 'A2, in progress' },
    ],
    download: 'Download CV (PDF)',
  },
  ca: {
    trayectoriaEyebrow: '(quadern de bitàcola)',
    trayectoriaTitle: 'TRAJECTÒRIA',
    actos: [
      { acto: 'ACTE I · 2013–2017', title: 'FETI — FESTIVAL EFÍMERO DE TEATRO INDEPENDIENTE', role: 'Productora i Curadora · Buenos Aires, Argentina', body: 'A càrrec de la producció, gestió i interacció dels diferents equips i elencs participants. Encarregada de la selecció final de les obres participants a cada edició.' },
      { acto: 'ACTE II · 2016–2023', title: 'LOS POMPAPETRIYASOS', role: 'Producer, Cultural Manager & Fundraiser · Buenos Aires, Argentina', body: 'Desenvolupament i coordinació de produccions culturals independents i iniciatives artístiques comunitàries en diferents contextos internacionals.' },
      { acto: 'ACTE III · 2018–2024', title: 'DOCÈNCIA EN ARTS ESCÈNIQUES', role: 'Formació docent i educació teatral · Buenos Aires, Argentina', body: "Sis anys i mig de docència en arts escèniques. A l'EMAD, acompanyant futures i futurs docents de teatre en les seves pràctiques pedagògiques. A l'IES \"Juan B. Justo\" i el Col·legi San Tarcisio, processos teatrals amb adolescències a secundària. A l'Escola N.º 16, Districte Escolar 8, experiències teatrals amb infàncies de 5è a 7è grau.", link: { label: 'EMAD', href: 'https://emad.buenosaires.gob.ar' } },
      { acto: 'ACTE IV · 2021–2023', title: 'FESTIVAL LATITUDE 40°', role: 'Producer · Argentina · Portugal', body: 'Producció i coordinació de programació cultural dins d\'un festival internacional multidisciplinari.' },
      { acto: 'ACTE V · 2021–2023', title: 'INFOLIBROS', role: 'Creative Project Manager · Uruguai · LATAM', body: 'Coordinació d\'iniciatives de contingut cultural i educatiu vinculades a la lectura i la literatura.' },
      { acto: 'ACTE VI · 2024–2026', title: 'LA XIXA TEATRE', role: 'Senior Project Manager · Barcelona, Espanya', body: "Gestió de producció cultural internacional i projectes multi-format sota marcs europeus, enfortint xarxes de col·laboració amb socis de tot Europa." },
    ],
    formacionEyebrow: '(programa de mà)',
    formacionTitle: 'FORMACIÓ',
    formacion: [
      { title: 'Diplomatura Superior en Mediació Cultural — CLACSO / UNA', year: '2021' },
      { title: 'Postgrau en Gestió Cultural i Comunicació — FLACSO', year: '2020' },
      { title: "Professorat d'Arts, orientació Teatre — COSATYC", year: '2014' },
      { title: 'Certificat en Copywriting — Coderhouse', year: '2023' },
      { title: "Curs de Direcció d'Art, impartit per Paula Taratuto — EDA", year: '2020' },
    ],
    idiomasTitle: 'IDIOMES',
    idiomas: [
      { label: 'ESPANYOL', level: 'Natiu' },
      { label: 'ANGLÈS', level: 'Avançat' },
      { label: 'CATALÀ', level: 'A2, en progrés' },
    ],
    download: 'Descarregar CV',
  },
};

export const CV = ({ language }: CVProps) => {
  const t = content[language];

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{t.trayectoriaEyebrow}</p>
          <h1 className="text-5xl mb-4 text-vino">{t.trayectoriaTitle}</h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="timeline">
            {t.actos.map((a) => (
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
          <p className="eyebrow-mono mb-4">{t.formacionEyebrow}</p>
          <h2 className="text-4xl mb-8 text-vino">{t.formacionTitle}</h2>
          <ul className="space-y-4">
            {t.formacion.map((f) => (
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
            {t.idiomas.map((idioma) => (
              <div key={idioma.label} className="bg-crudo-alt rounded-lg p-6 text-center">
                <h3 className="text-lg mb-2 text-rosa">{idioma.label}</h3>
                <p className="text-hueso/90">{idioma.level}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/documents/CV_Nadia_Onatibia.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t.download}</a>
          </div>
        </div>
      </section>
    </main>
  );
};
