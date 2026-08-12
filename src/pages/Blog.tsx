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
  slideCount: number;
  /** Images are at /images/reflexiones/{id}-slide-{n}.jpg */
}

const reflexionesData: Reflexion[] = [
  { id: 'cuadro-mediacion', title: '¿Sabías que un cuadro puede ser una herramienta de mediación cultural?', slideCount: 5 },
  { id: 'innovacion-cultural', title: '5 consejos para fomentar la innovación en proyectos culturales', slideCount: 6 },
  { id: 'arte-urbano', title: '¿Por qué el arte urbano es la voz de las ciudades?', slideCount: 6 },
  { id: 'consumo-cultural', title: 'Reflexión sobre el consumo cultural', slideCount: 5 },
  { id: 'creatividad-campanas', title: 'Creatividad en campañas culturales', slideCount: 5 },
  { id: 'futuro-mediacion', title: 'El futuro de la mediación cultural', slideCount: 5 },
  { id: 'estrategias-mediacion', title: 'Estrategias para proyectos de mediación cultural', slideCount: 5 },
  { id: 'eventos-sostenibles', title: 'Eventos culturales sostenibles', slideCount: 5 },
];

const getSlideUrl = (id: string, n: number) => `/images/reflexiones/${id}-slide-${n}.jpg`;

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
    if (selectedReflexion && currentSlide < selectedReflexion.slideCount - 1) {
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
            {reflexionesData.map((r) => (
              <div
                key={r.id}
                onClick={() => openReflexion(r)}
                className="group cursor-pointer rounded-xl overflow-hidden bg-white border border-ink/5 hover:shadow-lg transition-all duration-300"
              >
                {/* Use slide 1 as cover image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={getSlideUrl(r.id, 1)}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-ink leading-snug group-hover:text-vino transition-colors">
                    {r.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-warm mt-2 inline-block">
                    {r.slideCount} {t.slides}
                  </span>
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

      {/* Modal carrusel de reflexión — muestra imágenes de slides */}
      {selectedReflexion && (
        <div className="modal-overlay" onClick={closeReflexion}>
          <div className="modal-card max-w-md p-0 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close z-10" onClick={closeReflexion}>✕</button>

            {/* Slide image */}
            <div className="relative">
              <img
                src={getSlideUrl(selectedReflexion.id, currentSlide + 1)}
                alt={`${selectedReflexion.title} - slide ${currentSlide + 1}`}
                className="w-full aspect-square object-cover"
              />
              {/* Counter overlay */}
              <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                {currentSlide + 1} / {selectedReflexion.slideCount}
              </span>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-6 py-4 bg-white">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center text-ink/60 hover:bg-ink/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
              >
                ←
              </button>
              {/* Dots */}
              <div className="flex gap-2">
                {Array.from({ length: selectedReflexion.slideCount }).map((_, i) => (
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
                disabled={currentSlide === selectedReflexion.slideCount - 1}
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
