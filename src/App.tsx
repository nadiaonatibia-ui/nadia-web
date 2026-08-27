import { BrowserRouter as Router, Routes, Route, useLocation, useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Language } from '../types';
import { useLanguage } from './hooks/useLanguage';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Blog } from './pages/Blog';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Legal } from './pages/Legal';
import { Cookies } from './pages/Cookies';
import { SpotlightCursor } from './components/SpotlightCursor';
import './styles/index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function LanguageLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { switchLanguage } = useLanguage();
  const language = (lang as Language) || 'es';

  useEffect(() => {
    switchLanguage(language);
    document.documentElement.lang = language;
  }, [language, switchLanguage]);

  return (
    <>
      <ScrollToTop />
      <SpotlightCursor />
      <div className="flex flex-col min-h-screen">
        <Navbar language={language} onLanguageChange={switchLanguage} />
        <main className="flex-grow">
          <Outlet context={{ language }} />
        </main>
        <Footer language={language} />
      </div>
    </>
  );
}

function LanguagePage({ Component }: { Component: React.ComponentType<{ language: Language }> }) {
  const { lang } = useParams<{ lang: string }>();
  const language = (lang as Language) || 'es';
  return <Component language={language} />;
}

function App() {
  useEffect(() => {
    const path = window.location.pathname;
    const hasLangPrefix = /^\/(es|en|ca)(\/|$)/.test(path);
    if (!hasLangPrefix) {
      const newPath = path === '/' ? '/es/' : '/es' + path;
      window.location.replace(newPath);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<LanguageLayout />}>
          <Route index element={<LanguagePage Component={Home} />} />
          <Route path="portfolio" element={<LanguagePage Component={Portfolio} />} />
          <Route path="blog" element={<LanguagePage Component={Blog} />} />
          <Route path="cv" element={<LanguagePage Component={CV} />} />
          <Route path="contact" element={<LanguagePage Component={Contact} />} />
          <Route path="privacy" element={<LanguagePage Component={Privacy} />} />
          <Route path="legal" element={<LanguagePage Component={Legal} />} />
          <Route path="cookies" element={<LanguagePage Component={Cookies} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
