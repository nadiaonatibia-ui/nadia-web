import { useState } from 'react';
import type { Language } from '../../types';
import { supabase } from '../lib/supabase';

interface ContactProps { language: Language; }

export const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const labels = {
    es: { eyebrow: '(telón final)', heading: 'Hablemos', intro: 'Disponible para proyectos de gestión cultural, facilitación de procesos participativos y producción de eventos, en Barcelona o en remoto.', name: 'Nombre', email: 'Email', message: 'Mensaje', send: 'Enviar', sending: 'Enviando...', success: 'Mensaje enviado correctamente', successMessage: 'Te contactaré pronto.', errorMessage: 'Error al enviar el mensaje. Intenta de nuevo.', namePlaceholder: 'Tu nombre', emailPlaceholder: 'tu@email.com', messagePlaceholder: 'Tu mensaje...' },
    en: { eyebrow: '(final curtain)', heading: "Let's talk", intro: 'Available for cultural management projects, facilitation of participatory processes and event production, in Barcelona or remotely.', name: 'Name', email: 'Email', message: 'Message', send: 'Send', sending: 'Sending...', success: 'Message sent successfully', successMessage: 'I\'ll get back to you soon.', errorMessage: 'Error sending message. Please try again.', namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com', messagePlaceholder: 'Your message...' },
    ca: { eyebrow: '(teló final)', heading: 'Parlem', intro: 'Disponible per a projectes de gestió cultural, facilitació de processos participatius i producció d\'esdeveniments, a Barcelona o en remot.', name: 'Nom', email: 'Email', message: 'Missatge', send: 'Enviar', sending: 'Enviant...', success: 'Missatge enviat correctament', successMessage: 'Em posarè en contacte aviat.', errorMessage: 'Error en enviar el missatge. Intenta de nou.', namePlaceholder: 'El teu nom', emailPlaceholder: 'el_teu@email.com', messagePlaceholder: 'El teu missatge...' },
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
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(t.errorMessage);
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-vino">
      <section className="section-padding gingham-teal border-y-8 border-vino">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <p className="eyebrow-mono mb-4">{t.eyebrow}</p>
          <h1 className="font-dancing text-6xl md:text-7xl mb-8 text-hueso">{t.heading}</h1>
          <p className="text-ink text-lg mb-8 max-w-xl mx-auto">{t.intro}</p>
          <a href="mailto:nadiaonatibia@gmail.com" className="block text-2xl md:text-3xl font-medium text-vino hover:text-vino-2 mb-4">nadiaonatibia@gmail.com</a>
          <div className="flex justify-center gap-3 text-ink">
            <a href="https://linkedin.com/in/nadiaoñatibia" target="_blank" rel="noopener noreferrer" className="hover:text-vino font-medium">LinkedIn</a>
            <span>·</span>
            <p>Poblenou, Barcelona</p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-wide max-w-2xl mx-auto">
          <div className="bg-hueso rounded-lg shadow-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl mb-4 text-vino">{t.success}</h2>
                <p className="text-ink/70">{t.successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && <div className="bg-rojo/10 text-rojo p-4 rounded">{error}</div>}
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.name}</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder={t.namePlaceholder} required className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-vino"/>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.email}</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.emailPlaceholder} required className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-vino"/>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-ink">{t.message}</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} rows={6} required className="w-full px-4 py-2 border border-ink/20 rounded-lg focus:outline-none focus:border-vino resize-none"/>
                </div>
                <button type="submit" disabled={loading} className="w-full btn btn-primary disabled:opacity-50">{loading ? t.sending : t.send}</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
