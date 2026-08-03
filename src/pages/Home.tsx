import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '../../types';

interface HomeProps { language: Language; }

const content = {
  es: {
    heroEyebrow: '(se abre el telón)',
    heroText: 'Gestión cultural, facilitación de metodologías arts-based y producción de eventos. Desde la oficina y desde el escenario.',
    chips: ['COOPERACIÓN', 'FACILITACIÓN', 'GESTIÓN', 'PRODUCCIÓN'],
    manifiestoEyebrow: '(monólogo)',
    manifiestoTitle: 'LO QUE CREO',
    manifiestoLead: 'Trabajo con la convicción de que la cultura no es solo un sector: es infraestructura democrática.',
    manifiestoParagraphs: [
      'Creo en los proyectos que abren espacios para que más personas puedan reconocerse como productoras de sentido y de cultura, con voz propia para contar su historia, cuestionar lo dado y disputar un lugar en la conversación pública. Ese pasaje necesita relato, pero también producción: alguien que transforme una intuición en un proyecto, una conversación en una alianza, una idea en un presupuesto, un cronograma, un equipo y, finalmente, una experiencia compartida.',
      'En los últimos años trabajé en contextos atravesados por la migración, la fractura generacional, el discurso de odio en redes y la fragmentación religiosa. En todos aprendí lo mismo: la democracia no se debilita porque exista el conflicto. Se debilita cuando dejamos de crear espacios capaces de sostenerlo, de escucharlo y de transformarlo en acción colectiva.',
      'Ahí es donde encuentro mi lugar. Me apasiona producir las condiciones para que las cosas sucedan. Diseñar proyectos, coordinar equipos, conseguir recursos, articular alianzas, acompañar procesos creativos y hacer que una visión llegue a existir sin perder su sentido en el camino.',
      'Porque entendí que producir no es solo organizar. Es crear las condiciones para que una idea encuentre las personas, los recursos, el tiempo y la estructura necesarios para convertirse en algo que deje una huella.',
      'Gestionar un proyecto cultural y subirme a un escenario nunca fueron dos oficios distintos. Son dos maneras de participar de la misma práctica: construir las condiciones para que algo significativo ocurra.',
    ],
    registrosEyebrow: '(cambio de escena)',
    registrosTitle: 'TRES REGISTROS, UN MISMO OFICIO',
    registros: [
      { number: '01', title: 'PROJECT MANAGER', body: 'Planificación y coordinación de proyectos multi-partner bajo marcos europeos: Erasmus+, Creative Europe, CERV. Con conocimiento directo también de la escena cultural latinoamericana, desde mi trayectoria en Argentina. Gestión de presupuesto, reporting a financiadores públicos y privados, cumplimiento y documentación. Coordinación de equipos internacionales, alineando timelines y entregables entre países y continentes.' },
      { number: '02', title: 'FACILITADORA — ARTS-BASED', body: 'Actriz y profesora de arte. Diseño y facilitación de procesos participativos con teatro comunitario, teatro del oprimido y teatro fórum. Formación a jóvenes, educadores y trabajadores comunitarios. De la sesión íntima de taller al proceso de varias semanas con grupos en contextos de vulnerabilidad.' },
      { number: '03', title: 'PRODUCTORA', body: 'Logística y coordinación multi-sede de programación cultural. Producción de contenido en distintos formatos: presencial, digital, editorial. De un taller de una tarde a un festival internacional o un congreso con múltiples stakeholders.' },
    ],
    cta: { portfolio: 'Ver Portfolio', contact: 'Contactar' },
  },
  en: {
    heroEyebrow: '(curtain up)',
    heroText: 'Cultural management, arts-based facilitation and event production. From the office and from the stage.',
    chips: ['COOPERATION', 'FACILITATION', 'MANAGEMENT', 'PRODUCTION'],
    manifiestoEyebrow: '(monologue)',
    manifiestoTitle: 'WHAT I BELIEVE',
    manifiestoLead: 'I work with the conviction that culture is not just a sector: it is democratic infrastructure.',
    manifiestoParagraphs: [
      "I believe in projects that open spaces for more people to recognize themselves as producers of meaning and culture, with a voice of their own to tell their story, question what is given, and claim a place in the public conversation. That shift needs narrative, but it also needs production: someone who turns an intuition into a project, a conversation into an alliance, an idea into a budget, a schedule, a team and, finally, a shared experience.",
      "In recent years I've worked in contexts shaped by migration, generational fracture, online hate speech and religious fragmentation. In all of them I learned the same thing: democracy doesn't weaken because conflict exists. It weakens when we stop creating spaces capable of holding it, listening to it, and turning it into collective action.",
      "That's where I find my place. I'm passionate about producing the conditions for things to happen: designing projects, coordinating teams, securing resources, building alliances, accompanying creative processes, and making a vision come into existence without losing its meaning along the way.",
      'Because I understood that producing is not just organizing. It\'s creating the conditions for an idea to find the people, the resources, the time and the structure it needs to become something that leaves a mark.',
      "Managing a cultural project and stepping onto a stage were never two different trades. They're two ways of taking part in the same practice: building the conditions for something meaningful to happen.",
    ],
    registrosEyebrow: '(scene change)',
    registrosTitle: 'THREE REGISTERS, ONE CRAFT',
    registros: [
      { number: '01', title: 'PROJECT MANAGER', body: 'Planning and coordination of multi-partner projects under European frameworks: Erasmus+, Creative Europe, CERV. With direct knowledge of the Latin American cultural scene too, from my background in Argentina. Budget management, reporting to public and private funders, compliance and documentation. Coordination of international teams, aligning timelines and deliverables across countries and continents.' },
      { number: '02', title: 'FACILITATOR — ARTS-BASED', body: 'Actress and art teacher. Design and facilitation of participatory processes using community theatre, Theatre of the Oppressed and forum theatre. Training for young people, educators and community workers. From an intimate workshop session to a multi-week process with groups in vulnerable contexts.' },
      { number: '03', title: 'PRODUCER', body: 'Logistics and multi-venue coordination of cultural programming. Content production in different formats: in-person, digital, editorial. From a one-afternoon workshop to an international festival or a congress with multiple stakeholders.' },
    ],
    cta: { portfolio: 'View Portfolio', contact: 'Get in Touch' },
  },
  ca: {
    heroEyebrow: "(s'obre el teló)",
    heroText: "Gestió cultural, facilitació de metodologies arts-based i producció d'esdeveniments. Des de l'oficina i des de l'escenari.",
    chips: ['COOPERACIÓ', 'FACILITACIÓ', 'GESTIÓ', 'PRODUCCIÓ'],
    manifiestoEyebrow: '(monòleg)',
    manifiestoTitle: 'EL QUE CREC',
    manifiestoLead: 'Treballo amb la convicció que la cultura no és només un sector: és infraestructura democràtica.',
    manifiestoParagraphs: [
      "Crec en els projectes que obren espais perquè més persones puguin reconèixer-se com a productores de sentit i de cultura, amb veu pròpia per explicar la seva història, qüestionar el que es dona per fet i disputar un lloc en la conversa pública. Aquest pas necessita relat, però també producció: algú que transformi una intuïció en un projecte, una conversa en una aliança, una idea en un pressupost, un cronograma, un equip i, finalment, una experiència compartida.",
      "En els últims anys he treballat en contextos travessats per la migració, la fractura generacional, el discurs d'odi a les xarxes i la fragmentació religiosa. En tots vaig aprendre el mateix: la democràcia no s'afebleix perquè existeixi el conflicte. S'afebleix quan deixem de crear espais capaços de sostenir-lo, d'escoltar-lo i de transformar-lo en acció col·lectiva.",
      "Aquí és on trobo el meu lloc. M'apassiona produir les condicions perquè les coses passin: dissenyar projectes, coordinar equips, aconseguir recursos, articular aliances, acompanyar processos creatius i fer que una visió arribi a existir sense perdre el seu sentit pel camí.",
      "Perquè vaig entendre que produir no és només organitzar. És crear les condicions perquè una idea trobi les persones, els recursos, el temps i l'estructura necessaris per convertir-se en alguna cosa que deixi petjada.",
      'Gestionar un projecte cultural i pujar a un escenari mai van ser dos oficis diferents. Són dues maneres de participar de la mateixa pràctica: construir les condicions perquè alguna cosa significativa passi.',
    ],
    registrosEyebrow: "(canvi d'escena)",
    registrosTitle: 'TRES REGISTRES, UN MATEIX OFICI',
    registros: [
      { number: '01', title: 'PROJECT MANAGER', body: "Planificació i coordinació de projectes multi-partner sota marcs europeus: Erasmus+, Creative Europe, CERV. Amb coneixement directe també de l'escena cultural llatinoamericana, des de la meva trajectòria a l'Argentina. Gestió de pressupost, reporting a finançadors públics i privats, compliment i documentació. Coordinació d'equips internacionals, alineant terminis i lliurables entre països i continents." },
      { number: '02', title: 'FACILITADORA — ARTS-BASED', body: "Actriu i professora d'art. Disseny i facilitació de processos participatius amb teatre comunitari, teatre de l'oprimit i teatre fòrum. Formació a joves, educadors i treballadors comunitaris. De la sessió íntima d'un taller a un procés de diverses setmanes amb grups en contextos de vulnerabilitat." },
      { number: '03', title: 'PRODUCTORA', body: "Logística i coordinació multi-seu de programació cultural. Producció de contingut en diferents formats: presencial, digital, editorial. D'un taller d'una tarda a un festival internacional o un congrés amb múltiples stakeholders." },
    ],
    cta: { portfolio: 'Veure Portafoli', contact: 'Contactar' },
  },
};

