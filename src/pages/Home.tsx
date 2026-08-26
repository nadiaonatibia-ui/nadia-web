import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Language } from '../../types';
import { PageHead } from '../components/PageHead';

interface HomeProps {
  language: Language;
}

function TypewriterParagraph({ text, delay }: { text: string; delay: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const fullyExited = useRef(true);
  const animFrame = useRef<number | null>(null);
  const lastUpdate = useRef<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.textContent = text;
      return;
    }

    el.textContent = '';
    el.style.minHeight = '1.6em';

    const runAnimation = () => {
      // Measure full height before clearing
      el.textContent = text;
      const fullHeight = el.scrollHeight;
      el.style.minHeight = `${fullHeight}px`;
      el.textContent = '';

      lastUpdate.current = performance.now();
      const charDelay = 700 / text.length;
      let i = 0;

      const animate = (now: number) => {
        if (now - lastUpdate.current >= charDelay) {
          el.textContent = text.slice(0, i + 1);
          i++;
          lastUpdate.current = now;
        }
        if (i < text.length) {
          animFrame.current = requestAnimationFrame(animate);
        }
      };

      animFrame.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 0) {
          fullyExited.current = true;
          if (animFrame.current) {
            cancelAnimationFrame(animFrame.current);
            animFrame.current = null;
          }
          return;
        }
        if (entry.isIntersecting && fullyExited.current) {
          fullyExited.current = false;
          setTimeout(runAnimation, delay);
        }
      },
      { threshold: [0, 0.3] }
    );

    const startTimer = setTimeout(() => observer.observe(el), 50);
    return () => {
      clearTimeout(startTimer);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      observer.disconnect();
    };
  }, [text, delay]);

  return (
    <p
      ref={ref}
      className="text-base md:text-lg leading-relaxed text-gray-warm"
      style={{ fontFamily: "'IBM Plex Mono', monospace", lineHeight: 1.75 }}
    />
  );
}

