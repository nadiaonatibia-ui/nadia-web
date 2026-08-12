import { useState, useEffect } from 'react';
import type { Language } from '../../types';
import type { BlogPost } from '../../types';
import { supabase } from '../lib/supabase';

interface BlogProps {
  language: Language;
}

const content = {
  es: {
    eyebrow: 'HOJA APARTE',
    title: 'Papers y reflexiones',
    paperDate: 'Febrero 2026 · Barcelona',
    paperTitle: 'CULTURE AS DEMOCRATIC INFRASTRUCTURE',
    paperSubtitle: '"Participatory Practice and Culture as a Public Right"',
    paperIntro: 'Un ensayo breve sobre la cultura participativa como infraestructura democrática, a partir de cuatro procesos reales: Rassif, SMASH, MIRETAGE y Beyond Gender. Sostiene que la democracia no se debilita porque exista el conflicto, sino cuando no quedan espacios capaces de sostenerlo.',
    readPaper: 'Leer el paper (PDF, inglés) →',
    reflexionesTitle: 'Reflexiones',
    reflexiones: [
      '¿Sabías que un cuadro puede ser una herramienta de mediación cultural?',
      'Eventos culturales sostenibles',
      'Estrategias para proyectos de mediación cultural',
      'El futuro de la mediación cultural',
      'Creatividad en campañas culturales',
      'Reflexión sobre el consumo cultural',
      '¿Por qué el arte urbano es la voz de las ciudades?',
      '5 consejos para fomentar la innovación en proyectos culturales',
    ],
    slides: 'slides',
    comingSoon: 'Próximamente',
    recent: 'Actualizaciones recientes',
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
    reflexiones: [
      'Did you know a painting can be a tool for cultural mediation?',
      'Sustainable cultural events',
      'Strategies for cultural mediation projects',
      'The future of cultural mediation',
      'Creativity in cultural campaigns',
      'A reflection on cultural consumption',
      'Why is urban art the voice of cities?',
      '5 tips to foster innovation in cultural projects',
    ],
    slides: 'slides',
    comingSoon: 'Coming soon',
    recent: 'Recent updates',
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
    reflexiones: [
      'Sabies que un quadre pot ser una eina de mediació cultural?',
      'Esdeveniments culturals sostenibles',
      'Estratègies per a projectes de mediació cultural',
      'El futur de la mediació cultural',
      'Creativitat en campanyes culturals',
      'Reflexió sobre el consum cultural',
      "Per què l'art urbà és la veu de les ciutats?",
      '5 consells per fomentar la innovació en projectes culturals',
    ],
    slides: 'diapositives',
    comingSoon: 'Properament',
    recent: 'Actualitzacions recents',
  },
};

export const Blog = ({ language }: BlogProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const t = content[language];

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

      {/* Reflexiones */}
      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-ink mb-6">{t.reflexionesTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.reflexiones.map((title) => (
              <div
                key={title}
                className="bg-white rounded-xl border border-ink/5 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
              >
                <h3 className="text-base font-medium text-ink mb-4 leading-snug">{title}</h3>
                <span className="text-xs font-mono text-coral uppercase tracking-wider">
                  5 {t.slides} · {t.comingSoon}
                </span>
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
    </main>
  );
};
