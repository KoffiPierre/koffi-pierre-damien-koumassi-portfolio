'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { siteConfig } from '@/config/site.config';
import { useLanguage } from '@/hooks/useLanguage';
import Container from '../common/Container';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 : Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-neutral-400 mb-4">
              {siteConfig.author.role[language]}
            </p>
            <p className="text-sm text-neutral-400">
              📍 {siteConfig.author.location}
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label[language]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réseaux */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {language === 'fr' ? 'Contact' : 'Contact'}
            </h4>
            <div className="space-y-2 mb-4">
              <p className="text-sm text-neutral-400">
                📧{' '}
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </p>
              <p className="text-sm text-neutral-400">
                📞{' '}
                <a
                  href={`tel:${siteConfig.author.phone}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.author.phone}
                </a>
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.email}
                className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400 text-center md:text-left">
              © {currentYear} {siteConfig.name}.{' '}
              {language === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
            </p>
            <p className="text-sm text-neutral-400 flex items-center gap-1">
              {language === 'fr' ? 'Fait avec' : 'Made with'}{' '}
              <FaHeart className="text-red-500 w-4 h-4" />{' '}
              {language === 'fr' ? 'et' : 'and'} Next.js
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}