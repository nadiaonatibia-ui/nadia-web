import type { Language } from '../../types';

interface LegalProps {
  language: Language;
}

const sections = {
  es: {
    title: 'Aviso Legal',
    lastUpdated: 'Última actualización: 13 de agosto de 2026',
    identification: {
      title: 'Identificación',
      items: [
        'Nadia Oñatibia',
        'NIF/NIE: Por solicitar a nadiaonatibia@gmail.com',
        'Correo de contacto: nadiaonatibia@gmail.com',
        'Teléfono: +34 (disponible en LinkedIn)',
        'Ubicación: Poblenou, Barcelona, España',
        'Actividad: Portfolio profesional + consultoría en gestión cultural y producción de eventos',
      ],
    },
    website: {
      title: 'Datos del Sitio Web',
      lines: [
        'Dominio: nadia-web-theta.vercel.app (temporal)',
        'Hosting: Vercel (USA/EU)',
        'Datos del servidor: https://vercel.com',
      ],
    },
    ip: {
      title: 'Propiedad Intelectual',
      ownership: 'Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño, estructura) son propiedad de Nadia Oñatibia, a menos que se indique explícitamente otra fuente.',
      prohibited: 'Está prohibido:',
      prohibitedItems: [
        'Reproducir, modificar o distribuir contenido sin autorización',
        'Usar contenido para fines comerciales sin consentimiento',
        'Registrar como propio algún material del sitio',
      ],
      exceptions: 'Excepciones: Logos de proyectos europeos (RASSIF, SMASH, MIRETAGE, etc.) pertenecen a sus respectivas organizaciones y se usan solo con propósito informativo.',
    },
    liability: {
      title: 'Responsabilidad',
      intro: 'Este sitio web se ofrece "tal cual" sin garantías. Nadia Oñatibia no se responsabiliza por:',
      items: [
        'Interrupciones temporales de servicio',
        'Errores, omisiones o inexactitudes en el contenido',
        'Daños derivados del uso de la web',
        'Enlaces a terceros o contenido externo',
      ],
    },
    cookies: {
      title: 'Cookies y Tecnologías de Rastreo',
      intro: 'Este sitio usa:',
      items: [
        'Cookies técnicas: idioma del navegador (localStorage)',
        'Google Analytics 4 (opcional): para analítica anónima',
      ],
      more: 'Para más detalles, ver Política de Cookies.',
    },
    contact: {
      title: 'Formulario de Contacto',
      intro: 'Al enviar datos a través del formulario de contacto:',
      items: [
        'Aceptas que tus datos se traten según la Política de Privacidad',
        'Te comprometes a proporcionar información veraz',
        'Autorizas a Nadia a contactarte para responder tu consulta',
      ],
    },
    links: {
      title: 'Links a Terceros',
      intro: 'Este sitio contiene enlaces a:',
      items: [
        'Sitios web de proyectos europeos (RASSIF, SMASH, MIRETAGE, EDI GO, etc.)',
        'Redes profesionales (LinkedIn, GitHub)',
        'Bases de datos de empleo',
      ],
      disclaimer: 'Nadia no controla estos sitios ni es responsable de su contenido, privacidad o disponibilidad.',
    },
    modifications: {
      title: 'Modificaciones',
      intro: 'Nadia se reserva el derecho de:',
      items: [
        'Modificar el contenido sin previo aviso',
        'Cambiar funcionalidades',
        'Suspender temporalmente el acceso por mantenimiento',
      ],
    },
    jurisdiction: {
      title: 'Jurisdicción y Ley Aplicable',
      intro: 'Este sitio se rige por las leyes de España.',
      regulations: 'Regulaciones aplicables:',
      regulationItems: [
        'Ley Orgánica 3/2018 (LOPDGDD)',
        'Reglamento General de Protección de Datos (RGPD)',
        'Ley 34/1988 de Publicidad',
        'LSSI-CE (Ley de Servicios de la Sociedad de la Información)',
      ],
    },
    contactSection: {
      title: 'Contacto',
      intro: 'Para consultas legales o reclamaciones:',
      email: 'Correo: nadiaonatibia@gmail.com',
      subject: 'Asunto: "Aviso Legal - [tu consulta]"',
    },
  },
  en: {
    title: 'Legal Notice',
    lastUpdated: 'Last updated: August 13, 2026',
    identification: {
      title: 'Identification',
      items: [
        'Nadia Oñatibia',
        'Tax ID/NIE: Available upon request at nadiaonatibia@gmail.com',
        'Contact email: nadiaonatibia@gmail.com',
        'Phone: +34 (available on LinkedIn)',
        'Location: Poblenou, Barcelona, Spain',
        'Activity: Professional portfolio + consulting in cultural management and event production',
      ],
    },
    website: {
      title: 'Website Data',
      lines: [
        'Domain: nadia-web-theta.vercel.app (temporary)',
        'Hosting: Vercel (USA/EU)',
        'Server information: https://vercel.com',
      ],
    },
    ip: {
      title: 'Intellectual Property',
      ownership: 'All content on this website (texts, images, logos, design, structure) is owned by Nadia Oñatibia, unless explicitly stated otherwise.',
      prohibited: 'Prohibited:',
      prohibitedItems: [
        'Reproduce, modify, or distribute content without authorization',
        'Use content for commercial purposes without consent',
        'Register material as your own',
      ],
      exceptions: 'Exceptions: Logos of European projects (RASSIF, SMASH, MIRETAGE, etc.) belong to their respective organizations and are used for informational purposes only.',
    },
    liability: {
      title: 'Liability',
      intro: 'This website is provided "as is" without warranties. Nadia Oñatibia is not responsible for:',
      items: [
        'Temporary service interruptions',
        'Errors, omissions, or inaccuracies in content',
        'Damage resulting from website use',
        'Third-party links or external content',
      ],
    },
    cookies: {
      title: 'Cookies and Tracking Technologies',
      intro: 'This site uses:',
      items: [
        'Technical cookies: browser language (localStorage)',
        'Google Analytics 4 (optional): for anonymous analytics',
      ],
      more: 'For more details, see Cookie Policy.',
    },
    contact: {
      title: 'Contact Form',
      intro: 'By submitting data through the contact form:',
      items: [
        'You agree that your data is processed according to the Privacy Policy',
        'You commit to providing truthful information',
        'You authorize Nadia to contact you to respond to your inquiry',
      ],
    },
    links: {
      title: 'Third-Party Links',
      intro: 'This site contains links to:',
      items: [
        'European project websites (RASSIF, SMASH, MIRETAGE, EDI GO, etc.)',
        'Professional networks (LinkedIn, GitHub)',
        'Job databases',
      ],
      disclaimer: 'Nadia does not control these sites and is not responsible for their content, privacy, or availability.',
    },
    modifications: {
      title: 'Modifications',
      intro: 'Nadia reserves the right to:',
      items: [
        'Modify content without notice',
        'Change functionalities',
        'Suspend access temporarily for maintenance',
      ],
    },
    jurisdiction: {
      title: 'Jurisdiction and Applicable Law',
      intro: 'This website is governed by the laws of Spain.',
      regulations: 'Applicable regulations:',
      regulationItems: [
        'Organic Law 3/2018 (LOPDGDD)',
        'General Data Protection Regulation (GDPR)',
        'Law 34/1988 on Advertising',
        'LSSI-CE (Information Society Services Law)',
      ],
    },
    contactSection: {
      title: 'Contact',
      intro: 'For legal inquiries or claims:',
      email: 'Email: nadiaonatibia@gmail.com',
      subject: 'Subject: "Legal Notice - [your inquiry]"',
    },
  },
  ca: {
    title: 'Avís Legal',
    lastUpdated: "Última actualització: 13 d'agost de 2026",
    identification: {
      title: 'Identificació',
      items: [
        'Nadia Oñatibia',
        'NIF/NIE: Disponible sota demanda a nadiaonatibia@gmail.com',
        'Correu de contacte: nadiaonatibia@gmail.com',
        'Telèfon: +34 (disponible a LinkedIn)',
        'Ubicació: Poblenou, Barcelona, Espanya',
        "Activitat: Portafoli professional + consultoria en gestió cultural i producció d'events",
      ],
    },
    website: {
      title: 'Dades del Lloc Web',
      lines: [
        'Domini: nadia-web-theta.vercel.app (temporal)',
        'Hosting: Vercel (USA/EU)',
        'Informació del servidor: https://vercel.com',
      ],
    },
    ip: {
      title: 'Propietat Intel·lectual',
      ownership: "Tot el contingut d'aquest lloc web (textos, imatges, logotips, disseny, estructura) és propietat de Nadia Oñatibia, tret que s'indiqui explícitament una altra font.",
      prohibited: 'Està prohibit:',
      prohibitedItems: [
        'Reproduir, modificar o distribuir contingut sense autorització',
        'Usar contingut per a fins comercials sense consentiment',
        'Registrar com a propi algun material del lloc',
      ],
      exceptions: "Excepcions: Logotips de projectes europeus (RASSIF, SMASH, MIRETAGE, etc.) pertanyen a les seves respectives organitzacions i s'usen només amb propòsit informatiu.",
    },
    liability: {
      title: 'Responsabilitat',
      intro: "Aquest lloc web s'ofereix \"tal com està\" sense garanties. Nadia Oñatibia no es responsabilitza per:",
      items: [
        'Interrupcions temporals del servei',
        'Errors, omissions o inexactituds en el contingut',
        "Danys derivats de l'ús de la web",
        'Enllaços a tercers o contingut extern',
      ],
    },
    cookies: {
      title: 'Galetes i Tecnologies de Rastreig',
      intro: 'Aquest lloc usa:',
      items: [
        'Galetes tècniques: idioma del navegador (localStorage)',
        'Google Analytics 4 (opcional): per a analítica anònima',
      ],
      more: 'Per a més detalls, veure Política de Galetes.',
    },
    contact: {
      title: 'Formulari de Contacte',
      intro: 'En enviar dades a través del formulari de contacte:',
      items: [
        'Acceptes que les teves dades es tractin segons la Política de Privacitat',
        'Et compromets a proporcionar informació veraç',
        'Autoritzes Nadia a contactar-te per respondre la teva consulta',
      ],
    },
    links: {
      title: 'Enllaços a Tercers',
      intro: 'Aquest lloc conté enllaços a:',
      items: [
        'Llocs web de projectes europeus (RASSIF, SMASH, MIRETAGE, EDI GO, etc.)',
        'Xarxes professionals (LinkedIn, GitHub)',
        'Bases de dades de feina',
      ],
      disclaimer: 'Nadia no controla aquests llocs ni és responsable del seu contingut, privacitat o disponibilitat.',
    },
    modifications: {
      title: 'Modificacions',
      intro: 'Nadia es reserva el dret de:',
      items: [
        'Modificar el contingut sense previ avís',
        'Canviar funcionalitats',
        "Suspendre temporalment l'accés per manteniment",
      ],
    },
    jurisdiction: {
      title: 'Jurisdicció i Llei Aplicable',
      intro: "Aquest lloc es regeix per les lleis d'Espanya.",
      regulations: 'Regulacions aplicables:',
      regulationItems: [
        'Llei Orgànica 3/2018 (LOPDGDD)',
        'Reglament General de Protecció de Dades (RGPD)',
        'Llei 34/1988 de Publicitat',
        "LSSI-CE (Llei de Serveis de la Societat de la Informació)",
      ],
    },
    contactSection: {
      title: 'Contacte',
      intro: 'Per a consultes legals o reclamacions:',
      email: 'Correu: nadiaonatibia@gmail.com',
      subject: 'Assumpte: "Avís Legal - [la teva consulta]"',
    },
  },
};

