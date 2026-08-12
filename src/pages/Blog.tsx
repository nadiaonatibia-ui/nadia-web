import { useState, useEffect } from 'react';
import type { Language } from '../../types';
import type { BlogPost } from '../../types';
import { supabase } from '../lib/supabase';

interface BlogProps {
  language: Language;
}

interface Reflexion {
  id: string;
  title: string;
  intro: string;
  slides: { heading: string; body: string }[];
  slideCount: number;
}

const reflexionesData: Reflexion[] = [
  {
    id: 'cuadro-mediacion',
    title: '¿Sabías que un cuadro puede ser una herramienta de mediación cultural?',
    intro: 'Cómo las obras de arte trascienden barreras lingüísticas y culturales, conectando a personas con historias compartidas.',
    slideCount: 4,
    slides: [
      { heading: 'Conexión emocional', body: 'Este cuadro transmite sentimientos universales, como la melancolía, la admiración por la naturaleza o el poder de lo cotidiano.' },
      { heading: 'Un espejo de la sociedad', body: 'Refleja los valores, las luchas y las esperanzas de una época.' },
      { heading: 'Un lenguaje universal', body: 'Aunque cada cultura lo interprete de forma distinta, la belleza y los símbolos del arte hablan a todos.' },
      { heading: 'Educación y acceso', body: 'En museos o virtualmente, este cuadro es un punto de entrada al mundo del arte para miles de personas.' },
    ],
  },
  {
    id: 'innovacion-cultural',
    title: '5 consejos para fomentar la innovación en proyectos culturales',
    intro: 'La creatividad es el alma de la cultura, pero innovar en proyectos culturales requiere algo más que buenas ideas.',
    slideCount: 5,
    slides: [
      { heading: 'Busca inspiración fuera', body: 'No limites tu inspiración al ámbito cultural. Aprende del diseño, la tecnología, e incluso de la ciencia. La intersección de disciplinas puede dar lugar a ideas revolucionarias.' },
      { heading: 'Escucha a tu público', body: 'La innovación debe tener propósito. Realiza encuestas, organiza talleres participativos y conversa directamente con tu público para entender sus necesidades.' },
      { heading: 'Prototipa primero', body: 'Antes de invertir a gran escala, lanza versiones piloto de tus ideas. La retroalimentación es clave para mejorar.' },
      { heading: 'Colabora con otros sectores', body: 'Trabaja con sectores diferentes al tuyo. Empresas tecnológicas, grupos sociales o artistas emergentes pueden aportar perspectivas nuevas.' },
      { heading: 'Integra tecnología con ética', body: 'Plataformas como IA, blockchain y NFTs pueden enriquecer la experiencia cultural. Integra herramientas innovadoras de manera accesible y ética.' },
    ],
  },
  {
    id: 'arte-urbano',
    title: '¿Por qué el arte urbano es la voz de las ciudades?',
    intro: 'Más allá de su estética, los murales y grafitis cuentan historias, levantan la voz por las comunidades y convierten el espacio público en un lienzo lleno de significado.',
    slideCount: 5,
    slides: [
      { heading: 'Reflejo de la identidad', body: 'Cada mural narra algo único sobre la ciudad, desde sus luchas hasta sus sueños.' },
      { heading: 'Un grito de resistencia', body: 'En muchos casos, el arte urbano surge como protesta, cuestionando el sistema y las injusticias sociales.' },
      { heading: 'Democratización del arte', body: 'Al estar en espacios públicos, rompe las barreras de acceso tradicionales del arte, llegando a todos.' },
      { heading: 'Regeneración urbana', body: 'Zonas antes olvidadas renacen como puntos de interés cultural y turístico gracias al arte.' },
      { heading: 'Diálogo colectivo', body: 'Los murales invitan a la reflexión y a las conversaciones sobre los temas que nos afectan como sociedad.' },
    ],
  },
  {
    id: 'consumo-cultural',
    title: 'Reflexión sobre el consumo cultural',
    intro: 'La cultura no se consume, se vive. Es mucho más que entretenimiento: es un puente hacia nuestra identidad y conexión con los demás.',
    slideCount: 4,
    slides: [
      { heading: 'Más que consumir, vivir', body: 'Participar activamente en un evento cultural o en la creación artística transforma nuestra relación con ella.' },
      { heading: 'Significado colectivo', body: 'La cultura nos une, dándonos un sentido de pertenencia y propósito.' },
      { heading: 'Reflejo de nuestra identidad', body: 'Cada experiencia cultural que vivimos es un reflejo de quiénes somos y quiénes aspiramos a ser.' },
      { heading: 'Pregunta abierta', body: '¿Qué experiencia cultural reciente te marcó?' },
    ],
  },
  {
    id: 'creatividad-campanas',
    title: 'Creatividad en campañas culturales',
    intro: 'La publicidad y la cultura no solo se encuentran; dialogan y se enriquecen mutuamente.',
    slideCount: 4,
    slides: [
      { heading: 'Conexión emocional', body: 'Las campañas exitosas no solo venden; generan vínculos con sus audiencias.' },
      { heading: 'Autenticidad', body: 'Respetar la esencia de los artistas es clave para que la colaboración sea bien recibida.' },
      { heading: 'Beneficio mutuo', body: 'La cultura gana recursos, y las marcas ganan reputación.' },
      { heading: 'Pregunta abierta', body: '¿Has visto alguna campaña que destaque en este sentido? Comparte tu favorita.' },
    ],
  },
  {
    id: 'futuro-mediacion',
    title: 'El futuro de la mediación cultural',
    intro: '¿Cómo se ve el futuro de la mediación cultural? Tecnología, accesibilidad y experiencias inmersivas están transformando la manera en que conectamos personas y cultura.',
    slideCount: 4,
    slides: [
      { heading: 'Tecnología accesible', body: 'Las experiencias inmersivas, como la realidad aumentada, hacen que la cultura llegue más lejos.' },
      { heading: 'Inclusión y diversidad', body: 'La mediación cultural debe enfocarse en representar voces que tradicionalmente han sido excluidas.' },
      { heading: 'Conexión global', body: 'La digitalización permite que la cultura de una comunidad llegue a audiencias de todo el mundo.' },
      { heading: 'Pregunta abierta', body: '¿Qué tecnologías crees que serán claves para el futuro de la mediación cultural?' },
    ],
  },
  {
    id: 'estrategias-mediacion',
    title: 'Estrategias para proyectos de mediación cultural',
    intro: 'La mediación cultural no es solo conectar personas con el arte; es hacer que lo vivan y lo sientan como propio.',
    slideCount: 4,
    slides: [
      { heading: 'Cocreación', body: 'Involucra a la comunidad desde el diseño del proyecto. La participación activa fortalece el sentido de pertenencia.' },
      { heading: 'Narrativas emotivas', body: 'Enfócate en contar historias detrás de las obras o eventos, haciendo que el público conecte emocionalmente.' },
      { heading: 'Uso de tecnología', body: 'Implementa herramientas como apps interactivas para enriquecer la experiencia.' },
      { heading: 'Pregunta abierta', body: '¿Cuál de estas estrategias usarías en tu próximo proyecto cultural?' },
    ],
  },
  {
    id: 'eventos-sostenibles',
    title: 'Eventos culturales sostenibles',
    intro: '¿Cómo pueden los eventos culturales liderar la sostenibilidad? La cultura puede ser también una herramienta para el cambio climático.',
    slideCount: 4,
    slides: [
      { heading: 'Reciclaje creativo', body: 'Utilizar materiales reciclados para la construcción de instalaciones artísticas.' },
      { heading: 'Energía renovable', body: 'Incorporar fuentes de energía limpia en la logística de los eventos.' },
      { heading: 'Educación ambiental', body: 'Crear experiencias culturales que promuevan conciencia y acción.' },
      { heading: 'Pregunta abierta', body: '¿Conoces algún evento cultural que sea un ejemplo de sostenibilidad? Compártelo conmigo.' },
    ],
  },
];