const chipClassNames = ['bg-rojo text-hueso', 'bg-hueso text-ink', 'bg-vino text-hueso', 'bg-teal text-hueso'];

export const Home = ({ language }: HomeProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const t = content[language];

  return (
    <main>
      {/* HERO */}
      <section className="section-padding bg-crudo pt-12">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow-mono mb-4">{t.heroEyebrow}</p>
            <h1 className="text-5xl md:text-7xl leading-none mb-6 text-vino">NADIA<br />OÑATIBIA</h1>
            <p className="text-lg mb-8 max-w-xl text-ink">{t.heroText}</p>
            <div className="flex gap-3 flex-wrap">
              {t.chips.map((chip, i) => (
                <span key={chip} className={`px-4 py-2 rounded-full text-sm font-medium ${chipClassNames[i]}`}>{chip}</span>
              ))}
            </div>
          </div>
          <div className="gingham-rosa rounded-lg p-10 md:p-16 flex items-center justify-center relative min-h-[320px]">
            <div className="polaroid -rotate-3 w-48 md:w-64">
              <div className="polaroid-photo w-full aspect-[3/4] overflow-hidden">
                <img src="/images/01_headshot_principal.jpg" alt="Nadia Oñatibia" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="polaroid rotate-6 w-24 md:w-32 absolute -bottom-4 -right-2 md:right-4">
              <div className="polaroid-photo w-full aspect-square overflow-hidden">
                <img src="/images/02_escenario_patheatry.jpg" alt="Nadia Oñatibia facilitando en escena" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="polaroid -rotate-12 w-20 md:w-28 absolute top-2 left-0 md:-left-6">
              <div className="polaroid-photo w-full aspect-square overflow-hidden">
                <img src="/images/03_panel_miretage_horizontal.jpg" alt="Nadia Oñatibia en panel de MIRETAGE" className="w-full h-full object-cover object-[50%_35%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.manifiestoEyebrow}</p>
          <h2 className="text-4xl mb-10 text-vino">{t.manifiestoTitle}</h2>
          <p className="text-2xl md:text-3xl font-anton normal-case tracking-normal leading-snug text-vino mb-8">
            {t.manifiestoLead}
          </p>
          <div className="space-y-6">
            {t.manifiestoParagraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed text-ink">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* TRES REGISTROS */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.registrosEyebrow}</p>
          <h2 className="text-4xl mb-10 text-vino">{t.registrosTitle}</h2>
          <div className="space-y-4">
            {t.registros.map((r, i) => {
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
          <Link to="/portfolio" className="btn bg-hueso text-ink hover:bg-rosa">{t.cta.portfolio}</Link>
          <Link to="/contact" className="btn bg-rojo text-hueso hover:bg-vino-2">{t.cta.contact}</Link>
        </div>
      </section>
    </main>
  );
};
