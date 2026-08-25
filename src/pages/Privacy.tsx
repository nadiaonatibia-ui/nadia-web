import type { Language } from '../../types';

interface PrivacyProps {
  language: Language;
}

const sections = {
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: 13 de agosto de 2026',
    controller: {
      title: 'Responsable del Tratamiento',
      items: [
        'Nadia Oñatibia',
        'Correo: nadiaonatibia@gmail.com',
        'Ubicación: Poblenou, Barcelona, España',
        'Actividad: Portfolio profesional y consultoría en gestión cultural',
      ],
    },
    dataCollection: {
      title: '¿Qué Datos Recogemos y Cómo?',
      contact: {
        title: 'a) Formulario de Contacto',
        lines: [
          'Datos: Nombre, email, mensaje',
          'Finalidad: Responder a tu consulta',
          'Base legal: Consentimiento (casilla en el formulario)',
          'Plazo de conservación: 30 días naturales',
        ],
      },
      analytics: {
        title: 'b) Google Analytics (si está activo)',
        lines: [
          'Datos: Dirección IP, tipo de navegador, página visitada, hora de visita',
          'Finalidad: Mejorar la experiencia de usuario',
          'Base legal: Interés legítimo',
          'Plazo: Según configuración de Google (máximo 26 meses)',
        ],
      },
      language: {
        title: 'c) Preferencia de Idioma',
        lines: [
          'Datos: Idioma seleccionado (ES/EN/CA)',
          'Almacenamiento: localStorage del navegador (cookie técnica)',
          'Finalidad: Recordar tu idioma preferido',
          'Base legal: Funcionalidad técnica (no requiere consentimiento)',
        ],
      },
    },
    storage: {
      title: '¿Dónde Se Guardan Tus Datos?',
      items: [
        'Mensajes de contacto: Base de datos PostgreSQL en Supabase (servidores en UE)',
        'Analytics: Servidores de Google (si aplica Google Analytics 4)',
        'Hosting: Vercel (servidores en UE)',
      ],
      note: 'Todos los proveedores tienen cláusulas de protección de datos (DPA) vigentes.',
    },
    sharing: {
      title: '¿Con Quién Compartimos Tus Datos?',
      intro: 'No compartimos tus datos con terceros excepto:',
      items: [
        'Supabase: encargado del tratamiento (almacenamiento)',
        'Vercel: encargado del tratamiento (hosting)',
        'Google: si usas Google Analytics 4 (IP anonimizada)',
      ],
      note: 'Solo Nadia puede acceder a los mensajes de contacto recibidos.',
    },
    rights: {
      title: 'Derechos del Usuario',
      intro: 'Tienes derecho a:',
      items: [
        'Acceso: Solicitar qué datos tenemos de ti',
        'Rectificación: Pedir que corrijamos datos inexactos',
        'Olvido: Solicitar la eliminación de tus datos',
        'Oposición: Rechazar el uso de tus datos',
        'Portabilidad: Recibir tus datos en formato estructurado',
      ],
      deadline: 'Plazo de respuesta: 30 días desde la solicitud',
    },
    security: {
      title: 'Seguridad',
      intro: 'Implementamos medidas técnicas y organizativas para proteger tus datos:',
      items: [
        'Conexiones HTTPS encriptadas',
        'Acceso restringido a Supabase (solo Nadia)',
        'Backups automáticos',
      ],
    },
    changes: {
      title: 'Cambios en esta Política',
      text: 'Esta política puede actualizarse. Te notificaremos mediante email si hay cambios significativos.',
    },
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: August 13, 2026',
    controller: {
      title: 'Data Controller',
      items: [
        'Nadia Oñatibia',
        'Email: nadiaonatibia@gmail.com',
        'Location: Poblenou, Barcelona, Spain',
        'Activity: Professional portfolio and cultural management consulting',
      ],
    },
    dataCollection: {
      title: 'What Data Do We Collect and How?',
      contact: {
        title: 'a) Contact Form',
        lines: [
          'Data: Name, email, message',
          'Purpose: Respond to your inquiry',
          'Legal basis: Consent (checkbox in form)',
          'Retention period: 30 calendar days',
        ],
      },
      analytics: {
        title: 'b) Google Analytics (if active)',
        lines: [
          'Data: IP address, browser type, page visited, visit time',
          'Purpose: Improve user experience',
          'Legal basis: Legitimate interest',
          'Retention: According to Google settings (max 26 months)',
        ],
      },
      language: {
        title: 'c) Language Preference',
        lines: [
          'Data: Selected language (ES/EN/CA)',
          'Storage: Browser localStorage (technical cookie)',
          'Purpose: Remember your language preference',
          'Legal basis: Technical functionality (no consent required)',
        ],
      },
    },
    storage: {
      title: 'Where Are Your Data Stored?',
      items: [
        'Contact messages: PostgreSQL database in Supabase (EU servers)',
        'Analytics: Google servers (if Google Analytics 4 applies)',
        'Hosting: Vercel (EU servers)',
      ],
      note: 'All providers have current data protection agreements (DPA).',
    },
    sharing: {
      title: 'Who Do We Share Your Data With?',
      intro: 'We do not share your data with third parties except:',
      items: [
        'Supabase: data processor (storage)',
        'Vercel: data processor (hosting)',
        'Google: if you use Google Analytics 4 (anonymized IP)',
      ],
      note: 'Only Nadia can access received contact messages.',
    },
    rights: {
      title: 'User Rights',
      intro: 'You have the right to:',
      items: [
        'Access: Request what data we hold about you',
        'Rectification: Ask us to correct inaccurate data',
        'Erasure: Request deletion of your data',
        'Objection: Reject data usage',
        'Portability: Receive your data in structured format',
      ],
      deadline: 'Response deadline: 30 days from request',
    },
    security: {
      title: 'Security',
      intro: 'We implement technical and organizational measures to protect your data:',
      items: [
        'HTTPS encrypted connections',
        'Restricted access to Supabase (Nadia only)',
        'Automatic backups',
      ],
    },
    changes: {
      title: 'Changes to This Policy',
      text: "This policy may be updated. We'll notify you by email of significant changes.",
    },
  },
  ca: {
    title: 'Política de Privacitat',
    lastUpdated: "Última actualització: 13 d'agost de 2026",
    controller: {
      title: 'Responsable del Tractament',
      items: [
        'Nadia Oñatibia',
        'Correu: nadiaonatibia@gmail.com',
        'Ubicació: Poblenou, Barcelona, Espanya',
        'Activitat: Portafoli professional i consultoria en gestió cultural',
      ],
    },
    dataCollection: {
      title: 'Quines Dades Recollim i Com?',
      contact: {
        title: 'a) Formulari de Contacte',
        lines: [
          'Dades: Nom, correu electrònic, missatge',
          'Finalitat: Respondre a la teva consulta',
          'Base legal: Consentiment (casella al formulari)',
          'Termini de conservació: 30 dies naturals',
        ],
      },
      analytics: {
        title: 'b) Google Analytics (si està actiu)',
        lines: [
          'Dades: Adreça IP, tipus de navegador, pàgina visitada, hora de visita',
          'Finalitat: Millorar l\'experiència de l\'usuari',
          'Base legal: Interès legítim',
          'Termini: Segons la configuració de Google (màxim 26 mesos)',
        ],
      },
      language: {
        title: "c) Preferència d'Idioma",
        lines: [
          'Dades: Idioma seleccionat (ES/EN/CA)',
          'Emmagatzematge: localStorage del navegador (galeta tècnica)',
          "Finalitat: Recordar la teva preferència d'idioma",
          'Base legal: Funcionalitat tècnica (no requereix consentiment)',
        ],
      },
    },
    storage: {
      title: 'On Guardem les Teves Dades?',
      items: [
        'Missatges de contacte: Base de dades PostgreSQL a Supabase (servidors a UE)',
        "Analytics: Servidors de Google (si s'aplica Google Analytics 4)",
        'Hosting: Vercel (servidors a UE)',
      ],
      note: 'Tots els proveïdors tenen acords de protecció de dades (DPA) vigents.',
    },
    sharing: {
      title: 'Amb Qui Compartim les Teves Dades?',
      intro: 'No compartim les teves dades amb tercers excepte:',
      items: [
        'Supabase: encarregat del tractament (emmagatzematge)',
        'Vercel: encarregat del tractament (hosting)',
        'Google: si utilitzes Google Analytics 4 (IP anonimitzada)',
      ],
      note: 'Només Nadia pot accedir als missatges de contacte rebuts.',
    },
    rights: {
      title: "Drets de l'Usuari",
      intro: 'Tens dret a:',
      items: [
        'Accés: Sol·licitar quines dades tenim teves',
        'Rectificació: Demanar que corregim dades inexactes',
        "Oblit: Sol·licitar l'eliminació de les teves dades",
        "Oposició: Rebutjar l'ús de les teves dades",
        'Portabilitat: Rebre les teves dades en format estructurat',
      ],
      deadline: 'Termini de resposta: 30 dies des de la sol·licitud',
    },
    security: {
      title: 'Seguretat',
      intro: 'Implementem mesures tècniques i organitzatives per protegir les teves dades:',
      items: [
        'Connexions HTTPS encriptades',
        'Accés restringit a Supabase (només Nadia)',
        'Còpies de seguretat automàtiques',
      ],
    },
    changes: {
      title: 'Canvis en aquesta Política',
      text: "Aquesta política pot actualitzar-se. Te'n notificarem per correu electrònic si hi ha canvis significatius.",
    },
  },
};