const uiLabels = {
  es: {
    eyebrow: 'HOJA APARTE',
    title: 'Papers y reflexiones',
    paperDate: 'Febrero 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: 'Un ensayo breve sobre la cultura participativa como infraestructura democrática, a partir de cuatro procesos reales: Rassif, SMASH, MIRETAGE y Beyond Gender. Sostiene que la democracia no se debilita porque exista el conflicto, sino cuando no quedan espacios capaces de sostenerlo.',
    readPaper: 'Leer el paper (PDF, inglés) →',
    reflexionesTitle: 'Reflexiones',
    slides: 'slides',
    close: 'Cerrar',
    recent: 'Actualizaciones recientes',
    author: 'Por Nadia Oñatibia',
  },
  en: {
    eyebrow: 'LOOSE PAGE',
    title: 'Papers & reflections',
    paperDate: 'February 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: "A short essay on participatory culture as democratic infrastructure, drawing on four real processes: Rassif, SMASH, MIRETAGE and Beyond Gender. It argues that democracy doesn't weaken because conflict exists, but when no spaces remain capable of holding it.",
    readPaper: 'Read the paper (PDF) →',
    reflexionesTitle: 'Reflections',
    slides: 'slides',
    close: 'Close',
    recent: 'Recent updates',
    author: 'By Nadia Oñatibia',
  },
  ca: {
    eyebrow: 'FULL A PART',
    title: 'Papers i reflexions',
    paperDate: 'Febrer 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: "Un assaig breu sobre la cultura participativa com a infraestructura democràtica, a partir de quatre processos reals: Rassif, SMASH, MIRETAGE i Beyond Gender. Sosté que la democràcia no s'afebleix perquè existeixi el conflicte, sinó quan no queden espais capaços de sostenir-lo.",
    readPaper: 'Llegir el paper (PDF, anglès) →',
    reflexionesTitle: 'Reflexions',
    slides: 'diapositives',
    close: 'Tancar',
    recent: 'Actualitzacions recents',
    author: 'Per Nadia Oñatibia',
  },
};

