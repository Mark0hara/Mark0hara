import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t.nav.home },
    { href: '#skills', label: t.nav.skills },
    { href: '#portfolios', label: t.nav.portfolios },
    { href: '#experience', label: t.nav.experience },
    { href: '#methodology', label: t.nav.methodology },
    { href: '#certifications', label: t.nav.certifications },
    { href: '#languages', label: t.nav.languages },
    { href: '#education', label: t.nav.education },
    { href: '#contact', label: t.nav.contact },
  ];

  const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');
  const themeLabel = language === 'en' ? 'Toggle color theme' : 'Cambiar tema de color';
  const languageLabel = language === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés';
  const menuLabel = language === 'en' ? 'Toggle navigation menu' : 'Abrir o cerrar el menú de navegación';

  const themeButton = (
    <Button onClick={toggleTheme} variant="outline" size="icon" className="hover-glow" aria-label={themeLabel}>
      {theme === 'dark' ? <Sun className="w-4 h-4" aria-hidden="true" /> : <Moon className="w-4 h-4" aria-hidden="true" />}
    </Button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-card shadow-2xl backdrop-blur-xl navbar-slide-down' : 'bg-background/60 backdrop-blur-sm'
      }`}
      aria-label={language === 'en' ? 'Main navigation' : 'Navegación principal'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end h-16">
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors relative underline-animate animate-fade-up"
                style={{ animationDelay: `${index * 0.04}s` }}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-1">
              {themeButton}
              <Button onClick={toggleLanguage} variant="outline" size="sm" className="hover-glow" aria-label={languageLabel}>
                <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
                {language.toUpperCase()}
              </Button>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            {themeButton}
            <Button onClick={toggleLanguage} variant="outline" size="sm" className="hover-lift" aria-label={languageLabel}>
              <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
              {language.toUpperCase()}
            </Button>
            <Button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              variant="ghost"
              size="icon"
              className="hover-lift"
              aria-label={menuLabel}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobile-navigation" className="lg:hidden py-3 mb-4 animate-fade-in glass-card rounded-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
