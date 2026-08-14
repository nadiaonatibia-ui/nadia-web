import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '../../types';

interface HomeProps {
  language: Language;
}

const content = {
  es: {
    heroEyebrow: 'SE ABRE EL TELÓN',
    heroTagline: 'Gestión cultural · Facilitación arts-based · Producción',
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: 'MONÓLOGO',
    manifiestoTitle: 'Cultura como infraestructura democrática',
    manifiestoLead: 'Trabajo con la convicción de que la cultura no es solo un sector: es infraestructura democrática.',
    manifiestoParagraphs: [
      'Creo en los proyectos que abren espacios para que más personas se reconozcan como productoras de sentido, con voz propia para contar su historia y ocupar un lugar en la conversación pública.',
      'Ahí encuentro mi lugar: diseño proyectos, coordino equipos y consigo los recursos para que una idea llegue a existir sin perder su sentido en el camino.',
      'Gestionar un proyecto cultural y subirme a un escenario nunca fueron oficios distintos: son dos formas de construir las condiciones para que algo significativo ocurra.',
    ],
    rolesEyebrow: 'CAMBIO DE ESCENA',
    rolesTitle: 'Tres registros, un mismo oficio',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planificación y coordinación de proyectos multi-partner bajo marcos europeos: Erasmus+, Creative Europe, CERV. Colaboración con administraciones públicas, fundaciones y consorcios de organizaciones asociadas, en proyectos de cooperación con Latinoamérica, Europa y África.\n\nGestión de presupuesto, informes narrativos y financieros, cumplimiento y documentación. Equipos numerosos en paralelo, con varios proyectos corriendo al mismo tiempo, alineando cronogramas y entregables entre países y continentes.\n\nOrganización y exposición en congresos y kick-offs. Seguimiento de tareas con metodologías ágiles (Kanban, Scrum), procesos de MEL —monitoreo, evaluación y aprendizaje— interno y externo, planes de comunicación de proyecto e informes de riesgo.',
        cta: 'Explorar →',
      },
      {
        number: '02',
        title: 'Facilitadora\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: 'Diseño y facilitación de procesos participativos con metodologías arts-based: teatro comunitario, teatro del oprimido, teatro fórum, entre otras. Trabajo interdisciplinario en duplas con otras disciplinas —música, artes plásticas y visuales— según las necesidades del proyecto.\n\nTalleres puntuales y procesos sostenidos en el tiempo, con todas las franjas etarias —niñeces, adolescencias, adultos, personas mayores de 55— en contextos escolares, extracurriculares y de formación docente. Diseño de currículas, handbooks y guías de aprendizaje.\n\nProducción de los resultados que cada proceso requiera: muestras, instalaciones performáticas, cortometrajes. Aplicado tanto en contextos de vulnerabilidad como en entornos menos adversos.',
        cta: 'Explorar →',
      },
      {
        number: '03',
        title: 'Productora\nCultural',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: 'Curaduría de artes escénicas y performativas, y logística y coordinación multi-sede de programación cultural: contratación y coordinación de artistas y equipos técnicos, gestión de proveedores, montaje in situ y coordinación de ensayos.\n\nProducción de contenido en distintos formatos —presencial, digital, editorial—: guión, edición audiovisual, SEO y analítica de contenido, con optimización de flujos de producción mediante herramientas de IA.\n\nDe un taller de una tarde a un festival internacional o un congreso con múltiples stakeholders.',
        cta: 'Explorar →',
      },
    ],
    ctaPortfolio: 'Ver proyectos',
    ctaContact: 'Contactar',
  },
  en: {
    heroEyebrow: 'CURTAIN UP',
    heroTagline: 'Cultural management · Arts-based facilitation · Production',
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: 'MONOLOGUE',
    manifiestoTitle: 'Culture as democratic infrastructure',
    manifiestoLead: 'I work with the conviction that culture is not just a sector: it is democratic infrastructure.',
    manifiestoParagraphs: [
      'I believe in projects that open spaces for more people to recognise themselves as producers of meaning, with a voice of their own to tell their story and take part in public conversation.',
      "That's where I find my place: I design projects, coordinate teams and secure the resources for an idea to come into being without losing its meaning along the way.",
      'Managing a cultural project and stepping onto a stage were never two different trades: they are two ways of building the conditions for something meaningful to happen.',
    ],
    rolesEyebrow: 'SCENE CHANGE',
    rolesTitle: 'Three registers, one craft',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planning and coordination of multi-partner projects under European frameworks: Erasmus+, Creative Europe, CERV. Collaboration with public administrations, foundations and consortia of partner organisations, on cooperation projects across Latin America, Europe and Africa.\n\nBudget management, narrative and financial reporting, compliance and documentation. Large teams working in parallel, with several projects running at the same time, aligning timelines and deliverables across countries and continents.\n\nOrganisation of and speaking at conferences and kick-offs. Task tracking with agile methodologies (Kanban, Scrum), internal and external MEL (monitoring, evaluation and learning) processes, project communication plans and risk reports.',
        cta: 'Explore →',
      },
      {
        number: '02',
        title: 'Facilitator\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: 'Design and facilitation of participatory processes using arts-based methodologies: Theatre of the Oppressed, Forum Theatre, Community Theatre, among others. Interdisciplinary work in pairs with other disciplines —music, visual and plastic arts— depending on the needs of the project.\n\nOne-off workshops and sustained long-term processes, across all age groups —childhood, adolescence, adults, people over 55— in school, extracurricular and teacher-training settings. Design of curricula, handbooks and learning guides.\n\nProduction of whatever outcome each process calls for: exhibitions, performative installations, short films. Applied both in contexts of vulnerability and in less adverse settings.',
        cta: 'Explore →',
      },
      {
        number: '03',
        title: 'Cultural\nProducer',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: 'Curation of performing and performative arts, and multi-site logistics and coordination of cultural programming: hiring and coordinating artists and technical teams, supplier management, on-site setup and rehearsal coordination.\n\nContent production across formats —in-person, digital, editorial—: scriptwriting, video editing, SEO and content analytics, with production workflows optimised through AI tools.\n\nFrom a one-afternoon workshop to an international festival or a conference with multiple stakeholders.',
        cta: 'Explore →',
      },
    ],
    ctaPortfolio: 'View projects',
    ctaContact: 'Get in touch',
  },
  ca: {
    heroEyebrow: "S'OBRE EL TELÓ",
    heroTagline: "Gestió cultural · Facilitació arts-based · Producció",
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: 'MONÒLEG',
    manifiestoTitle: "La cultura com a infraestructura democràtica",
    manifiestoLead: "Treballo amb la convicció que la cultura no és només un sector: és infraestructura democràtica.",
    manifiestoParagraphs: [
      "Crec en els projectes que obren espais perquè més persones es reconeguin com a productores de sentit, amb veu pròpia per explicar la seva història i ocupar un lloc a la conversa pública.",
      "Aquí trobo el meu lloc: dissenyo projectes, coordino equips i aconsegueixo els recursos perquè una idea arribi a existir sense perdre el seu sentit pel camí.",
      "Gestionar un projecte cultural i pujar a un escenari mai van ser oficis diferents: són dues maneres de construir les condicions perquè alguna cosa significativa passi.",
    ],
    rolesEyebrow: "CANVI D'ESCENA",
    rolesTitle: 'Tres registres, un mateix ofici',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: "Planificació i coordinació de projectes multi-partner sota marcs europeus: Erasmus+, Creative Europe, CERV. Col·laboració amb administracions públiques, fundacions i consorcis d'organitzacions associades, en projectes de cooperació amb l'Amèrica Llatina, Europa i l'Àfrica.\n\nGestió de pressupost, informes narratius i financers, compliment i documentació. Equips nombrosos en paral·lel, amb diversos projectes en marxa alhora, alineant cronogrames i lliurables entre països i continents.\n\nOrganització i exposició en congressos i kick-offs. Seguiment de tasques amb metodologies àgils (Kanban, Scrum), processos de MEL —seguiment, avaluació i aprenentatge— intern i extern, plans de comunicació de projecte i informes de risc.",
        cta: 'Explorar →',
      },
      {
        number: '02',
        title: 'Facilitadora\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: "Disseny i facilitació de processos participatius amb metodologies arts-based: teatre comunitari, teatre de l'oprimit, teatre fòrum, entre d'altres. Treball interdisciplinari en parelles amb altres disciplines —música, arts plàstiques i visuals— segons les necessitats del projecte.\n\nTallers puntuals i processos sostinguts en el temps, amb totes les franges d'edat —infàncies, adolescències, adults, persones grans de 55— en contextos escolars, extraescolars i de formació docent. Disseny de currículums, manuals i guies d'aprenentatge.\n\nProducció dels resultats que cada procés requereixi: mostres, instal·lacions performàtiques, curtmetratges. Aplicat tant en contextos de vulnerabilitat com en entorns menys adversos.",
        cta: 'Explorar →',
      },
      {
        number: '03',
        title: 'Productora\nCultural',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: "Curadoria d'arts escèniques i performatives, i logística i coordinació multiseu de programació cultural: contractació i coordinació d'artistes i equips tècnics, gestió de proveïdors, muntatge in situ i coordinació d'assajos.\n\nProducció de continguts en diferents formats —presencial, digital, editorial—: guió, edició audiovisual, SEO i analítica de continguts, amb optimització de fluxos de producció mitjançant eines d'IA.\n\nD'un taller d'una tarda a un festival internacional o un congrés amb múltiples stakeholders.",
        cta: 'Explorar →',
      },
    ],
    ctaPortfolio: 'Veure projectes',
    ctaContact: 'Contactar',
  },
};