const cardColors = [
  'from-rose-800 to-rose-600',
  'from-violet-800 to-violet-600',
  'from-emerald-800 to-emerald-600',
  'from-amber-800 to-amber-600',
  'from-sky-800 to-sky-600',
  'from-teal-800 to-teal-600',
  'from-orange-800 to-orange-600',
  'from-indigo-800 to-indigo-600',
];

export const Blog = ({ language }: BlogProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedReflexion, setSelectedReflexion] = useState<Reflexion | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = uiLabels[language];

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('published', true).order('created_at', { ascending: false });
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const openReflexion = (r: Reflexion) => {
    setSelectedReflexion(r);
    setCurrentSlide(0);
  };

  const closeReflexion = () => {
    setSelectedReflexion(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (selectedReflexion && currentSlide < selectedReflexion.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString(
      language === 'es' ? 'es-ES' : language === 'ca' ? 'ca-ES' : 'en-US',
      { year: 'numeric', month: 'long', day: 'numeric' }
    );

  const colorIdx = (i: number) => cardColors[i % cardColors.length];

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      {/* Header */}
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">{t.title}</h1>
        </div>
      </section>

      {/* Paper principal */}
      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="bg-white rounded-xl border border-ink/5 p-8 md:p-10">
            <p className="eyebrow-mono mb-3">{t.paperDate}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-2">{t.paperTitle}</h2>
            <p className="text-vino font-medium italic mb-6">{t.paperSubtitle}</p>
            <p className="text-gray-warm leading-relaxed mb-8">{t.paperIntro}</p>
            <a
              href="/documents/Paper_Culture_as_Democratic_Infrastructure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-vino font-medium hover:text-coral transition-colors"
            >
              {t.readPaper}
            </a>
          </div>
        </div>
      </section>

      {/* Reflexiones — clickable cards → modal con carrusel */}
      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-ink mb-6">{t.reflexionesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reflexionesData.map((r, i) => (
              <div
                key={r.id}
                onClick={() => openReflexion(r)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-ink/5 hover:shadow-lg transition-all duration-300"
              >
                <div className={`h-24 bg-gradient-to-br ${colorIdx(i)} flex items-end p-4`}>
                  <span className="text-xs font-mono text-white/70 uppercase tracking-wider">
                    {r.slideCount} {t.slides}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-medium text-ink leading-snug group-hover:text-vino transition-colors">
                    {r.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog posts from Supabase */}
      {posts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-2xl font-extrabold text-ink mb-8">{t.recent}</h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl border border-ink/5 p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-vino/10 text-vino px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <time className="text-gray-warm text-sm">{formatDate(post.created_at)}</time>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-3">
                    {language === 'es' ? post.title_es : post.title_en}
                  </h3>
                  <p className="text-gray-warm leading-relaxed">
                    {language === 'es' ? post.content_es : post.content_en}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal carrusel de reflexión */}
      {selectedReflexion && (
        <div className="modal-overlay" onClick={closeReflexion}>
          <div className="modal-card max-w-lg" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeReflexion}>✕</button>

            {/* Slide header */}
            <div className={`h-16 bg-gradient-to-br ${colorIdx(reflexionesData.indexOf(selectedReflexion))} rounded-t-2xl flex items-center px-8`}>
              <p className="text-white/80 text-xs font-mono uppercase tracking-wider">
                {currentSlide + 1} / {selectedReflexion.slides.length}
              </p>
            </div>

            {/* Slide content */}
            <div className="p-8 min-h-[250px] flex flex-col justify-center">
              {currentSlide === 0 && (
                <p className="text-sm text-gray-warm mb-4 leading-relaxed">{selectedReflexion.intro}</p>
              )}
              <h3 className="text-xl font-bold text-ink mb-4">
                {selectedReflexion.slides[currentSlide].heading}
              </h3>
              <p className="text-ink/80 leading-relaxed">
                {selectedReflexion.slides[currentSlide].body}
              </p>
              {currentSlide === selectedReflexion.slides.length - 1 && (
                <p className="text-xs text-gray-warm mt-6 font-mono">{t.author}</p>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-8 pb-6">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:bg-ink/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              >
                ←
              </button>
              {/* Dots */}
              <div className="flex gap-2">
                {selectedReflexion.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? 'bg-vino w-4' : 'bg-ink/20 hover:bg-ink/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                disabled={currentSlide === selectedReflexion.slides.length - 1}
                className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:bg-ink/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