export const Legal = ({ language }: LegalProps) => {
  const s = sections[language];

  return (
    <main className="min-h-screen bg-crudo">
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">{s.title}</h1>
          <p className="text-coral text-sm">{s.lastUpdated}</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-3xl mx-auto space-y-12">
          {/* Identification */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.identification.title}</h2>
            <p className="mb-2 font-semibold">{s.identification.items[0]}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.identification.items.slice(1).map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Website */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.website.title}</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.website.lines.map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          </div>

          {/* IP */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.ip.title}</h2>
            <p className="mb-4 text-gray-warm">{s.ip.ownership}</p>
            <p className="mb-2 font-semibold">{s.ip.prohibited}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.ip.prohibitedItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">{s.ip.exceptions}</p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.liability.title}</h2>
            <p className="mb-3">{s.liability.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.liability.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.cookies.title}</h2>
            <p className="mb-2">{s.cookies.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.cookies.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">
              <a href="/cookies" className="text-vino hover:text-vino-2 underline">{s.cookies.more}</a>
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.contact.title}</h2>
            <p className="mb-3">{s.contact.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.contact.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.links.title}</h2>
            <p className="mb-2">{s.links.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm mb-3">
              {s.links.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="text-sm text-gray-warm">{s.links.disclaimer}</p>
          </div>

          {/* Modifications */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.modifications.title}</h2>
            <p className="mb-2">{s.modifications.intro}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.modifications.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Jurisdiction */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.jurisdiction.title}</h2>
            <p className="mb-2">{s.jurisdiction.intro}</p>
            <p className="mb-2 font-semibold">{s.jurisdiction.regulations}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-warm">
              {s.jurisdiction.regulationItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-ink">{s.contactSection.title}</h2>
            <p className="mb-2">{s.contactSection.intro}</p>
            <p className="mb-1">
              <a href="mailto:nadiaonatibia@gmail.com" className="text-vino hover:text-vino-2 underline">nadiaonatibia@gmail.com</a>
            </p>
            <p className="text-sm text-gray-warm">{s.contactSection.subject}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