export const Home = ({ language }: HomeProps) => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const t = content[language];

  return (
    <main>
      {/* ===== HERO — DARK/CINEMATIC ===== */}
      <section className="relative bg-crudo-dark min-h-[85vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-crudo-dark via-crudo-dark to-vino/20" />

        <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text */}
          <div>
            <p className="eyebrow-mono mb-2">{t.heroEyebrow}</p>
            <p className="text-sm text-white/40 mb-6 font-mono tracking-widest">{t.heroLocation}</p>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none tracking-tight mb-6">
              NADIA<br />ONATIBIA
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
              {t.heroTagline}
            </p>
            <div className="flex gap-4 mt-10">
              <Link
                to="/portfolio"
                className="btn bg-white text-crudo-dark hover:bg-white/90 font-semibold"
              >
                {t.ctaPortfolio}
              </Link>
              <Link
                to="/contact"
                className="btn border border-white/30 text-white hover:bg-white/10 font-medium"
              >
                {t.ctaContact}
              </Link>
            </div>
          </div>

          {/* Right: Hero Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 md:w-96">
              <img
                src="/images/hero-headshot.jpg"
                alt="Nadia Onatibia"
                className="w-full rounded-2xl shadow-2xl"
              />
              {/* Accent decoration */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-coral/40 rounded-2xl -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-teal/30 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MANIFIESTO — LIGHT ===== */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.manifiestoEyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-8 leading-tight">
            {t.manifiestoTitle}
          </h2>
          <p className="text-xl md:text-2xl text-vino font-medium leading-snug mb-10">
            {t.manifiestoLead}
          </p>
          <div className="space-y-6">
            {t.manifiestoParagraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed text-gray-warm">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRES REGISTROS — PHOTO CARDS ===== */}
      <section className="section-padding bg-crudo">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{t.rolesEyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-12 leading-tight">
            {t.rolesTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.roles.map((role, i) => (
              <div
                key={role.number}
                className="role-card"
                onClick={() => setSelectedRole(i)}
              >
                <img src={role.image} alt={role.title.replace('\n', ' ')} />
                <div className="role-card-overlay">
                  <span className="role-card-number">{role.number}</span>
                  <h3 className="role-card-title whitespace-pre-line">{role.title}</h3>
                  <span className="role-card-cta">{role.cta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ROLE MODAL ===== */}
      {selectedRole !== null && (
        <div className="modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedRole(null)}>
              ✕
            </button>

            {/* Modal header image */}
            <div className="modal-card-header">
              <img
                src={t.roles[selectedRole].secondImage}
                alt={t.roles[selectedRole].title.replace('\n', ' ')}
              />
              <div className="modal-card-header-overlay">
                <div>
                  <span className="text-coral font-mono text-xs tracking-widest uppercase">
                    {t.roles[selectedRole].number}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white whitespace-pre-line">
                    {t.roles[selectedRole].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal body */}
            <div className="modal-card-body">
              <div className="text-base md:text-lg leading-relaxed text-gray-warm space-y-4">
                {t.roles[selectedRole].body.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="btn bg-vino text-white hover:bg-vino-2 font-medium"
                  onClick={() => setSelectedRole(null)}
                >
                  {t.ctaPortfolio}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
            {language === 'es' ? 'Hablemos' : language === 'en' ? "Let's talk" : 'Parlem'}
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/portfolio" className="btn bg-white text-crudo-dark hover:bg-white/90 font-semibold">
              {t.ctaPortfolio}
            </Link>
            <Link to="/contact" className="btn border border-white/30 text-white hover:bg-white/10 font-medium">
              {t.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