export const Privacy = ({ language }: PrivacyProps) => {
  const s = sections[language];

  return (
    <main className="min-h-screen bg-crudo">
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{s.title}</h1>
          <p className="text-rojo text-sm">{s.lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto space-y-12">
          {/* Controller */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.controller.title}</h2>
            <p className="mb-2 font-semibold">{s.controller.items[0]}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.controller.items.slice(1).map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Data Collection */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-ink">{s.dataCollection.title}</h2>
            {[s.dataCollection.contact, s.dataCollection.analytics, s.dataCollection.language].map((sub, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-ink">{sub.title}</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-warm">
                  {sub.lines.map((line, j) => <li key={j}>{line}</li>)}
                </ul>
              </div>
            ))}
          </div>

          {/* Storage */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.storage.title}</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.storage.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">{s.storage.note}</p>
          </div>

          {/* Sharing */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.sharing.title}</h2>
            <p className="mb-3 font-semibold">{s.sharing.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.sharing.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">{s.sharing.note}</p>
          </div>

          {/* Rights */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.rights.title}</h2>
            <p className="mb-3">{s.rights.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.rights.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm font-semibold mb-1">{s.rights.deadline}</p>
            <p className="text-sm text-gray-warm">
              <a href="mailto:nadiaonatibia@gmail.com" className="text-vino hover:text-vino-2 underline">nadiaonatibia@gmail.com</a>
            </p>
          </div>

          {/* Security */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.security.title}</h2>
            <p className="mb-3">{s.security.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.security.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.changes.title}</h2>
            <p className="text-gray-warm">{s.changes.text}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