const content = {
  es: {
    heroEyebrow: '(SE ABRE EL TELÓN)',
    heroTagline: 'Gestión cultural · Facilitación arts-based · Producción',
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: '(MONÓLOGO)',
    manifiestoTitle: 'Cultura como infraestructura democrática',
    manifiestoLead: 'Trabajo con la convicción de que la cultura no es solo un sector: es infraestructura democrática.',
    manifiestoParagraphs: [
      'Creo en los proyectos que abren espacios para que más personas se reconozcan como productoras de sentido, con voz propia para contar su historia y ocupar un lugar en la conversación pública.',
      'Ahí encuentro mi lugar: diseño proyectos, coordino equipos y consigo los recursos para que una idea llegue a existir sin perder su sentido en el camino.',
      'Gestionar un proyecto cultural y sostener un proceso creativo colectivo nunca fueron oficios distintos: son dos formas de construir las condiciones para que algo significativo ocurra.',
    ],
    rolesEyebrow: '(CAMBIO DE ESCENA)',
    rolesTitle: 'Tres registros, un mismo oficio',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planificación y coordinación de proyectos multi-partner bajo marcos europeos: Erasmus+, Creative Europe, CERV. Colaboración con administraciones públicas, fundaciones y consorcios de organizaciones asociadas, en proyectos de cooperación con Latinoamérica, Europa y África.\n\nResponsable de la gestión presupuestaria y de los informes narrativos y financieros ante los distintos financiadores, garantizando cumplimiento y trazabilidad documental. Cartera de proyectos en simultáneo, con equipos distribuidos en distintos países, manteniendo cronogramas y entregables alineados entre continentes.\n\nOrganización y exposición en congresos y kick-offs. Seguimiento de tareas con metodologías ágiles (Kanban, Scrum), procesos de MEL —monitoreo, evaluación y aprendizaje— interno y externo, planes de comunicación de proyecto e informes de riesgo.',
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
        body: 'Curaduría de artes escénicas y performativas. Logística y coordinación multi-sede de programación cultural: contratación y coordinación de artistas y equipos técnicos, gestión de proveedores, montaje in situ y coordinación de ensayos.\n\nProducción de contenido en distintos formatos —presencial, digital, editorial—: guión, edición audiovisual, SEO y analítica de contenido, con optimización de flujos de producción mediante herramientas de IA.\n\nDe un taller de una tarde a un festival internacional o un congreso con múltiples stakeholders.',
        cta: 'Explorar →',
      },
    ],
    ctaPortfolio: 'Ver proyectos',
    ctaContact: 'Contactar',
  },
  en: {
    heroEyebrow: '(CURTAIN UP)',
    heroTagline: 'Cultural management · Arts-based facilitation · Production',
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: '(MONOLOGUE)',
    manifiestoTitle: 'Culture as democratic infrastructure',
    manifiestoLead: 'I work with the conviction that culture is not just a sector: it is democratic infrastructure.',
    manifiestoParagraphs: [
      'I believe in projects that open spaces for more people to recognise themselves as producers of meaning, with a voice of their own to tell their story and take part in public conversation.',
      "That's where I find my place: I design projects, coordinate teams and secure the resources for an idea to come into being without losing its meaning along the way.",
      'Managing a cultural project and sustaining a collective creative process were never two different trades: they are two ways of building the conditions for something meaningful to happen.',
    ],
    rolesEyebrow: '(SCENE CHANGE)',
    rolesTitle: 'Three registers, one craft',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: 'Planning and coordination of multi-partner projects under European frameworks: Erasmus+, Creative Europe, CERV. Collaboration with public administrations, foundations and consortia of partner organisations, on cooperation projects across Latin America, Europe and Africa.\n\nResponsible for budget management and for narrative and financial reporting to funders, ensuring compliance and documentary traceability. A portfolio of simultaneous projects, with teams distributed across different countries, keeping timelines and deliverables aligned across continents.\n\nOrganisation of and speaking at conferences and kick-offs. Task tracking with agile methodologies (Kanban, Scrum), internal and external MEL (monitoring, evaluation and learning) processes, project communication plans and risk reports.',
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
        body: 'Curation of performing and performative arts. Multi-site logistics and coordination of cultural programming: hiring and coordinating artists and technical teams, supplier management, on-site setup and rehearsal coordination.\n\nContent production across formats —in-person, digital, editorial—: scriptwriting, video editing, SEO and content analytics, with production workflows optimised through AI tools.\n\nFrom a one-afternoon workshop to an international festival or a conference with multiple stakeholders.',
        cta: 'Explore →',
      },
    ],
    ctaPortfolio: 'View projects',
    ctaContact: 'Get in touch',
  },
  ca: {
    heroEyebrow: "(S'OBRE EL TELÓ)",
    heroTagline: "Gestió cultural · Facilitació arts-based · Producció",
    heroLocation: 'Barcelona — Buenos Aires',
    manifiestoEyebrow: '(MONÒLEG)',
    manifiestoTitle: "La cultura com a infraestructura democràtica",
    manifiestoLead: "Treballo amb la convicció que la cultura no és només un sector: és infraestructura democràtica.",
    manifiestoParagraphs: [
      "Crec en els projectes que obren espais perquè més persones es reconeguin com a productores de sentit, amb veu pròpia per explicar la seva història i ocupar un lloc a la conversa pública.",
      "Aquí trobo el meu lloc: dissenyo projectes, coordino equips i aconsegueixo els recursos perquè una idea arribi a existir sense perdre el seu sentit pel camí.",
      "Gestionar un projecte cultural i sostenir un procés creatiu col·lectiu mai van ser oficis diferents: són dues maneres de construir les condicions perquè alguna cosa significativa passi.",
    ],
    rolesEyebrow: "(CANVI D'ESCENA)",
    rolesTitle: 'Tres registres, un mateix ofici',
    roles: [
      {
        number: '01',
        title: 'Project\nManager',
        image: '/images/pm-presentation.jpg',
        secondImage: '/images/pm-panel.jpg',
        body: "Planificació i coordinació de projectes multi-partner sota marcs europeus: Erasmus+, Creative Europe, CERV. Col·laboració amb administracions públiques, fundacions i consorcis d'organitzacions associades, en projectes de cooperació amb l'Amèrica Llatina, Europa i l'Àfrica.\n\nResponsable de la gestió pressupostària i dels informes narratius i financers davant els diferents finançadors, garantint el compliment i la traçabilitat documental. Cartera de projectes en simultani, amb equips distribuïts en diferents països, mantenint cronogrames i lliurables alineats entre continents.\n\nOrganització i exposició en congressos i kick-offs. Seguiment de tasques amb metodologies àgils (Kanban, Scrum), processos de MEL —seguiment, avaluació i aprenentatge— intern i extern, plans de comunicació de projecte i informes de risc.",
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
        body: "Curadoria d'arts escèniques i performatives. Logística i coordinació multiseu de programació cultural: contractació i coordinació d'artistes i equips tècnics, gestió de proveïdors, muntatge in situ i coordinació d'assajos.\n\nProducció de continguts en diferents formats —presencial, digital, editorial—: guió, edició audiovisual, SEO i analítica de continguts, amb optimització de fluxos de producció mitjançant eines d'IA.\n\nD'un taller d'una tarda a un festival internacional o un congrés amb múltiples stakeholders.",
        cta: 'Explorar →',
      },
    ],
    ctaPortfolio: 'Veure projectes',
    ctaContact: 'Contactar',
  },
};

const cardIds = ['card-pm', 'card-facilitadora', 'card-productora'];
const cardColors = ['var(--teal)', 'var(--rosa)', 'var(--coral)'];
let scrolling = false;

