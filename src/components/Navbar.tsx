import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { Language } from '../../types';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar = ({ language, onLanguageChange }: NavbarProps) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = {
    es: [{ label: 'Inicio', href: '/' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Blog', href: '/blog' }, { label: 'CV', href: '/cv' }, { label: 'Contacto', href: '/contact' }],
    en: [{ label: 'Home', href: '/' }, { label: 'Portfolio', href: '/portfolio' }, { label: 'Blog', href: '/blog' }, { label: 'CV', href: '/cv' }, { label: 'Contact', href: '/contact' }],
    ca: [{ label: 'Inici', href: '/' }, { label: 'Portafoli', href: '/portfolio' }, { label: 'Blog', href: '/blog' }, { label: 'CV', href: '/cv' }, { label: 'Contacte', href: '/contact' }],
  };
  const items = navItems[language];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 bg-crudo/95 backdrop-blur-md z-50 border-b border-ink/5">
      <div className="container-wide">
        <div className="flex justify-between items-center py-4 gap-4">
          <Link to="/" onClick={handleLogoClick} className="hover:text-vino transition-colors" aria-label="Inicio">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-ink hover:text-vino transition-colors">
              <path d="M3 12.5 L12 4 L21 13" />
              <path d="M5 11 V20 H19 V11" />
              <path d="M9.5 20 V14.3 H14.5 V20" />
            </svg>
          </Link>

          <div className="hidden md:flex gap-7">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-base font-medium transition-colors ${
                  location.pathname === item.href ? 'text-vino' : 'text-ink/60 hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-1 items-center">
            {(['es', 'en', 'ca'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => onLanguageChange(lang)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                  language === lang
                    ? 'bg-ink text-crudo'
                    : 'text-ink/30 hover:text-ink/60'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
            <button
              className="md:hidden ml-3 text-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 ${
                  location.pathname === item.href ? 'text-vino' : 'text-ink/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
