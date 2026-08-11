import type { Language } from '../../types';

interface FooterProps {
  language: Language;
}

export const Footer = ({ language }: FooterProps) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-crudo-dark text-white/50 py-8">
      <div className="container-wide flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span>&copy; {year} Nadia Onatibia</span>
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
            {language === 'es' ? 'Email' : language === 'en' ? 'Email' : 'Correu'}
          </a>
        </div>
      </div>
    </footer>
  );
};
