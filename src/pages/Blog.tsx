import { useState, useEffect } from 'react';
import type { Language } from '../../types';
import type { BlogPost } from '../../types';
import { supabase } from '../lib/supabase';

interface BlogProps { language: Language; }

const content = {
  es: {
    eyebrow: '(hoja aparte)',
    title: 'PAPERS & REFLEXIONES',
    paperDate: 'febrero 2026 · barcelona',
    paperIntro: 'Un ensayo breve sobre la cultura participativa como infraestructura democrática, a partir de cuatro procesos reales: Rassif, SMASH, MIRETAGE y Beyond Gender. Sostiene que la democracia no se debilita porque exista el conflicto, sino cuando no quedan espacios capaces de sostenerlo.',
    readPaper: 'Leer el paper (PDF, inglés) →',
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
    recent: 'Actualizaciones recientes',
  },
  en: {
    eyebrow: '(loose page)',
    title: 'PAPERS & REFLECTIONS',
    paperDate: 'february 2026 · barcelona',
    paperIntro: "A short essay on participatory culture as democratic infrastructure, drawing on four real processes: Rassif, SMASH, MIRETAGE and Beyond Gender. It argues that democracy doesn't weaken because conflict exists, but when no spaces remain capable of holding it.",
    readPaper: 'Read the paper (PDF) →',
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
    recent: 'Recent updates',
  },
  ca: {
    eyebrow: '(full a part)',
    title: 'PAPERS & REFLEXIONS',
    paperDate: 'febrer 2026 · barcelona',
    paperIntro: "Un assaig breu sobre la cultura participativa com a infraestructura democràtica, a partir de quatre processos reals: Rassif, SMASH, MIRETAGE i Beyond Gender. Sosté que la democràcia no s'afebleix perquè existeixi el conflicte, sinó quan no queden espais capaços de sostenir-lo.",
    readPaper: 'Llegir el paper (PDF, anglès) →',
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

  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <main className="min-h-screen pt-8 bg-crudo">
      <section className="section-padding pb-8">
        <div className="container-wide">
          <p className="eyebrow-mono mb-4">{t.eyebrow}</p>
          <h1 className="text-5xl mb-4 text-vino">{t.title}</h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="bg-crudo-alt rounded-lg p-8 md:p-10">
            <p className="eyebrow-mono mb-3">{t.paperDate}</p>
            <h2 className="text-3xl mb-2 text-rosa">CULTURE AS DEMOCRATIC INFRASTRUCTURE</h2>
            <p className="subtitle text-hueso mb-6">"Participatory Practice and Culture as a Public Right"</p>
            <p className="text-hueso/90 leading-relaxed mb-8">{t.paperIntro}</p>
            <a href="/documents/Paper_Culture_as_Democratic_Infrastructure.pdf" target="_blank" rel="noopener noreferrer" className="text-hueso font-medium hover:text-rosa">{t.readPaper}</a>
          </div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.reflexiones.map((title) => (
              <div key={title} className="bg-white/60 rounded-lg p-6 flex flex-col justify-between">
                <h3 className="text-lg font-medium text-ink mb-4 normal-case tracking-normal">{title}</h3>
                <span className="eyebrow-mono">5 {t.slides}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="section-padding pt-0">
          <div className="container-wide max-w-3xl mx-auto">
            <h2 className="text-3xl mb-8 text-vino">{t.recent}</h2>
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-crudo-alt p-8 rounded-lg">
                  <div className="flex items-start justify-between mb-4">
                    <span className="inline-block bg-rosa/20 text-ink px-3 py-1 rounded text-sm font-medium">{post.category}</span>
                    <time className="text-hueso/70 text-sm">{formatDate(post.created_at)}</time>
                  </div>
                  <h3 className="text-2xl mb-4 text-rosa">{language === 'es' ? post.title_es : post.title_en}</h3>
                  <p className="text-hueso/90">{language === 'es' ? post.content_es : post.content_en}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
