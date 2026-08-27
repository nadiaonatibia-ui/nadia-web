import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { Language } from '../../types';

export const useLanguage = () => {
  const { lang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>((lang as Language) || 'es');

  useEffect(() => {
    const urlLang = (lang as Language) || 'es';
    setLanguage(urlLang);
    localStorage.setItem('language', urlLang);
  }, [lang]);

  const switchLanguage = (newLang: Language) => {
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(es|en|ca)/, '');
    navigate(`/${newLang}${pathWithoutLang || ''}`);
  };

  return { language, switchLanguage };
};
