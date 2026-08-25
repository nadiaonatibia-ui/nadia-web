import type { Language } from '../../types';
import { PageHead } from '../components/PageHead';

interface CookiesProps {
  language: Language;
}

interface CookieItem {
  name: string;
  purpose: string;
  duration: string;
}

interface ThirdPartyItem {
  name: string;
  type: string;
  link: string;
}

const sections = {
  es: {
    title: 'Política de Cookies',
    lastUpdated: 'Última actualización: 13 de agosto de 2026',
    intro: {
      title: '¿Qué son las Cookies?',
      text: 'Las cookies son pequeños archivos de texto que se almacenan en tu navegador. Nadia-web usa cookies solo para funcionalidad técnica (no para publicidad ni rastreo invasivo).',
    },
    technical: {
      title: 'Cookies Técnicas (esenciales)',
      text: 'No requieren consentimiento',
      items: [
        { name: 'language-preference', purpose: 'Guardar idioma seleccionado (ES/EN/CA)', duration: '1 año' },
        { name: 'session', purpose: 'Mantener sesión activa (si usas admin)', duration: '24 horas' },
      ] as CookieItem[],
      storage: 'Almacenamiento: localStorage del navegador (sin servidor)',
    },
    analytics: {
      title: 'Google Analytics 4 (opcional)',
      text: 'Desactivado por defecto (requiere consentimiento)',
      items: [
        'Qué recoge: Páginas visitadas, tiempo en sitio, dispositivo, navegador, IP anonimizada',
        'Finalidad: Entender cómo los usuarios interactúan con la web',
        'Plazo: Máximo 26 meses según Google',
        'Consentimiento: Requerido (cookie banner o footer)',
      ],
    },
    social: {
      title: 'Redes Sociales (LinkedIn)',
      text: 'Estado: No activas (solo links)',
      items: [
        'Si Nadia integra botones de compartir, LinkedIn puede registrar que visitaste la página',
        'Requiere consentimiento explícito',
      ],
    },
    manage: {
      title: '¿Cómo Gestionar Cookies?',
      browser: 'Desde tu navegador:',
      browserItems: [
        'Chrome: Configuración > Privacidad > Cookies',
        'Firefox: Herramientas > Opciones > Privacidad',
        'Safari: Preferencias > Privacidad',
      ],
      options: 'Puedes:',
      optionsItems: [
        'Permitir todas las cookies',
        'Permitir solo cookies técnicas (recomendado)',
        'Rechazar todas (algunas funciones pueden no funcionar)',
      ],
    },
    consent: {
      title: 'Consentimiento',
      items: [
        'Cookies técnicas: No requieren consentimiento (necesarias)',
        'Google Analytics: Se solicita consentimiento (si está activo)',
        'Redes sociales: Se solicita consentimiento (si está integrado)',
      ],
    },
    third: {
      title: 'Terceros Involucrados',
      items: [
        { name: 'Supabase', type: 'Almacenamiento de datos', link: 'https://supabase.com/privacy' },
        { name: 'Vercel', type: 'Hosting', link: 'https://vercel.com/legal/privacy' },
        { name: 'Google Analytics 4', type: 'Analytics (opcional)', link: 'https://policies.google.com/privacy' },
        { name: 'Google Fonts', type: 'Tipografía', link: 'https://policies.google.com/privacy' },
      ] as ThirdPartyItem[],
    },
    rights: {
      title: 'Derechos del Usuario',
      items: [
        'Rechazar cookies no técnicas',
        'Cambiar tu decisión en cualquier momento',
        'Solicitar la eliminación de cookies guardadas',
        'Ejercer tus derechos RGPD sobre datos recogidos',
      ],
    },
    changes: {
      title: 'Cambios en esta Política',
      text: 'Nadia puede actualizar esta política sin previo aviso. Te recomendamos revisar periódicamente.',
    },
  },
  en: {
    title: 'Cookie Policy',
    lastUpdated: 'Last updated: August 13, 2026',
    intro: {
      title: 'What Are Cookies?',
      text: 'Cookies are small text files stored in your browser. Nadia-web uses cookies only for technical functionality (not for advertising or invasive tracking).',
    },
    technical: {
      title: 'Technical Cookies (essential)',
      text: 'No consent required',
      items: [
        { name: 'language-preference', purpose: 'Save selected language (ES/EN/CA)', duration: '1 year' },
        { name: 'session', purpose: 'Keep session active (if using admin)', duration: '24 hours' },
      ] as CookieItem[],
      storage: 'Storage: Browser localStorage (no server)',
    },
    analytics: {
      title: 'Google Analytics 4 (optional)',
      text: 'Disabled by default (requires consent)',
      items: [
        'What it collects: Pages visited, time on site, device, browser, anonymized IP',
        'Purpose: Understand how users interact with the website',
        'Duration: Maximum 26 months according to Google',
        'Consent: Required (cookie banner or footer)',
      ],
    },
    social: {
      title: 'Social Networks (LinkedIn)',
      text: 'Status: Not active (links only)',
      items: [
        'If Nadia integrates share buttons, LinkedIn may record that you visited the page',
        'Requires explicit consent',
      ],
    },
    manage: {
      title: 'How to Manage Cookies?',
      browser: 'From your browser:',
      browserItems: [
        'Chrome: Settings > Privacy > Cookies',
        'Firefox: Tools > Options > Privacy',
        'Safari: Preferences > Privacy',
      ],
      options: 'You can:',
      optionsItems: [
        'Allow all cookies',
        'Allow technical cookies only (recommended)',
        'Reject all (some features may not work)',
      ],
    },
    consent: {
      title: 'Consent',
      items: [
        'Technical cookies: No consent required (necessary)',
        'Google Analytics: Consent requested (if active)',
        'Social networks: Consent requested (if integrated)',
      ],
    },
    third: {
      title: 'Third Parties Involved',
      items: [
        { name: 'Supabase', type: 'Data storage', link: 'https://supabase.com/privacy' },
        { name: 'Vercel', type: 'Hosting', link: 'https://vercel.com/legal/privacy' },
        { name: 'Google Analytics 4', type: 'Analytics (optional)', link: 'https://policies.google.com/privacy' },
        { name: 'Google Fonts', type: 'Typography', link: 'https://policies.google.com/privacy' },
      ] as ThirdPartyItem[],
    },
    rights: {
      title: 'User Rights',
      items: [
        'Reject non-technical cookies',
        'Change your decision at any time',
        'Request deletion of stored cookies',
        'Exercise your GDPR rights on collected data',
      ],
    },
    changes: {
      title: 'Changes to This Policy',
      text: 'Nadia may update this policy without notice. We recommend reviewing it periodically.',
    },
  },
  ca: {
    title: 'Política de Galetes',
    lastUpdated: "Última actualització: 13 d'agost de 2026",
    intro: {
      title: 'Què són les Galetes?',
      text: "Les galetes són petits arxius de text que s'emmagatzemen al teu navegador. Nadia-web usa galetes només per a funcionalitat tècnica (no per a publicitat ni rastreig invasiu).",
    },
    technical: {
      title: 'Galetes Tècniques (essencials)',
      text: 'No requereixen consentiment',
      items: [
        { name: 'language-preference', purpose: 'Guardar idioma seleccionat (ES/EN/CA)', duration: '1 any' },
        { name: 'session', purpose: 'Mantenir sessió activa (si uses admin)', duration: '24 hores' },
      ] as CookieItem[],
      storage: 'Emmagatzematge: localStorage del navegador (sense servidor)',
    },
    analytics: {
      title: 'Google Analytics 4 (opcional)',
      text: 'Desactivat per defecte (requereix consentiment)',
      items: [
        'Què recull: Pàgines visitades, temps en lloc, dispositiu, navegador, IP anonimitzada',
        "Finalitat: Entendre com els usuaris interactuen amb la web",
        'Termini: Màxim 26 mesos segons Google',
        'Consentiment: Requerit (banner de galetes o footer)',
      ],
    },
    social: {
      title: 'Xarxes Socials (LinkedIn)',
      text: 'Estat: No actives (només enllaços)',
      items: [
        'Si Nadia integra botons de compartir, LinkedIn pot registrar que vas visitar la pàgina',
        'Requereix consentiment explícit',
      ],
    },
    manage: {
      title: 'Com Gestionar Galetes?',
      browser: 'Des del teu navegador:',
      browserItems: [
        'Chrome: Configuració > Privacitat > Galetes',
        'Firefox: Eines > Opcions > Privacitat',
        'Safari: Preferències > Privacitat',
      ],
      options: 'Pots:',
      optionsItems: [
        'Permetre totes les galetes',
        'Permetre només galetes tècniques (recomanat)',
        'Rebutjar totes (algunes funcions pot ser que no funcionin)',
      ],
    },
    consent: {
      title: 'Consentiment',
      items: [
        'Galetes tècniques: No requereixen consentiment (necessàries)',
        'Google Analytics: Es demana consentiment (si està actiu)',
        "Xarxes socials: Es demana consentiment (si està integrat)",
      ],
    },
    third: {
      title: 'Tercers Involucrats',
      items: [
        { name: 'Supabase', type: 'Emmagatzematge de dades', link: 'https://supabase.com/privacy' },
        { name: 'Vercel', type: 'Hosting', link: 'https://vercel.com/legal/privacy' },
        { name: 'Google Analytics 4', type: 'Analítica (opcional)', link: 'https://policies.google.com/privacy' },
        { name: 'Google Fonts', type: 'Tipografia', link: 'https://policies.google.com/privacy' },
      ] as ThirdPartyItem[],
    },
    rights: {
      title: "Drets de l'Usuari",
      items: [
        'Rebutjar galetes no tècniques',
        'Canviar la teva decisió en qualsevol moment',
        "Sol·licitar l'eliminació de galetes guardades",
        'Exercir els teus drets RGPD sobre dades recollides',
      ],
    },
    changes: {
      title: 'Canvis en aquesta Política',
      text: 'Nadia pot actualitzar aquesta política sense previ avís. Et recomanem revisar-la periòdicament.',
    },
  },
};

