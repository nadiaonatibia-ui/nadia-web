import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; import { useEffect } from 'react'; import { useLanguage } from './hooks/useLanguage'; import { Navbar } from './components/Navbar'; import { Footer } from './components/Footer'; import { Home } from './pages/Home'; import { Portfolio } from './pages/Portfolio'; import { Blog } from './pages/Blog'; import { CV } from './pages/CV'; import { Contact } from './pages/Contact'; import './styles/index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function App() {const { language, switchLanguage } = useLanguage(); return (<Router><ScrollToTop/><div className="flex flex-col min-h-screen"><Navbar language={language} onLanguageChange={switchLanguage}/><main className="flex-grow"><Routes><Route path="/" element={<Home language={language}/>}/><Route path="/portfolio" element={<Portfolio language={language}/>}/><Route path="/blog" element={<Blog language={language}/>}/><Route path="/cv" element={<CV language={language}/>}/><Route path="/contact" element={<Contact language={language}/>}/></Routes></main><Footer language={language}/></div></Router>); }; export default App;
