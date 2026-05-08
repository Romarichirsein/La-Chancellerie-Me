import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Phone, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.restaurant'), path: '/restaurant' },
    { label: t('nav.lounge'), path: '/lounge' },
    { label: t('nav.cave'), path: '/cave' },
    { label: t('nav.events'), path: '/evenements' },
    { label: t('nav.reservations'), path: '/reservations' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl auto mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.png" alt="La Chancellerie & Me" className="h-10 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-[10px] font-bold tracking-widest uppercase transition-colors hover:text-gold relative group',
                location.pathname === item.path ? 'text-gold' : 'text-foreground/70'
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-0.5 luxury-gradient transition-all duration-300 group-hover:w-full",
                location.pathname === item.path && "w-full"
              )} />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center gap-1 p-2 rounded-full hover:bg-muted transition-colors text-foreground text-[10px] font-bold uppercase tracking-widest"
            aria-label="Toggle language"
          >
            <Languages size={16} />
            {language.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="text-[10px] font-bold uppercase tracking-widest p-2"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-foreground"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-lg font-serif tracking-widest uppercase py-2 border-b border-border/50',
                    location.pathname === item.path ? 'text-gold' : 'text-foreground/70'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 text-gold">
                <Phone size={18} />
                <span className="text-sm font-medium">{CONTACT_INFO.phones[0]}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
