export type Language = 'es' | 'en' | 'ca'
export interface BlogPost {id: string; title_es: string; title_en: string; content_es: string; content_en: string; category: 'Gestión de Proyectos' | 'Cultura' | 'Producción' | 'Fundraising'; published: boolean; created_at: string; updated_at: string;}
export interface PortfolioProject {id: string; title: string; description: string; sector: 'Migración' | 'Discurso de odio' | 'Patrimonio' | 'Género' | 'Inclusión 55+' | 'EDI'; context?: string; methodology?: string; impact?: string; learning?: string; image_url?: string; link?: string; created_at: string;}
export interface ContactMessage {id: string; name: string; email: string; message: string; created_at: string;}
export interface CVContent {id: string; content_html: string; updated_at: string;}