const scrollToCard = (index: number) => {
  if (scrolling) return;
  scrolling = true;
  const card = document.getElementById(cardIds[index]);
  if (!card) {
    scrolling = false;
    return;
  }
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => {
    card.classList.add('card-flash');
    card.style.setProperty('--card-color', cardColors[index]);
    setTimeout(() => {
      card.classList.remove('card-flash');
      scrolling = false;
    }, 700);
  }, 500);
};

export const Home = ({ language }: HomeProps) => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const t = content[language];
  const registrosRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedRole !== null) {
      document.body.style.overflow = 'hidden';
      const closeOnEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedRole(null);
      };
      document.addEventListener('keydown', closeOnEscape);
      modalRef.current?.focus();
      return () => {
        document.removeEventListener('keydown', closeOnEscape);
        document.body.style.overflow = '';
      };
    }
  }, [selectedRole]);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const section = registrosRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll('.registros-reveal').forEach(el => {
            el.classList.add('in-view');
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHead page="home" language={language} />
      <main>
      {/* ===== HERO — DARK/CINEMATIC ===== */}
      <section className="hero-section relative bg-crudo-dark min-h-[85vh] flex overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-crudo-dark via-crudo-dark to-vino/20" />

        {/* Left: Text content */}
        <div className="z-10 flex items-center" style={{ flex: '0 1 61%', paddingLeft: '1.5rem', paddingRight: '32px' }}>
          <div className="w-full">
            <p className="eyebrow-mono mb-2">{t.heroEyebrow}</p>
            <p className="text-sm text-white/40 mb-6 font-mono tracking-widest">{t.heroLocation}</p>
            <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-none tracking-tight mb-6">
              NADIA<br />OÑATIBIA
            </h1>
            <p className="text-lg lg:text-xl max-w-lg leading-relaxed">
              {t.heroTagline.split(' · ').map((part: string, i: number) => (
                <span key={i}>
                  {i > 0 && <span className="mx-1" style={{ color: '#AB6C83' }}>·</span>}
                  <button
                    className={`tagline-btn tagline-segment tagline-segment--${i}`}
                    onClick={() => scrollToCard(i)}
                    style={{ color: '#F5F0E8' }}
                  >
                    {part}
                  </button>
                </span>
              ))}
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
        </div>

        {/* Right: Hero Photo Panel — edge to edge, full height */}
        <div
          className="hero-photo-panel relative w-full h-[70vh] md:absolute md:right-0 md:w-[45%] md:h-auto md:top-0 md:bottom-0 mt-8 md:mt-0"
          style={{
            backgroundImage: 'url(/images/hero-headshot.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
            backgroundSize: 'auto 115%'
          }}
        >
          <div className="hero-photo-curtain" />
          <div className="hero-photo-glow" />
        </div>
      </section>

      {/* ===== MANIFIESTO — LIGHT ===== */}
      <section className="section-padding bg-crudo">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.manifiestoEyebrow}</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-8 leading-tight">
            {t.manifiestoTitle}
          </h2>
          <div className="space-y-6">
            {t.manifiestoParagraphs.map((p: string, i: number) => (
              <TypewriterParagraph key={`${language}-${i}`} text={p} delay={i * 800} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRES REGISTROS — PHOTO CARDS ===== */}
      <section ref={registrosRef} className="bg-crudo">
        <div className="container-wide px-0 md:px-1.5 py-12 md:py-20">
          <div className="px-6 md:px-0">
            <p className="eyebrow-mono mb-4 registros-reveal" style={{ transitionDelay: '0ms' }}>{t.rolesEyebrow}</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-ink mb-12 leading-tight registros-reveal" style={{ transitionDelay: '100ms' }}>
              {t.rolesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full relative" style={{ marginLeft: 'calc((-100vw + 100%) / 2)', marginRight: 'calc((-100vw + 100%) / 2)' }}>
            {t.roles.map((role, i) => (
              <div
                key={role.number}
                id={cardIds[i]}
                className="role-card registros-reveal"
                style={{ transitionDelay: `${200 + i * 100}ms`, '--card-color': cardColors[i] } as React.CSSProperties}
                onClick={() => setSelectedRole(i)}
              >
                <img src={role.image} alt={role.title.replace('\n', ' ')} className="role-card-photo" />
                <div className="role-card-overlay">
                  <span className={`role-card-number role-card-number--${i}`}>{role.number}</span>
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
        <div className="modal-overlay" onClick={() => setSelectedRole(null)} role="presentation">
          <div ref={modalRef} tabIndex={-1} className={`modal-card modal-role--${selectedRole}`} onClick={(e) => e.stopPropagation()} aria-modal="true" role="dialog">
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
                  <span className={`modal-number font-mono text-xs tracking-widest uppercase`}>
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
              <div className="modal-accent-bar text-base md:text-lg leading-relaxed text-gray-warm space-y-4">
                {t.roles[selectedRole].body.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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
    </>
  );
};
