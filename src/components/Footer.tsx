import { Link } from 'react-router-dom';
import type { Language } from '../../types';

interface FooterProps {
  language: Language;
}

const labels = {
  es: { legal: 'Aviso Legal', privacy: 'Privacidad', cookies: 'Cookies' },
  en: { legal: 'Legal Notice', privacy: 'Privacy', cookies: 'Cookies' },
  ca: { legal: 'Avís Legal', privacy: 'Privacitat', cookies: 'Galetes' },
};

export const Footer = ({ language }: FooterProps) => {
  const year = new Date().getFullYear();
  const t = labels[language];

  return (
    <footer className="bg-crudo-dark text-white/50 py-8">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span>&copy; {year} Nadia Onatibia</span>
        <div className="flex gap-6">
          <Link to="/legal" className="hover:text-white transition-colors">{t.legal}</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">{t.privacy}</Link>
          <Link to="/cookies" className="hover:text-white transition-colors">{t.cookies}</Link>
        </div>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/nadiaoñatibia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nadiaonatibia@gmail.com"
            className="hover:text-white transition-colors"
          >
            {language === 'ca' ? 'Correu' : 'Email'}
          </a>
        </div>
      </div>
    </footer>
  );
};