export const Cookies = ({ language }: CookiesProps) => {
  const s = sections[language];

  return (
    <>
      <PageHead page="cookies" language={language} />
      <main className="min-h-screen bg-crudo">
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{s.title}</h1>
          <p className="text-rojo text-sm">{s.lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto space-y-12">
          {/* Intro */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.intro.title}</h2>
            <p className="text-gray-warm">{s.intro.text}</p>
          </div>

          {/* Technical */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-ink">{s.technical.title}</h2>
            <p className="text-sm font-semibold mb-4 text-gray-warm">{s.technical.text}</p>
            <div className="mb-4 border-l-4 border-vino pl-4 space-y-3">
              {s.technical.items.map((item, i) => (
                <div key={i}>
                  <p className="font-semibold text-sm text-ink">{item.name}</p>
                  <p className="text-sm text-gray-warm">{item.purpose}</p>
                  <p className="text-xs text-gray-warm/70">{item.duration}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-warm">{s.technical.storage}</p>
          </div>

          {/* Analytics */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-ink">{s.analytics.title}</h2>
            <p className="text-sm font-semibold mb-4 text-gray-warm">{s.analytics.text}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.analytics.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="text-2xl font-bold mb-2 text-ink">{s.social.title}</h2>
            <p className="text-sm font-semibold mb-3 text-gray-warm">{s.social.text}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.social.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Manage */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.manage.title}</h2>
            <h3 className="font-semibold mb-2 text-ink">{s.manage.browser}</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-4">
              {s.manage.browserItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <h3 className="font-semibold mb-2 text-ink">{s.manage.options}</h3>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.manage.optionsItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Consent */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.consent.title}</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.consent.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Third Parties */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.third.title}</h2>
            <div className="space-y-3">
              {s.third.items.map((item, i) => (
                <div key={i} className="border-b border-ink/5 pb-3">
                  <p className="font-semibold text-sm text-ink">{item.name}</p>
                  <p className="text-sm text-gray-warm">{item.type}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-vino hover:text-vino-2 underline">
                    {item.link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.rights.title}</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.rights.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">
              <a href="mailto:nadiaonatibia@gmail.com" className="text-vino hover:text-vino-2 underline">nadiaonatibia@gmail.com</a>
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.changes.title}</h2>
            <p className="text-gray-warm">{s.changes.text}</p>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};
