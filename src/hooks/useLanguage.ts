import { useState, useEffect } from 'react'
import type { Language } from '../../types'
export const useLanguage = () => {const [language, setLanguage] = useState<Language>('es')
useEffect(() => {const saved = localStorage.getItem('language') as Language | null; if (saved) {setLanguage(saved)}}, [])
const switchLanguage = (lang: Language) => {setLanguage(lang); localStorage.setItem('language', lang)}
return { language, switchLanguage }}
