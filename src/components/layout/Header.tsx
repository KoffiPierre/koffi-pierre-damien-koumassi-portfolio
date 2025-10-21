'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { cn, downloadResume } from '@/lib/utils';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            {siteConfig.shortName}
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors relative group',
                  pathname === link.href
                    ? 'text-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                )}
              >
                {link.label[language]}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => downloadResume(language)}
            >
              {language === 'fr' ? 'Télécharger CV' : 'Download Resume'}
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 animate-slide-down">
            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-base font-medium py-2 px-4 rounded-lg transition-colors',
                    pathname === link.href
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  )}
                >
                  {link.label[language]}
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <LanguageSwitcher />
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => downloadResume(language)}
                >
                  {language === 'fr' ? 'CV' : 'Resume'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}