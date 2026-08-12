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
      'Creo en los proyectos que abren espacios para que más personas puedan reconocerse como productoras de sentido y de cultura, con voz propia para contar su historia, cuestionar lo dado y disputar un lugar en la conversación pública. Ese pasaje necesita relato, pero también producción: alguien que transforme una intuición en un proyecto, una conversación en una alianza, una idea en un presupuesto, un cronograma, un equipo y, finalmente, una experiencia compartida.',
      'En los últimos años trabajé en contextos atravesados por la migración, la fractura generacional, el discurso de odio en redes y la fragmentación religiosa. En todos aprendí lo mismo: la democracia no se debilita porque exista el conflicto. Se debilita cuando dejamos de crear espacios capaces de sostenerlo, de escucharlo y de transformarlo en acción colectiva.',
      'Ahí es donde encuentro mi lugar. Me apasiona producir las condiciones para que las cosas sucedan. Diseñar proyectos, coordinar equipos, conseguir recursos, articular alianzas, acompañar procesos creativos y hacer que una visión llegue a existir sin perder su sentido en el camino.',
      'Gestionar un proyecto cultural y subirme a un escenario nunca fueron dos oficios distintos. Son dos maneras de participar de la misma práctica: construir las condiciones para que algo significativo ocurra.',
    ],
    rolesEyebrow: 'CAMBIO DE ESCENA',
    rolesTitle: 'Tres registros, un mismo oficio',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planificación y coordinación de proyectos multi-partner bajo marcos europeos: Erasmus+, Creative Europe, CERV. Con conocimiento directo también de la escena cultural latinoamericana, desde mi trayectoria en Argentina. Gestión de presupuesto, reporting a financiadores públicos y privados, cumplimiento y documentación. Coordinación de equipos internacionales, alineando timelines y entregables entre países y continentes.',
        cta: 'Explorar →',
      },
      {
        number: '02',
        title: 'Facilitadora\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: 'Actriz y profesora de arte. Diseño y facilitación de procesos participativos con teatro comunitario, teatro del oprimido y teatro fórum. Formación a jóvenes, educadores y trabajadores comunitarios. De la sesión íntima de taller al proceso de varias semanas con grupos en contextos de vulnerabilidad.',
        cta: 'Explorar →',
      },
      {
        number: '03',
        title: 'Productora\nCultural',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: 'Logística y coordinación multi-sede de programación cultural. Producción de contenido en distintos formatos: presencial, digital, editorial. De un taller de una tarde a un festival internacional o un congreso con múltiples stakeholders.',
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
      "I believe in projects that open spaces for more people to recognize themselves as producers of meaning and culture, with a voice of their own to tell their story, question what is given, and claim a place in the public conversation. That shift needs narrative, but it also needs production: someone who turns an intuition into a project, a conversation into an alliance, an idea into a budget, a schedule, a team and, finally, a shared experience.",
      "In recent years I've worked in contexts shaped by migration, generational fracture, online hate speech and religious fragmentation. In all of them I learned the same thing: democracy doesn't weaken because conflict exists. It weakens when we stop creating spaces capable of holding it, listening to it, and turning it into collective action.",
      "That's where I find my place. I'm passionate about producing the conditions for things to happen: designing projects, coordinating teams, securing resources, building alliances, accompanying creative processes, and making a vision come into existence without losing its meaning along the way.",
      "Managing a cultural project and stepping onto a stage were never two different trades. They're two ways of taking part in the same practice: building the conditions for something meaningful to happen.",
    ],
    rolesEyebrow: 'SCENE CHANGE',
    rolesTitle: 'Three registers, one craft',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planning and coordination of multi-partner projects under European frameworks: Erasmus+, Creative Europe, CERV. With direct knowledge of the Latin American cultural scene too, from my background in Argentina. Budget management, reporting to public and private funders, compliance and documentation. Coordination of international teams, aligning timelines and deliverables across countries and continents.',
        cta: 'Explore →',
      },
      {
        number: '02',
        title: 'Facilitator\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: 'Actress and art teacher. Design and facilitation of participatory processes using community theatre, Theatre of the Oppressed and forum theatre. Training for young people, educators and community workers. From an intimate workshop session to a multi-week process with groups in vulnerable contexts.',
        cta: 'Explore →',
      },
      {
        number: '03',
        title: 'Cultural\nProducer',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: 'Logistics and multi-venue coordination of cultural programming. Content production in different formats: in-person, digital, editorial. From a one-afternoon workshop to an international festival or a congress with multiple stakeholders.',
        cta: 'Explore →',
      },
    ],
    ctaPortfolio: 'View projects',
    ctaContact: 'Get in touch',
  },
  ca: {
    heroEyebrow: "S'OBRE EL TELÓ",
    heroTagline: "Gestio cultural · Facilitacio arts-based · Produccio",
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: 'MONÒLEG',
    manifiestoTitle: "La cultura com a infraestructura democratica",
    manifiestoLead: "Treballo amb la conviccio que la cultura no es nomes un sector: es infraestructura democratica.",
    manifiestoParagraphs: [
      "Crec en els projectes que obren espais perque mes persones puguin reconeixer-se com a productores de sentit i de cultura, amb veu propia per explicar la seva historia, questionar el que es dona per fet i disputar un lloc en la conversa publica. Aquest pas necessita relat, pero tambe produccio: algu que transformi una intuicio en un projecte, una conversa en una alianca, una idea en un pressupost, un cronograma, un equip i, finalment, una experiencia compartida.",
      "En els ultims anys he treballat en contextos travessats per la migracio, la fractura generacional, el discurs d'odi a les xarxes i la fragmentacio religiosa. En tots vaig aprendre el mateix: la democracia no s'afebleix perque existeixi el conflicte. S'afebleix quan deixem de crear espais capacos de sostenir-lo, d'escoltar-lo i de transformar-lo en accio col·lectiva.",
      "Aqui es on trobo el meu lloc. M'apassiona produir les condicions perque les coses passin: dissenyar projectes, coordinar equips, aconseguir recursos, articular aliances, acompanyar processos creatius i fer que una visio arribi a existir sense perdre el seu sentit pel cami.",
      "Gestionar un projecte cultural i pujar a un escenari mai van ser dos oficis diferents. Son dues maneres de participar de la mateixa practica: construir les condicions perque alguna cosa significativa passi.",
    ],
    rolesEyebrow: "CANVI D'ESCENA",
    rolesTitle: 'Tres registres, un mateix ofici',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: "Planificacio i coordinacio de projectes multi-partner sota marcs europeus: Erasmus+, Creative Europe, CERV. Amb coneixement directe tambe de l'escena cultural llatinoamericana, des de la meva trajectoria a l'Argentina. Gestio de pressupost, reporting a financadors publics i privats, compliment i documentacio. Coordinacio d'equips internacionals, alineant terminis i lliurables entre paisos i continents.",
        cta: 'Explorar →',
      },
      {
        number: '02',
        title: 'Facilitadora\nArts-Based',
        image: '/images/facilitadora-teatro.jpg',
        secondImage: '/images/facilitadora-beyond-gender.jpg',
        body: "Actriu i professora d'art. Disseny i facilitacio de processos participatius amb teatre comunitari, teatre de l'oprimit i teatre forum. Formacio a joves, educadors i treballadors comunitaris. De la sessio intima d'un taller a un proces de diverses setmanes amb grups en contextos de vulnerabilitat.",
        cta: 'Explorar →',
      },
      {
        number: '03',
        title: 'Productora\nCultural',
        image: '/images/productora-patheatry.jpg',
        secondImage: '/images/productora-collage.jpg',
        body: "Logistica i coordinacio multi-seu de programacio cultural. Produccio de contingut en diferents formats: presencial, digital, editorial. D'un taller d'una tarda a un festival internacional o un congres amb multiples stakeholders.",
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
              <p className="text-base md:text-lg leading-relaxed text-gray-warm">
                {t.roles[selectedRole].body}
              </p>
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
