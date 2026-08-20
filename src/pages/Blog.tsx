import { useState, useEffect, useRef } from 'react';
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

function TypewriterParagraph({ text, delay = 0 }: { text: string; delay?: number }) {
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

    observer.observe(el);
    return () => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      observer.disconnect();
    };
  }, [text, delay]);

  return (
    <p
      ref={ref}
      className="blog-intro-typewriter"
    />
  );
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
    intro: 'De tanto en tanto me tomo el tiempo de profundizar algunas reflexiones sobre cultura, gestión y participación que van decantando de mi práctica. Son ideas que maduran entre proyecto y proyecto, hasta que siento que están listas para poner en palabras y compartir. Acá publico algunas de ellas:',
    paperDate: 'Febrero 2026 · Barcelona',
    paperTitle: 'CULTURA COMO INFRAESTRUCTURA DEMOCRÁTICA',
    paperSubtitle: '"Práctica participativa y cultura como derecho público"',
    paperIntro: 'Cuatro procesos culturales —migración, discurso de odio, memoria religiosa, conflicto generacional— y una misma pregunta de fondo: qué rol cumple la cultura cuando la sociedad no encuentra dónde alojar el desacuerdo.',
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
    intro: 'From time to time I take the space to deepen some reflections on culture, management and participation that emerge from my practice. These are ideas that mature between one project and another, until I feel they are ready to put into words and share. Here I publish some of them:',
    paperDate: 'February 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: "Four cultural processes—migration, hate speech, religious memory, generational conflict—and the same underlying question: what role does culture play when society finds no place to harbor disagreement.",
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
    intro: 'De tant en tant em pren el temps de profunditzar algunes reflexions sobre cultura, gestió i participació que van decantant de la meva pràctica. Són idees que maduren entre projecte i projecte, fins que sento que estan listes per posar en paraules i compartir. Aquí publico algunes d\'elles:',
    paperDate: 'Febrer 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: "Quatre processos culturals —migració, discurs d'odi, memòria religiosa, conflicte generacional— i una mateixa pregunta de fons: quin rol cumpleix la cultura quan la societat no troba on allotjar el desacord.",
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
  const [expandedPaper, setExpandedPaper] = useState(false);
  const paperRef = useRef<HTMLDivElement>(null);
  const reflexionesRef = useRef<HTMLDivElement>(null);
  const t = uiLabels[language];

  const togglePaper = () => {
    setExpandedPaper(!expandedPaper);
  };

  useEffect(() => { fetchPosts(); }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reflexiones reveal animation — staggered fade-in
    const reflexionesEl = reflexionesRef.current;
    if (reflexionesEl) {
      if (prefersReduced) {
        reflexionesEl.querySelectorAll('.reflexion-card').forEach(el => {
          el.classList.add('in-view');
        });
      } else {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const cards = entry.target.querySelectorAll('.reflexion-card');
                cards.forEach((el, i) => {
                  setTimeout(() => el.classList.add('in-view'), i * 90);
                });
                obs.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
        obs.observe(reflexionesEl);
        return () => obs.disconnect();
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedReflexion) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'Escape') closeReflexion();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedReflexion, currentSlide]);

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
    <main className="min-h-screen bg-crudo">
      {/* Header */}
      <section className="pt-8 pb-8 md:pt-12 md:pb-8">
        <div className="container-wide max-w-3xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-6">{t.title}</h1>
          <TypewriterParagraph key={`blog-intro-${language}`} text={t.intro} delay={0} />
        </div>
      </section>

      {/* Paper principal — colapsable */}
      <section className="pb-12 md:pb-16">
        <div className="container-wide max-w-3xl mx-auto">
          <div ref={paperRef} className="paper-entry" data-expanded={expandedPaper}>
            <button
              className="paper-header"
              onClick={togglePaper}
              aria-expanded={expandedPaper}
              aria-controls="paper-content"
            >
              <div className="paper-summary">
                <span className="paper-meta">{t.paperDate.toUpperCase()}</span>
                <h3>{t.paperTitle}</h3>
                <p className="paper-subtitle">{t.paperSubtitle}</p>
              </div>
              <span className={`toggle-icon ${expandedPaper ? 'rotate-45' : ''}`}>+</span>
            </button>

            <div
              id="paper-content"
              className="exp-content-wrapper"
              style={{
                display: 'grid',
                gridTemplateRows: expandedPaper ? '1fr' : '0px',
                overflow: 'hidden',
                transition: 'all 0.3s ease-out',
                opacity: expandedPaper ? 1 : 0,
                visibility: expandedPaper ? 'visible' : 'hidden',
                pointerEvents: expandedPaper ? 'auto' : 'none',
              } as React.CSSProperties}
            >
              <div className="exp-content-inner">
                <p className="paper-intro">
                  {t.paperIntro}
                </p>
                <a
                  href="/documents/Paper_Culture_as_Democratic_Infrastructure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="paper-link"
                >
                  {t.readPaper}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflexiones — clickable cards → modal con carrusel */}
      <section className="pb-12 md:pb-16">
        <div className="container-wide max-w-3xl mx-auto" ref={reflexionesRef}>
          <h2 className="text-2xl font-extrabold text-ink mb-6">{t.reflexionesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reflexionesData.map((r) => (
              <div
                key={r.id}
                onClick={() => openReflexion(r)}
                className="reflexion-card group cursor-pointer rounded-xl overflow-hidden bg-white border border-ink/5 transition-all duration-300 relative"
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

      {/* Modal carrusel de reflexión — controles fijos */}
      {selectedReflexion && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeReflexion}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            (e.currentTarget as any).touchStartX = touch.clientX;
          }}
          onTouchEnd={(e) => {
            const startX = (e.currentTarget as any).touchStartX;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 50) {
              if (diff > 0) nextSlide();
              else prevSlide();
            }
          }}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-lg w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeReflexion}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-white bg-black/40 hover:bg-black/60 rounded-full transition-colors"
              aria-label={t.close}
            >
              ✕
            </button>

            {/* Slide image */}
            <div className="relative aspect-square overflow-hidden bg-crudo-dark">
              <img
                src={getSlideUrl(selectedReflexion.id, currentSlide + 1)}
                alt={`${selectedReflexion.title} - slide ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-mono px-3 py-1 rounded-full backdrop-blur-sm">
                {currentSlide + 1} / {selectedReflexion.slideCount}
              </span>
            </div>

            {/* Fixed navigation controls */}
            <div className="px-6 py-4 border-t border-ink/5 flex items-center justify-between gap-4">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="reflexion-nav-button"
                aria-label="Slide anterior"
              >
                ←
              </button>

              {/* Indicator */}
              <span className="reflexion-indicator flex-1 text-center">
                {currentSlide + 1} / {selectedReflexion.slideCount}
              </span>

              <button
                onClick={nextSlide}
                disabled={currentSlide === selectedReflexion.slideCount - 1}
                className="reflexion-nav-button"
                aria-label="Siguiente slide"
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
