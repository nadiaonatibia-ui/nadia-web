import { useState } from 'react';
import type { Language } from '../../types';
import { supabase } from '../lib/supabase';

interface ContactProps {
  language: Language;
}

export const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = {
    es: {
      eyebrow: 'TELÓN FINAL',
      heading: 'Hablemos',
      intro: 'Disponible para proyectos de gestión cultural, facilitación de procesos participativos y producción de eventos, en Barcelona o en remoto.',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar',
      sending: 'Enviando...',
      success: 'Mensaje enviado correctamente',
      successMessage: 'Te contactaré pronto.',
      errorMessage: 'Error al enviar el mensaje. Intenta de nuevo.',
      namePlaceholder: 'Tu nombre',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Tu mensaje...',
      consent: 'He leído y acepto la',
      consentLink: 'Política de Privacidad',
    },
    en: {
      eyebrow: 'FINAL CURTAIN',
      heading: "Let's talk",
      intro: 'Available for cultural management projects, facilitation of participatory processes and event production, in Barcelona or remotely.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully',
      successMessage: "I'll get back to you soon.",
      errorMessage: 'Error sending message. Please try again.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Your message...',
      consent: 'I have read and accept the',
      consentLink: 'Privacy Policy',
    },
    ca: {
      eyebrow: 'TELÓ FINAL',
      heading: 'Parlem',
      intro: "Disponible per a projectes de gestió cultural, facilitació de processos participatius i producció d'esdeveniments, a Barcelona o en remot.",
      name: 'Nom',
      email: 'Email',
      message: 'Missatge',
      send: 'Enviar',
      sending: 'Enviant...',
      success: 'Missatge enviat correctament',
      successMessage: "Em posaré en contacte aviat.",
      errorMessage: 'Error en enviar el missatge. Intenta de nou.',
      namePlaceholder: 'El teu nom',
      emailPlaceholder: 'el_teu@email.com',
      messagePlaceholder: 'El teu missatge...',
      consent: 'He llegit i accepto la',
      consentLink: 'Política de Privacitat',
    },
  };
  const t = labels[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.from('contact_messages').insert([formData]);
      if (error) throw error;
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setConsent(false);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(t.errorMessage);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-crudo">
      {/* Header section */}
      <section className="py-20 bg-crudo-dark text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <p className="eyebrow-mono mb-4">{t.eyebrow}</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8">{t.heading}</h1>
          <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">{t.intro}</p>
          <a
            href="mailto:nadiaonatibia@gmail.com"
            className="block text-2xl md:text-3xl font-semibold text-coral hover:text-white transition-colors mb-4"
          >
            nadiaonatibia@gmail.com
          </a>
          <div className="flex justify-center gap-3 text-white/50">
            <a
              href="https://linkedin.com/in/nadiaoñatibia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white font-medium transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <span>Poblenou, Barcelona</span>
          </div>
        </div>
      </section>

      {/* Form section */}
      <section className="section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="bg-white rounded-xl border border-ink/5 shadow-sm p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl font-bold text-ink mb-4">{t.success}</h2>
                <p className="text-gray-warm">{t.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-lg text-sm">{error}</div>
                )}
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.namePlaceholder}
                    required
                    className="w-full px-4 py-3 border border-ink/10 rounded-lg focus:outline-none focus:border-vino bg-crudo/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 border border-ink/10 rounded-lg focus:outline-none focus:border-vino bg-crudo/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-ink/10 rounded-lg focus:outline-none focus:border-vino resize-none bg-crudo/50"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 rounded border-ink/20 text-vino focus:ring-vino"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-warm">
                    {t.consent}{' '}
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-vino hover:text-vino-2 underline">
                      {t.consentLink}
                    </a>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={loading || !consent}
                  className="w-full btn bg-vino text-white hover:bg-vino-2 disabled:opacity-50 font-semibold"
                >
                  {loading ? t.sending : t.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
